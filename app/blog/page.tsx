import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Blog | AuditWave Security',
  description: 'Cybersecurity research, bug bounty walkthroughs, and web penetration testing insights by Khalid Sanawer.',
}

export default function BlogListing() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      
      <div className="pt-[150px] pb-[100px] px-6 md:px-12 max-w-[1200px] mx-auto">
        <header className="mb-16">
          <div className="font-mono text-[11px] text-accent2 tracking-[3px] uppercase mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-border after:max-w-[80px]">
            08 — Blog Archives
          </div>
          <h1 className="font-display text-[clamp(40px,8vw,80px)] text-white tracking-[2px] mb-6 leading-[0.9]">
            SECURITY<br /><span className="text-accent">ARCHIVES</span>
          </h1>
          <p className="text-muted text-[18px] max-w-[600px] leading-[1.7]">
            Detailed writeups on vulnerabilities, methodology reveals, and the latest trends in web penetration testing.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="group relative bg-[#0d1117] border border-border p-8 rounded-[4px] transition-all duration-300 hover:border-accent/40 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted uppercase tracking-[1px]">
                  <Calendar size={12} className="text-accent" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted uppercase tracking-[1px]">
                  <Clock size={12} className="text-accent" />
                  {post.readingTime}
                </div>
              </div>

              <h2 className="font-display text-[24px] text-white tracking-[1px] mb-4 group-hover:text-accent transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-muted text-[14px] leading-[1.6] mb-8 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="flex items-center gap-1 font-mono text-[9px] text-accent border border-accent/20 bg-accent/5 px-2 py-1 rounded-[2px]"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>

              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-accent uppercase tracking-[2px] transition-all group/link"
              >
                Read Full Exposure
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
              
              {/* Decorative accent corner */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-[40px] h-[1px] bg-accent rotate-45 translate-x-[15px] -translate-y-[5px]"></div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
