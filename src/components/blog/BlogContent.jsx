// components/blog/BlogContent.js
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function BlogContent({ content }) {
  const router = useRouter();
  const contentRef = useRef(null);
  // 处理可点击链接的函数
  const processContent = (htmlContent) => {
    // 替换 <click-link> 标签为实际的 Link 组件
    return htmlContent.replace(
      /<click-link href="([^"]*)">(.*?)<\/click-link>/g,
      '<a href="$1" class="click-link" data-internal-link="true">$2</a>'
    );
  };

  // 处理图片插入
  const processImages = (htmlContent) => {
    // 处理图片标记 [image:filename.jpg]
    return htmlContent.replace(
      /\[image:([^\]]+)\]/g,
      '<div class="blog-image"><img src="/blog/$1" alt="Blog Image" /></div>'
    );
  };

  // 处理内部链接点击事件
  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest('a[data-internal-link="true"]');
      if (target) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          router.push(href);
        }
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('click', handleLinkClick);
      
      return () => {
        contentElement.removeEventListener('click', handleLinkClick);
      };
    }
  }, [router]);


  const processedContent = processImages(processContent(content));

  return (
    <>
      <div 
      ref={contentRef}
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
      <style jsx global>{`
        .blog-content {
          font-size: 1.125rem !important;
          line-height: 1.7 !important;
          color: #374151 !important;
          max-width: none !important;
        }

        .blog-content h2 {
          color: #111827 !important;
          font-size: 1.875rem !important;
          font-weight: 600 !important;
          margin-top: 3rem !important;
          margin-bottom: 1.5rem !important;
          padding-bottom: 0.75rem !important;
          border-bottom: 2px solid #e5e7eb !important;
        }

        .blog-content h3 {
          color: #111827 !important;
          font-size: 1.5rem !important;
          font-weight: 600 !important;
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
        }

        .blog-content p {
          margin-bottom: 1.5rem !important;
          color: #374151 !important;
          font-size: 1.125rem !important;
          line-height: 1.7 !important;
        }

        .blog-content ul {
          margin: 1.5rem 0 !important;
          padding-left: 2rem !important;
          list-style-type: disc !important;
        }

        .blog-content li {
          margin-bottom: 0.5rem !important;
          color: #374151 !important;
          font-size: 1.125rem !important;
        }

        .blog-content strong {
          color: #111827 !important;
          font-weight: 700 !important;
        }

        .blog-content blockquote {
          border-left: 4px solid #3b82f6 !important;
          padding: 1.5rem 2rem !important;
          margin: 2rem 0 !important;
          background-color: #eff6ff !important;
          font-style: italic !important;
          color: #1e40af !important;
          border-radius: 0.5rem !important;
          font-size: 1.125rem !important;
        }

        .blog-content .click-link {
          color: #2563eb !important;
          text-decoration: underline !important;
          font-weight: 600 !important;
          transition: color 0.2s ease !important;
        }

        .blog-content .click-link:hover {
          color: #1d4ed8 !important;
        }

        .blog-content .blog-image {
          margin: 3rem 0 !important;
          text-align: center !important;
        }

        .blog-content .blog-image img {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 0.75rem !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
          margin: 0 auto !important;
          display: block !important;
        }

        .blog-content .stats-grid {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 1.5rem !important;
          margin: 3rem 0 !important;
        }

        @media (min-width: 768px) {
          .blog-content .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        .blog-content .stat-card {
          text-align: center !important;
          padding: 2rem !important;
          border: 2px solid #e5e7eb !important;
          border-radius: 0.75rem !important;
          background-color: #ffffff !important;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
        }

        .blog-content .stat-number {
          display: block !important;
          font-size: 2rem !important;
          font-weight: 700 !important;
          color: #111827 !important;
          margin-bottom: 0.75rem !important;
        }

        .blog-content .stat-label {
          display: block !important;
          font-size: 1rem !important;
          color: #6b7280 !important;
          font-weight: 500 !important;
        }

        .blog-content .info-box {
          padding: 2rem !important;
          border-radius: 0.75rem !important;
          border: 2px solid #d1d5db !important;
          background-color: #f9fafb !important;
          margin: 2.5rem 0 !important;
        }

        .blog-content .success-box {
          padding: 2rem !important;
          border-radius: 0.75rem !important;
          border: 2px solid #22c55e !important;
          background-color: #f0fdf4 !important;
          margin: 2.5rem 0 !important;
        }

        .blog-content .warning-box {
          padding: 2rem !important;
          border-radius: 0.75rem !important;
          border: 2px solid #f59e0b !important;
          background-color: #fffbeb !important;
          margin: 2.5rem 0 !important;
        }

        .blog-content .highlight-box {
          padding: 2rem !important;
          border-radius: 0.75rem !important;
          border: 2px solid #3b82f6 !important;
          background-color: #eff6ff !important;
          margin: 2.5rem 0 !important;
        }

        .blog-content .cta-section {
          padding: 3rem !important;
          border: 2px solid #9ca3af !important;
          border-radius: 0.75rem !important;
          background-color: #f3f4f6 !important;
          margin: 3rem 0 !important;
          text-align: center !important;
        }

        .blog-content .info-box h3,
        .blog-content .success-box h3,
        .blog-content .warning-box h3,
        .blog-content .highlight-box h3,
        .blog-content .cta-section h2 {
          margin-top: 0 !important;
          margin-bottom: 1rem !important;
          color: #111827 !important;
          font-weight: 600 !important;
        }

        .blog-content .info-box ul,
        .blog-content .success-box ul,
        .blog-content .warning-box ul,
        .blog-content .highlight-box ul {
          margin: 1rem 0 !important;
          padding-left: 1.5rem !important;
        }

        .blog-content .info-box p,
        .blog-content .success-box p,
        .blog-content .warning-box p,
        .blog-content .highlight-box p,
        .blog-content .cta-section p {
          margin-bottom: 1rem !important;
        }

        .blog-content .cta-section p:last-child {
          margin-bottom: 0 !important;
        }
      `}</style>
    </>
  );
}

// 统计卡片组件 - 简约版本
export function StatsGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {children}
    </div>
  );
}

export function StatCard({ number, label }) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg bg-white">
      <div className="text-2xl font-semibold text-gray-900 mb-2">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

// 信息框组件 - 简约版本
export function InfoBox({ title, children, type = "default" }) {
  const styles = {
    default: "bg-gray-50 border-gray-200",
    highlight: "bg-blue-50 border-blue-200", 
    success: "bg-green-50 border-green-200",
    warning: "bg-amber-50 border-amber-200"
  };

  return (
    <div className={`p-6 rounded-lg border ${styles[type]} my-6`}>
      {title && <h3 className="text-lg font-medium mb-3 text-gray-900">{title}</h3>}
      <div className="text-gray-700 [&>ul]:list-disc [&>ul]:pl-6 [&>li]:mb-1">
        {children}
      </div>
    </div>
  );
}