import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'

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
        <Breadcrumbs 
          items={[
            { label: 'Blog', href: '/blog' }
          ]} 
        />

        <header className="mb-16">
          <h1 className="font-display text-[clamp(40px,8vw,80px)] text-white tracking-[2px] mb-6 leading-[0.9]">
            Security<br /><span className="text-slate-300">Archives</span>
          </h1>
          <p className="text-muted text-[18px] max-w-[600px] leading-[1.7]">
            Detailed writeups on vulnerabilities, methodology reveals, and the latest trends in web penetration testing.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="group relative bg-[#0d1117] border border-border p-8 rounded-[4px] transition-all duration-300 hover:border-slate-600 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted uppercase tracking-[1px]">
                  <Calendar size={12} className="text-slate-400" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted uppercase tracking-[1px]">
                  <Clock size={12} className="text-slate-400" />
                  {post.readingTime}
                </div>
              </div>

              <h2 className="font-display text-[24px] text-white tracking-[1px] mb-4 group-hover:text-slate-300 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-muted text-[14px] leading-[1.6] mb-8 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-slate-800 text-slate-400 text-xs px-2 py-0.5 rounded border-0"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>

              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-slate-300 tracking-[2px] transition-all group/link"
              >
                Read Article
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
              
              {/* Decorative accent corner */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-[40px] h-[1px] bg-slate-600 rotate-45 translate-x-[15px] -translate-y-[5px]"></div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
