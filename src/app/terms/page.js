// app/terms/page.jsx
"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const termsContent = {
  en: {
    title: "Terms & Conditions",
    backButton: "Back to Home",
    lastUpdated: "Last updated: June 2025",
    sections: [
      {
        title: "Terms & Conditions",
        content: `Welcome to the official website of Austin Education ("this Website"). By using this Website, you agree to be bound by the following terms and conditions:`
      },
      {
        title: "1. Website Usage",
        content: `By accessing and browsing this Website, you agree to comply with these Terms & Conditions. If you do not agree, please refrain from using the site.`
      },
      {
        title: "2. Intellectual Property",
        content: `All content on this Website, including but not limited to text, images, graphics, videos, and course materials, is the property of Austin Education or its licensors. No part of this content may be copied, distributed, or used for commercial purposes without written permission.`
      },
      {
        title: "3. Accuracy of Information",
        content: `While we strive to ensure the information on our site is accurate and up-to-date, we do not guarantee its completeness or accuracy. Course offerings, schedules, and fees are subject to change without prior notice.`
      },
      {
        title: "4. Acceptable Use",
        content: `You must not post or transmit any unlawful, defamatory, infringing, or misleading content on this Website. Austin Education reserves the right to take legal action in response to any misuse.`
      },
      {
        title: "Privacy Notice",
        content: `Austin Education is committed to protecting your privacy and handling your personal information responsibly.`
      },
      {
        title: "1. What We Collect & How We Use It",
        content: `When you submit an inquiry, sign up, or complete a contact form, we may collect personal information such as your name, email address, and phone number. This information is used solely for the purposes of:
        
• Contacting you about your inquiry or course interest
• Providing personalised study advice and program recommendations  
• Sending course updates or promotional information (only when consent is given)

We do not sell or share your personal data with any unauthorised third parties.`
      },
      {
        title: "2. Data Protection",
        content: `We implement reasonable technical and administrative safeguards to protect your information from unauthorised access, disclosure, or alteration.`
      },
      {
        title: "3. Data Retention",
        content: `Your information may be stored in our secure database for future communication and service follow-up. You may request to update or delete your data at any time by contacting us.`
      },
      {
        title: "Contact Information",
        content: `📩 For any questions about these terms or your data, please contact us at `,
        hasLinks: true
      }
    ],
    contactQuestion: "Questions about these terms?",
    contactText: `If you have any questions about these Terms & Conditions or our Privacy Policy, please don't hesitate to contact us at `
  },
  zh: {
    title: "条款声明",
    backButton: "返回首页",
    lastUpdated: "最后更新：2025年6月",
    sections: [
      {
        title: "条款声明",
        content: `欢迎访问 Austin Education 官方网站（以下简称"本网站"）。在您使用本网站提供的服务前，请务必仔细阅读以下条款：`
      },
      {
        title: "1. 使用须知",
        content: `通过访问或使用本网站，即表示您同意遵守本使用条款。如果您不同意，请勿继续浏览或使用本网站。`
      },
      {
        title: "2. 内容版权",
        content: `本网站所有内容（包括但不限于文字、图片、图表、音视频资料、课程信息等）均为 Austin Education 所有或已获合法授权。未经授权，不得以任何形式复制、传播或用于商业用途。`
      },
      {
        title: "3. 信息准确性",
        content: `我们致力于确保网站信息准确和及时更新，但不对所有信息的完整性或实时性承担法律责任。课程安排、费用、开课时间等如有变动，恕不另行通知。`
      },
      {
        title: "4. 用户行为",
        content: `用户不得在本网站上传或传播任何违法、骚扰、侵权或不真实的内容。Austin Education 保留对任何不当行为采取法律行动的权利。`
      },
      {
        title: "隐私声明",
        content: `我们尊重并重视您的隐私权。为了更好地为您提供服务，您在填写表单或咨询过程中，可能需要提供个人信息（如姓名、联系方式、邮箱等）。请您放心，我们承诺如下：`
      },
      {
        title: "1. 信息收集与使用",
        content: `所收集的信息将仅用于以下目的：

• 与您进行课程咨询、报名沟通
• 提供学习建议和个性化课程推荐
• 向您发送相关课程信息与更新

我们绝不会将您的信息出售或泄露给任何未经授权的第三方。`
      },
      {
        title: "2. 信息保护",
        content: `我们采用合理的安全措施保护您的信息不被未经授权访问、泄露或更改。`
      },
      {
        title: "3. 信息存储",
        content: `我们可能会将您提交的信息保存在我们的客户数据库中，用于未来服务联系与回访。如您希望我们删除您的信息，可随时与我们联系。`
      },
      {
        title: "联系方式",
        content: `📩 如您对条款有任何疑问，请联系 `,
        hasLinks: true
      }
    ],
    contactQuestion: "对条款有疑问？",
    contactText: `如果您对本条款或隐私政策有任何疑问，请随时联系我们：`
  }
};

export default function TermsPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = termsContent[lang];

  return (
    <div className="min-h-screen">
      {/* 主要内容 */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-gray-600 text-sm">
              {content.lastUpdated}
            </p>
          </div>

          {/* 条款内容 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold text-primary">
                    {section.title}
                  </h2>
                  
                  {section.hasLinks ? (
                    <div className="text-gray-700 leading-relaxed">
                      {section.content}
                      <a 
                        href="mailto:rachelle@austinedu.com.au" 
                        className="text-primary hover:text-primary/80 underline font-semibold"
                      >
                        rachelle@austinedu.com.au
                      </a>
                      {lang === "en" ? " or call one of our campus numbers listed on the " : " 或拨打我们在"}
                      <Link 
                        href="/contact_us" 
                        className="text-primary hover:text-primary/80 underline font-semibold"
                      >
                        {lang === "en" ? "Contact page" : "联系我们页面"}
                      </Link>
                      {lang === "en" ? "." : "列出的客服电话。"}
                    </div>
                  ) : (
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  )}
                  
                  {/* 分隔线 - 除了最后一个section */}
                  {index < content.sections.length - 1 && (
                    <hr className="border-gray-200 my-8" />
                  )}
                </div>
              ))}
            </div>

            {/* 底部联系信息强调 */}
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    {content.contactQuestion}
                  </h3>
                  <div className="text-blue-800 text-sm">
                    {content.contactText}
                    <a 
                      href="mailto:rachelle@austinedu.com.au" 
                      className="text-primary hover:text-primary/80 underline font-semibold"
                    >
                      rachelle@austinedu.com.au
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 返回按钮 */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {content.backButton}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}