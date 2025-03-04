import { useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import React from "react";

interface AgentInputProps {
  isDisabled: boolean;
  defaultValue: string;
  agents: string[];
}

export function AgentInput({
  isDisabled,
  defaultValue,
  agents,
}: AgentInputProps) {
  const { t } = useTranslation();

  return (
    <fieldset data-testid="agent-selector" className="flex flex-col gap-2">
      <label htmlFor="agent" className="font-[500] text-[#A3A3A3] text-xs">
        {t(I18nKey.SETTINGS_FORM$AGENT_LABEL)}
      </label>
      <Select defaultValue={defaultValue} name="agent" disabled={isDisabled}>
        <SelectTrigger
          id="agent"
          aria-label="Agent"
          data-testid="agent-input"
          className="bg-[#27272A] rounded-md text-sm px-3 py-[10px]"
        >
          <SelectValue placeholder="Select an agent" />
        </SelectTrigger>
        <SelectContent>
          {agents.map((agent) => (
            <SelectItem key={agent} value={agent}>
              {agent}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </fieldset>
  );
}
