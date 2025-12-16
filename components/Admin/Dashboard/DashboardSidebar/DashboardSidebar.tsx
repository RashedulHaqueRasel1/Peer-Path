"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  ArrowLeft,
  UserRoundSearch,
  FileUser,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function DashboardSidebar({
  sidebarOpen,
  setSidebarOpen,
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLElement>(null);

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  const navItems = [
    {
      icon: LayoutDashboard,
      label: "Overview",
      href: "/admin/dashboard/overview",
    },
    {
      icon: UserRoundSearch,
      label: "Alumni",
      href: "/admin/dashboard/alumni",
    },
    {
      icon: FileUser,
      label: "Moderation",
      href: "/admin/dashboard/moderation",
    },
    {
      icon: Users,
      label: "Students",
      href: "/admin/dashboard/students",
    },

    // Add placeholder items as requested
    {
      icon: Settings,
      label: "Settings",
      href: "/admin/dashboard/settings",
    },
  ];

  return (
    <aside
      ref={sidebar}
      className={cn(
        "absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-sidebar duration-300 ease-linear dark:bg-sidebar lg:static lg:translate-x-0 border-r border-sidebar-border",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 mt-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">
            Peer Path
          </span>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-sidebar-foreground"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium duration-300 ease-in-out hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground/80"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Others Group Example */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-sidebar-foreground/60">
              OTHERS
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <button className="group relative flex w-full items-center gap-2.5 rounded-md px-4 py-2 font-medium text-sidebar-foreground/80 duration-300 ease-in-out hover:bg-red-500/10 hover:text-red-500">
                  <LogOut className="h-5 w-5" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
