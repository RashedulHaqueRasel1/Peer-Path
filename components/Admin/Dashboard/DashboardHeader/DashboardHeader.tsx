"use client";

import React from "react";
import Link from "next/link";
import { Menu, Search, Bell, User } from "lucide-react";

interface DashboardHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function DashboardHeader({
  sidebarOpen,
  setSidebarOpen,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex w-full bg-background border-b border-border drop-shadow-sm dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* Hamburger Toggle BTN */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-50 block rounded-sm border border-border bg-card p-1.5 shadow-sm lg:hidden"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">PP</span>
            </div>
          </Link>
        </div>

        <div className="hidden sm:block">
          {/* Search Input Placeholder */}
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2">
              <Search className="h-5 w-5 text-muted-foreground" />
            </button>
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full bg-transparent pl-9 pr-4 text-foreground focus:outline-none xl:w-125 placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* Notification Bell */}
            <li>
              <button className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-border bg-gray hover:text-primary dark:bg-meta-4 dark:text-white">
                <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red-500">
                  <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                </span>
                <Bell className="h-5 w-5 text-muted-foreground hover:text-foreground duration-200" />
              </button>
            </li>
          </ul>

          {/* User Area */}
          <div className="relative">
            <Link href="#" className="flex items-center gap-4">
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-medium text-foreground">
                  Admin User
                </span>
                <span className="block text-xs text-muted-foreground">
                  Administrator
                </span>
              </span>
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-border">
                <User className="h-6 w-6 text-muted-foreground" />
                {/* Ideally simpler <Image /> here if user has avatar */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
