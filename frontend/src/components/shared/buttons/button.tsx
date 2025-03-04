import { Button as ShadcnButton } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <ShadcnButton
        className={cn(className)}
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
