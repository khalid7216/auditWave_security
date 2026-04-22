"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedBarProps {
  width: string;
  duration?: number;
  className?: string;
}

export default function AnimatedBar({ width, duration = 2000, className = "" }: AnimatedBarProps) {
  const [inView, setInView] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-[6px] bg-border rounded-[3px] overflow-hidden" ref={barRef}>
      <div 
        className={`h-full rounded-[3px] origin-left transition-all ease-out ${className}`}
        style={{ 
          width: inView ? width : "0%",
          transitionDuration: `${duration}ms`
        }}
      ></div>
    </div>
  );
}
