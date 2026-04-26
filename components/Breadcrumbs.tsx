import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

/**
 * Breadcrumbs component for SEO and navigation.
 * Renders both visual breadcrumbs and JSON-LD structured data.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = "https://aw.khalidsanawer.online"
  
  // Construct Schema.org BreadcrumbList
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`
      }))
    ]
  }

  return (
    <div className="mb-8">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      
      {/* Visual Breadcrumbs */}
      <nav className="flex items-center flex-wrap gap-y-2 gap-x-2 font-mono text-[10px] uppercase tracking-[2px]" aria-label="Breadcrumb">
        <Link 
          href="/" 
          className="flex items-center gap-1.5 text-muted hover:text-accent transition-colors group"
        >
          <Home size={12} className="group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <div key={item.href} className="flex items-center gap-2">
              <ChevronRight size={12} className="text-muted/30" />
              {isLast ? (
                <span className="text-accent font-bold max-w-[150px] md:max-w-none truncate" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-muted hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          )
        })}
      </nav>
      
      {/* Subtle bottom line for a "security terminal" feel */}
      <div className="h-[1px] w-12 bg-accent/30 mt-2"></div>
    </div>
  )
}
