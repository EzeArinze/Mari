import React from "react";
import { Tables } from "@/types/supabase";
import { UserButton } from "@clerk/nextjs";
import { Clock, Link, Share2 } from "lucide-react";
import moment from "moment";
import { Button } from "../ui/button";

interface SRProps {
  SearchRecord: Tables<"Library">;
}

function Header({ SearchRecord }: SRProps) {
  const time = moment(SearchRecord.created_at).fromNow();

  return (
    <div className="border-b flex justify-between p-2 items-center">
      <div className="flex gap-2 items-center">
        <UserButton />
        <div className="flex gap-1 items-center">
          <Clock size={20} className="text-gray-500 hidden sm:block" />
          <span className="text-sm text-gray-500  line-clamp-1 max-w-md">
            {time}{" "}
          </span>
        </div>
      </div>

      <h2 className="line-clamp-1 max-w-md">{SearchRecord.searchInput}</h2>

      <div className="flex gap-2 text-sm md:text-base">
        <Button size={"icon"}>
          <Link />
        </Button>
        <Button>
          <Share2 />
          <span className="hidden sm:block">Share</span>
        </Button>
      </div>
    </div>
  );
}

export default Header;
