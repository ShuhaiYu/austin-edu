// app/resource-hub/page.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResourceHub() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-background">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Learning Resources Center</h1>

        <Tabs defaultValue="consultation" className="w-full">
          {/* Tab导航 */}
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-auto mb-8">
            <TabsTrigger value="consultation" className="py-4">
              Free Consultation
            </TabsTrigger>
            <TabsTrigger value="trial" className="py-4">
              Trial Lesson
            </TabsTrigger>
            <TabsTrigger value="webinar" className="py-4">
              Free Webinar
            </TabsTrigger>
            <TabsTrigger value="atar" className="py-4">
              ATAR Calculator
            </TabsTrigger>
            <TabsTrigger value="blogs" className="py-4">
              Blogs
            </TabsTrigger>
          </TabsList>

          {/* 各Tab内容 */}
          {/* 免费咨询 */}
          <TabsContent value="consultation">
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">
                Book Free Consultation
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Student Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Preferred Date" type="date" />
                <div className="md:col-span-2">
                  <textarea
                    className="w-full p-3 rounded-lg border"
                    rows={4}
                    placeholder="Additional Notes"
                  />
                </div>
                <Button className="md:col-span-2">Submit Request</Button>
              </form>
            </div>
          </TabsContent>

          {/* 试听课预约 */}
          <TabsContent value="trial">
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Book Trial Lesson</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Input placeholder="Select Subject" />
                  <Input placeholder="Preferred Time" type="time" />
                  <Button className="w-full">Confirm Booking</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 在线研讨会 */}
          <TabsContent value="webinar">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="aspect-video bg-muted rounded-lg mb-4" />
                  <h3 className="font-bold text-lg mb-2">
                    VCE Preparation Webinar
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Wed, 25 Sep 2024 · 7:00 PM AEST
                  </p>
                  <Button className="w-full">Register Now</Button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* ATAR计算器 */}
          <TabsContent value="atar">
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">ATAR Calculator</h2>
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
            <div className="grid gap-6">
              {[1, 2, 3].map((item) => (
                <article
                  key={item}
                  className="bg-card rounded-xl p-6 shadow-lg"
                >
                  <div className="flex gap-6">
                    <div className="w-32 h-32 bg-muted rounded-lg flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        How to Prepare for VCE Exams
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        Essential strategies and tips for VCE exam success...
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Sep 15, 2024</span>
                        <Button variant="link" className="ml-auto">
                          Read More →
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
