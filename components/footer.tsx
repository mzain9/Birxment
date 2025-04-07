"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-950 text-white overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"></div>

      {/* Scroll to top button */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-40">
        <Button
          onClick={scrollToTop}
          className="rounded-full h-10 w-10 bg-primary hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
            fillOpacity="0.05"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
              Birxment
            </h2>
            <p className="mb-4 text-gray-300 dark:text-gray-400">
              Innovative software solutions for businesses of all sizes. We
              transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Services",
                "Portfolio",
                "Our Team",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `#${item.toLowerCase().replace(/\s+/g, "")}`
                    }
                    className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Cloud Solutions",
                "DevOps Services",
                "AI & Machine Learning",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <span className="text-gray-300 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                  123 Innovation Street, Tech City, TC 10101
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 mr-3 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <span className="text-gray-300 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <span className="text-gray-300 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                  info@birxment.com
                </span>
              </li>
            </ul>

            <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-gray-700 w-full">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 w-full bg-gray-700 border-none rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Button className="rounded-l-none bg-primary hover:bg-primary-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Birxment. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors duration-300 text-gray-400 dark:text-gray-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors duration-300 text-gray-400 dark:text-gray-500"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors duration-300 text-gray-400 dark:text-gray-500"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
