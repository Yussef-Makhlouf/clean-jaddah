'use client';

import { CheckCircle } from 'lucide-react'

export default function Features() {
  const features = [
    'فريق عمل مدرب ومحترف',
    'استخدام مواد تنظيف صديقة للبيئة',
    'ضمان الرضا 100%',
    'خدمة عملاء على مدار الساعة',
    'أسعار تنافسية',
    'تغطية تأمينية شاملة',
  ]

  return (
    <section id="features" className="py-20 bg-[#E3F2FD]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">لماذا تختارنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="text-[#1976D2] ml-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

