import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronLeft, Calendar, Clock, Tag } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) return {}

  return {
    title: `${post.title} | AuditWave Security`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Khalid Sanawer'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <article className="pt-[150px] pb-[100px] px-6 md:px-12 max-w-[800px] mx-auto">
        <Breadcrumbs 
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${post.slug}` }
          ]} 
        />

        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 font-mono text-[11px] text-muted uppercase tracking-[2px] mb-12 hover:text-accent transition-colors group"
        >
          <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Archives
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-accent uppercase tracking-[1px]">
              <Calendar size={14} />
              {post.date}
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted uppercase tracking-[1px]">
              <Clock size={14} />
              {post.readingTime}
            </div>
          </div>

          <h1 className="font-display text-[clamp(40px,6vw,70px)] text-white tracking-[2px] mb-8 leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="flex items-center gap-1 font-mono text-[10px] text-accent2 border border-accent2/20 bg-accent2/5 px-3 py-1 rounded-[2px]"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert prose-cyan max-w-none 
          prose-headings:font-display prose-headings:tracking-[1px] prose-headings:font-normal
          prose-h1:text-accent prose-h2:text-accent prose-h3:text-accent
          prose-p:text-muted prose-p:text-[17px] prose-p:leading-[1.8]
          prose-strong:text-white prose-code:text-accent2 prose-pre:bg-surface prose-pre:border prose-pre:border-border"
        >
          <MDXRemote source={post.content} />
        </div>
      </article>

      <Footer />
    </main>
  )
}
