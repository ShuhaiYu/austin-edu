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
        <Link href="/resource_hub?tab=blogs">
          <Button>{lang === 'en' ? 'Back to Blog' : '返回博客'}</Button>
        </Link>
      </div>
    );
  }

  const content = post.content[lang];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/resource_hub?tab=blogs">
            <Button variant="ghost" className="gap-2 text-gray-600 hover:text-white">
              <ChevronLeft className="w-4 h-4" />
              {lang === 'en' ? 'Back to Blog' : '返回博客'}
            </Button>
          </Link>
        </div>

        <article>
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={post.image}
              alt={content.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-12 pb-8 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900 leading-tight">
              {content.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {new Date(post.publishDate).toLocaleDateString(
                    lang === 'zh' ? 'zh-CN' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {content.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-gray-400" />
              {content.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="mb-16">
            <BlogContent content={content.content} />
          </div>

          {/* Call to Action */}
          <div className="border-t border-gray-200 pt-12">
            <div className="text-center bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {lang === 'en' 
                  ? 'Ready to Start Your Journey?' 
                  : '准备开始你的学习之旅？'
                }
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {lang === 'en'
                  ? 'Get personalized guidance from our expert tutors'
                  : '获得我们专业导师的个性化指导'
                }
              </p>
              <Link href="/contact_us">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  {lang === 'en' ? 'Book Free Consultation' : '预约免费咨询'}
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}