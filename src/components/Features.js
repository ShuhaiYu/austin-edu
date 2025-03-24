import React from 'react'
import { Card } from '@/components/ui/card'

export default function Features() {
  const features = [
    { title: '名师团队', desc: '资深教师团队和留学顾问...' },
    { title: '全面课程', desc: '涵盖VCE、A-level、IB...' },
    { title: '硬件设施完善', desc: '配备现代化教室与线上...' },
  ]
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Why Choose Austin
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {features.map((feat) => (
          <Card key={feat.title} className="p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">
              {feat.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{feat.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
