import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Moon } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between p-2">
      <SidebarTrigger />
      <div>
        <Moon />
      </div>
    </header>
  );
}

export default Header;
