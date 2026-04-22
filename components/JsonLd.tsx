export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    "name": "Khalid Hussain",
    "jobTitle": "Web Penetration Tester",
    "url": "https://audit-wave-security.vercel.app",
    "image": "https://audit-wave-security.vercel.app/wave.webp",
    "sameAs": [
      "https://hackerone.com/cyberarmor72",
      "https://bugcrowd.com/cyberarmor72",
      "https://audit-wave-security.vercel.app"
    ],
    "description": "Professional Web Penetration Tester & Security Researcher specializing in deep target enumeration and manual-first methodology.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "brand": {
      "@type": "Brand",
      "name": "AuditWave Security",
      "logo": "https://audit-wave-security.vercel.app/wave.webp"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
