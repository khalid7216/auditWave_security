import Counter from "./Counter";
import AnimatedBar from "./AnimatedBar";
import { Target, Microscope, Wrench, ClipboardList } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <h2 className="font-display text-[clamp(36px,5vw,60px)] text-white tracking-[2px] mb-12 leading-[1]">
        Skills &amp;<br />Methodology
      </h2>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        <div className="bg-panel border border-border rounded-[6px] p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-accent before:to-transparent reveal">
          <div className="text-accent mb-4"><Target size={32} /></div>
          <h3 className="font-mono text-[14px] text-slate-300 tracking-[1px] mb-3">Target Enumeration</h3>
          <p className="text-[14px] text-muted leading-[1.6]">
            Deep, in-depth reconnaissance — subdomain discovery, port scanning, technology fingerprinting, attack surface mapping, and asset correlation before touching a single endpoint.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-300 py-1 px-2.5 rounded-[3px] tracking-[1px]">Subdomain Enum</span>
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-300 py-1 px-2.5 rounded-[3px] tracking-[1px]">OSINT</span>
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-300 py-1 px-2.5 rounded-[3px] tracking-[1px]">Attack Surface</span>
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-300 py-1 px-2.5 rounded-[3px] tracking-[1px]">Fingerprinting</span>
          </div>
        </div>

        <div className="bg-panel border border-border rounded-[6px] p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-accent before:to-transparent reveal">
          <div className="text-accent mb-4"><Microscope size={32} /></div>
          <h3 className="font-mono text-[14px] text-slate-300 tracking-[1px] mb-3">Web Application Testing</h3>
          <p className="text-[14px] text-muted leading-[1.6]">
            Comprehensive manual testing covering OWASP Top 10 and beyond — XSS, SQLi, IDOR, SSRF, XXE, auth bypass, business logic flaws, and more.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-400 py-1 px-2.5 rounded-[3px] tracking-[1px]">XSS</span>
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-400 py-1 px-2.5 rounded-[3px] tracking-[1px]">SQLi</span>
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-400 py-1 px-2.5 rounded-[3px] tracking-[1px]">IDOR</span>
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-400 py-1 px-2.5 rounded-[3px] tracking-[1px]">SSRF</span>
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-400 py-1 px-2.5 rounded-[3px] tracking-[1px]">Auth Bypass</span>
          </div>
        </div>

        <div className="bg-panel border border-border rounded-[6px] p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-accent before:to-transparent reveal">
          <div className="text-accent mb-4"><Wrench size={32} /></div>
          <h3 className="font-mono text-[14px] text-slate-300 tracking-[1px] mb-3">Tooling</h3>
          <p className="text-[14px] text-muted leading-[1.6]">
            Strategic use of industry-standard tools to support manual findings. Tools amplify, they don&apos;t replace — used for efficiency, not as a crutch.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="font-mono text-[10px] bg-accent3/10 border border-accent3/20 text-accent3 py-1 px-2.5 rounded-[3px] tracking-[1px]">Burp Suite</span>
            <span className="font-mono text-[10px] bg-accent3/10 border border-accent3/20 text-accent3 py-1 px-2.5 rounded-[3px] tracking-[1px]">Nmap</span>
            <span className="font-mono text-[10px] bg-accent3/10 border border-accent3/20 text-accent3 py-1 px-2.5 rounded-[3px] tracking-[1px]">ffuf</span>
            <span className="font-mono text-[10px] bg-accent3/10 border border-accent3/20 text-accent3 py-1 px-2.5 rounded-[3px] tracking-[1px]">Amass</span>
            <span className="font-mono text-[10px] bg-accent3/10 border border-accent3/20 text-accent3 py-1 px-2.5 rounded-[3px] tracking-[1px]">Nuclei</span>
          </div>
        </div>

        <div className="bg-panel border border-border rounded-[6px] p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-accent before:to-transparent reveal">
          <div className="text-accent mb-4"><ClipboardList size={32} /></div>
          <h3 className="font-mono text-[14px] text-slate-300 tracking-[1px] mb-3">Reporting &amp; Disclosure</h3>
          <p className="text-[14px] text-muted leading-[1.6]">
            Clear, professional vulnerability reports with full PoC, impact analysis, and remediation steps. Responsible disclosure to every affected organisation.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-300 py-1 px-2.5 rounded-[3px] tracking-[1px]">PoC Writing</span>
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-300 py-1 px-2.5 rounded-[3px] tracking-[1px]">CVSS Scoring</span>
            <span className="font-mono text-[10px] bg-slate-800 border border-slate-600 text-slate-300 py-1 px-2.5 rounded-[3px] tracking-[1px]">Responsible Disclosure</span>
          </div>
        </div>
      </div>

      <div className="mt-[60px] bg-panel border border-border rounded-[6px] p-10 reveal">
        <p className="font-mono text-[12px] text-muted tracking-[2px] uppercase mb-6">Testing Methodology Split</p>
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex justify-between font-mono text-[12px] text-text mb-2">
              <span>Manual Testing — intuition, logic, creativity</span>
              <span className="text-accent">
                <Counter end={80} suffix="%" />
              </span>
            </div>
            <AnimatedBar 
              width="80%" 
              className="bg-gradient-to-r from-accent to-[#0090aa]" 
            />
          </div>
          <div>
            <div className="flex justify-between font-mono text-[12px] text-text mb-2">
              <span>Automated Scanning — speed, coverage verification</span>
              <span className="text-accent2">
                <Counter end={20} suffix="%" />
              </span>
            </div>
            <AnimatedBar 
              width="20%" 
              className="bg-gradient-to-r from-accent2 to-[#aa1010]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
