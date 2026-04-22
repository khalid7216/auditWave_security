import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border text-center">
      <div className="max-w-[600px] mx-auto">
        <div className="font-mono text-[11px] text-accent2 tracking-[3px] uppercase mb-3 flex items-center justify-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-border after:max-w-[80px]">
          07 — Get In Touch
        </div>
        <h2 className="font-display text-[clamp(36px,5vw,60px)] text-white tracking-[2px] mb-6 leading-[1]">
          LET&apos;S WORK<br />TOGETHER
        </h2>
        <p className="text-muted text-[16px] mb-10 leading-[1.7]">
          Need a penetration test, security audit, or bug bounty collaboration? I bring thoroughness, professionalism, and a hacker&apos;s eye to every engagement.
        </p>
        <a href="mailto:khalid@example.com" className="inline-flex items-center gap-2 bg-accent text-black font-mono text-[12px] font-bold tracking-[2px] uppercase py-3.5 px-7 rounded-[3px] transition-all duration-200 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.3)]">
          <Mail size={18} /> Send a Message<span className="inline-block w-[10px] h-[1.1em] bg-accent align-middle ml-1 animate-blink"></span>
        </a>
      </div>
    </section>
  );
}
