"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Atom, SearchCheck } from "lucide-react";
// import { Button } from "../ui/button";
import ChatBoxAction from "./chat_box_action";
import { supabase } from "@/services/supabase_client";
import { useUser } from "@clerk/nextjs";
import { v4 as uuidv4 } from "uuid";

// const ICON_STYLE = "text-gray-500 h-5 w-5 hover:cursor-pointer";

function TabSection() {
  const { user } = useUser();

  const [searchInput, setSearchInput] = useState({
    ask: "",
    think: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<"Search" | "Thinking">("Search");

  const input = activeTab === "Search" ? searchInput.ask : searchInput.think;

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setSearchInput((prev) => ({ ...prev, [name]: value }));
  };

  const onSearchQuery = async () => {
    if (searchInput.ask === "" && searchInput.think === "") return;

    setIsLoading((prev) => !prev);
    try {
      const newId = uuidv4();
      const { data, error } = await supabase
        .from("Library")
        .insert([
          {
            userEmail: user?.primaryEmailAddress?.emailAddress,
            searchInput: input,
            type: activeTab.toLowerCase(),
            libId: newId,
          },
        ])
        .select();

      if (error) throw error;

      // Clear input after successful insert
      setSearchInput((prev) => ({
        ...prev,
        [activeTab === "Search" ? "ask" : "think"]: "",
      }));
      setIsLoading(false);
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error inserting search query:", error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 w-full">
      <div className="w-full sm:w-auto">
        <Tabs
          defaultValue="Search"
          className="w-full sm:w-[400px]"
          onValueChange={(value) =>
            setActiveTab(value as "Search" | "Thinking")
          }
        >
          <TabsContent value="Search">
            <input
              type="text"
              name="ask"
              value={searchInput.ask}
              placeholder="Ask anything..."
              className="p-4 outline-none w-full"
              onChange={handleChange}
              onKeyDown={(e) => e.key === "Enter" && onSearchQuery()}
            />
          </TabsContent>
          <TabsContent value="Thinking">
            <input
              type="text"
              name="think"
              value={searchInput.think}
              placeholder="Think before Search..."
              className="p-4 outline-none w-full"
              onChange={handleChange}
              onKeyDown={(e) => e.key === "Enter" && onSearchQuery()}
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
        <ChatBoxAction
          disable={isLoading}
          isRecording={!input && true}
          onRecordClick={onSearchQuery}
        />
      </div>
      {/* Mobile actions */}
      <div className="flex sm:hidden mt-2 w-full justify-center">
        <ChatBoxAction
          mobile
          disable={isLoading}
          isRecording={!input && true}
          onRecordClick={onSearchQuery}
        />
      </div>
    </div>
  );
}

export default TabSection;
