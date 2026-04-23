"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Counter from "./Counter";
import { Bug } from "lucide-react";

const phrases = [
  "WEB PENETRATION TESTER",
  "BUG BOUNTY HUNTER",
  "SECURITY RESEARCHER",
  "RESPONSIBLE DISCLOSURE",
  "ETHICAL HACKER",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (!isDeleting) {
        setText(currentPhrase.slice(0, text.length + 1));
        if (text.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2200);
          return;
        }
      } else {
        setText(currentPhrase.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 35 : 75;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div id="hero" className="min-h-screen flex items-center px-6 md:px-12 pt-[120px] pb-[80px] relative overflow-hidden">
      <div className="hero-grid absolute inset-0 animate-grid-shift"></div>
      <div className="hero-glow absolute w-[600px] h-[600px] rounded-full -top-[100px] -right-[100px] animate-pulse-glow"></div>
      <div className="hero-glow2 absolute w-[400px] h-[400px] rounded-full bottom-0 left-[200px] animate-pulse-glow-reverse"></div>
      
      <div className="relative z-10 max-w-[780px]">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-[4px] py-1.5 px-3.5 font-mono text-[11px] text-accent tracking-[2px] mb-6 animate-fade-down">
          <span className="w-1.5 h-1.5 rounded-full bg-accent3 animate-blink"></span>
          Available for Bug Bounty &amp; Pentest Engagements
        </div>
        
        <h1 className="font-display text-[clamp(56px,9vw,110px)] leading-[0.9] text-white tracking-[2px] mb-2 animate-fade-down [animation-delay:100ms]">
          KHALID<br />
          <span className="text-accent">SAN</span>
          <span className="text-accent2">AWER</span>
        </h1>
        
        <p className="font-mono text-[14px] text-muted tracking-[3px] uppercase mb-8 min-h-[24px] animate-fade-down [animation-delay:200ms]">
          <span className="text-accent">{text}</span>
          <span className="inline-block w-[2px] h-[1em] bg-accent align-middle ml-[2px] animate-blink-fast"></span>
        </p>
        
        <p className="text-[17px] text-text max-w-[540px] mb-12 leading-[1.7] animate-fade-down [animation-delay:300ms]">
          I find vulnerabilities before the bad guys do. Specialising in deep target enumeration, manual-first methodology, and responsible disclosure — with acknowledged reports across multiple platforms and programmes.
        </p>
        
        <p className="font-mono text-[11px] text-accent tracking-[2px] mb-8 animate-fade-down [animation-delay:200ms] uppercase">Reported to Airbnb, Dyson, Inditex, Freshworks, Magic Eden and 1,200+ other targets.</p>
      
      <div className="flex gap-4 flex-wrap animate-fade-down [animation-delay:400ms]">
          <Link href="#vulns" className="inline-flex items-center gap-2 bg-accent text-black font-mono text-[12px] font-bold tracking-[2px] uppercase py-3.5 px-7 rounded-[3px] transition-all duration-200 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.3)]">
            <Bug size={18} /> View Vulnerabilities
          </Link>
          <Link href="#contact" className="inline-flex items-center gap-2 border border-border text-text font-mono text-[12px] tracking-[2px] uppercase py-3.5 px-7 rounded-[3px] transition-all duration-200 hover:border-accent hover:text-accent">
            → Hire Me
          </Link>
        </div>
      </div>

      <div className="static md:absolute mt-12 md:mt-0 bottom-[60px] right-6 md:right-12 flex flex-wrap md:flex-nowrap gap-8 md:gap-12 z-10 animate-fade-up md:justify-start">
        <div className="text-right">
          <div className="font-display text-[42px] text-white leading-[1]">
            <Counter end={1200} suffix="+" />
          </div>
          <div className="font-mono text-[10px] text-muted tracking-[2px] uppercase">Targets Tested</div>
        </div>
        <div className="text-right">
          <div className="font-display text-[42px] text-white leading-[1]">
            <Counter end={3} suffix="+" />
          </div>
          <div className="font-mono text-[10px] text-muted tracking-[2px] uppercase">Years Active</div>
        </div>
        <div className="text-right">
          <div className="font-display text-[42px] text-white leading-[1]">
            <Counter end={80} suffix="%" />
          </div>
          <div className="font-mono text-[10px] text-muted tracking-[2px] uppercase">Manual Testing</div>
        </div>
        <div className="text-right">
          <div className="font-display text-[42px] text-white leading-[1]">
            <Counter end={10} suffix="+" />
          </div>
          <div className="font-mono text-[10px] text-muted tracking-[2px] uppercase">Global Brands</div>
        </div>
      </div>
    </div>
  );
}
