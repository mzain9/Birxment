"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="relative">
      <div className="absolute -inset-[0.5px] rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 blur-[1px]"></div>
      <Button
        variant="outline"
        size="icon"
        className="relative bg-background border-none hover:bg-background/30 rounded-full"
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("dark");
          }
        }}
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
