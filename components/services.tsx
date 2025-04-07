import { Code, Smartphone, Palette, Cloud, Cog, Brain } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimateOnScroll, StaggeredChildren } from "@/components/animations";

export default function Services() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies to meet your business needs.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description:
        "User-centered design that enhances user experience and drives engagement.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for optimal performance.",
    },
    {
      icon: <Cog className="h-10 w-10 text-primary" />,
      title: "DevOps Services",
      description:
        "Streamline your development and operations with our DevOps expertise.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions that leverage the power of artificial intelligence and machine learning.",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Comprehensive Software Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a wide range of services to help businesses thrive in
                the digital landscape.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <StaggeredChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader>
                <div className="mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-500">
                  {service.icon}
                </div>
                <CardTitle className="transition-colors duration-300 group-hover:text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></div>
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
