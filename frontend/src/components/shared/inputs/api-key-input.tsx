import { useTranslation } from "react-i18next";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { I18nKey } from "#/i18n/declaration";
import { Input } from "./input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../components/ui/tooltip";
import React from "react";

interface APIKeyInputProps {
  isDisabled: boolean;
  isSet: boolean;
}

export function APIKeyInput({ isDisabled, isSet }: APIKeyInputProps) {
  const { t } = useTranslation();

  return (
    <fieldset data-testid="api-key-input" className="flex flex-col gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <label
              htmlFor="api-key"
              className="font-[500] text-[#A3A3A3] text-xs flex items-center gap-1 self-start"
            >
              {isSet && <FaCheckCircle className="text-[#00D1B2] inline-block" />}
              {!isSet && (
                <FaExclamationCircle className="text-[#FF3860] inline-block" />
              )}
              {t(I18nKey.API$KEY)}
            </label>
          </TooltipTrigger>
          <TooltipContent>
            {isSet ? "API Key is set" : "API Key is not set"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Input
        disabled={isDisabled}
        id="api-key"
        name="api-key"
        aria-label={t(I18nKey.API$KEY)}
        type="password"
        defaultValue=""
      />
      <p className="text-sm text-[#A3A3A3]">
        {t(I18nKey.API$DONT_KNOW_KEY)}{" "}
        <a
          href="https://docs.all-hands.dev/modules/usage/llms"
          rel="noreferrer noopener"
          target="_blank"
          className="underline underline-offset-2"
        >
          {t(I18nKey.COMMON$CLICK_FOR_INSTRUCTIONS)}
        </a>
      </p>
    </fieldset>
  );
}
