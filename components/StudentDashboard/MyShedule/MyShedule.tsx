"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  GraduationCap,
  Users,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MyShedule() {
  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      designation: "Tech Lead at Google",
      status: "Available",
      graduate: "CSE",
      skills: ["AI/ML", "Full Stack", "+1"],
      experience: "45 mentees this year",
      description:
        "Senior engineer with 10+ years of experience in tech. Passionate about helping newcomers break into the industry.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      meetLink: "https://meet.google.com/udk-pzia-czt",
      nextSlot: "Today, 4:00 PM",
    },
    {
      id: 2,
      name: "Mark Johnson",
      designation: "Senior PM at Amazon",
      status: "Busy",
      graduate: "MBA",
      skills: ["Product Mgmt", "Agile", "Strategy"],
      experience: "30 mentees this year",
      description:
        "Product leader with a background in engineering. I help engineers transition into product management roles.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      meetLink: "https://meet.google.com/udk-pzia-czt",
      nextSlot: "Tomorrow, 2:00 PM",
    },
    {
      id: 3,
      name: "Emily Davis",
      designation: "Data Scientist at Netflix",
      status: "Available",
      graduate: "Statistics",
      skills: ["Python", "SQL", "Deep Learning"],
      experience: "50+ mentees this year",
      description:
        "Specializing in recommendation algorithms and big data. Let's talk about your data science career path.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      meetLink: "https://meet.google.com/udk-pzia-czt",
      nextSlot: "Fri, 10:00 AM",
    },
    {
      id: 4,
      name: "James Wilson",
      designation: "DevOps Engineer at Microsoft",
      status: "Available",
      graduate: "IT",
      skills: ["AWS", "Kubernetes", "CI/CD"],
      experience: "25 mentees this year",
      description:
        "Cloud infrastructure expert. I can help you understand the complexities of modern cloud deployment.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      meetLink: "https://meet.google.com/udk-pzia-czt",
      nextSlot: "Mon, 11:30 AM",
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">My Schedule</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {mentors.map((mentor) => (
          <Card
            key={mentor.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/10 flex flex-col h-full"
          >
            <CardHeader className="p-6 pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20 shrink-0">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">
                      {mentor.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1.5 mt-1 text-primary font-medium">
                      <Briefcase className="h-3.5 w-3.5" />
                      {mentor.designation}
                    </CardDescription>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                      <GraduationCap className="h-3.5 w-3.5" />
                      {mentor.graduate}
                    </div>
                  </div>
                </div>
                <Badge
                  variant="default"
                  className={`${
                    mentor.status === "Available"
                      ? "bg-green-500/15 text-green-700 hover:bg-green-500/25 border-green-200"
                      : "bg-red-500/15 text-red-700 hover:bg-red-500/25 border-red-200"
                  }`}
                >
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  {mentor.status}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-6 pt-2 grid gap-4 flex-grow">
              <div className="p-3 bg-secondary/50 rounded-lg text-sm text-foreground/80 italic leading-relaxed">
                &quot;{mentor.description}&quot;
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{mentor.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Next: {mentor.nextSlot}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {mentor.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0 mt-auto">
              <Button asChild className="w-full gap-2 sm:h-11 sm:text-base">
                <Link href={mentor.meetLink} target="_blank">
                  <Video className="h-4 w-4 sm:h-5 sm:w-5" />
                  Join Google Meet
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
