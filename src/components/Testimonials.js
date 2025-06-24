"use client";
import { useContext, useState, useEffect } from "react";
import { LangContext } from "@/app/layout";
import { homeContent } from "@/app/content";
import { Play, X } from "lucide-react";

export default function Testimonials() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const testimonialsData = homeContent[lang].testimonials;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState({});
  const [loadingThumbnails, setLoadingThumbnails] = useState(true);

  // 从Vimeo URL提取视频ID和hash
  const getVimeoVideoId = (url) => {
    const parts = url.split("/");
    return parts[3]?.split("/")[0];
  };

  const getVimeoHash = (url) => {
    return url.split("/")[4];
  };

  // 使用Vimeo oEmbed API获取缩略图
  const fetchVimeoThumbnail = async (videoUrl) => {
    try {
      const oEmbedUrl = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
        videoUrl
      )}&width=640&height=360`;
      const response = await fetch(oEmbedUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.thumbnail_url || null;
    } catch (error) {
      console.error("Failed to fetch Vimeo thumbnail via oEmbed:", error);
      return null;
    }
  };

  // 加载所有视频的缩略图
  useEffect(() => {
    const loadThumbnails = async () => {
      setLoadingThumbnails(true);
      const thumbnailPromises = testimonialsData.map(
        async (testimonial, index) => {
          const thumbnail = await fetchVimeoThumbnail(testimonial.videoUrl);
          return { index, thumbnail };
        }
      );

      const results = await Promise.all(thumbnailPromises);
      const thumbnailMap = {};
      results.forEach(({ index, thumbnail }) => {
        thumbnailMap[index] = thumbnail;
      });
      setThumbnails(thumbnailMap);
      setLoadingThumbnails(false);
    };

    loadThumbnails();
  }, [testimonialsData]);

  // 关闭模态窗口
  const closeModal = () => {
    setSelectedVideo(null);
  };

  // 处理背景点击
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // ESC键关闭
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedVideo) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);

  return (
    <div className="w-full px-2 sm:px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* 视频网格 - 移动端优化 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {testimonialsData.map((testimonial, index) => {
            const videoId = getVimeoVideoId(testimonial.videoUrl);
            const hash = getVimeoHash(testimonial.videoUrl);
            const thumbnail = thumbnails[index];

            return (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                {/* 视频容器 */}
                <div
                  className="relative aspect-video bg-gradient-to-br from-blue-50 to-purple-50 cursor-pointer overflow-hidden border border-gray-100 sm:border-2"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() =>
                    setSelectedVideo({ videoId, hash, name: testimonial.name })
                  }
                >
                  {/* 显示真实的Vimeo缩略图或默认背景 */}
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={`${testimonial.name} testimonial thumbnail`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    /* 默认背景（当缩略图加载失败或正在加载时） */
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 flex items-center justify-center">
                      <div className="text-center px-4">
                        {loadingThumbnails ? (
                          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-3 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                        ) : (
                          <>
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/80 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto shadow-lg">
                              <Play
                                className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                                fill="currentColor"
                              />
                            </div>
                            <h4 className="font-semibold text-gray-700 mb-1 text-sm sm:text-base">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500">
                              Click to watch video testimonial
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* 悬停时的播放按钮覆盖层 - 移动端始终显示一个小播放按钮 */}
                  <div
                    className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0 sm:opacity-0"
                    }`}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-xl">
                      <Play
                        className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  {/* 移动端右下角小播放按钮 */}
                  <div className="absolute bottom-3 right-3 sm:hidden w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play
                      className="w-5 h-5 text-blue-600 ml-0.5"
                      fill="currentColor"
                    />
                  </div>

                  {/* 渐变边框效果 */}
                  <div className="absolute inset-0 rounded-lg bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* 学生信息 */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-1 mr-2">
                      {testimonial.name}
                    </h3>
                    <div className="px-2 py-1 sm:px-3 bg-primary text-white text-xs sm:text-sm font-medium rounded-full shadow-sm whitespace-nowrap">
                      {testimonial.achievement}
                    </div>
                  </div>
                  {testimonial.description && (
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {testimonial.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 全屏视频模态窗口 - 移动端优化 */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={handleBackdropClick}
        >
          {/* 关闭按钮 - 移动端优化位置和大小 */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20 cursor-pointer"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* 视频播放器 */}
            <iframe
              src={`https://player.vimeo.com/video/${selectedVideo.videoId}?h=${selectedVideo.hash}&color=6366f1&title=0&byline=0&portrait=0&badge=0&autoplay=1&controls=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={`${selectedVideo.name} Testimonial`}
            />
          </div>
        </div>
      )}
    </div>
  );
}