// app/resource-hub/components/BlogTab.js
"use client";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { Play, ExternalLink } from "lucide-react";
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
    title: "Austin Daily Highlights",
    blogs: "Latest Blogs",
    readMore: "Read More →",
    checkMore: "Check More",
    watchOnYoutube: "Watch on YouTube",
    videos: [
      {
        id: "QsWfHDFssJU",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/QsWfHDFssJU/maxresdefault.jpg",
      },
      {
        id: "qZkU478lIKE",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/qZkU478lIKE/maxresdefault.jpg",
      },
      {
        id: "q3ex06ovlRM",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/q3ex06ovlRM/maxresdefault.jpg",
      },
      {
        id: "Ei7tg5GzX3Q",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/Ei7tg5GzX3Q/maxresdefault.jpg",
      },
      {
        id: "dsSMAplfzh0",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/dsSMAplfzh0/maxresdefault.jpg",
      },
      {
        id: "asIxJPtygmY",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/asIxJPtygmY/maxresdefault.jpg",
      },
      {
        id: "mSUYytgiBao",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/mSUYytgiBao/maxresdefault.jpg",
      },
      {
        id: "1qp3zpIFKOk",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/1qp3zpIFKOk/maxresdefault.jpg",
      },
      {
        id: "xqqSLd7oPMc",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/xqqSLd7oPMc/maxresdefault.jpg",
      },
    ],
  },
  zh: {
    title: "Austin每日精彩",
    blogs: "最新博客文章",
    readMore: "阅读全文 →",
    checkMore: "查看更多",
    watchOnYoutube: "在YouTube观看",
    videos: [
      {
        id: "QsWfHDFssJU",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/QsWfHDFssJU/maxresdefault.jpg",
      },
      {
        id: "qZkU478lIKE",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/qZkU478lIKE/maxresdefault.jpg",
      },
      {
        id: "q3ex06ovlRM",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/q3ex06ovlRM/maxresdefault.jpg",
      },
      {
        id: "Ei7tg5GzX3Q",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/Ei7tg5GzX3Q/maxresdefault.jpg",
      },
      {
        id: "dsSMAplfzh0",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/dsSMAplfzh0/maxresdefault.jpg",
      },
      {
        id: "asIxJPtygmY",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/asIxJPtygmY/maxresdefault.jpg",
      },
      {
        id: "mSUYytgiBao",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/mSUYytgiBao/maxresdefault.jpg",
      },
      {
        id: "1qp3zpIFKOk",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/1qp3zpIFKOk/maxresdefault.jpg",
      },
      {
        id: "xqqSLd7oPMc",
        title: "Austin Daily",
        thumbnail: "https://img.youtube.com/vi/xqqSLd7oPMc/maxresdefault.jpg",
      },
    ],
  },
};

export const BlogTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];
  const [activeVideo, setActiveVideo] = useState(0);
  const [isVideoInteracted, setIsVideoInteracted] = useState(false);

  // 获取特色博客文章
  const featuredPosts = getFeaturedBlogPosts().slice(0, 3);

  const currentVideo = t.videos[activeVideo];

  const handleVideoClick = () => {
    console.log(`Video ${currentVideo.id} clicked`);

    setIsVideoInteracted(true);
  };

  const handleVideoChange = (index) => {
    setActiveVideo(index);
    setIsVideoInteracted(false); // Reset interaction state for new video
  };

  return (
    <div className="bg-white rounded-xl p-16 shadow-lg">
      {/* Austin Daily Highlights Video Section */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          {t.title}
        </h2>

        <div className="flex gap-10 h-[700px]">
          {/* Main Video Player - Left Side */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[420px] h-full">
              {/* Video Container with 9:16 aspect ratio */}
              <div
                className="relative w-full h-full bg-gray-100 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={handleVideoClick}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.id}?rel=0&modestbranding=1`}
                  title={currentVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Video Selection Grid - Right Side */}
          <div className="w-96">
            <h3 className="text-xl font-semibold text-primary mb-6">
              More Stories
            </h3>
            <div className="grid grid-cols-2 gap-4 h-[650px] overflow-y-auto pr-2">
              {t.videos.map((video, index) => (
                <div
                  key={video.id}
                  onClick={() => handleVideoChange(index)}
                  className={`group relative cursor-pointer transition-all duration-300 ${
                    index === activeVideo
                      ? "ring-2 ring-primary shadow-lg"
                      : "hover:ring-2 hover:ring-primary/50 hover:shadow-md"
                  }`}
                >
                  {/* Thumbnail Container */}
                  <div className="relative w-full h-28 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>

                    {/* Active Indicator */}
                    {index === activeVideo && (
                      <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full border-2 border-white" />
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
                      {video.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section - Unchanged */}
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
                            lang === "zh" ? "zh-CN" : "en-US"
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
