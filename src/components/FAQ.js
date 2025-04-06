"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React from "react";
import { useContext } from "react";
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

const content = {
  en: {
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about our services, courses, and admission process. Can't find what you're looking for? Ask us directly using the contact form.",
    formTitle: "Ask Your Question",
    nameLabel: "Name",
    emailLabel: "Email",
    questionLabel: "Write Something",
    submitButton: "SEND REQUEST",
    placeholders: {
      name: "Enter your name",
      email: "Enter your email",
      question: "Write your questions here...",
    },
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
    placeholders: {
      name: "请输入您的姓名",
      email: "请输入您的邮箱",
      question: "请在此输入您的问题...",
    },
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

export default function FAQ() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const {
    title,
    description,
    formTitle,
    nameLabel,
    emailLabel,
    questionLabel,
    submitButton,
    placeholders,
    faqItems,
  } = content[lang];

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });

  function onSubmit() {
    toast.success("Question submitted successfully!", {
      description: "We'll respond to you within 24 hours.",
    });
    form.reset({
      name: "",
      email: "",
      question: "",
    });
  }

  return (
    <section className="py-16 ">
      <div className="container flex flex-col gap-8">
        {/* 标题部分 */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold ">{title}</h2>
          <p className="  max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* 左侧：FAQ */}
          <div className="max-w-2xl mx-auto px-4 w-full">
            <Accordion type="multiple" className="space-y-4 ">
              {faqItems.map((item, index) => (
                <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* 右侧表单 */}
          <div className="bg-primary p-6 rounded-md shadow-sm space-y-4">
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
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                {/* 其他表单字段类似修改 */}
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
                          className="bg-primary-foreground border-none focus-visible:ring-1 focus-visible:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-900 text-primary-foreground font-semibold"
                >
                  {submitButton}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
