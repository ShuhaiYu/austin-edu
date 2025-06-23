"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React from "react";
import { useContext, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import Image from "next/image";
import { Loader2 } from "lucide-react";

import { LangContext } from "@/app/layout";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  question: z.string().min(10, {
    message: "Question must be at least 10 characters.",
  }),
});

// 格式化答案内容的函数
const formatAnswer = (answer) => {
  // 处理加粗文本 **text** -> <strong>text</strong>
  let formatted = answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // 处理列表项 • item -> <li>item</li>
  const lines = formatted.split('\n');
  let inList = false;
  let result = [];
  
  for (let line of lines) {
    const trimmedLine = line.trim();
    
    if (trimmedLine.startsWith('•')) {
      if (!inList) {
        result.push('<ul class="list-disc list-inside space-y-2 mt-3">');
        inList = true;
      }
      const listItem = trimmedLine.substring(1).trim();
      result.push(`<li class="text-gray-700">${listItem}</li>`);
    } else {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      if (trimmedLine) {
        result.push(`<p class="text-gray-700 leading-relaxed">${trimmedLine}</p>`);
      }
    }
  }
  
  if (inList) {
    result.push('</ul>');
  }
  
  return result.join('');
};

// 默认的通用内容
const defaultContent = {
  en: {
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about our services, courses, and admission process. Can't find what you're looking for? Ask us directly using the contact form.",
    formTitle: "Ask Your Question",
    nameLabel: "Name",
    emailLabel: "Email",
    questionLabel: "Write Something",
    submitButton: "SEND REQUEST",
    submittingButton: "SENDING...",
    placeholders: {
      name: "Enter your name",
      email: "Enter your email",
      question: "Write your questions here...",
    },
    successMessage: "Question submitted successfully!",
    successDescription: "We'll get back to you as soon as possible.",
    errorMessage: "Failed to submit question",
    errorDescription: "Please try again later.",
    faqItems: [
      {
        question: "Which schools can you apply to?",
        answer:
          "We partner with renowned institutions in Australia, UK, USA, Canada and more.",
      },
      {
        question: "Are courses available online or offline?",
        answer:
          "We offer both in-person and online teaching formats for flexible learning.",
      },
      {
        question: "What about tuition and payment?",
        answer: "Fees vary depending on course type and program requirements.",
      },
    ],
  },
  zh: {
    title: "常见问题解答",
    description:
      "在这里找到关于我们的服务、课程和申请流程的常见问题答案。如果找不到您需要的信息，可以直接使用联系表单向我们提问。",
    formTitle: "提交你的问题",
    nameLabel: "姓名",
    emailLabel: "邮箱",
    questionLabel: "输入内容",
    submitButton: "发送请求",
    submittingButton: "发送中...",
    placeholders: {
      name: "请输入您的姓名",
      email: "请输入您的邮箱",
      question: "请在此输入您的问题...",
    },
    successMessage: "问题提交成功！",
    successDescription: "我们将尽快回复您。",
    errorMessage: "提交失败",
    errorDescription: "请稍后重试。",
    faqItems: [
      {
        question: "你们可以申请哪些学校？",
        answer: "我们与澳洲、英国、美国、加拿大等多所知名院校有合作。",
      },
      {
        question: "课程支持线上或线下吗？",
        answer: "提供线下和线上教学两种形式，灵活选择上课方式。",
      },
      {
        question: "学费和收费模式如何？",
        answer: "根据课程类型和申请项目不同，收费会有差异。",
      },
    ],
  },
};

export default function FAQ({ 
  customFaqItems = null, 
  customTitle = null, 
  customDescription = null,
  showContactForm = true 
}) {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 使用自定义内容或默认内容
  const content = defaultContent[lang];
  const {
    formTitle,
    nameLabel,
    emailLabel,
    questionLabel,
    submitButton,
    submittingButton,
    placeholders,
    successMessage,
    successDescription,
    errorMessage,
    errorDescription,
  } = content;
  
  // 使用传入的自定义内容或默认内容
  const title = customTitle || content.title;
  const description = customDescription || content.description;
  const faqItems = customFaqItems?.[lang] || content.faqItems;

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'faq-question',
          data: {
            name: values.name,
            email: values.email,
            question: values.question,
            timestamp: new Date().toISOString(),
            language: lang,
          }
        }),
      });

      if (response.ok) {
        toast.success(successMessage, {
          description: successDescription,
        });
        form.reset({
          name: "",
          email: "",
          question: "",
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(errorMessage, {
        description: errorDescription,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-16 relative">
      <div
        className="
          absolute top-0 right-0 z-0 pointer-events-none
          w-24 h-24       /* 手机：6rem */
          sm:w-32 sm:h-32 /* ≥640px：8rem */
         md:w-40 md:h-40 /* ≥768px：10rem */
        "
      >
        <Image
          src="/decoration/2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="container flex flex-col gap-8 relative z-10">
        {/* 标题部分 */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className={`grid grid-cols-1 gap-6 ${showContactForm ? 'lg:grid-cols-2' : ''}`}>
          {/* 左侧：FAQ */}
          <div className={`${showContactForm ? 'max-w-2xl mx-auto px-4 w-full' : 'max-w-4xl mx-auto px-4 w-full'}`}>
            <Accordion type="multiple" className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={`item-${index}`} value={`item-${index}`} className="border-b-0">
                  <AccordionTrigger className="bg-white border border-gray-200 px-6 py-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-left font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 px-6 py-4 bg-gray-50 rounded-lg">
                    <div 
                      className="space-y-3" 
                      dangerouslySetInnerHTML={{ 
                        __html: formatAnswer(item.answer) 
                      }} 
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* 右侧表单 - 粘性布局 */}
          {showContactForm && (
            <div className="lg:sticky lg:top-40 lg:self-start">
              <div className="bg-primary p-6 rounded-md shadow-sm space-y-4 max-h-[calc(100vh-3rem)] overflow-y-auto">
                <h3 className="text-xl font-semibold text-primary-foreground">
                  {formTitle}
                </h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {/* Name 字段 */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground">
                            {nameLabel} <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={placeholders.name}
                              className="bg-primary-foreground border-none focus-visible:ring-1 focus-visible:ring-primary"
                              disabled={isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    {/* Email 字段 */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground">
                            {emailLabel} <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={placeholders.email}
                              className="bg-primary-foreground border-none focus-visible:ring-1 focus-visible:ring-primary"
                              disabled={isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    {/* Question 字段 */}
                    <FormField
                      control={form.control}
                      name="question"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground">
                            {questionLabel}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              rows={4}
                              placeholder={placeholders.question}
                              className="bg-primary-foreground border-none focus-visible:ring-1 focus-visible:ring-primary resize-none"
                              disabled={isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-700 hover:bg-red-900 text-primary-foreground font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {submittingButton}
                        </>
                      ) : (
                        submitButton
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}