export default function Certifications() {
  return (
    <section id="certs" className="py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <div className="font-mono text-[11px] text-accent2 tracking-[3px] uppercase mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-border after:max-w-[80px]">
        05 — Certification
      </div>
      <h2 className="font-display text-[clamp(36px,5vw,60px)] text-white tracking-[2px] mb-12 leading-[1]">
        CREDENTIALS
      </h2>
      
      <div className="flex items-center gap-8 bg-panel border border-border rounded-[6px] p-10 max-w-[700px] relative overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-accent/5 after:to-transparent after:pointer-events-none reveal">
        <div className="text-[48px] shrink-0">🏅</div>
        <div>
          <div className="font-mono text-[11px] text-accent2 tracking-[2px] uppercase mb-2">
            EC-Council · Continuing Education
          </div>
          <div className="font-display text-[22px] text-white tracking-[1px] mb-2 leading-[1.2]">
            Practical Bug Bounty Hunting for Hackers &amp; Pentesters
          </div>
          <div className="font-mono text-[12px] text-muted">
            Awarded to: Khalid Hussain &nbsp;·&nbsp; Validation of Course Completion
          </div>
        </div>
      </div>
    </section>
  );
}
