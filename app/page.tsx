import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import WhyChooseUs from "@/components/why-choose-us";
import Portfolio from "@/components/portfolio";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import GetStarted from "@/components/get-started";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Portfolio />
      {/* <Team /> */}
      {/* <Testimonials /> */}
      <GetStarted />
      <Contact />
    </main>
  );
}
