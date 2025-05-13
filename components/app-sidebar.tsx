"use client";
import { Home, LibraryBig, LogIn, Search } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useSidebar } from "@/components/ui/sidebar";
// import NavUser from "./homepage/nav_user";
import {
  SignedIn,
  SignedOut,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Discover",
    url: "#",
    icon: Search,
  },
  {
    title: "Library",
    url: "#",
    icon: LibraryBig,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { user } = useUser();

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="w-full h-[80px] flex gap-2 items-center ">
          <Image
            src={"/logo.svg"}
            alt="logo"
            height={64}
            width={64}
            priority
            className="object-center object-contain w-auto h-auto"
          />
          <span
            className={`${
              isCollapsed ? "hidden" : "opacity-100 translate-x-0"
            } font-semibold text-2xl transition-all duration-200 ease-in-out`}
          >
            Mari
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="font-semibold text-[1.2rem]"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-row items-center gap-2 w-full ">
        {/* clerk button */}
        {isCollapsed && !user ? (
          <Link href={"/sign-in"}>
            <LogIn />
          </Link>
        ) : (
          <SignedOut>
            <SignUpButton mode="modal">
              <Button className="w-full font-semibold text-lg">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
        )}

        <SignedIn>
          {/* <NavUser
            user={{
              name: "nuel",
              email: "example@gmail.com",
              avatar: "",
            }}
          /> */}
          <UserButton />
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  );
}
