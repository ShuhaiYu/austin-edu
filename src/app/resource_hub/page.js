// app/resource-hub/page.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ConsultationTab } from "./components/ConsultationTab";
import { WebinarTab } from "./components/WebinarTab";
import FAQ from "@/components/FAQ";
import { BlogTab } from "./components/BlogTab";

export default function ResourceHub() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-background">
      <div className="w-full">
        
        <Tabs defaultValue="consultation" className="w-full gap-0">
          {/* Tab导航 */}
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-auto rounded-b-none gap-2 bg-background items-end">
            <TabsTrigger value="consultation" className="py-4 rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200">
              Free Consultation
            </TabsTrigger>
            <TabsTrigger value="trial" className="py-4 rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200">
              Trial Lesson
            </TabsTrigger>
            <TabsTrigger value="webinar" className="py-4 rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200">
              Free Webinar
            </TabsTrigger>
            <TabsTrigger value="atar" className="py-4 rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200">
              ATAR Calculator
            </TabsTrigger>
            <TabsTrigger value="blogs" className="py-4 rounded-t-2xl rounded-b-none bg-gray-300 text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:h-[calc(100%+4px)] transition-all duration-200">
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
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Book Trial Lesson</h2>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="space-y-6">
                  <Input placeholder="Select Subject" />
                  <Input placeholder="Preferred Time" type="time" />
                  <Button >Confirm Booking</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 在线研讨会 */}
          <TabsContent value="webinar">
            <WebinarTab />
          </TabsContent>

          {/* ATAR计算器 */}
          <TabsContent value="atar">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">ATAR Calculator</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input placeholder="English Score" type="number" />
                  <Input placeholder="Math Score" type="number" />
                  <Input placeholder="Science Score" type="number" />
                  <Input placeholder="Humanities Score" type="number" />
                </div>
                <div className="bg-muted rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Predicted ATAR
                    </p>
                    <div className="text-4xl font-bold mt-2">-</div>
                    <Button className="mt-6">Calculate</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 博客文章 */}
          <TabsContent value="blogs">
            <BlogTab />
          </TabsContent>
        </Tabs>
        <FAQ />
      </div>
      
    </div>
  );
}
