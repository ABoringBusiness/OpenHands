import { useDispatch } from "react-redux";
import { useEndSession } from "#/hooks/use-end-session";
import { setCurrentAgentState } from "#/state/agent-slice";
import { AgentState } from "#/types/agent-state";
import { DangerModal } from "./confirmation-modals/danger-modal";
import React, { useState } from "react";

interface ExitProjectConfirmationModalProps {
  onClose: () => void;
}

export function ExitProjectConfirmationModal({
  onClose,
}: ExitProjectConfirmationModalProps) {
  const dispatch = useDispatch();
  const endSession = useEndSession();
  const [isOpen, setIsOpen] = useState(true);

  const handleEndSession = () => {
    setIsOpen(false);
    onClose();
    dispatch(setCurrentAgentState(AgentState.LOADING));
    endSession();
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      onClose();
    }
  };

  return (
    <DangerModal
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      title="Are you sure you want to exit?"
      description="You will lose any unsaved information."
      buttons={{
        danger: {
          text: "Exit Project",
          onClick: handleEndSession,
        },
        cancel: {
          text: "Cancel",
          onClick: () => handleOpenChange(false),
        },
      }}
    />
  );
}
