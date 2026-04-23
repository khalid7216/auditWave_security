export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    "name": "Khalid Sanawer",
    "jobTitle": "Web Penetration Tester",
    "url": "https://aw.khalidsanawer.online",
    "image": "https://aw.khalidsanawer.online/wave.webp",
    "sameAs": [
      "https://hackerone.com/cyberarmor72",
      "https://bugcrowd.com/cyberarmor72",
      "https://aw.khalidsanawer.online"
    ],
    "description": "Professional Web Penetration Tester & Security Researcher specializing in deep target enumeration and manual-first methodology.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "brand": {
      "@type": "Brand",
      "name": "AuditWave Security",
      "logo": "https://aw.khalidsanawer.online/wave.webp"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
