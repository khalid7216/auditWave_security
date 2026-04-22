import { CheckCircle2 } from "lucide-react";

export default function HallOfFame() {
  return (
    <section id="hall" className="py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <div className="font-mono text-[11px] text-accent2 tracking-[3px] uppercase mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-border after:max-w-[80px]">
        04 — Recognition
      </div>
      <h2 className="font-display text-[clamp(36px,5vw,60px)] text-white tracking-[2px] mb-12 leading-[1]">
        HALL OF<br />FAME
      </h2>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
        <div className="bg-panel border border-border rounded-[6px] p-7 relative transition-all duration-300 hover:border-accent3/30 hover:shadow-[0_0_30px_rgba(57,255,20,0.05)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-accent3 before:rounded-l-[6px] reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center font-mono text-[14px] text-accent font-bold">N</div>
            <div>
              <div className="font-mono text-[13px] text-white">Nick</div>
              <div className="text-[11px] text-muted mt-0.5">Saturday, Mar 8 · 1:32 AM</div>
            </div>
          </div>
          <p className="text-[14px] text-text leading-[1.6] italic">
            "Just realised I totally forgot to implement it on these domains. Thank you for the heads up. Really nice and appreciated of you."
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] text-accent3 tracking-[1px] bg-accent3/10 border border-accent3/20 py-1 px-2.5 rounded-[3px]">
            <CheckCircle2 size={12} /> Security Issue Acknowledged
          </div>
        </div>

        <div className="bg-panel border border-border rounded-[6px] p-7 relative transition-all duration-300 hover:border-accent3/30 hover:shadow-[0_0_30px_rgba(57,255,20,0.05)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-accent3 before:rounded-l-[6px] reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center font-mono text-[14px] text-accent font-bold">MA</div>
            <div>
              <div className="font-mono text-[13px] text-white">Mathias Ahlgren</div>
              <div className="text-[11px] text-muted mt-0.5">Sunday, Jan 28, 2024 · 2:49 PM</div>
            </div>
          </div>
          <p className="text-[14px] text-text leading-[1.6] italic">
            "Thanks, I appreciate the heads up!"
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] text-accent3 tracking-[1px] bg-accent3/10 border border-accent3/20 py-1 px-2.5 rounded-[3px]">
            <CheckCircle2 size={12} /> Responsible Disclosure
          </div>
        </div>

        <div className="bg-panel border border-border rounded-[6px] p-7 relative transition-all duration-300 hover:border-accent3/30 hover:shadow-[0_0_30px_rgba(57,255,20,0.05)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-accent3 before:rounded-l-[6px] reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center font-mono text-[14px] text-accent font-bold">TC</div>
            <div>
              <div className="font-mono text-[13px] text-white">Tansu Cabaci</div>
              <div className="text-[11px] text-muted mt-0.5">Monday, Oct 21, 2024 · 8:02 AM</div>
            </div>
          </div>
          <p className="text-[14px] text-text leading-[1.6] italic">
            "Thank you for pointing out the security issue on our website. We appreciate your input and are taking steps to correct the problem."
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] text-accent3 tracking-[1px] bg-accent3/10 border border-accent3/20 py-1 px-2.5 rounded-[3px]">
            <CheckCircle2 size={12} /> Tomorrow Web Design — Founder
          </div>
        </div>
      </div>
    </section>
  );
}
