"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimateOnScroll, StaggeredChildren } from "@/components/animations";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const categories = ["All", "Web", "Mobile", "UI/UX", "Cloud"];

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A full-featured e-commerce platform with payment integration and inventory management.",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A mobile application for healthcare providers to manage patient records and appointments.",
    },
    {
      title: "Financial Dashboard",
      category: "UI/UX",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "An intuitive financial dashboard for tracking investments and financial performance.",
    },
    {
      title: "Cloud Migration",
      category: "Cloud",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Migration of legacy systems to a modern cloud infrastructure for improved scalability.",
    },
    {
      title: "Real Estate Platform",
      category: "Web",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A comprehensive real estate platform for property listings and management.",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A mobile app for tracking fitness activities, nutrition, and health metrics.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">
                Our Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Recent Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our latest work and see how we've helped businesses
                achieve their goals.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0.2}>
          <Tabs defaultValue="All" className="mt-12">
            <div className="flex justify-center">
              <TabsList className="bg-background/50 backdrop-blur-sm border">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <StaggeredChildren className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter(
                      (project) =>
                        category === "All" || project.category === category
                    )
                    .map((project, index) => (
                      <Card
                        key={index}
                        className="group overflow-hidden border-none bg-background/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="relative aspect-video w-full overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10 flex items-center justify-center">
                            <Button
                              variant="outline"
                              className="border-white text-white hover:bg-white/20 hover:text-white"
                            >
                              View Project{" "}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                              {project.category}
                            </div>
                            <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                              {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {project.description}
                            </p>
                            <Button
                              variant="link"
                              className="p-0 text-primary group"
                            >
                              View Project
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </StaggeredChildren>
              </TabsContent>
            ))}
          </Tabs>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0.3}>
          <div className="flex justify-center mt-12">
            <Button className="bg-primary hover:bg-primary-600 group transition-all duration-300 transform hover:-translate-y-1">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
}
