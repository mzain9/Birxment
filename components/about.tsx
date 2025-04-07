import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll, FloatingAnimation } from "@/components/animations";

export default function About() {
  const advantages = [
    "10+ years of industry experience",
    "Team of 50+ skilled professionals",
    "300+ successful projects delivered",
    "98% client satisfaction rate",
    "Agile development methodology",
    "24/7 technical support",
  ];

  return (
    <section
      id="about"
      className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <AnimateOnScroll animation="fade-right">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  We Build Software That Matters
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Birxment is a leading software development company founded in
                  2025. We specialize in creating innovative digital solutions
                  that help businesses grow and succeed in today's competitive
                  market.
                </p>
              </div>

              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/10">
                  <h3 className="text-xl font-bold text-primary">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To empower businesses with cutting-edge technology solutions
                    that drive growth, efficiency, and competitive advantage.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/10">
                  <h3 className="text-xl font-bold text-secondary">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be the most trusted technology partner for businesses
                    worldwide, known for our innovation, quality, and
                    customer-centric approach.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.3}>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mt-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-center gap-2 group">
                      <CheckCircle className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span className="transition-colors duration-300 group-hover:text-primary">
                        {advantage}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.4}>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="bg-primary hover:bg-primary-600 group transition-all duration-300 transform hover:-translate-y-1">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    className="transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Meet Our Team
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left">
            <FloatingAnimation>
              <div className="relative h-[450px] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-lg opacity-20 blur-3xl"></div>
                <img
                  src="/placeholder.svg?height=450&width=450"
                  alt="About Us Image"
                  className="mx-auto h-auto w-full max-w-[450px] rounded-lg object-cover shadow-2xl transition-all duration-300 hover:shadow-primary/20"
                />

                {/* Stats cards */}
                <div className="absolute -top-6 -right-6 rounded-lg bg-white dark:bg-gray-800 p-4 shadow-xl animate-float-delay-1">
                  <div className="text-2xl font-bold text-primary">300+</div>
                  <div className="text-sm text-gray-500">
                    Projects Completed
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 rounded-lg bg-white dark:bg-gray-800 p-4 shadow-xl animate-float-delay-2">
                  <div className="text-2xl font-bold text-secondary">98%</div>
                  <div className="text-sm text-gray-500">
                    Client Satisfaction
                  </div>
                </div>
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
