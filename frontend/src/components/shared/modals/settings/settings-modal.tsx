import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useAIConfigOptions } from "#/hooks/query/use-ai-config-options";
import { I18nKey } from "#/i18n/declaration";
import { LoadingSpinner } from "../../loading-spinner";
import { Modal } from "../modal";
import { SettingsForm } from "./settings-form";
import { Settings } from "#/types/settings";
import { DEFAULT_SETTINGS } from "#/services/settings";
import React, { useState } from "react";

interface SettingsModalProps {
  settings?: Settings;
  onClose: () => void;
}

export function SettingsModal({ onClose, settings }: SettingsModalProps) {
  const aiConfigOptions = useAIConfigOptions();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      title={t(I18nKey.AI_SETTINGS$TITLE)}
      description={
        <>
          {t(I18nKey.SETTINGS$DESCRIPTION)} For other options,{" "}
          <Link
            data-testid="advanced-settings-link"
            to="/settings"
            className="underline underline-offset-2 text-white"
          >
            see advanced settings
          </Link>
        </>
      }
      testId="ai-config-modal"
      className="min-w-[384px] border border-tertiary"
    >
      {aiConfigOptions.error && (
        <p className="text-danger text-xs">{aiConfigOptions.error.message}</p>
      )}
      {aiConfigOptions.isLoading && (
        <div className="flex justify-center">
          <LoadingSpinner size="small" />
        </div>
      )}
      {aiConfigOptions.data && (
        <SettingsForm
          settings={settings || DEFAULT_SETTINGS}
          models={aiConfigOptions.data?.models}
          onClose={onClose}
        />
      )}
    </Modal>
  );
}
