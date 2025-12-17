"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  LogOut,
  Settings,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sidebarItems = [
  {
    icon: LayoutDashboard,
    label: "Save Course",
    href: "/student-dashboard/save-course",
  },
  {
    icon: Calendar,
    label: "My Schedule",
    href: "/student-dashboard/my-schedule",
  },
  {
    icon: Calendar,
    label: "Apply Jobs",
    href: "/student-dashboard/apply-jobs",
  },
  {
    icon: Calendar,
    label: "My Ratings",
    href: "/student-dashboard/my-ratings",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/student-dashboard/settings",
  },
];

export default function StudentDashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r bg-white px-4 py-6">
      <div className="flex flex-col gap-y-8">
        <div className="flex items-center gap-x-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">PeerPath</span>
        </div>

        <nav className="flex flex-col gap-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-y-2">
        <button className="flex w-full items-center gap-x-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
