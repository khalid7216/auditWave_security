import type { Metadata, Viewport } from "next";
import { Share_Tech_Mono, Bebas_Neue, DM_Sans } from "next/font/google";
import ScrollObserver from "@/components/ScrollObserver";
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
  title: "Khalid Hussain — Web Penetration Tester",
  description: "Web Penetration Tester & Bug Bounty Hunter",
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
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
