"use client";

import React from "react";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationProps = {
  children: React.ReactNode;
  className?: string;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-out";
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
};

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-down": "-translate-y-10 opacity-0",
    "fade-left": "translate-x-10 opacity-0",
    "fade-right": "-translate-x-10 opacity-0",
    "zoom-in": "scale-95 opacity-0",
    "zoom-out": "scale-105 opacity-0",
  };

  const visibleClass = "translate-y-0 translate-x-0 scale-100 opacity-100";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? visibleClass : animationClasses[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function StaggeredChildren({
  children,
  className,
  animation = "fade-up",
  duration = 0.5,
  staggerDelay = 0.1,
  threshold = 0.1,
}: Omit<AnimationProps, "delay"> & { staggerDelay?: number }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimateOnScroll
          animation={animation}
          duration={duration}
          delay={index * staggerDelay}
          threshold={threshold}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function FloatingAnimation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("animate-floating", className)}>{children}</div>;
}

export function PulseAnimation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("animate-pulse-slow", className)}>{children}</div>;
}
