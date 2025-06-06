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
    const parts = url.split('/');
    return parts[3]?.split('/')[0];
  };

  const getVimeoHash = (url) => {
    return url.split('/')[4];
  };

  // 使用Vimeo oEmbed API获取缩略图
  const fetchVimeoThumbnail = async (videoUrl) => {
    try {
      const oEmbedUrl = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(videoUrl)}&width=640&height=360`;
      const response = await fetch(oEmbedUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.thumbnail_url || null;
    } catch (error) {
      console.error('Failed to fetch Vimeo thumbnail via oEmbed:', error);
      return null;
    }
  };

  // 加载所有视频的缩略图
  useEffect(() => {
    const loadThumbnails = async () => {
      setLoadingThumbnails(true);
      const thumbnailPromises = testimonialsData.map(async (testimonial, index) => {
        const thumbnail = await fetchVimeoThumbnail(testimonial.videoUrl);
        return { index, thumbnail };
      });

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
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* 视频网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => {
            const videoId = getVimeoVideoId(testimonial.videoUrl);
            const hash = getVimeoHash(testimonial.videoUrl);
            const thumbnail = thumbnails[index];

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* 视频容器 */}
                <div 
                  className="relative aspect-video bg-gradient-to-br from-blue-50 to-purple-50 cursor-pointer overflow-hidden border-2 border-gray-100"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedVideo({ videoId, hash, name: testimonial.name })}
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
                      <div className="text-center">
                        {loadingThumbnails ? (
                          <>
                            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg animate-pulse">
                              <Play className="w-8 h-8 text-blue-600" fill="currentColor" />
                            </div>
                            <h4 className="font-semibold text-gray-700 mb-1">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">正在加载缩略图...</p>
                          </>
                        ) : (
                          <>
                            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg">
                              <Play className="w-8 h-8 text-blue-600" fill="currentColor" />
                            </div>
                            <h4 className="font-semibold text-gray-700 mb-1">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">点击观看视频见证</p>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* 悬停时的播放按钮覆盖层 */}
                  <div 
                    className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-xl">
                      <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* 渐变边框效果 */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* 学生信息 */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full shadow-sm">
                      {testimonial.achievement}
                    </div>
                  </div>
                  {testimonial.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {testimonial.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部装饰 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium">
              {lang === "en" ? "Trusted by hundreds of students" : "数百名学生的信任选择"}
            </span>
          </div>
        </div>
      </div>

      {/* 全屏视频模态窗口 */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          {/* 关闭按钮 - 固定在页面右上角 */}
          <button
            onClick={closeModal}
            className="fixed top-6 right-6 z-50 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20 cursor-pointer"
          >
            <X className="w-6 h-6 text-white" />
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