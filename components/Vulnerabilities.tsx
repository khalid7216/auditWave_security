"use client";

import { useState } from "react";

const vulnerabilities = [
  {
    id: 1,
    severity: "high",
    type: "Blind SSRF via Open Redirect Parameter",
    desc: "Target: Airbnb — Exploited an open redirect to reach internal metadata services, potentially exposing cloud credentials.",
    status: "Reported",
    platform: "HackerOne"
  },
  {
    id: 2,
    severity: "high",
    type: "Business Logic Bypass — Client-Side Response Tampering",
    desc: "Target: Inditex (Pull & Bear) — Manipulated server response on the client-side to spoof successful payment confirmation.",
    status: "Reported",
    platform: "HackerOne"
  },
  {
    id: 3,
    severity: "high",
    type: "Session Impersonation via Full Cookie Replacement",
    desc: "Target: Dyson — Identified a vulnerability allowing for complete session takeover by replacing authentication cookies.",
    status: "Reported",
    platform: "HackerOne"
  },
  {
    id: 4,
    severity: "high",
    type: "IDOR on Agent Profile Edit",
    desc: "Target: Freshworks — Insecure Direct Object Reference allowed editing and returning sensitive data of other agent profiles.",
    status: "Reported",
    platform: "HackerOne"
  },
  {
    id: 5,
    severity: "high",
    type: "Subdomain Takeover via OneSignal",
    desc: "Target: Magic Eden — Successfully identified and claimed a subdomain vulnerable to takeover via misconfigured OneSignal settings.",
    status: "Reported",
    platform: "HackerOne"
  },
  {
    id: 6,
    severity: "high",
    type: "WordPress Admin/Users Disclosure",
    desc: "Target: Arkose Labs — Information disclosure vulnerability exposing WordPress administrative details and user lists.",
    status: "Reported",
    platform: "HackerOne"
  }
];

export default function Vulnerabilities() {
  const [filter, setFilter] = useState("all");

  const filteredVulns = filter === "all" 
    ? vulnerabilities 
    : vulnerabilities.filter(v => v.severity === filter);

  return (
    <section id="vulns" className="py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <div className="font-mono text-[11px] text-accent2 tracking-[3px] uppercase mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-border after:max-w-[80px]">
        03 — Findings
      </div>
      <h2 className="font-display text-[clamp(36px,5vw,60px)] text-white tracking-[2px] mb-12 leading-[1]">
        REPORTED<br />VULNERABILITIES
      </h2>
      
      <div className="flex gap-3 flex-wrap mb-9">
        {["all", "critical", "high", "medium"].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`font-mono text-[11px] tracking-[1px] uppercase py-2 px-4.5 rounded-[3px] border transition-all duration-200 cursor-pointer ${
              filter === f 
                ? "border-accent text-accent bg-accent/10" 
                : "border-border text-muted bg-transparent hover:border-accent hover:text-accent hover:bg-accent/10"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
        {filteredVulns.map(vuln => {
          let severityClass = "";
          let severityLabel = "";
          
          if (vuln.severity === "critical") {
            severityClass = "bg-accent2/15 text-accent2 border-accent2/30";
            severityLabel = "⬥ Critical";
          } else if (vuln.severity === "high") {
            severityClass = "bg-[#ff8c00]/10 text-[#ff8c00] border-[#ff8c00]/30";
            severityLabel = "⬥ High";
          } else if (vuln.severity === "medium") {
            severityClass = "bg-[#ffc800]/10 text-[#ffc800] border-[#ffc800]/25";
            severityLabel = "⬥ Medium";
          } else {
            severityClass = "bg-accent3/10 text-accent3 border-accent3/20";
            severityLabel = "⬥ Low";
          }

          return (
            <div key={vuln.id} className="bg-panel border border-border rounded-[6px] p-6 relative overflow-hidden transition-all duration-300 hover:border-accent2/30 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] reveal">
              <div className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[1px] uppercase py-[3px] px-2.5 rounded-[3px] border mb-3.5 ${severityClass}`}>
                {severityLabel}
              </div>
              <div className="font-display text-[20px] text-white tracking-[1px] mb-2">{vuln.type}</div>
              <p className="text-[13px] text-muted leading-[1.6] mb-3.5">{vuln.desc}</p>
              <div className="flex justify-between items-center font-mono text-[10px] text-muted tracking-[1px] border-t border-border pt-3.5">
                <span className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent3 mr-[5px]"></span>
                  {vuln.status}
                </span>
                <span>{vuln.platform}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
