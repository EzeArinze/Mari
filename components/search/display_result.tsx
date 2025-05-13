"use client";

import { Tables } from "@/types/supabase";
import {
  LucideImage,
  LucideList,
  LucideSparkles,
  LucideVideo,
} from "lucide-react";
import React, { useState } from "react";
import AnswerDisplay from "./answer_display";

interface DRProps {
  SearchRecord: Tables<"Library">;
}

const tabs = [
  { label: "Answer", icon: LucideSparkles },
  { label: "Images", icon: LucideImage },
  { label: "Videos", icon: LucideVideo },
  { label: "Sources", icon: LucideList, badge: 10 },
];

function DisplayResult({ SearchRecord }: DRProps) {
  const [activeTab, setActiveTab] = useState("Answer");

  return (
    <div className="mt-7 ">
      <span className="line-clamp-2 text-2xl font-medium">
        {SearchRecord.searchInput}
      </span>

      <div className="flex items-center w-[75%] md:w-full space-x-6 border-b border-gray-200 pb-2 mt-6 overflow-x-scroll scrollbar-hidden">
        {tabs.map(({ label, icon: Icon, badge }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex items-center gap-1 relative text-sm font-medium  hover:text-primary ${
              activeTab === label ? "text-primary" : ""
            }`}
          >
            <Icon className="w-4 h-4" />

            <span>{label}</span>

            {badge && (
              <span className="ml-1 text-xs bg-gray-100  px-1.5 py-0.5 rounded">
                {badge}
              </span>
            )}

            {activeTab === label && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded"></span>
            )}
          </button>
        ))}

        <div className="ml-auto text-sm ">
          1 task <span className="ml-1">↗</span>
        </div>
      </div>

      <div>{activeTab === "Answer" ? <AnswerDisplay /> : null}</div>
    </div>
  );
}

export default DisplayResult;
