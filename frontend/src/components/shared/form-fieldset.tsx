import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../components/ui/select";
import { Label } from "../../components/ui/label";
import { cn } from "../../lib/utils";
import React from "react";

interface FormFieldsetProps {
  id: string;
  label: string;
  items: { key: string; value: string }[];
  defaultSelectedKey?: string;
  isClearable?: boolean;
  className?: string;
  description?: string;
  disabled?: boolean;
}

export function FormFieldset({
  id,
  label,
  items,
  defaultSelectedKey,
  isClearable,
  className,
  description,
  disabled
}: FormFieldsetProps) {
  return (
    <fieldset className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} className="font-[500] text-[#A3A3A3] text-xs">
        {label}
      </Label>
      <Select defaultValue={defaultSelectedKey} name={id} disabled={disabled}>
        <SelectTrigger
          id={id}
          aria-label={label}
          className="bg-[#27272A] rounded-md text-sm px-3 py-[10px]"
        >
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.key} value={item.key}>
              {item.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {description && (
        <p className="text-xs text-[#A3A3A3]">{description}</p>
      )}
    </fieldset>
  );
}
