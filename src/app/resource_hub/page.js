// app/resource-hub/page.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrialLessonTab } from "./components/TrialLessonTab";
import { WebinarTab } from "./components/WebinarTab";
import FAQ from "@/components/FAQ";
import { BlogTab } from "./components/BlogTab";
import { ConsultationTab } from "./components/ConsultationTab";
import { ATARCalculatorTab } from "./components/ATARCalculatorTab";

export default function ResourceHub() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-background">
      <div className="w-full">
        <Tabs defaultValue="consultation" className="w-full gap-0">
          {/* Tab导航 */}
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-auto rounded-b-none gap-2 bg-background items-end">
            <TabsTrigger
              value="consultation"
              className="py-4 rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200"
            >
              Free Consultation
            </TabsTrigger>
            <TabsTrigger
              value="trial"
              className="py-4 rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200"
            >
              Trial Lesson
            </TabsTrigger>
            <TabsTrigger
              value="webinar"
              className="py-4 rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200"
            >
              Free Webinar
            </TabsTrigger>
            <TabsTrigger
              value="atar"
              className="py-4 rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200"
            >
              ATAR Calculator
            </TabsTrigger>
            <TabsTrigger
              value="blogs"
              className="py-4 rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200"
            >
              Blogs
            </TabsTrigger>
          </TabsList>

          {/* 各Tab内容 */}
          {/* 免费咨询 */}
          <TabsContent value="consultation">
            <ConsultationTab />
          </TabsContent>

          {/* 试听课预约 */}
          <TabsContent value="trial">
            <TrialLessonTab />
          </TabsContent>

          {/* 在线研讨会 */}
          <TabsContent value="webinar">
            <WebinarTab />
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
