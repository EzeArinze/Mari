// import { AudioLines, CpuIcon, Globe, Mic, Paperclip } from "lucide-react";
// import { Button } from "../ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const actionButtons = [
//   {
//     icon: CpuIcon,
//     label: "AI Processing",
//     action: <DropdownMenuTrigger>Open</DropdownMenuTrigger>,
//   },
//   {
//     icon: Globe,
//     label: "Web Search",
//     action: () => console.log("Web search clicked"),
//   },
//   {
//     icon: Mic,
//     label: "Voice Input",
//     action: () => console.log("Voice clicked"),
//   },
//   {
//     icon: Paperclip,
//     label: "Attach File",
//     action: () => console.log("Attach clicked"),
//   },
//   {
//     icon: AudioLines,
//     label: "Record",
//     action: () => console.log("Record clicked"),
//     style: "text-white bg-primary hover:cursor-pointer",
//   },
// ];

// function ChatBoxAction({ mobile = false }: { mobile?: boolean }) {
//   const ICON_STYLE = "text-gray-500 h-5 w-5 hover:cursor-pointer";

//   if (mobile) {
//     return (
//       <div className="flex gap-2 w-full overflow-x-auto justify-center">
//         {actionButtons.map(({ icon: Icon, label, action, style }) => (
//           <Button
//             variant={!style ? "ghost" : "default"}
//             key={label}
//             onClick={typeof action === "function" ? action : undefined}
//             className={`min-w-[34px] min-h-[34px] flex-shrink-0 ${
//               !style ? ICON_STYLE : style
//             }`}
//             aria-label={label}
//             title={label}
//           >
//             <Icon />
//           </Button>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="sm:flex gap-4 hover:cursor-pointer items-center hidden">
//       {actionButtons.map(({ icon: Icon, label, action, style }) => (
//         <Button
//           variant={!style ? "ghost" : "default"}
//           key={label}
//           onClick={typeof action === "function" ? action : undefined}
//           className={`${!style ? ICON_STYLE : style}`}
//           aria-label={label}
//           title={label}
//         >
//           <Icon />
//         </Button>
//       ))}

//       <DropdownMenu>
//         <DropdownMenuContent>
//           <DropdownMenuLabel>My Account</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>Profile</DropdownMenuItem>
//           <DropdownMenuItem>Billing</DropdownMenuItem>
//           <DropdownMenuItem>Team</DropdownMenuItem>
//           <DropdownMenuItem>Subscription</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       {/* <Button className="bg-primary hover:cursor-pointer" title="Record">
//               <AudioLines className={"text-white h-5 w-5 "} />
//             </Button> */}
//     </div>
//   );
// }

// export default ChatBoxAction;

import { AudioLines, CpuIcon, Globe, Mic, Paperclip } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiModels } from "@/constants/models";

// Define button types for better type safety
type ActionButtonType = {
  icon: React.ElementType;
  label: string;
  type: "dropdown" | "button";
  dropdownItems?: Array<{
    label: string;
    desc?: string;
    modelApi: string;
    style?: string;
    onClick: () => void;
  }>;
  onClick?: () => void;
  style?: string;
};

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

// Updated action buttons configuration
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
    icon: AudioLines,
    label: "Record",
    type: "button",
    onClick: () => console.log("Record clicked"),
    style: "text-white bg-primary hover:cursor-pointer",
  },
];

function ChatBoxAction({ mobile = false }: { mobile?: boolean }) {
  //
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
