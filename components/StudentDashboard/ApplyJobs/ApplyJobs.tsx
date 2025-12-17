"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Building2,
  Calendar,
  DollarSign,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import React from "react";

export default function ApplyJobs() {
  const jobs = [
    {
      id: 1,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$90K - $130K",
      time: "Full-time",
      posted: "1 week ago",
      tags: ["Figma", "Prototyping", "User Research"],
      isApplied: true,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Remote",
      salary: "$120K - $150K",
      time: "Full-time",
      posted: "2 days ago",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      isApplied: false,
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Innovation Inc.",
      location: "New York, NY",
      type: "Hybrid",
      salary: "$110K - $140K",
      time: "Full-time",
      posted: "3 days ago",
      tags: ["Agile", "Strategy", "Roadmap"],
      isApplied: false,
    },
    {
      id: 4,
      title: "Backend Engineer",
      company: "Data Systems",
      location: "Austin, TX",
      type: "On-site",
      salary: "$130K - $160K",
      time: "Full-time",
      posted: "2 weeks ago",
      tags: ["Node.js", "PostgreSQL", "Redis"],
      isApplied: true,
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Apply for Jobs</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job) => (
          <Card
            key={job.id}
            className={`hover:shadow-md transition-shadow duration-300 flex flex-col h-full ${
              job.isApplied ? "border-primary/20 bg-primary/5" : ""
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {job.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 className="h-4 w-4" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                </div>
                {job.isApplied ? (
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                  >
                    Applied
                  </Badge>
                ) : (
                  <Badge variant="outline" className="px-3 py-1">
                    {job.posted}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="pb-3 grid gap-4 flex-grow">
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary/70" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary/70" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary/70" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary/70" />
                  <span>Posted {job.posted}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {job.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-secondary/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-2 flex justify-end mt-auto">
              <Button
                size="lg"
                className={`w-full sm:w-auto ${
                  job.isApplied
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : ""
                }`}
                disabled={job.isApplied}
              >
                {job.isApplied ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Applied
                  </>
                ) : (
                  "Apply Now"
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
