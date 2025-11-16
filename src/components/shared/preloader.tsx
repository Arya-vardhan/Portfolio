"use client";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "fixed inset-0 bg-background z-[100] flex justify-center items-center transition-opacity duration-500",
      loading ? "opacity-100" : "opacity-0 pointer-events-none"
    )}>
      <div className="font-headline text-4xl font-bold text-glow">
        <span className="text-primary animate-pulse">A</span>
        <span className="text-foreground animate-pulse" style={{ animationDelay: '0.2s' }}>V</span>
        <span className="text-foreground animate-pulse" style={{ animationDelay: '0.4s' }}>G</span>
      </div>
    </div>
  );
};

export default Preloader;
