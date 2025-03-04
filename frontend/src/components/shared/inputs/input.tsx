import { Input as ShadcnInput } from "../../../components/ui/input";
import { cn } from "../../../lib/utils";
import React, { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnInput
        className={cn("bg-[#27272A] rounded-md text-sm px-3 py-[10px]", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
