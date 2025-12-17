"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Star, Users } from "lucide-react";
import { div } from "motion/react-client";
import Image from "next/image";
import React from "react";

// Demo Data
const savedCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    shortDescription: "Become a full-stack developer with just one course.",
    price: 49.99,
    totalStudents: 15430,
    totalReviews: 4820,
    rating: 4.8,
    weeks: 12,
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "This course covers everything you need to know to become a web developer in 2025. From HTML, CSS, JavaScript to React, Node.js, and MongoDB. You will build real-world projects and deploy them.",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    shortDescription:
      "Level up your React skills with advanced design patterns.",
    price: 39.99,
    totalStudents: 8200,
    totalReviews: 2100,
    rating: 4.9,
    weeks: 6,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Deep dive into React. Learn about Higher-Order Components, Render Props, Compound Components, and Custom Hooks. Master performance optimization and state management.",
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    shortDescription: "Learn to design beautiful and user-friendly interfaces.",
    price: 59.99,
    totalStudents: 12500,
    totalReviews: 3400,
    rating: 4.7,
    weeks: 8,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A comprehensive guide to UI/UX design. Learn to wireframe, prototype, and design high-fidelity mockups using Figma. Understand user research and usability testing.",
  },
  {
    id: 4,
    title: "Data Science with Python",
    shortDescription:
      "Master data analysis, visualization, and machine learning.",
    price: 69.99,
    totalStudents: 9800,
    totalReviews: 2900,
    rating: 4.6,
    weeks: 16,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Learn Python for Data Science. Cover NumPy, Pandas, Matplotlib, Seaborn, and Scikit-Learn. Build predictive models and analyze complex datasets.",
  },
];

export default function SaveCourse() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Saved Courses</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {savedCourses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden flex flex-col h-full group hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="line-clamp-1 text-lg" title={course.title}>
                {course.title}
              </CardTitle>
              <CardDescription className="line-clamp-2 text-xs">
                {course.shortDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 grow flex flex-col gap-3">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{course.rating}</span>
                <span className="text-muted-foreground text-xs">
                  ({course.totalReviews})
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  <span>{course.totalStudents.toLocaleString()} Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{course.weeks} Weeks</span>
                </div>
              </div>

              <p className="text-sm text-foreground/80 line-clamp-3 mt-2 border-t pt-2">
                {course.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between mt-auto">
              <span className="text-lg font-bold text-primary">
                ${course.price}
              </span>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
