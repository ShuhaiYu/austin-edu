import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export default function FAQ() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-gray-100">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto px-4">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>你们可以申请哪些学校？</AccordionTrigger>
            <AccordionContent>
              我们与澳洲、英国、美国、加拿大等多所知名院校有合作。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>课程支持线上或线下吗？</AccordionTrigger>
            <AccordionContent>
              提供线下和线上教学两种形式，灵活选择上课方式。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>学费和收费模式如何？</AccordionTrigger>
            <AccordionContent>
              根据课程类型和申请项目不同，收费会有差异。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
