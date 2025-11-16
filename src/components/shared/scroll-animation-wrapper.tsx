"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animationClassName?: string;
  startAnimationOnVisible?: boolean;
  style?: React.CSSProperties;
}

export function ScrollAnimationWrapper({
  children,
  className,
  animationClassName = "animate-fade-in-up",
  startAnimationOnVisible = true,
  style,
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(!startAnimationOnVisible);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startAnimationOnVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
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
  }, [startAnimationOnVisible]);

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "transition-opacity duration-1000 ease-out",
        isVisible ? `opacity-100 ${animationClassName}` : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
