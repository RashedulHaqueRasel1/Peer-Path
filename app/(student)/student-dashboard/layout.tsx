import StudentDashboardSidebar from "@/components/StudentDashboard/StudentDashboardSidebar/StudentDashboardSidebar";
import StudentDashboardHeader from "@/components/StudentDashboard/StudentDashboardHeader/StudentDashboardHeader";
import React from "react";

export default function StudentDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <div className="hidden border-r bg-background md:block">
        <StudentDashboardSidebar />
      </div>
      <div className="flex flex-1 flex-col transition-all duration-300 ease-in-out">
        <StudentDashboardHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
