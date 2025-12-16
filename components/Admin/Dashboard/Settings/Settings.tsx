"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { User, Lock, Mail, Camera, Save } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

// --- Demo Data ---
const initialAdminData = {
  name: "Rashedul Haque",
  email: "admin@peerpath.com",
  role: "Super Admin",
  avatar: null, // Could be a URL
};

export default function Settings() {
  const [activeTab, setActiveTab] = useState<"profile" | "security">("profile");
  const [adminData, setAdminData] = useState(initialAdminData);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  // --- Handlers ---

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Profile updated successfully!");
    }, 1000);
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setLoading(false);
      toast.error("New passwords do not match!");
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setLoading(false);
      toast.error("Password must be at least 6 characters.");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      toast.success("Password changed successfully!");
    }, 1000);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast.success("Avatar image selected (demo)");
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Settings
        </h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar / Tabs */}
        <aside className="w-full md:w-64 space-y-2">
          <button
            onClick={() => setActiveTab("profile")}
            className={cn(
              "w-full flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors justify-start",
              activeTab === "profile"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            <User className="h-4 w-4" />
            Profile
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={cn(
              "w-full flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors justify-start",
              activeTab === "security"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            <Lock className="h-4 w-4" />
            Security
          </button>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          {activeTab === "profile" && (
            <Card className="animate-in fade-in slide-in-from-right-4 duration-300">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your photo and personal details here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  {/* Avatar Section */}
                  <div className="flex flex-col items-center sm:flex-row gap-6">
                    <div className="relative group">
                      <div className="h-24 w-24 rounded-full bg-muted border-2 border-border flex items-center justify-center overflow-hidden">
                        {adminData.avatar ? (
                          <Image
                            src={adminData.avatar}
                            alt="Avatar"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="text-2xl font-bold text-muted-foreground">
                            RH
                          </span>
                        )}
                      </div>
                      <label
                        htmlFor="avatar-upload"
                        className="absolute bottom-0 right-0 p-1.5 bg-primary rounded-full text-primary-foreground cursor-pointer hover:bg-primary/90 transition-colors shadow-sm"
                      >
                        <Camera className="h-4 w-4" />
                        <input
                          id="avatar-upload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleAvatarChange}
                        />
                      </label>
                    </div>
                    <div className="space-y-1 text-center sm:text-left">
                      <h4 className="font-medium text-foreground">
                        {adminData.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {adminData.role}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                          type="text"
                          value={adminData.name}
                          onChange={(e) =>
                            setAdminData({ ...adminData, name: e.target.value })
                          }
                          className="w-full rounded-md border border-input pl-9 px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                          type="email"
                          value={adminData.email}
                          onChange={(e) =>
                            setAdminData({
                              ...adminData,
                              email: e.target.value,
                            })
                          }
                          className="w-full rounded-md border border-input pl-9 px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="gap-2 bg-primary text-primary-foreground"
                    >
                      <Save className="h-4 w-4" />
                      {loading ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {activeTab === "security" && (
            <Card className="animate-in fade-in slide-in-from-right-4 duration-300">
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                  Ensure your account is using a long, random password to stay
                  secure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Current Password
                    </label>
                    <input
                      required
                      type="password"
                      value={passwordForm.currentPassword}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          currentPassword: e.target.value,
                        })
                      }
                      className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        New Password
                      </label>
                      <input
                        required
                        type="password"
                        value={passwordForm.newPassword}
                        onChange={(e) =>
                          setPasswordForm({
                            ...passwordForm,
                            newPassword: e.target.value,
                          })
                        }
                        className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Re-type New Password
                      </label>
                      <input
                        required
                        type="password"
                        value={passwordForm.confirmPassword}
                        onChange={(e) =>
                          setPasswordForm({
                            ...passwordForm,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button
                      type="submit"
                      variant="destructive"
                      disabled={loading}
                      className="gap-2"
                    >
                      <Lock className="h-4 w-4" />
                      {loading ? "Updating..." : "Update Password"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
