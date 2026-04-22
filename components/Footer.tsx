import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <p className="font-mono text-[11px] text-muted tracking-[1px]">
        © 2026 Khalid Hussain &nbsp;·&nbsp; Web Penetration Tester
      </p>
      <p className="font-mono text-[11px] text-muted tracking-[1px] flex items-center gap-1">
        Built with <Heart size={12} className="text-accent2 fill-accent2" /> &amp; security in mind
      </p>
    </footer>
  );
}
