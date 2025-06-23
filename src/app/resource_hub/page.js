"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrialLessonTab } from "./components/TrialLessonTab";
import { WebinarTab } from "./components/WebinarTab";
import { BlogTab } from "./components/BlogTab";
import { FAQTab } from "./components/FAQTab";
import { ATARCalculatorTab } from "./components/ATARCalculatorTab";

// 将使用 useSearchParams 的逻辑分离到单独的组件中
function ResourceHubContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("trial");

  // 从 URL 参数获取标签
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['trial', 'webinar', 'faq', 'atar', 'blogs'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // 处理标签切换
  const handleTabChange = (value) => {
    setActiveTab(value);
    
    // 更新 URL 但不重新加载页面
    const newUrl = `/resource_hub?tab=${value}`;
    window.history.pushState(null, '', newUrl);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-background">
      <div className="w-full mt-8 lg:mt-0">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full gap-0">
          {/* Tab导航 - 响应式调整 */}
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full h-auto rounded-b-none gap-1 sm:gap-2 bg-background items-end">
            <TabsTrigger
              value="trial"
              className="py-3 lg:py-4 text-xs sm:text-sm lg:text-base rounded-t-xl lg:rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200"
            >
              <span className="hidden sm:inline">Trial Lesson</span>
              <span className="sm:hidden">Trial</span>
            </TabsTrigger>
            <TabsTrigger
              value="webinar"
              className="py-3 lg:py-4 text-xs sm:text-sm lg:text-base rounded-t-xl lg:rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200"
            >
              <span className="hidden sm:inline">Free Webinar</span>
              <span className="sm:hidden">Webinar</span>
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="py-3 lg:py-4 text-xs sm:text-sm lg:text-base rounded-t-xl lg:rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200"
            >
              FAQ
            </TabsTrigger>
            <TabsTrigger
              value="atar"
              className="py-3 lg:py-4 text-xs sm:text-sm lg:text-base rounded-t-xl lg:rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200 "
            >
              <span className="hidden sm:inline">ATAR Calculator</span>
              <span className="sm:hidden">ATAR</span>
            </TabsTrigger>
            <TabsTrigger
              value="blogs"
              className="py-3 lg:py-4 text-xs sm:text-sm lg:text-base rounded-t-xl lg:rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200 col-span-2 sm:col-span-2 lg:col-span-1"
            >
              Blogs
            </TabsTrigger>
          </TabsList>

          {/* 各Tab内容 */}
          {/* 试听课预约 */}
          <TabsContent value="trial">
            <TrialLessonTab />
          </TabsContent>

          {/* 在线研讨会 */}
          <TabsContent value="webinar">
            <WebinarTab />
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq">
            <FAQTab />
          </TabsContent>

          {/* ATAR计算器 */}
          <TabsContent value="atar">
            <ATARCalculatorTab />
          </TabsContent>

          {/* 博客文章 */}
          <TabsContent value="blogs">
            <BlogTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Loading fallback 组件 - 响应式调整
function ResourceHubLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-background">
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full h-auto rounded-b-none gap-1 sm:gap-2 bg-background items-end mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div 
              key={index}
              className="py-3 lg:py-4 rounded-t-xl lg:rounded-t-2xl rounded-b-none bg-gray-200 animate-pulse h-10 lg:h-12"
            />
          ))}
        </div>
        <div className="bg-white rounded-b-xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <div className="animate-pulse space-y-4">
            <div className="h-4 lg:h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-3 lg:h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 lg:h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 主组件
export default function ResourceHub() {
  return (
    <Suspense fallback={<ResourceHubLoading />}>
      <ResourceHubContent />
    </Suspense>
  );
}