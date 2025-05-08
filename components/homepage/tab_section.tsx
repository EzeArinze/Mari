"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Atom,
  // AudioLines,
  // CpuIcon,
  // Globe,
  // Mic,
  // Paperclip,
  SearchCheck,
} from "lucide-react";
// import { Button } from "../ui/button";
import ChatBoxAction from "./chat_box_action";

// const actionButtons = [
//   {
//     icon: CpuIcon,
//     label: "AI Processing",
//     action: () => console.log("AI clicked"),
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

function TabSection() {
  // const ICON_STYLE = "text-gray-500 h-5 w-5 hover:cursor-pointer";

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 w-full">
      <div className="w-full sm:w-auto">
        <Tabs defaultValue="Search" className="w-full sm:w-[400px]">
          <TabsContent value="Search">
            <input
              type="text"
              placeholder="Ask anything..."
              className="p-4 outline-none w-full"
            />
          </TabsContent>
          <TabsContent value="Thinking">
            <input
              type="text"
              placeholder="Think before Search..."
              className="p-4 outline-none w-full"
            />
          </TabsContent>
          <TabsList>
            <TabsTrigger value="Search" className="text-primary">
              <SearchCheck />
              Search
            </TabsTrigger>
            <TabsTrigger value="Thinking" className="text-primary">
              <Atom />
              Thinking
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {/* Desktop actions */}
      <div className="hidden sm:block">
        <ChatBoxAction />
      </div>
      {/* Mobile actions */}
      <div className="flex sm:hidden mt-2 w-full justify-center">
        <ChatBoxAction mobile />
      </div>
    </div>
  );
}

export default TabSection;
