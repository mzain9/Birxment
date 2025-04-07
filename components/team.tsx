"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { AnimateOnScroll, StaggeredChildren } from "@/components/animations";

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/person2.png?height=300&width=300",
      bio: "With over 15 years of experience in software development and business leadership.",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/person2.png?height=300&width=300",
      bio: "Expert in cloud architecture and emerging technologies with a passion for innovation.",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      image: "/person2.png?height=300&width=300",
      bio: "Award-winning designer with a focus on creating intuitive and engaging user experiences.",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "/person2.png?height=300&width=300",
      bio: "Full-stack developer with expertise in multiple programming languages and frameworks.",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
  ];

  return (
    <section
      id="team"
      className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/20 dark:to-secondary/20"></div>
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-primary/30 animate-float-delay-1"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-secondary/30 animate-float-delay-2"></div>
      <div className="absolute top-3/4 left-1/4 w-8 h-8 rounded-full bg-primary/20 dark:bg-white/20 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-primary/10 dark:bg-white/10 animate-pulse-slow delay-500"></div>

      <div className="container px-4 md:px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Meet the Experts
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our talented team of professionals is dedicated to delivering
                exceptional results.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <StaggeredChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                <img
                  src={member.image || "/person2.png"}
                  alt={member.name}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={member.social.facebook}
                      className="bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-colors duration-300"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-colors duration-300"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredChildren>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
}
