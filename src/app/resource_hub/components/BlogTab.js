// app/resource-hub/components/BlogTab.js
"use client";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getFeaturedBlogPosts } from "@/data/blogs";

const content = {
  en: {
    interviews: "TOP Student Interviews",
    blogs: "Latest Blogs",
    readMore: "Read More →",
    checkMore: "Check More",
    students: [
      {
        name: "Jennifer",
        major: "Science",
        image: "https://placehold.co/600x400",
      },
      {
        name: "John",
        major: "Math",
        image: "https://placehold.co/600x400",
      },
      {
        name: "Sammy",
        major: "Science",
        image: "https://placehold.co/600x400",
      },
    ]
  },
  zh: {
    interviews: "优秀学生访谈",
    blogs: "最新博客文章",
    readMore: "阅读全文 →",
    checkMore: "查看更多",
    students: [
      {
        name: "Jennifer",
        major: "科学系",
        image: "https://placehold.co/600x400",
      },
      {
        name: "John",
        major: "数学系",
        image: "https://placehold.co/600x400",
      },
      {
        name: "Sammy",
        major: "科学系",
        image: "https://placehold.co/600x400",
      },
    ]
  },
};

export const BlogTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];
  const [activeStudent, setActiveStudent] = useState(0);
  
  // 获取特色博客文章
  const featuredPosts = getFeaturedBlogPosts().slice(0, 3);

  return (
    <div className="bg-white rounded-xl p-16 shadow-lg">
      {/* Student Interviews Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">{t.interviews}</h2>

        {/* Main Featured Student */}
        <div className="relative h-[500px] w-full mb-8 rounded-[2rem] overflow-hidden">
          <Image
            src={t.students[activeStudent].image}
            alt={t.students[activeStudent].name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div className="flex items-center gap-6">
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16 p-0 bg-white/20 hover:bg-white/30"
                >
                  <Play className="w-8 h-8 fill-current" />
                </Button>
                <div className="text-white">
                  <h3 className="text-2xl font-bold uppercase">
                    {t.students[activeStudent].name}
                  </h3>
                  <p className="text-lg opacity-90 capitalize">
                    {t.students[activeStudent].major}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Carousel */}
        <div className="grid grid-cols-3 gap-6">
          {t.students.map((student, index) => (
            <div
              key={index}
              onClick={() => setActiveStudent(index)}
              className={`relative h-48 rounded-[2rem] overflow-hidden cursor-pointer transition-all ${
                index === activeStudent ? "ring-4 ring-primary" : ""
              }`}
            >
              <Image
                src={student.image}
                alt={student.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-lg font-medium text-center uppercase">
                  {student.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">{t.blogs}</h2>

        <Carousel
          opts={{
            align: "start",
            slidesToScroll: "auto",
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredPosts.map((post, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Link href={`/blog/${post.slug}`}>
                  <article className="group relative transition-all h-full cursor-pointer">
                    <div className="relative h-64">
                      <Image
                        src={post.image}
                        alt={post.content[lang].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute left-0 top-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-muted text-primary px-3 py-1.5 text-sm">
                          {new Date(post.publishDate).toLocaleDateString(
                            lang === 'zh' ? 'zh-CN' : 'en-US'
                          )}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                        <Button className="opacity-0 group-hover:opacity-100 transition-opacity">
                          {t.readMore}
                        </Button>
                      </div>
                    </div>
                    <div className="p-6 bg-background h-[200px]">
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        {post.content[lang].title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.content[lang].description}
                      </p>
                    </div>
                  </article>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" variant="ghost" size="lg" />
          <CarouselNext className="-right-12" variant="ghost" size="lg" />
        </Carousel>

        {/* Check More Button */}
        <div className="flex justify-center my-12">
          <Link href="/blog">
            <Button size="lg" className="px-12">
              {t.checkMore}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};