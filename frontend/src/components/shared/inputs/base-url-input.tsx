import { useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";
import { Input } from "./input";
import React from "react";

interface BaseUrlInputProps {
  isDisabled: boolean;
  defaultValue: string;
}

export function BaseUrlInput({ isDisabled, defaultValue }: BaseUrlInputProps) {
  const { t } = useTranslation();

  return (
    <fieldset className="flex flex-col gap-2">
      <label htmlFor="base-url" className="font-[500] text-[#A3A3A3] text-xs">
        {t(I18nKey.SETTINGS_FORM$BASE_URL_LABEL)}
      </label>
      <Input
        disabled={isDisabled}
        id="base-url"
        name="base-url"
        defaultValue={defaultValue}
        aria-label="Base URL"
      />
    </fieldset>
  );
}
