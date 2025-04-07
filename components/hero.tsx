import { Button } from "@/components/ui/button";
import { AnimateOnScroll, FloatingAnimation } from "@/components/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span className="animate-pulse mr-1">●</span> Innovative
                Software Solutions
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Transforming Ideas into Powerful Digital Solutions
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Birxment delivers innovative software solutions that drive
                business growth and enhance user experiences.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.4}>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                <Link href="#get-started">
                  <Button
                    className="bg-primary hover:bg-primary-600 group transition-all duration-300 transform hover:-translate-y-1"
                    size="lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.5}>
              <div className="mt-6 flex items-center space-x-4 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full border-2 border-background overflow-hidden"
                    >
                      <img
                        src={`/person.svg?height=32&width=32&text=${i}`}
                        alt={`User ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-gray-500">
                  <span className="font-medium text-foreground">100+</span>{" "}
                  satisfied clients worldwide
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fade-left" delay={0.3}>
            <FloatingAnimation className="flex items-center justify-center">
              <div className="relative h-[450px] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-lg opacity-20 blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-lg opacity-10 animate-pulse-slow"></div>
                <img
                  src="/placeholder.svg?height=450&width=450"
                  alt="Hero Image"
                  className="mx-auto h-auto w-full max-w-[450px] rounded-lg object-cover shadow-2xl transition-all duration-300 hover:shadow-primary/20"
                />

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-primary animate-bounce-slow"></div>
                <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-secondary animate-bounce-slow delay-300"></div>
                <div className="absolute top-1/2 -right-3 h-6 w-6 rounded-full bg-primary-300 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 -left-3 h-6 w-6 rounded-full bg-secondary-300 animate-pulse-slow delay-500"></div>
              </div>
            </FloatingAnimation>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
}
