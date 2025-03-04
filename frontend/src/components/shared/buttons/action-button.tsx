import { Tooltip } from "../../../components/ui/tooltip";
import { AgentState } from "#/types/agent-state";
import { Button } from "./button";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "../../../components/ui/tooltip";

interface ActionButtonProps {
  isDisabled?: boolean;
  content: string;
  action: AgentState;
  handleAction: (action: AgentState) => void;
}

export function ActionButton({
  isDisabled = false,
  content,
  action,
  handleAction,
  children,
}: React.PropsWithChildren<ActionButtonProps>) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => handleAction(action)}
            disabled={isDisabled}
            className="relative overflow-visible cursor-default hover:cursor-pointer group disabled:cursor-not-allowed transition-all duration-300 ease-in-out"
            variant="ghost"
            type="button"
          >
            <span className="relative group-hover:filter group-hover:drop-shadow-[0_0_5px_rgba(255,64,0,0.4)]">
              {children}
            </span>
            <span className="absolute -inset-[5px] border-2 border-red-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
