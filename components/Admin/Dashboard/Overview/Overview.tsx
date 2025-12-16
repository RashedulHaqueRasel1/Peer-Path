"use client";

import React from "react";
import {
  Users,
  BookOpen,
  Star,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

// --- Mock Data ---

const statsData = [
  {
    title: "Total Students",
    value: "1,203",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    description: "Total registered students",
  },
  {
    title: "Active Courses",
    value: "45",
    change: "+8.2%",
    trend: "up",
    icon: BookOpen,
    description: "courses currently active",
  },
  {
    title: "Course Reviews",
    value: "892",
    change: "-2.1%",
    trend: "down",
    icon: Star,
    description: "Average 4.8 stars",
  },
];

const growthData = [
  { month: "Jan", users: 65, courses: 40, reviews: 55 },
  { month: "Feb", users: 59, courses: 45, reviews: 62 },
  { month: "Mar", users: 80, courses: 55, reviews: 78 },
  { month: "Apr", users: 81, courses: 60, reviews: 85 },
  { month: "May", users: 56, courses: 50, reviews: 60 },
  { month: "Jun", users: 55, courses: 45, reviews: 58 },
  { month: "Jul", users: 95, courses: 75, reviews: 90 },
];

const recentUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Verified",
  },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Verified" },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    status: "Not Verified",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    status: "Verified",
  },
  {
    id: 5,
    name: "Evan Wright",
    email: "evan@example.com",
    status: "Not Verified",
  },
];

const recentAlumni = [
  {
    id: 1,
    name: "John Mitchell",
    email: "john.mitchell@example.com",
    status: "Verified",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    status: "Verified",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    status: "Not Verified",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    status: "Verified",
  },
];

const pendingModeration = [
  {
    id: 1,
    name: "Professor X",
    designation: "Web Dev Instructor",
    status: "Pending",
  },
  { id: 2, name: "Magneto", designation: "Physics Teacher", status: "Flagged" },
  {
    id: 3,
    name: "Wolverine",
    designation: "History Professor",
    status: "Verified",
  },
  {
    id: 4,
    name: "Storm",
    designation: "Science Dept Head",
    status: "Verified",
  },
];

// --- Components ---

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Dashboard Overview
        </h2>
        <div className="flex items-center space-x-2">
          {/* Date Range Picker or similar could go here */}
          <span className="text-sm text-muted-foreground">Last 30 Days</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {statsData.map((stat, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span
                  className={
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }
                >
                  {stat.change}
                </span>
                <span className="ml-1 text-muted-foreground opacity-70">
                  from last month
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Platform Growth Chart */}
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Platform Growth</CardTitle>
          <CardDescription>
            Visually compares data across different categories using rectangular
            bars
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[350px] w-full flex items-end justify-between gap-2 sm:gap-4 px-2 pt-10 pb-2 overflow-x-auto">
            {growthData.map((item, index) => (
              <div
                key={index}
                className="group relative flex h-full items-end justify-center gap-1 flex-1 min-w-[60px]"
              >
                {/* Users Bar */}
                <div
                  className="w-2.5 sm:w-4 bg-primary rounded-t-sm opacity-80 hover:opacity-100 transition-all relative group-hover:shadow-lg"
                  style={{ height: `${item.users}%` }}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground px-1 py-0.5 rounded shadow-sm whitespace-nowrap z-20 border border-border">
                    {item.users} Students
                  </span>
                </div>

                {/* Courses Bar */}
                <div
                  className="w-2.5 sm:w-4 bg-chart-2 rounded-t-sm opacity-80 hover:opacity-100 transition-all relative group-hover:shadow-lg"
                  style={{ height: `${item.courses}%` }}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground px-1 py-0.5 rounded shadow-sm whitespace-nowrap z-20 border border-border">
                    {item.courses} Courses
                  </span>
                </div>

                {/* Reviews Bar */}
                <div
                  className="w-2.5 sm:w-4 bg-chart-3 rounded-t-sm opacity-80 hover:opacity-100 transition-all relative group-hover:shadow-lg"
                  style={{ height: `${item.reviews}%` }}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground px-1 py-0.5 rounded shadow-sm whitespace-nowrap z-20 border border-border">
                    {item.reviews} Reviews
                  </span>
                </div>

                {/* Month Label */}
                <span className="absolute -bottom-6 left-0 right-0 text-center text-xs text-muted-foreground font-medium">
                  {item.month}
                </span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <span>Students</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded-full bg-chart-2"></div>
              <span>Courses</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded-full bg-chart-3"></div>
              <span>Reviews</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Users */}
        <Card className="col-span-4 lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Students</CardTitle>
            <CardDescription>
              Latest students registered this week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-9 w-9 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                        user.status === "Verified"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : user.status === "Not Verified"
                          ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                          : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                      )}
                    >
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Alumni */}
        <Card className="col-span-3 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Alumni</CardTitle>
            <CardDescription>Recently added alumni members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlumni.map((alumni) => (
                <div
                  key={alumni.id}
                  className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-9 w-9 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">
                        {alumni.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {alumni.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {alumni.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                        alumni.status === "Verified"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                      )}
                    >
                      {alumni.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Moderation */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Pending Moderation</CardTitle>
            <CardDescription>Instructors needing review</CardDescription>
          </div>
          <button className="text-xs text-primary hover:underline font-medium">
            Review All
          </button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pendingModeration.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between group border border-border p-3 rounded-md hover:bg-muted/50 transition-colors"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{item.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.designation}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {item.status === "Pending" && (
                    <span className="text-xs text-orange-500 font-medium flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> Pending
                    </span>
                  )}
                  {item.status === "Active" && (
                    <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" /> Active
                    </span>
                  )}
                  {item.status === "Flagged" && (
                    <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> Flagged
                    </span>
                  )}

                  <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded">
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
