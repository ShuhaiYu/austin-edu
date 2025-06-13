
// components/blog/BlogContent.js
"use client";

export const BlogContent = ({ content }) => {
  // 处理 <click-link> 标签的函数
  const processContent = (htmlContent) => {
    return htmlContent.replace(
      /<click-link\s+href="([^"]+)">([^<]+)<\/click-link>/g,
      (match, href, text) => {
        return `<a href="${href}" class="click-link">${text}</a>`;
      }
    );
  };

  return (
    <>
      <style jsx>{`
        .blog-content {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
          line-height: 1.75;
          color: #374151;
          font-size: 16px;
          letter-spacing: 0.025em;
        }
        
        .blog-content :global(h1) {
          font-size: 2.75rem;
          font-weight: 800;
          color: #111827;
          margin: 3.5rem 0 2rem 0;
          line-height: 1.1;
          position: relative;
          padding-bottom: 1.5rem;
          letter-spacing: -0.025em;
        }
        
        .blog-content :global(h1::after) {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 4.5rem;
          height: 0.3rem;
          background: linear-gradient(90deg, #3b82f6, #1d4ed8);
          border-radius: 0.15rem;
        }
        
        .blog-content :global(h2) {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 3rem 0 1.25rem 0;
          line-height: 1.2;
          position: relative;
          padding-left: 1.25rem;
          border-left: 0.3rem solid #3b82f6;
          letter-spacing: -0.015em;
        }
        
        .blog-content :global(h3) {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin: 2.5rem 0 1rem 0;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        
        .blog-content :global(h4) {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4b5563;
          margin: 2rem 0 0.75rem 0;
          line-height: 1.4;
        }
        
        .blog-content :global(p) {
          font-size: 1.125rem;
          line-height: 1.8;
          margin: 1.75rem 0;
          color: #4b5563;
          text-align: justify;
        }
        
        .blog-content :global(p:first-child) {
          font-size: 1.25rem;
          line-height: 1.7;
          color: #374151;
          font-weight: 400;
        }
        
        .blog-content :global(ul) {
          margin: 2rem 0;
          padding-left: 0;
          list-style: none;
        }
        
        .blog-content :global(ul li) {
          position: relative;
          padding-left: 2rem;
          margin: 1.25rem 0;
          font-size: 1.125rem;
          line-height: 1.75;
          color: #4b5563;
        }
        
        .blog-content :global(ul li::before) {
          content: '';
          position: absolute;
          left: 0.5rem;
          top: 0.85rem;
          width: 0.5rem;
          height: 0.5rem;
          background: #3b82f6;
          border-radius: 50%;
        }
        
        .blog-content :global(ol) {
          margin: 2rem 0;
          padding-left: 2rem;
        }
        
        .blog-content :global(ol li) {
          padding-left: 0.5rem;
          margin: 1.25rem 0;
          font-size: 1.125rem;
          line-height: 1.75;
          color: #4b5563;
        }
        
        .blog-content :global(strong) {
          font-weight: 700;
          color: #1f2937;
          background: linear-gradient(120deg, #fef3c7 0%, #fbbf24 100%);
          background-size: 100% 0.3em;
          background-repeat: no-repeat;
          background-position: 0 85%;
          padding: 0.1em 0.25em;
          border-radius: 0.2em;
        }
        
        .blog-content :global(blockquote) {
          border-left: 0.3rem solid #3b82f6;
          padding: 2rem;
          margin: 2.5rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 0.75rem;
          font-style: italic;
          color: #475569;
          font-size: 1.1rem;
          line-height: 1.7;
          position: relative;
        }
        
        .blog-content :global(blockquote::before) {
          content: '"';
          font-size: 4rem;
          color: #3b82f6;
          position: absolute;
          top: -0.5rem;
          left: 1.5rem;
          font-family: Georgia, serif;
          opacity: 0.3;
        }
        
        .blog-content :global(.highlight-box) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2.5rem;
          border-radius: 1.25rem;
          margin: 3rem 0;
          box-shadow: 0 20px 40px -10px rgba(102, 126, 234, 0.3);
        }
        
        .blog-content :global(.highlight-box h3) {
          color: white;
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.25rem;
          font-weight: 700;
        }
        
        .blog-content :global(.highlight-box p) {
          color: rgba(255, 255, 255, 0.95);
          margin: 1rem 0;
          font-size: 1.1rem;
          line-height: 1.7;
        }
        
        .blog-content :global(.stats-grid) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }
        
        .blog-content :global(.stat-card) {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.12);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .blog-content :global(.stat-card::before) {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 0.25rem;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        }
        
        .blog-content :global(.stat-card:hover) {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
        }
        
        .blog-content :global(.stat-number) {
          font-size: 2.5rem;
          font-weight: 800;
          color: #3b82f6;
          display: block;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        
        .blog-content :global(.stat-label) {
          color: #6b7280;
          font-size: 0.95rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.4;
        }
        
        .blog-content :global(.info-box) {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          border: 1px solid #3b82f6;
          border-left: 0.4rem solid #3b82f6;
          padding: 2rem;
          border-radius: 0.75rem;
          margin: 2.5rem 0;
          box-shadow: 0 4px 12px -2px rgba(59, 130, 246, 0.15);
        }
        
        .blog-content :global(.info-box h3) {
          color: #1e40af;
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 700;
        }
        
        .blog-content :global(.info-box p) {
          color: #1e40af;
          margin: 0.75rem 0;
          font-size: 1.05rem;
        }
        
        .blog-content :global(.info-box li) {
          color: #1e40af;
          font-size: 1.05rem;
        }
        
        .blog-content :global(.success-box) {
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border: 1px solid #10b981;
          border-left: 0.4rem solid #10b981;
          padding: 2rem;
          border-radius: 0.75rem;
          margin: 2.5rem 0;
          box-shadow: 0 4px 12px -2px rgba(16, 185, 129, 0.15);
        }
        
        .blog-content :global(.success-box h3) {
          color: #065f46;
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 700;
        }
        
        .blog-content :global(.success-box p) {
          color: #065f46;
          margin: 0.75rem 0;
          font-size: 1.05rem;
        }
        
        .blog-content :global(.success-box li) {
          color: #065f46;
          font-size: 1.05rem;
        }
        
        .blog-content :global(.warning-box) {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 1px solid #f59e0b;
          border-left: 0.4rem solid #f59e0b;
          padding: 2rem;
          border-radius: 0.75rem;
          margin: 2.5rem 0;
          box-shadow: 0 4px 12px -2px rgba(245, 158, 11, 0.15);
        }
        
        .blog-content :global(.warning-box h3) {
          color: #92400e;
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 700;
        }
        
        .blog-content :global(.warning-box p) {
          color: #92400e;
          margin: 0.75rem 0;
          font-size: 1.05rem;
        }
        
        .blog-content :global(.warning-box li) {
          color: #92400e;
          font-size: 1.05rem;
        }
        
        .blog-content :global(.cta-section) {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          padding: 3.5rem;
          border-radius: 1.5rem;
          text-align: center;
          margin: 4rem 0;
          box-shadow: 0 25px 50px -10px rgba(59, 130, 246, 0.4);
        }
        
        .blog-content :global(.cta-section h2) {
          color: white;
          margin-top: 0;
          margin-bottom: 1.5rem;
          font-size: 2.25rem;
          font-weight: 800;
          border: none;
          padding: 0;
        }
        
        .blog-content :global(.cta-section p) {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 1rem 0;
        }
        
        .blog-content :global(.click-link) {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: #2563eb;
          font-weight: 500;
          background: #eff6ff;
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          text-decoration: none;
          border: 1px solid #bfdbfe;
          transition: all 0.2s ease;
        }
        
        .blog-content :global(.click-link:hover) {
          color: #1d4ed8;
          background: #dbeafe;
          border-color: #93c5fd;
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
          .blog-content {
            font-size: 14px;
          }
          
          .blog-content :global(h1) {
            font-size: 2rem;
            margin: 2.5rem 0 1.25rem 0;
          }
          
          .blog-content :global(h2) {
            font-size: 1.625rem;
            margin: 2rem 0 0.875rem 0;
            padding-left: 0.875rem;
            border-left-width: 0.25rem;
          }
          
          .blog-content :global(h3) {
            font-size: 1.25rem;
            margin: 1.75rem 0 0.75rem 0;
          }
          
          .blog-content :global(p) {
            font-size: 1rem;
            margin: 1.5rem 0;
            text-align: left;
          }
          
          .blog-content :global(ul li) {
            font-size: 1rem;
            margin: 1rem 0;
          }
          
          .blog-content :global(.stats-grid) {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            margin: 2rem 0;
          }
          
          .blog-content :global(.stat-number) {
            font-size: 2rem;
          }
          
          .blog-content :global(.highlight-box),
          .blog-content :global(.cta-section),
          .blog-content :global(.info-box),
          .blog-content :global(.success-box),
          .blog-content :global(.warning-box) {
            padding: 1.5rem;
            margin: 2rem 0;
          }
          
          .blog-content :global(.cta-section h2) {
            font-size: 1.875rem;
          }
        }
        
        @media (max-width: 480px) {
          .blog-content :global(h1) {
            font-size: 1.75rem;
          }
          
          .blog-content :global(h2) {
            font-size: 1.5rem;
            padding-left: 0.75rem;
            border-left-width: 0.2rem;
          }
          
          .blog-content :global(.highlight-box),
          .blog-content :global(.cta-section),
          .blog-content :global(.info-box),
          .blog-content :global(.success-box),
          .blog-content :global(.warning-box) {
            padding: 1.25rem;
            margin: 1.5rem 0;
          }
          
          .blog-content :global(.cta-section h2) {
            font-size: 1.625rem;
          }
        }
      `}</style>
      
      <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: processContent(content) }}
      />
    </>
  );
};