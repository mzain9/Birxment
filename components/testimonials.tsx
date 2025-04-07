"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/animations";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "John Smith",
      company: "TechCorp Inc.",
      image: "/person.svg?height=100&width=100",
      rating: 5,
      testimonial:
        "Birxment delivered our project on time and exceeded our expectations. Their team was professional, responsive, and truly understood our business needs.",
    },
    {
      name: "Lisa Wong",
      company: "HealthPlus",
      image: "/person.svg?height=100&width=100",
      rating: 5,
      testimonial:
        "Working with Birxment was a game-changer for our healthcare app. Their expertise in both technology and user experience design resulted in an exceptional product.",
    },
    {
      name: "Robert Johnson",
      company: "Finance Solutions",
      image: "/person.svg?height=100&width=100",
      rating: 4,
      testimonial:
        "The team at Birxment helped us transform our outdated systems into a modern, cloud-based solution. Their technical knowledge and project management were outstanding.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 relative">
          <AnimateOnScroll animation="fade-up" delay={0.2}>
            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card className="border-none bg-background/50 backdrop-blur-sm shadow-xl">
                        <CardContent className="p-8">
                          <div className="flex flex-col space-y-4">
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-5 w-5 ${
                                      i < testimonial.rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <div className="text-5xl font-serif text-primary/20">
                                "
                              </div>
                            </div>
                            <p className="text-muted-foreground dark:text-gray-300 italic text-lg">
                              {testimonial.testimonial}
                            </p>
                            <div className="flex items-center space-x-4 pt-4">
                              <img
                                src={testimonial.image || "/person.svg"}
                                alt={testimonial.name}
                                className="h-16 w-16 rounded-full object-cover border-2 border-primary/20"
                              />
                              <div>
                                <h4 className="font-semibold text-lg">
                                  {testimonial.name}
                                </h4>
                                <p className="text-sm text-primary">
                                  {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                      index === activeIndex
                        ? "bg-primary"
                        : "bg-gray-300 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full transition-transform duration-300 hover:-translate-x-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full transition-transform duration-300 hover:translate-x-1"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
}
