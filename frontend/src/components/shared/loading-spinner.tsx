import { cn } from "#/utils/utils";
import React from "react";

interface LoadingSpinnerProps {
  size?: "small" | "large";
  className?: string;
}

export function LoadingSpinner({ 
  size = "small", 
  className 
}: LoadingSpinnerProps) {
  const sizeStyle = size === "small" ? "w-[25px] h-[25px]" : "w-[50px] h-[50px]";
  
  return (
    <div 
      data-testid="loading-spinner" 
      className={cn("relative", sizeStyle, className)}
      aria-label="Loading"
    >
      <div
        className={cn(
          "rounded-full border-4 border-[#525252] absolute",
          sizeStyle,
        )}
      />
      <div 
        className={cn(
          "rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent absolute animate-spin",
          sizeStyle
        )}
      />
    </div>
  );
}
