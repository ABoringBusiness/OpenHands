import React from "react";
import { Modal } from "../modal";
import { Button } from "../../buttons/button";

interface ButtonConfig {
  text: string;
  onClick: () => void;
  className?: string;
}

interface BaseModalProps {
  testId?: string;
  title: string;
  description: string;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  buttons: ButtonConfig[];
}

export function BaseModal({
  testId,
  title,
  description,
  isOpen = true,
  onOpenChange = () => {},
  buttons,
}: BaseModalProps) {
  const footerContent = (
    <div className="flex flex-col gap-2 w-full">
      {buttons.map((button, index) => (
        <Button
          key={index}
          onClick={button.onClick}
          className={button.className}
          variant={index === 0 ? "destructive" : "secondary"}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      footerContent={footerContent}
      testId={testId}
    >
      <div className="flex flex-col gap-2 self-start">
        <span className="text-xs text-[#A3A3A3]">{description}</span>
      </div>
    </Modal>
  );
}
