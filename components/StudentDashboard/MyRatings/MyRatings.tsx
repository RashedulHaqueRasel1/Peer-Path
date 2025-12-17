"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React from "react";

// Demo Data
const reviews = [
  {
    id: 1,
    title: "Excellent teaching style!",
    subtitle: "Web Development Bootcamp",
    rating: 5,
    category: "Course",
    user: {
      name: "Alex Morgan",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    comment:
      "The instructor explained complex concepts in a very simple way. I learned a lot!",
    date: "2 days ago",
  },
  {
    id: 2,
    title: "Very helpful mentor",
    subtitle: "Dr. Sarah Chen",
    rating: 5,
    category: "Teacher",
    user: {
      name: "Jordan Lee",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    comment:
      "Sarah gave me great advice on my career path. Highly recommended!",
    date: "1 week ago",
  },
  {
    id: 3,
    title: "Great platform interface",
    subtitle: "Peer Path Website",
    rating: 4,
    category: "Website",
    user: {
      name: "Taylor Kim",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    comment:
      "The user interface is clean and easy to navigate. Dashboard is very useful.",
    date: "2 weeks ago",
  },
  {
    id: 4,
    title: "Course content needs update",
    subtitle: "Legacy React Patterns",
    rating: 3,
    category: "Course",
    user: {
      name: "Casey Smith",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    comment:
      "Some of the examples are using older syntax. Would love to see an update.",
    date: "3 weeks ago",
  },
  {
    id: 5,
    title: "Best learning experience",
    subtitle: "Data Science Specialization",
    rating: 5,
    category: "Course",
    user: {
      name: "Riley Davis",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    comment: "Everything was perfect. The projects were challenging and fun.",
    date: "1 month ago",
  },
  {
    id: 6,
    title: "Supportive community",
    subtitle: "Peer Path Platform",
    rating: 5,
    category: "Website",
    user: {
      name: "Quinn Wilson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    comment:
      "I love the community features. It's great to connect with other learners.",
    date: "1 month ago",
  },
];

export default function MyRatings() {
  const categories = ["All", "Teacher", "Course", "Website"];

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Ratings</h1>
        <div className="text-muted-foreground text-sm">
          Total Reviews:{" "}
          <span className="font-semibold text-foreground">
            {reviews.length}
          </span>
        </div>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category} Reviews
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-4">
              {reviews
                .filter(
                  (review) => category === "All" || review.category === category
                )
                .map((review) => (
                  <Card
                    key={review.id}
                    className="overflow-hidden hover:bg-secondary/10 transition-colors border-none shadow-sm bg-card/50"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4 items-start">
                        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border">
                          <Image
                            src={review.user.image}
                            alt={review.user.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow space-y-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-semibold text-lg leading-none mb-1">
                                {review.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {review.subtitle}
                              </p>
                            </div>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                              {review.date}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 my-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "fill-muted text-muted"
                                }`}
                              />
                            ))}
                          </div>

                          <p className="text-sm text-foreground/90 leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {reviews.filter(
                (review) => category === "All" || review.category === category
              ).length === 0 && (
                <div className="text-center py-12 text-muted-foreground italic">
                  No reviews found in this category.
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
