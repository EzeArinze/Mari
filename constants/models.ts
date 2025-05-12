import {
  ArrowRight,
  AudioLines,
  CpuIcon,
  Globe,
  Mic,
  Paperclip,
} from "lucide-react";

export const AiModels = [
  {
    label: "GPT-4",
    desc: "Open-Ai advanced model",
    onClick: () => console.log("GPT-4 selected"),
    modelApi: "",
  },
  {
    label: "Claude",
    desc: "Anthropic's advanced model",
    onClick: () => console.log("Claude selected"),
    modelApi: "",
  },
  {
    label: "Soner",
    desc: "Perplexity's fast model",
    onClick: () => console.log("Soner selected"),
    modelApi: "",
  },
  {
    label: "Gemini 2.5 Pro",
    desc: "Google latest model",
    onClick: () => console.log("Gemini 2.5 Pro selected"),
    modelApi: "",
  },
  {
    label: "Grok 3 beta",
    desc: "xAi's latest model",
    onClick: () => console.log("Grok 3 beta selected"),
    modelApi: "",
  },
];

export type ActionButtonType = {
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

export const actionButtons: ActionButtonType[] = [
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
    icon: AudioLines || ArrowRight,
    label: "Record",
    type: "button",
    onClick: () => console.log("Record clicked"),
    style: "text-white bg-primary hover:cursor-pointer",
  },
];
