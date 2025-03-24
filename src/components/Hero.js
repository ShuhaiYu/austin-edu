import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight dark:text-gray-100">
            Melbourne Leading <br />
            <span className="text-brand-blue">All-in-One</span> Tutorial Service
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            我们为 VCE / A-level / IB 学生提供高质量的辅导课程...
          </p>
          <Button>Get Started</Button>
        </div>
        {/* Right */}
        <div className="flex-1 flex gap-4">
          <div className="w-1/2">
            <Image
              src="/hero1.jpg" // 替换成 public/hero1.jpg
              alt="Hero1"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="w-1/2">
            <Image
              src="/hero2.jpg"
              alt="Hero2"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
