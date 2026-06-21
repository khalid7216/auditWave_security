export default function Platforms() {
  return (
    <section id="platforms" className="py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <h2 className="font-display text-[clamp(36px,5vw,60px)] text-white tracking-[2px] mb-12 leading-[1]">
        Bug Bounty<br />Platforms
      </h2>
      
      <div className="flex gap-6 flex-wrap">
        <div className="flex-1 min-w-[200px] bg-panel border border-border rounded-[6px] p-8 text-center transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 reveal">
          <div className="font-display text-[28px] text-[#f16521] mb-3">HackerOne</div>
          <div className="font-mono text-[13px] text-text tracking-[1px]">HackerOne</div>
          <div className="text-[12px] text-muted mt-2">Triaged reports &amp; responsible disclosure</div>
        </div>
        
        <div className="flex-1 min-w-[200px] bg-panel border border-border rounded-[6px] p-8 text-center transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 reveal">
          <div className="font-display text-[28px] text-[#f5424b] mb-3">Bugcrowd</div>
          <div className="font-mono text-[13px] text-text tracking-[1px]">Bugcrowd</div>
          <div className="text-[12px] text-muted mt-2">Vulnerability submissions &amp; programme participation</div>
        </div>
      </div>
    </section>
  );
}
