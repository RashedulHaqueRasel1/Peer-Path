import DashboardShell from "@/components/Admin/Dashboard/DashboardShell";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardShell>{children}</DashboardShell>;
}
