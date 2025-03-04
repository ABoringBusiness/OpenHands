import { useTranslation } from "react-i18next";
import ArrowSendIcon from "#/icons/arrow-send.svg?react";
import { I18nKey } from "#/i18n/declaration";
import { Button } from "./button";

interface SubmitButtonProps {
  isDisabled?: boolean;
  onClick: () => void;
}

export function SubmitButton({ isDisabled, onClick }: SubmitButtonProps) {
  const { t } = useTranslation();
  return (
    <Button
      aria-label={t(I18nKey.BUTTON$SEND)}
      disabled={isDisabled}
      onClick={onClick}
      type="submit"
      size="icon"
      variant="outline"
      className="w-6 h-6 hover:bg-neutral-500 focus:bg-neutral-500 flex items-center justify-center"
    >
      <ArrowSendIcon />
    </Button>
  );
}
