'use client';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#64B5F6] to-[#1976D2] text-white py-24">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <header className="mb-8">
            <h1 className="text-5xl font-bold mb-4 leading-tight text-white">
              حلول التنظيف <span className="text-yellow-300">الأذكى</span>
            </h1>
            <p className="text-lg leading-relaxed">
              خدمات تنظيف تعتمد على التكنولوجيا والتخصص لتوفير الوقت والجهد. هدفنا هو ضمان بيئة نظيفة وصحية لك ولعائلتك.
            </p>
          </header>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/966123456789" 
              className="bg-yellow-300 text-[#1976D2] py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
            >
              تواصل واتساب
            </a>
            <a 
              href="tel:+966123456789" 
              className="flex items-center text-white text-lg font-medium hover:underline"
            >
              اتصل بنا الآن
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <Image 
            src="/arabic white.avif" 
            alt="خدمة تنظيف مبتكرة" 
            width={600} 
            height={450} 
            className="rounded-lg shadow-xl"
          />
          <div className="absolute bottom-6 left-6 bg-yellow-300 text-[#1976D2] p-4 rounded-lg shadow-lg flex items-center">
            <CheckCircle className="w-8 h-8 mr-2" />
            <div>
              <p className="text-2xl font-bold">موثوقية عالية</p>
              <p className="text-sm">معايير عالمية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
