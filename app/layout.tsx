import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Birxment | Innovative Software Solutions",
  description:
    "Birxment is a leading software house providing innovative solutions for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="fixed -top-[40%] -right-[60%] h-[800px] w-[800px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
            <div className="fixed -bottom-[40%] -left-[60%] h-[800px] w-[800px] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-3xl" />

            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
