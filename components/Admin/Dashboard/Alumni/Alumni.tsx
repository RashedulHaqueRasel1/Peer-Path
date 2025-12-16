"use client";

import React, { useState } from "react";
import { Plus, Edit2, Trash2, Search, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// --- Types ---

interface Alumnus {
  id: number;
  name: string;
  email: string;
  department: string;
  batch: string;
  status: "Verified" | "Not verified";
}

// --- Mock Data ---

const initialAlumni: Alumnus[] = [
  {
    id: 223014073,
    name: "John Mitchell",
    email: "john.mitchell@example.com",
    department: "Computer Science",
    batch: "2020",
    status: "Verified",
  },
  {
    id: 223014074,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    department: "Electrical Engineering",
    batch: "2019",
    status: "Verified",
  },
  {
    id: 223014075,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    department: "Mechanical Engineering",
    batch: "2021",
    status: "Not verified",
  },
  {
    id: 223014076,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    department: "Civil Engineering",
    batch: "2018",
    status: "Verified",
  },
  {
    id: 223014077,
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    department: "Software Engineering",
    batch: "2022",
    status: "Verified",
  },
];

export default function Alumni() {
  const [alumni, setAlumni] = useState<Alumnus[]>(initialAlumni);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAlumnus, setCurrentAlumnus] = useState<Partial<Alumnus>>({});
  const [isEditing, setIsEditing] = useState(false);

  // --- Handlers ---

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredAlumni = alumni.filter(
    (alumnus) =>
      alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openAddModal = () => {
    setCurrentAlumnus({});
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const openEditModal = (alumnus: Alumnus) => {
    setCurrentAlumnus({ ...alumnus });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this alumni?")) {
      setAlumni(alumni.filter((a) => a.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setAlumni(
        alumni.map((a) =>
          a.id === currentAlumnus.id ? (currentAlumnus as Alumnus) : a
        )
      );
    } else {
      const newAlumnus = {
        ...currentAlumnus,
        id: currentAlumnus.id || alumni.length + 1,
        status: currentAlumnus.status || "Not verified",
      } as Alumnus;
      setAlumni([...alumni, newAlumnus]);
    }
    setIsModalOpen(false);
  };

  const handleInputChange = (field: keyof Alumnus, value: string) => {
    setCurrentAlumnus({ ...currentAlumnus, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Alumni Management
        </h2>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Add Alumni
        </button>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>All Alumni</CardTitle>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search alumni..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full rounded-md border border-input bg-transparent py-2 pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b bg-muted/50 font-medium">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3">Batch</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAlumni.length > 0 ? (
                  filteredAlumni.map((alumnus) => (
                    <tr
                      key={alumnus.id}
                      className="border-b last:border-0 hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium">{alumnus.id}</td>
                      <td className="px-4 py-3 font-medium">{alumnus.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {alumnus.email}
                      </td>
                      <td className="px-4 py-3">{alumnus.department}</td>
                      <td className="px-4 py-3">{alumnus.batch}</td>
                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                            alumnus.status === "Verified"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                          )}
                        >
                          {alumnus.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openEditModal(alumnus)}
                            className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(alumnus.id)}
                            className="rounded p-1 text-muted-foreground hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-8 text-center text-muted-foreground"
                    >
                      No alumni found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Modal - Could be a separate component but keeping here for simplicity */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative z-50 w-full max-w-md rounded-lg border bg-background p-6 shadow-lg animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                {isEditing ? "Edit Alumni" : "Add New Alumni"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">ID</label>
                <input
                  required
                  type="number"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={currentAlumnus.id || ""}
                  onChange={(e) => handleInputChange("id", e.target.value)}
                  disabled={isEditing}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={currentAlumnus.name || ""}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  required
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={currentAlumnus.email || ""}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Department</label>
                  <select
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={currentAlumnus.department || ""}
                    onChange={(e) =>
                      handleInputChange("department", e.target.value)
                    }
                  >
                    <option value="">Select Department</option>
                    <option value="CSE">CSE</option>
                    <option value="BBA">BBA</option>
                    <option value="MSJ">MSJ</option>
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Batch</label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={currentAlumnus.batch || ""}
                    onChange={(e) => handleInputChange("batch", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={currentAlumnus.status || "Verified"}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                >
                  <option value="Verified">Verified</option>
                  <option value="Not verified">Not verified</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
