// app/blog/[slug]/page.js
"use client";
import { useContext } from "react";
import { useParams } from "next/navigation";
import { LangContext } from "@/app/layout";
import { getBlogPost } from "@/data/blogs";
import { BlogContent } from "@/components/blog/BlogContent";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, Tag } from "lucide-react";

export default function BlogPostPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const params = useParams();
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">
          {lang === 'en' ? 'Post Not Found' : '文章未找到'}
        </h1>
        <Link href="/blog">
          <Button>{lang === 'en' ? 'Back to Blog' : '返回博客'}</Button>
        </Link>
      </div>
    );
  }

  const content = post.content[lang];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2">
            <ChevronLeft className="w-4 h-4" />
            {lang === 'en' ? 'Back to Blog' : '返回博客'}
          </Button>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={content.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {content.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.publishDate).toLocaleDateString(
                  lang === 'zh' ? 'zh-CN' : 'en-US'
                )}
              </span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            {content.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-muted-foreground" />
            {content.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <BlogContent content={content.content} />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-primary/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            {lang === 'en' 
              ? 'Ready to Start Your Journey?' 
              : '准备开始你的学习之旅？'
            }
          </h3>
          <p className="text-muted-foreground mb-6">
            {lang === 'en'
              ? 'Get personalized guidance from our expert tutors'
              : '获得我们专业导师的个性化指导'
            }
          </p>
          <Link href="/contact">
            <Button size="lg">
              {lang === 'en' ? 'Book Free Consultation' : '预约免费咨询'}
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
