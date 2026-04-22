import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-2 bg-[#060a0f]/[0.88] backdrop-blur-md border-b border-border">
      <Link href="/" className="flex items-center transition-transform duration-200 hover:scale-105">
        <Image 
          src="/wave.webp" 
          alt="AuditWave Security — Web Penetration Testing" 
          width={250} 
          height={250}
          className="h-16 md:h-20 w-auto object-contain"
          priority
          quality={100}
        />
      </Link>
      <ul className="hidden md:flex gap-7 list-none m-0 p-0">
        <li><Link href="#skills" className="font-mono text-[11px] text-muted no-underline tracking-[1px] uppercase transition-colors duration-200 hover:text-accent">Skills</Link></li>
        <li><Link href="#timeline" className="font-mono text-[11px] text-muted no-underline tracking-[1px] uppercase transition-colors duration-200 hover:text-accent">Journey</Link></li>
        <li><Link href="#vulns" className="font-mono text-[11px] text-muted no-underline tracking-[1px] uppercase transition-colors duration-200 hover:text-accent">Vulns</Link></li>
        <li><Link href="#hall" className="font-mono text-[11px] text-muted no-underline tracking-[1px] uppercase transition-colors duration-200 hover:text-accent">Hall of Fame</Link></li>
        <li><Link href="#certs" className="font-mono text-[11px] text-muted no-underline tracking-[1px] uppercase transition-colors duration-200 hover:text-accent">Certs</Link></li>
        <li><Link href="/services" className="font-mono text-[11px] text-muted no-underline tracking-[1px] uppercase transition-colors duration-200 hover:text-accent">Security Packages</Link></li>
        <li><Link href="#contact" className="font-mono text-[11px] text-muted no-underline tracking-[1px] uppercase transition-colors duration-200 hover:text-accent">Contact</Link></li>
      </ul>
    </nav>
  );
}
