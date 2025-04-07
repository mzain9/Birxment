import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animations";
import {
  ArrowRight,
  MessageSquare,
  FileText,
  Code,
  CheckCircle,
} from "lucide-react";

export default function GetStarted() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Consultation",
      description:
        "Schedule a free consultation to discuss your project requirements and goals.",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Proposal",
      description:
        "Receive a detailed proposal outlining the scope, timeline, and cost of your project.",
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Development",
      description:
        "Our team begins development with regular updates and opportunities for feedback.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Launch",
      description:
        "We deploy your solution and provide training and ongoing support as needed.",
    },
  ];

  return (
    <section
      id="get-started"
      className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background that changes based on theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/20 dark:to-secondary/20"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 dark:bg-white/10 px-3 py-1 text-sm text-primary dark:text-white">
                  Get Started
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Ready to Transform your Ideas into Reality?
                </h2>
                <p className="max-w-[900px] text-muted-foreground dark:text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your journey with Birxment today and turn your vision
                  into reality with our simple four-step process.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(100%-160px)] w-full h-0.5 bg-primary/20 dark:bg-white/20 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 transform rotate-45 w-2 h-2 border-t-2 border-r-2 border-primary/20 dark:border-white/20"></div>
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      {step.icon}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background flex items-center justify-center text-primary font-bold shadow-md">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-gray-200">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={0.3}>
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
              <div className="bg-background/80 dark:bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-primary/20 dark:border-white/20 max-w-md shadow-lg">
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-4">
                  Start Your Project
                </h3>
                <p className="text-muted-foreground dark:text-gray-200 mb-6">
                  Ready to discuss your project? Schedule a free consultation
                  with our experts to get started.
                </p>
                <Button className="bg-primary text-white hover:bg-primary-600 dark:bg-white dark:text-primary dark:hover:bg-gray-100 group transition-all duration-300 transform hover:-translate-y-1">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-foreground dark:text-white mb-2">
                  or
                </div>
              </div>

              <div className="bg-background/80 dark:bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-primary/20 dark:border-white/20 max-w-md shadow-lg">
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-4">
                  Have Questions?
                </h3>
                <p className="text-muted-foreground dark:text-gray-200 mb-6">
                  Not ready to commit? Contact our team with any questions you
                  might have about our services.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 dark:border-white dark:text-white dark:hover:bg-white/20 group transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-primary/30 animate-float-delay-1"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-secondary/30 animate-float-delay-2"></div>
          <div className="absolute top-3/4 left-1/4 w-8 h-8 rounded-full bg-primary/20 dark:bg-white/20 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-primary/10 dark:bg-white/10 animate-pulse-slow delay-500"></div>
        </div>
      </div>
    </section>
  );
}
