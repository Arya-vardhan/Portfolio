"use client";
import React, { useEffect, useState, useRef } from "react";

interface SkillProgressProps {
  skill: string;
  percentage: number;
}

const SkillProgress = ({ skill, percentage }: SkillProgressProps) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(percentage);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
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
  }, [percentage]);

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-foreground">{skill}</span>
        <span className="text-sm font-medium text-primary">{progress}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${progress}%`,
            boxShadow: `0 0 8px hsl(var(--primary)), 0 0 12px hsl(var(--primary) / 0.5)`
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
