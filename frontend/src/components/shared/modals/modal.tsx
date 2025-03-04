import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../../components/ui/dialog";
import { cn } from "../../../lib/utils";
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title?: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  footerContent?: ReactNode;
  testId?: string;
}

export function Modal({
  isOpen,
  onOpenChange,
  title,
  description,
  children,
  className,
  contentClassName,
  footerContent,
  testId,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange} data-testid={testId}>
      <DialogContent 
        className={cn("bg-base-secondary rounded-lg", className)}
      >
        {title && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        <div className={cn("py-4", contentClassName)}>
          {children}
        </div>
        {footerContent && (
          <DialogFooter>
            {footerContent}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
