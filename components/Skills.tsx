export default function Skills() {
  return (
    <section id="skills" className="py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <div className="font-mono text-[11px] text-accent2 tracking-[3px] uppercase mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-border after:max-w-[80px]">
        01 — Expertise
      </div>
      <h2 className="font-display text-[clamp(36px,5vw,60px)] text-white tracking-[2px] mb-12 leading-[1]">
        SKILLS &amp;<br />METHODOLOGY
      </h2>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        <div className="bg-panel border border-border rounded-[6px] p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-accent before:to-transparent reveal">
          <div className="text-[28px] mb-4">🎯</div>
          <h3 className="font-mono text-[14px] text-accent tracking-[1px] mb-3">TARGET ENUMERATION</h3>
          <p className="text-[14px] text-muted leading-[1.6]">
            Deep, in-depth reconnaissance — subdomain discovery, port scanning, technology fingerprinting, attack surface mapping, and asset correlation before touching a single endpoint.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Subdomain Enum</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">OSINT</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Attack Surface</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Fingerprinting</span>
          </div>
        </div>

        <div className="bg-panel border border-border rounded-[6px] p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-accent before:to-transparent reveal">
          <div className="text-[28px] mb-4">🔬</div>
          <h3 className="font-mono text-[14px] text-accent tracking-[1px] mb-3">WEB APPLICATION TESTING</h3>
          <p className="text-[14px] text-muted leading-[1.6]">
            Comprehensive manual testing covering OWASP Top 10 and beyond — XSS, SQLi, IDOR, SSRF, XXE, auth bypass, business logic flaws, and more.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="font-mono text-[10px] bg-accent2/10 border border-accent2/20 text-accent2 py-1 px-2.5 rounded-[3px] tracking-[1px]">XSS</span>
            <span className="font-mono text-[10px] bg-accent2/10 border border-accent2/20 text-accent2 py-1 px-2.5 rounded-[3px] tracking-[1px]">SQLi</span>
            <span className="font-mono text-[10px] bg-accent2/10 border border-accent2/20 text-accent2 py-1 px-2.5 rounded-[3px] tracking-[1px]">IDOR</span>
            <span className="font-mono text-[10px] bg-accent2/10 border border-accent2/20 text-accent2 py-1 px-2.5 rounded-[3px] tracking-[1px]">SSRF</span>
            <span className="font-mono text-[10px] bg-accent2/10 border border-accent2/20 text-accent2 py-1 px-2.5 rounded-[3px] tracking-[1px]">Auth Bypass</span>
          </div>
        </div>

        <div className="bg-panel border border-border rounded-[6px] p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-accent before:to-transparent reveal">
          <div className="text-[28px] mb-4">🛠️</div>
          <h3 className="font-mono text-[14px] text-accent tracking-[1px] mb-3">TOOLING</h3>
          <p className="text-[14px] text-muted leading-[1.6]">
            Strategic use of industry-standard tools to support manual findings. Tools amplify, they don't replace — used for efficiency, not as a crutch.
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
          <div className="text-[28px] mb-4">📋</div>
          <h3 className="font-mono text-[14px] text-accent tracking-[1px] mb-3">REPORTING &amp; DISCLOSURE</h3>
          <p className="text-[14px] text-muted leading-[1.6]">
            Clear, professional vulnerability reports with full PoC, impact analysis, and remediation steps. Responsible disclosure to every affected organisation.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">PoC Writing</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">CVSS Scoring</span>
            <span className="font-mono text-[10px] bg-accent/10 border border-accent/20 text-accent py-1 px-2.5 rounded-[3px] tracking-[1px]">Responsible Disclosure</span>
          </div>
        </div>
      </div>

      <div className="mt-[60px] bg-panel border border-border rounded-[6px] p-10 reveal">
        <p className="font-mono text-[12px] text-muted tracking-[2px] uppercase mb-6">// Testing Methodology Split</p>
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex justify-between font-mono text-[12px] text-text mb-2">
              <span>Manual Testing — intuition, logic, creativity</span>
              <span className="text-accent">80%</span>
            </div>
            <div className="h-[6px] bg-border rounded-[3px] overflow-hidden">
              <div className="h-full rounded-[3px] animate-bar-grow origin-left w-[80%] bg-gradient-to-r from-accent to-[#0090aa]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between font-mono text-[12px] text-text mb-2">
              <span>Automated Scanning — speed, coverage verification</span>
              <span className="text-accent2">20%</span>
            </div>
            <div className="h-[6px] bg-border rounded-[3px] overflow-hidden">
              <div className="h-full rounded-[3px] animate-bar-grow origin-left w-[20%] bg-gradient-to-r from-accent2 to-[#aa1010]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
