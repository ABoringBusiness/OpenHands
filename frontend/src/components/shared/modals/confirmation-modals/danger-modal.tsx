import { BaseModal } from "./base-modal";
import React from "react";

interface DangerModalProps {
  testId?: string;
  title: string;
  description: string;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  buttons: {
    danger: { text: string; onClick: () => void };
    cancel: { text: string; onClick: () => void };
  };
}

export function DangerModal({
  testId,
  title,
  description,
  isOpen,
  onOpenChange,
  buttons,
}: DangerModalProps) {
  return (
    <BaseModal
      testId={testId}
      title={title}
      description={description}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      buttons={[
        {
          text: buttons.danger.text,
          onClick: buttons.danger.onClick,
          className: "bg-danger",
        },
        {
          text: buttons.cancel.text,
          onClick: buttons.cancel.onClick,
          className: "bg-neutral-500",
        },
      ]}
    />
  );
}
