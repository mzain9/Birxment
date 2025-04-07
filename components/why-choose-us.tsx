import { Award, Clock, Users, Shield, Zap, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll, StaggeredChildren } from "@/components/animations";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Award-Winning Solutions",
      description:
        "Our work has been recognized with multiple industry awards for innovation and excellence.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "On-Time Delivery",
      description:
        "We pride ourselves on delivering projects on schedule without compromising quality.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Team",
      description:
        "Our team consists of highly skilled professionals with expertise across various technologies.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure & Reliable",
      description:
        "We implement robust security measures to ensure your data and applications are protected.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Agile Methodology",
      description:
        "Our agile approach ensures flexibility, transparency, and continuous improvement.",
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-primary" />,
      title: "Dedicated Support",
      description:
        "We provide ongoing support and maintenance to keep your solutions running smoothly.",
    },
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "300+", label: "Projects Completed" },
    { value: "50+", label: "Expert Developers" },
    { value: "10+", label: "Years Experience" },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                What Sets Us Apart
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We combine technical expertise with industry knowledge to
                deliver exceptional results that exceed expectations.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Stats Section */}
        <AnimateOnScroll animation="fade-up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10 p-6 text-center transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Reasons Grid */}
        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-500 bg-primary/10 p-3 rounded-lg inline-block">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></div>
            </Card>
          ))}
        </StaggeredChildren>

        {/* Testimonial Quote */}
        <AnimateOnScroll animation="fade-up" delay={0.3}>
          <div className="mt-16 relative">
            <div className="absolute -top-6 -left-6 text-8xl font-serif text-primary/10">
              "
            </div>
            <div className="absolute -bottom-6 -right-6 text-8xl font-serif text-primary/10">
              "
            </div>
            <blockquote className="relative z-10 text-center max-w-4xl mx-auto px-6 py-8 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/10">
              <p className="text-xl md:text-2xl italic text-muted-foreground mb-4">
                Working with Birxment transformed our business. Their team's
                expertise and dedication to our project exceeded our
                expectations at every turn.
              </p>
              <footer className="font-medium">
                <span className="text-foreground">Sarah Thompson</span>
                <span className="text-primary mx-2">|</span>
                <span className="text-muted-foreground">
                  CEO, TechVision Inc.
                </span>
              </footer>
            </blockquote>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
}
