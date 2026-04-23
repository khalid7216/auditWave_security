import type { Metadata, Viewport } from "next";
import { Share_Tech_Mono, Bebas_Neue, DM_Sans } from "next/font/google";
import ScrollObserver from "@/components/ScrollObserver";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aw.khalidsanawer.online"),
  title: "Khalid Sanawer — Web Penetration Tester | AuditWave Security",
  description: "3+ years, 1200+ targets tested. Reported vulnerabilities to Airbnb, Dyson, Inditex, Freshworks. Bug bounty researcher & freelance pentester.",
  keywords: ["Web Penetration Tester", "Bug Bounty Hunter", "Cybersecurity Audit", "Ethical Hacker", "AuditWave Security", "Security Researcher"],
  authors: [{ name: "Khalid Sanawer" }],
  creator: "Khalid Sanawer",
  icons: {
    icon: "/android-chrome-192x192.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Khalid Sanawer — Web Penetration Tester | AuditWave Security",
    description: "3+ years, 1200+ targets tested. Reported vulnerabilities to Airbnb, Dyson, Inditex, Freshworks. Bug bounty researcher & freelance pentester.",
    url: "https://aw.khalidsanawer.online",
    siteName: "AuditWave Security",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Khalid Sanawer — Web Penetration Tester | AuditWave Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Sanawer — Web Penetration Tester | AuditWave Security",
    description: "3+ years, 1200+ targets tested. Reported vulnerabilities to Airbnb, Dyson, Inditex, Freshworks. Bug bounty researcher & freelance pentester.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${shareTechMono.variable} ${bebasNeue.variable} ${dmSans.variable} antialiased font-body bg-bg text-text`}
        suppressHydrationWarning
      >
        <JsonLd />
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
