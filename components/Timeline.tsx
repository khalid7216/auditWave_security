export default function Timeline() {
  return (
    <section id="timeline" className="py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <div className="font-mono text-[11px] text-accent2 tracking-[3px] uppercase mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-border after:max-w-[80px]">
        02 — Journey
      </div>
      <h2 className="font-display text-[clamp(36px,5vw,60px)] text-white tracking-[2px] mb-12 leading-[1]">
        FROM 2022<br />TO NOW
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
        
        <div className="p-7 md:p-8 bg-panel border border-border rounded-[6px] transition-all duration-300 hover:border-accent/25 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.35)] reveal">
          <div className="font-mono text-[11px] text-accent2 tracking-[2px] uppercase mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"></span>
            2022 — The Beginning
          </div>
          <div className="font-display text-[22px] text-white tracking-[1px] mb-2">STARTED WEB SECURITY</div>
          <p className="text-[14px] text-muted leading-[1.6]">
            Started learning web application security from scratch. Began with OWASP Top 10, basic HTTP concepts, and setting up Burp Suite. First steps into the hacker mindset.
          </p>
          <div className="flex flex-wrap gap-2 mt-3.5">
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">OWASP Top 10</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Burp Suite</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">HTTP Basics</span>
          </div>
        </div>

        <div className="p-7 md:p-8 bg-panel border border-border rounded-[6px] transition-all duration-300 hover:border-accent/25 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.35)] reveal">
          <div className="font-mono text-[11px] text-accent2 tracking-[2px] uppercase mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"></span>
            2022 — First Practice
          </div>
          <div className="font-display text-[22px] text-white tracking-[1px] mb-2">LAB PRACTICE &amp; CTFs</div>
          <p className="text-[14px] text-muted leading-[1.6]">
            Practiced on PortSwigger Web Security Academy labs — XSS, SQLi, CSRF, SSRF, XXE. Built hands-on skills through structured challenges before moving to real targets.
          </p>
          <div className="flex flex-wrap gap-2 mt-3.5">
            <span className="font-mono text-[10px] bg-accent2/10 border border-accent2/20 text-accent2 py-1 px-2.5 rounded-[3px] tracking-[1px]">XSS Labs</span>
            <span className="font-mono text-[10px] bg-accent2/10 border border-accent2/20 text-accent2 py-1 px-2.5 rounded-[3px] tracking-[1px]">SQLi Labs</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">PortSwigger</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">CTF</span>
          </div>
        </div>

        <div className="p-7 md:p-8 bg-panel border border-border rounded-[6px] transition-all duration-300 hover:border-accent2/25 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.35)] reveal">
          <div className="font-mono text-[11px] text-accent2 tracking-[2px] uppercase mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent2 shadow-[0_0_8px_var(--color-accent2)]"></span>
            2023 — First Real Bug
          </div>
          <div className="font-display text-[22px] text-white tracking-[1px] mb-2">FIRST REAL VULNERABILITY FOUND</div>
          <p className="text-[14px] text-muted leading-[1.6]">
            Reported first real security vulnerability to a live target through responsible disclosure. The company acknowledged the issue — a milestone moment that confirmed this was the right path.
          </p>
          <div className="flex flex-wrap gap-2 mt-3.5">
            <span className="font-mono text-[10px] bg-accent2/10 border border-accent2/20 text-accent2 py-1 px-2.5 rounded-[3px] tracking-[1px]">Responsible Disclosure</span>
            <span className="font-mono text-[10px] bg-accent3/10 border border-accent3/20 text-accent3 py-1 px-2.5 rounded-[3px] tracking-[1px]">Acknowledged ✓</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Real Target</span>
          </div>
        </div>

        <div className="p-7 md:p-8 bg-panel border border-border rounded-[6px] transition-all duration-300 hover:border-accent/25 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.35)] reveal">
          <div className="font-mono text-[11px] text-accent2 tracking-[2px] uppercase mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"></span>
            Jan 2024 — Recognition
          </div>
          <div className="font-display text-[22px] text-white tracking-[1px] mb-2">MATHIAS AHLGREN ACKNOWLEDGEMENT</div>
          <p className="text-[14px] text-muted leading-[1.6]">
            Security issue reported and personally acknowledged by Mathias Ahlgren. Validated the quality and professionalism of the disclosure process and reporting skills.
          </p>
          <div className="flex flex-wrap gap-2 mt-3.5">
            <span className="font-mono text-[10px] bg-accent3/10 border border-accent3/20 text-accent3 py-1 px-2.5 rounded-[3px] tracking-[1px]">Hall of Fame ✓</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Direct Disclosure</span>
          </div>
        </div>

        <div className="p-7 md:p-8 bg-panel border border-border rounded-[6px] transition-all duration-300 hover:border-accent2/25 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.35)] reveal">
          <div className="font-mono text-[11px] text-accent2 tracking-[2px] uppercase mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent2 shadow-[0_0_8px_var(--color-accent2)]"></span>
            Oct 2024 — Company Recognition
          </div>
          <div className="font-display text-[22px] text-white tracking-[1px] mb-2">TOMORROW WEB DESIGN HOF</div>
          <p className="text-[14px] text-muted leading-[1.6]">
            Reported critical security issue to Tomorrow Web Design. Founder Tansu Cabaci personally responded, confirming steps were taken to remediate the vulnerability.
          </p>
          <div className="flex flex-wrap gap-2 mt-3.5">
            <span className="font-mono text-[10px] bg-accent3/10 border border-accent3/20 text-accent3 py-1 px-2.5 rounded-[3px] tracking-[1px]">Hall of Fame ✓</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Tomorrow Web Design</span>
          </div>
        </div>

        <div className="p-7 md:p-8 bg-panel border border-border rounded-[6px] transition-all duration-300 hover:border-accent3/25 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.35)] reveal">
          <div className="font-mono text-[11px] text-accent2 tracking-[2px] uppercase mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent3 shadow-[0_0_8px_var(--color-accent3)]"></span>
            2024 — Certification
          </div>
          <div className="font-display text-[22px] text-white tracking-[1px] mb-2">EC-COUNCIL CERTIFICATION EARNED</div>
          <p className="text-[14px] text-muted leading-[1.6]">
            Completed EC-Council&apos;s Practical Bug Bounty Hunting for Hackers and Pentesters — formalising expertise in bug bounty methodology, tools, and professional reporting standards.
          </p>
          <div className="flex flex-wrap gap-2 mt-3.5">
            <span className="font-mono text-[10px] bg-accent3/10 border border-accent3/20 text-accent3 py-1 px-2.5 rounded-[3px] tracking-[1px]">EC-Council ✓</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Bug Bounty</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Pentest</span>
          </div>
        </div>

        <div className="p-7 md:p-8 bg-panel border border-border rounded-[6px] transition-all duration-300 hover:border-accent3/25 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.35)] reveal">
          <div className="font-mono text-[11px] text-accent2 tracking-[2px] uppercase mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent3 shadow-[0_0_8px_var(--color-accent3)]"></span>
            2025–2026 — Active Now
          </div>
          <div className="font-display text-[22px] text-white tracking-[1px] mb-2">HACKERONE &amp; BUGCROWD ACTIVE</div>
          <p className="text-[14px] text-muted leading-[1.6]">
            Active bug bounty hunter on HackerOne and Bugcrowd. Continuously expanding scope, refining methodology, and hunting across public and private programmes worldwide.
          </p>
          <div className="flex flex-wrap gap-2 mt-3.5">
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">HackerOne</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Bugcrowd</span>
            <span className="font-mono text-[10px] bg-accent3/10 border border-accent3/20 text-accent3 py-1 px-2.5 rounded-[3px] tracking-[1px]">Active Now 🟢</span>
          </div>
        </div>

      </div>
    </section>
  );
}
