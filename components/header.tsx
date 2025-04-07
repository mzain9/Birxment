"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:opacity-80">
              Birxment
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {["Home", "Services", "About", "Portfolio", "Team", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="text-sm font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button className="bg-primary hover:bg-primary-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden bg-background/95 backdrop-blur-md transition-all duration-300",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md p-4">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={toggleMenu}
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Birxment
            </span>
          </Link>
          <nav className="grid grid-flow-row auto-rows-max text-sm gap-2">
            {["Home", "Services", "About", "Portfolio", "Team", "Contact"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-primary/10 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              )
            )}
          </nav>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            <Button
              className="w-full bg-primary hover:bg-primary-600 transition-all duration-300"
              onClick={toggleMenu}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
