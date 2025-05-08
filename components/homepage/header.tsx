import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

function Header() {
  return (
    <header className="flex items-center justify-between p-2">
      <SidebarTrigger />
      <span>Ava</span>
    </header>
  );
}

export default Header;
