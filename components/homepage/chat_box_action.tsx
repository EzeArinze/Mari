import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ActionButtonType, AiModels } from "@/constants/models";
import {
  ArrowRight,
  AudioLines,
  CpuIcon,
  Globe,
  Mic,
  Paperclip,
} from "lucide-react";

interface ChatBoxActionProps {
  mobile?: boolean;
  isRecording?: boolean;
  onRecordClick?: () => void;
  disable?: boolean;
}

// Separate component for dropdown button
const ActionDropdown = ({
  icon: Icon,
  label,
  dropdownItems,
}: ActionButtonType) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="text-gray-500 h-5 w-5 hover:cursor-pointer"
          aria-label={label}
          title={label}
        >
          <Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropdownItems?.map((item) => (
          <DropdownMenuItem
            key={item.label}
            onClick={item.onClick}
            className="flex-col items-start"
          >
            <span className="text-xs">{item.label}</span>
            <span className="text-xs">{item.desc}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

function ChatBoxAction({
  mobile,
  isRecording,
  onRecordClick,
  disable,
}: ChatBoxActionProps) {
  //
  const actionButtons: ActionButtonType[] = [
    {
      icon: CpuIcon,
      label: "AI Processing",
      type: "dropdown",
      dropdownItems: AiModels,
    },
    {
      icon: Globe,
      label: "Web Search",
      type: "button",
      onClick: () => console.log("Web search clicked"),
    },
    {
      icon: Mic,
      label: "Voice Input",
      type: "button",
      onClick: () => console.log("Voice clicked"),
    },
    {
      icon: Paperclip,
      label: "Attach File",
      type: "button",
      onClick: () => console.log("Attach clicked"),
    },
    {
      icon: isRecording ? AudioLines : ArrowRight,
      label: "Record",
      type: "button",
      onClick: () =>
        !isRecording ? onRecordClick?.() : console.log("Record clicked"),
      style: "text-white bg-primary hover:cursor-pointer",
    },
  ];

  const renderActionButton = (button: ActionButtonType) => {
    if (button.type === "dropdown") {
      return <ActionDropdown key={button.label} {...button} />;
    }

    return (
      <Button
        key={button.label}
        variant={!button.style ? "ghost" : "default"}
        onClick={button.onClick}
        className={`${
          !button.style
            ? "text-gray-500 h-5 w-5 hover:cursor-pointer"
            : button.style
        }`}
        aria-label={button.label}
        title={button.label}
        disabled={disable}
      >
        <button.icon />
      </Button>
    );
  };

  return (
    <div
      className={`flex gap-4 items-center ${
        mobile ? "w-full justify-center" : ""
      }`}
    >
      {actionButtons.map(renderActionButton)}
    </div>
  );
}

export default ChatBoxAction;
