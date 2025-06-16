"use client";

import { useContext, useEffect } from "react";
import { LangContext } from "@/app/layout";
import { contactUsContent } from "./contact_us_content";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import FAQ from "@/components/FAQ";
import { contactUsFaqItems } from "@/data/faq_content";
import { ConsultationTab } from "../resource_hub/components/ConsultationTab";

export default function ContactPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = contactUsContent[lang];

  useEffect(() => {
    // 处理URL中的锚点，让目标元素在屏幕中间显示
    const handleAnchorScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // 延迟执行，确保页面渲染完成
        setTimeout(() => {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            // 计算让元素在屏幕中间的位置
            const elementTop = targetElement.offsetTop;
            const elementHeight = targetElement.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // 计算滚动位置：元素顶部 - (窗口高度 - 元素高度) / 2
            const scrollPosition = elementTop - (windowHeight - elementHeight) / 2;
            
            // 平滑滚动到计算的位置
            window.scrollTo({
              top: Math.max(0, scrollPosition), // 确保不会滚动到负数位置
              behavior: 'smooth'
            });
          }
        }, 100); // 延迟100ms执行
      }
    };

    // 页面加载时检查锚点
    handleAnchorScroll();
    
    // 监听hashchange事件（当用户点击锚点链接时）
    window.addEventListener('hashchange', handleAnchorScroll);
    
    // 监听页面内锚点点击事件
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const hash = target.getAttribute('href');
        
        // 更新URL但不触发默认滚动
        window.history.pushState(null, null, hash);
        
        // 使用我们的自定义滚动逻辑
        setTimeout(() => {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            const elementTop = targetElement.offsetTop;
            const elementHeight = targetElement.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = elementTop - (windowHeight - elementHeight) / 2;
            
            window.scrollTo({
              top: Math.max(0, scrollPosition),
              behavior: 'smooth'
            });
          }
        }, 50);
      }
    };
    
    // 监听整个文档的点击事件
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      window.removeEventListener('hashchange', handleAnchorScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="rounded-xl p-8 ">
      <ConsultationTab />

      {/* 校区信息卡片部分 - 添加锚点 */}
      <section id="campuses" className="mt-16 space-y-12">
        <h2 className="text-4xl font-bold lg:text-5xl md:text-4xl sm:text-3xl">
          {t.contactUsTitle}
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {contactUsContent[lang].contactUs.map((campus, index) => {
            // 根据校区名称生成对应的锚点ID
            const getAnchorId = (campusTitle) => {
              if (campusTitle.includes("Box Hill")) return "box-hill";
              if (campusTitle.includes("Mount Waverley")) return "mount-waverley";
              if (campusTitle.includes("CBD")) return "cbd";
              if (campusTitle.includes("Point Cook")) return "point-cook";
              if (campusTitle.includes("Adelaide")) return "adelaide";
              return `campus-${index}`;
            };

            return (
              <div
                key={index}
                id={getAnchorId(campus.title)} // 为每个校区添加锚点
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-visible relative transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* QR Code - 响应式定位 */}
                  <div className="md:w-[200px] lg:w-[240px] relative md:-left-16 lg:-left-20 -top-8 md:-top-0 mx-auto md:mx-0">
                    <Image
                      src={campus.QRCode}
                      width={600}
                      height={600}
                      alt={`QR Code - ${campus.title}`}
                      className="rounded-lg shadow-xl w-[140px] md:w-full"
                    />
                  </div>

                  {/* 内容区域 */}
                  <div className="flex-1 flex flex-col lg:flex-row gap-6 md:gap-8">
                    {/* 左侧校区信息 - 响应式宽度 */}
                    <div className="lg:w-1/4 xl:w-1/3 space-y-4">
                      <h3 className="text-xl lg:text-2xl font-bold">
                        {campus.title}
                        <span className="block mt-2 text-sm lg:text-base text-muted-foreground">
                          {campus.subtitle}
                        </span>
                      </h3>

                      <div className="space-y-3 text-sm lg:text-base">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="break-words">{campus.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          <span className="break-all">{campus.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* 右侧联系方式 - 响应式网格 */}
                    <div className="lg:w-3/4 xl:w-2/3 overflow-x-auto pb-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-w-[300px] gap-6 md:gap-8">
                        {campus.about.map((grade, gradeIndex) => (
                          <div key={gradeIndex}>
                            <h4 className="text-base lg:text-lg font-semibold mb-3">
                              {grade.title}
                            </h4>
                            <div className="space-y-2 text-sm lg:text-base">
                              {grade.phone.map((num, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <Phone className="w-4 h-4" />
                                  <span>{num}</span>
                                </div>
                              ))}
                              <div className="flex items-center gap-2">
                                {grade.we_chat && (
                                  <>
                                    <Image
                                      src="/contact_us/wechat.svg"
                                      alt="WeChat"
                                      width={16}
                                      height={16}
                                    />
                                    <span>{grade.we_chat}</span>
                                  </>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                {grade.whatsapp && (
                                  <>
                                    <Image
                                      src="/contact_us/whatsapp.svg"
                                      alt="WhatsApp"
                                      width={16}
                                      height={16}
                                    />
                                    <span>{grade.whatsapp}</span>
                                  </>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                {grade.discord && (
                                  <>
                                    <Image
                                      src="/contact_us/discord.svg"
                                      alt="Discord"
                                      width={16}
                                      height={16}
                                    />
                                    <span>{grade.discord}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center my-32 space-x-4">
          <h2 className="text-4xl font-bold">{t.OtherMethods}</h2>
          <Image
            src="/contact_us/instagram.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            className="inline-block"
          />
          <Image
            src="/contact_us/facebook.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            className="inline-block"
          />
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#FF2442"
          >
            <title>Xiaohongshu</title>
            <path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972.794.794 0 0 0-.884-.618.795.795 0 0 0-.692.794c0 .101-.002.666.001.777zm-11.509 4.808c-.203.001-1.353.004-1.685.003a2.528 2.528 0 0 1-.766-.126.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124.66.01 1.32.002 1.981 0 .01 0 .02-.006.023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01a.834.834 0 0 0-.01.08c-.027.397-.038.495-.234 3.06-.012.24-.034.389-.135.607-.026.057-.033.042.003.112.046.092.681 1.523.787 1.74.008.015.011.02.017.02.008 0 .033-.026.047-.044.147-.187.268-.391.371-.606.306-.635.44-1.325.486-1.706.014-.11.021-.22.03-.33l.204-2.616.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.427 1.427 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.443.443 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293c.076.982.153 1.964.233 2.946.05.4.186 1.085.487 1.706.103.215.223.419.37.606.015.018.037.051.048.049.02-.003.742-1.642.804-1.765.036-.07.03-.055.003-.112zm3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56c-.01 0-.02.006-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.534.534 0 0 0-.02.191.46.46 0 0 0 .23.378.981.981 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.53.53 0 0 0-.023.172.465.465 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001c.01 0 .02-.006.023-.015l.575-1.28a.025.025 0 0 0-.024-.035zm-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829 0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047.001.037.465 1.064.555 1.263.01.02.03.033.051.033.157.003.767.009.938-.014.153-.02.3-.06.438-.132.3-.156.49-.419.595-.765.052-.172.075-.353.075-.533.002-2.33 0-4.66-.007-6.991a.032.032 0 0 0-.032-.032zm11.784 6.896c0-.014-.01-.021-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084-.37 0-1.11-.002-1.304 0-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036c.006.01.013.008.058.008 1.748.003 3.495.002 5.243.002.03-.001.034-.006.035-.033v-1.539zm4.177-3.43c0 .013-.007.023-.02.024-.346.006-.692.004-1.037.004-.014-.002-.022-.01-.022-.024-.005-.434-.007-.869-.01-1.303 0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015.093.025.16.107.165.204.006.431.002 1.153.001 1.153zm2.67.244a1.953 1.953 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21c0-.132-.007-.263-.025-.394a1.823 1.823 0 0 0-.153-.53 1.533 1.533 0 0 0-.677-.71 2.167 2.167 0 0 0-1-.258c-.153-.003-.567 0-.72 0-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007c-.006.006-.008.012-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128V11.19s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003c.098 0 .191.02.28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185 0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033.184.437.374.871.57 1.303a.045.045 0 0 0 .04.026c.17.005.34.002.51.003.15-.002.517.004.666-.01a2.03 2.03 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981c0-.128-.01-.254-.034-.38 0 .078-.029-.641-.724-.998z" />
          </svg>
          <Image
            src="/contact_us/youtube.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            className="inline-block"
          />
        </div>
      </section>

      <FAQ customFaqItems={contactUsFaqItems} />
    </div>
  );
}