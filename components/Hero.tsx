'use client';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Star, Shield, Clock, ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-[#64B5F6] via-[#42A5F5] to-[#1976D2] text-white pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px] opacity-50"></div>
      
      {/* Curved shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <span className="bg-yellow-300/20 text-yellow-300 py-1 px-4 rounded-full text-sm font-medium inline-flex items-center">
                  <Star className="w-4 h-4 mr-1" /> خدمة تنظيف موثوقة
                </span>
              </div>
              <h1 
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              >
                <span className="block text-white">حلول التنظيف</span> 
                <span className="text-yellow-300 relative inline-block">
                  الاحترافية
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 138 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.26391C35.1552 2.59557 95.4747 0.88828 137 7" stroke="#FFC107" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-white md:text-xl leading-relaxed mb-6 max-w-xl">
                نقدم خدمات تنظيف احترافية في جدة باستخدام أحدث التقنيات والمعدات. نضمن لك بيئة نظيفة وصحية لمنزلك أو مكتبك بأسعار تنافسية وجودة عالية.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-yellow-300" />
                  <span>ضمان الجودة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-300" />
                  <span>خدمة 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span>فريق محترف</span>
                </div>
              </div>
            </header>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/966592425757" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                aria-label="تواصل معنا عبر واتساب"
              >
                احجز الآن
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </a>
              <a 
                href="tel:+966592425757" 
                className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 py-3 px-6 rounded-full text-lg font-medium transition duration-300 border border-white/20"
                aria-label="اتصل بنا الآن"
              >
                <Phone className="w-5 h-5" />
                اتصل بنا
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-4">
              <p className="text-sm text-blue-100">موثوق به من قبل:</p>
              <div className="flex gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-md">
                  <Image 
                    src="/sanitize.svg" 
                    alt="عميل موثوق" 
                    width={60} 
                    height={30} 
                    className="opacity-90"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-md">
                  <Image 
                    src="/sanitize.svg" 
                    alt="عميل موثوق" 
                    width={60} 
                    height={30} 
                    className="opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Main image with animation */}
              <div className="animate-float relative z-10">
                <Image 
                  src="/logo.avif" 
                  alt="خدمات تنظيف احترافية في جدة - شركة النظافة المثالية" 
                  width={650} 
                  height={500} 
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg z-20 animate-pulse-slow">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              
              {/* Feature badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl flex items-center gap-3 z-20 max-w-xs">
                <div className="bg-blue-100 p-3 rounded-full">
                  <CheckCircle className="w-8 h-8 text-[#1976D2]" />
                </div>
                <div>
                  <p className="text-lg font-bold">موثوقية عالية</p>
                  <p className="text-sm text-gray-600">معايير جودة عالمية</p>
                </div>
              </div>
              
              {/* Rating badge */}
              <div className="absolute top-1/4 -right-10 bg-white text-gray-900 py-2 px-4 rounded-lg shadow-lg flex items-center z-20">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="ml-1 text-sm font-medium">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick services section */}
      <div className="container mx-auto px-6 mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'تنظيف المنازل', icon: 'home-clean.svg', desc: 'خدمات تنظيف شاملة للمنازل والشقق' },
            { title: 'تنظيف المكاتب', icon: 'office-clean.svg', desc: 'خدمات احترافية للشركات والمكاتب' },
            { title: 'تنظيف السجاد', icon: 'carpet-clean.svg', desc: 'تنظيف عميق للسجاد والموكيت' },
            { title: 'تعقيم وتطهير', icon: 'sanitize.svg', desc: 'خدمات تعقيم وتطهير بمعايير عالمية' },
          ].map((service, index) => (
            <Link 
              href="/services" 
              key={index}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/30 p-3 rounded-lg group-hover:bg-blue-600/50 transition-colors">
                  <Image src={`/${service.icon}`} alt={service.title} width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-white">{service.title}</h3>
                  <p className="text-white text-sm">{service.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
