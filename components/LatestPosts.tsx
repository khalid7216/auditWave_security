import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Calendar, ArrowRight } from 'lucide-react'

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section id="latest-posts" className="py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <div className="font-mono text-[11px] text-accent2 tracking-[3px] uppercase mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-border after:max-w-[80px]">
            09 — Latest Posts
          </div>
          <h2 className="font-display text-[clamp(40px,5vw,60px)] text-white tracking-[2px] leading-[1]">
            SECURITY<br />RESEARCH
          </h2>
        </div>
        
        <Link 
          href="/blog" 
          className="bg-panel border border-border px-6 py-3 rounded-[3px] font-mono text-[11px] text-text uppercase tracking-[2px] transition-all hover:border-accent hover:text-accent hover:-translate-y-1"
        >
          View All Posts
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div 
            key={post.slug}
            className="group bg-panel border border-border p-8 rounded-[4px] transition-all duration-300 hover:border-accent/40 hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted uppercase tracking-[1px] mb-6">
              <Calendar size={12} className="text-accent" />
              {post.date}
            </div>

            <h3 className="font-display text-[22px] text-white tracking-[1px] mb-4 group-hover:text-accent transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>

            <p className="text-muted text-[14px] leading-[1.6] mb-8 flex-grow line-clamp-3">
              {post.excerpt}
            </p>

            <Link 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-accent uppercase tracking-[2px] transition-all hover:text-white"
            >
              Read more
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
