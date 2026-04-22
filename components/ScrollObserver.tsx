"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    
    reveals.forEach((el) => obs.observe(el));

    return () => {
      reveals.forEach((el) => obs.unobserve(el));
    };
  }, []);

  return null;
}
