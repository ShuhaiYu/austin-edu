// app/blog/page.js
"use client";
import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import { getAllBlogPosts, getBlogPostsByCategory, blogCategories } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const posts = getBlogPostsByCategory(selectedCategory);
  const categories = blogCategories[lang];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {lang === 'en' ? 'Blog & Resources' : '博客与资源中心'}
        </h1>
        <p className="text-lg text-muted-foreground">
          {lang === 'en' 
            ? 'Discover insights, tips, and guidance for your academic journey' 
            : '探索学习路上的见解、技巧和指导'
          }
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(categories).map(([key, label]) => (
          <Button
            key={key}
            variant={selectedCategory === key ? "default" : "outline"}
            onClick={() => setSelectedCategory(key)}
            className="px-6"
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.content[lang].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {categories[post.category]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {new Date(post.publishDate).toLocaleDateString(
                    lang === 'zh' ? 'zh-CN' : 'en-US'
                  )}
                </div>
                <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.content[lang].title}
                </h2>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.content[lang].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.content[lang].tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}