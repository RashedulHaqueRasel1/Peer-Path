"use client";

import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import React from "react";

export default function StudentDashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-x-4">
        {/* Mobile sidebar trigger could go here */}
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Overview
        </h1>
      </div>

      <div className="flex items-center gap-x-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-64 rounded-md border border-input bg-transparent pl-9 pr-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-600 ring-2 ring-white" />
        </Button>

        <div className="h-8 w-px bg-border mx-1" />

        <div className="flex items-center gap-x-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <span className="text-sm font-medium text-primary">SC</span>
          </div>
          <div className="hidden flex-col text-sm sm:flex">
            <span className="font-medium text-foreground">
              Student Candidate
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
