"use client";

import { useState } from "react";

type Feature = {
  label: string;
  included: boolean;
};

type Package = {
  id: string;
  tier: string;
  name: string;
  tagline: string;
  price: number;
  delivery: string;
  ideal: string;
  featured: boolean;
  accentColor: string;
  features: Feature[];
};

const packages: Package[] = [
  {
    id: "basic",
    tier: "01 — Basic",
    name: "Surface Recon",
    tagline: "Quick exposure check for any business website.",
    price: 49,
    delivery: "2–3 days",
    ideal: "Small business sites, portfolios, local companies",
    featured: false,
    accentColor: "#6b6b8a",
    features: [
      { label: "Subdomain enumeration", included: true },
      { label: "Open ports & tech fingerprint", included: true },
      { label: "Security headers check", included: true },
      { label: "SSL/TLS misconfiguration check", included: true },
      { label: "1-page PDF summary report", included: true },
      { label: "Manual vulnerability testing", included: false },
      { label: "PoC demonstration", included: false },
      { label: "Remediation call", included: false },
    ],
  },
  {
    id: "pro",
    tier: "02 — Pro",
    name: "Web App Pentest",
    tagline: "Full manual testing for sites with logins or user data.",
    price: 149,
    delivery: "5–7 days",
    ideal: "SaaS tools, e-commerce, membership sites, admin panels",
    featured: true,
    accentColor: "#00d4ff",
    features: [
      { label: "Everything in Basic", included: true },
      { label: "OWASP Top 10 manual testing", included: true },
      { label: "XSS, SQLi, IDOR, SSRF, Auth bypass", included: true },
      { label: "Business logic flaw testing", included: true },
      { label: "Full PDF report with PoC", included: true },
      { label: "CVSS severity scoring", included: true },
      { label: "Remediation recommendations", included: true },
      { label: "1:1 remediation call", included: false },
    ],
  },
  {
    id: "premium",
    tier: "03 — Premium",
    name: "Deep Dive Audit",
    tagline: "Authenticated testing across all roles and endpoints.",
    price: 249,
    delivery: "7–10 days",
    ideal: "SaaS with user accounts, multi-role apps, pre-launch startups",
    featured: false,
    accentColor: "#00d4ff",
    features: [
      { label: "Everything in Pro", included: true },
      { label: "API endpoint security testing", included: true },
      { label: "Authenticated + unauth testing", included: true },
      { label: "Privilege escalation testing", included: true },
      { label: "Executive summary report", included: true },
      { label: "30-min remediation call", included: true },
      { label: "Re-test after fixes", included: false },
      { label: "Security certificate issued", included: false },
    ],
  },
  {
    id: "full",
    tier: "04 — Full Audit",
    name: "Complete Security Audit",
    tagline: "End-to-end engagement with re-test & certificate.",
    price: 399,
    delivery: "10–14 days",
    ideal: "Fintech, healthtech, B2B SaaS, post-breach recovery",
    featured: false,
    accentColor: "#ff6b35",
    features: [
      { label: "Everything in Premium", included: true },
      { label: "Multi-scope (all subdomains)", included: true },
      { label: "Re-test after fixes (1x)", included: true },
      { label: "60-min debrief call", included: true },
      { label: "Security certificate issued", included: true },
      { label: "14-day post-audit support", included: true },
      { label: "Priority 24hr response", included: true },
      { label: "TrustPilot review request", included: true },
    ],
  },
];

const CheckIcon = ({ color }: { color: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="mt-0.5 shrink-0"
  >
    <path
      d="M2.5 7L5.5 10L11.5 4"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="mt-0.5 shrink-0"
  >
    <path
      d="M4 7H10"
      stroke="#2a2a40"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#0a0a0f] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[#00d4ff] text-xs tracking-[0.18em] uppercase font-medium mb-3">
            08 — Services
          </p>
          <h2 className="text-5xl font-bold text-white tracking-tight leading-none mb-4">
            SECURITY<br />PACKAGES
          </h2>
          <p className="text-[#555570] text-sm">
            Transparent pricing. No hidden fees. Pick what fits your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg) => {
            const isHovered = hovered === pkg.id;
            const isFeatured = pkg.featured;

            return (
              <div
                key={pkg.id}
                onMouseEnter={() => setHovered(pkg.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex flex-col rounded-xl p-6 transition-all duration-300 cursor-default"
                style={{
                  background: isFeatured ? "#0d0d1f" : "#0f0f1a",
                  border: isFeatured
                    ? "1px solid #00d4ff"
                    : isHovered
                    ? "1px solid #2a2a45"
                    : "1px solid #1a1a2e",
                }}
              >
                {/* Most Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#00d4ff] text-[#0a0a0f] text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier Label */}
                <p
                  className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4"
                  style={{ color: pkg.accentColor }}
                >
                  {pkg.tier}
                </p>

                {/* Name & Tagline */}
                <h3 className="text-white font-bold text-[15px] leading-tight mb-2">
                  {pkg.name}
                </h3>
                <p className="text-[#555570] text-[12px] leading-relaxed mb-5">
                  {pkg.tagline}
                </p>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-[#8888aa] text-base align-super">$</span>
                  <span className="text-white text-4xl font-bold">{pkg.price}</span>
                  <span className="text-[#444460] text-xs ml-1">/ one-time</span>
                </div>
                <p className="text-[#444460] text-[11px] mb-5 pb-5 border-b border-[#1a1a2e]">
                  Delivery in {pkg.delivery}
                </p>

                {/* Ideal For */}
                <div
                  className="text-[11px] leading-relaxed mb-4 px-3 py-2 rounded-md"
                  style={{
                    background: "#0a0a14",
                    borderLeft: `2px solid ${isFeatured ? "#00d4ff33" : "#1a1a2e"}`,
                    color: "#444460",
                  }}
                >
                  {pkg.ideal}
                </div>

                {/* Features */}
                <p className="text-[10px] text-[#333350] tracking-[0.1em] uppercase font-semibold mb-3">
                  Includes
                </p>
                <ul className="flex flex-col gap-2 flex-1 mb-6">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {feat.included ? (
                        <CheckIcon color={pkg.accentColor} />
                      ) : (
                        <CrossIcon />
                      )}
                      <span
                        className="text-[12px] leading-snug"
                        style={{
                          color: feat.included ? "#aaaacc" : "#333350",
                        }}
                      >
                        {feat.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="block w-full text-center py-2.5 rounded-md text-[12px] font-semibold tracking-wider uppercase transition-all duration-200"
                  style={
                    isFeatured
                      ? {
                          background: "#00d4ff",
                          color: "#0a0a0f",
                          border: "1px solid #00d4ff",
                        }
                      : {
                          background: "transparent",
                          color: "#8888aa",
                          border: "1px solid #2a2a40",
                        }
                  }
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="text-center text-[#333350] text-xs mt-10">
          All engagements include responsible disclosure and a signed NDA on request.
        </p>
      </div>
    </section>
  );
}