"use client";

import Image from 'next/image';
import { ArrowRight, Sparkles, Clock, Star, CheckCircle, ShieldCheck, LucideMessageCircleDashed } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'تنظيف المنازل الفاخرة',
    description: 'خدمة تنظيف شاملة للمنازل مع عناية خاصة بالتفاصيل الدقيقة والمناطق الصعبة',
    image: '/images/blog/home-disinfection.png',
    price: 'تبدأ من 299 ريال',
    duration: '3-5 ساعات',
    rating: 4.9,
    reviews: 124,
    features: ['تنظيف عميق للأرضيات والسجاد', 'تعقيم شامل للحمامات والمطابخ', 'تعطير المكان بروائح فاخرة', 'تلميع الأثاث والأسطح الخشبية'],
    benefits: ['مواد تنظيف صديقة للبيئة', 'فريق عمل مدرب ومحترف', 'ضمان الجودة لمدة 48 ساعة'],
    badge: 'الأكثر طلباً'
  },
  {
    title: 'تنظيف القصور والفلل',
    description: 'خدمات احترافية متكاملة للقصور والفلل الكبيرة مع اهتمام خاص بالمساحات الواسعة',
    image: '/images/blog/professional-cleaning.png',
    price: 'تبدأ من 599 ريال',
    duration: '6-8 ساعات',
    rating: 4.8,
    reviews: 87,
    features: ['تنظيف الواجهات الخارجية والنوافذ', 'تنظيف وتعقيم المسابح', 'تنظيف وتنسيق الحدائق', 'تلميع الرخام والأرضيات الفاخرة'],
    benefits: ['فريق متخصص للمساحات الكبيرة', 'معدات حديثة للأماكن المرتفعة', 'خطة تنظيف مخصصة لكل عميل'],
    badge: 'خدمة فاخرة'
  },
  {
    title: 'تنظيف المجمعات السكنية',
    description: 'حلول تنظيف متكاملة للمجمعات السكنية والمباني مع التركيز على المناطق المشتركة',
    image: '/images/blog/spring-cleaning-tips.jpg',
    price: 'تبدأ من 999 ريال',
    duration: 'يوم كامل',
    rating: 4.7,
    reviews: 56,
    features: ['تنظيف المرافق العامة والممرات', 'تعقيم المداخل ومناطق الانتظار', 'تنظيف وصيانة المصاعد', 'العناية بالمساحات الخضراء والحدائق'],
    benefits: ['جدولة منتظمة للصيانة', 'تقارير دورية للإدارة', 'فريق عمل ثابت للمجمع'],
    badge: 'عقود سنوية'
  },
  {
    title: 'تنظيف المكاتب والشركات',
    description: 'خدمات تنظيف احترافية للمكاتب والشركات تضمن بيئة عمل صحية ومنتجة',
    image: '/images/blog/eco-friendly-cleaning-solutions.png',
    price: 'تبدأ من 499 ريال',
    duration: '4-6 ساعات',
    rating: 4.9,
    reviews: 92,
    features: ['تنظيف وتعقيم أماكن العمل', 'تنظيف الأثاث المكتبي والكراسي', 'تنظيف النوافذ والواجهات الزجاجية', 'تنظيف وتعقيم المطابخ وغرف الاجتماعات'],
    benefits: ['خدمات مسائية بعد ساعات العمل', 'مواد تنظيف غير ضارة بالأجهزة', 'عقود شهرية مرنة'],
    badge: 'توفر ليلاً'
  },
  {
    title: 'تنظيف المطاعم والمطابخ',
    description: 'خدمات تنظيف متخصصة للمطاعم والمطابخ تلبي معايير النظافة والسلامة الغذائية',
    image: '/images/blog/spring-cleaning-tips.jpg',
    price: 'تبدأ من 799 ريال',
    duration: '5-7 ساعات',
    rating: 4.8,
    reviews: 73,
    features: ['تنظيف عميق لمعدات المطبخ', 'إزالة الدهون والشحوم', 'تعقيم أسطح تحضير الطعام', 'تنظيف مناطق تناول الطعام'],
    benefits: ['مواد تنظيف آمنة للاستخدام الغذائي', 'فريق متخصص في المطابخ التجارية', 'شهادة نظافة معتمدة'],
    badge: 'معتمد صحياً'
  }
];
export default function FeaturedServices() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#E3F2FD] via-white to-[#BBDEFB] relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-50/50 to-transparent"></div>
      <div className="absolute top-20 right-10 w-24 h-24 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-[#1976D2] w-6 h-6" />
          <h2 className="text-lg font-medium text-[#1976D2]">خدماتنا المميزة</h2>
        </div>
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-6">
          اختر الخدمة المناسبة لك
        </h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          نقدم خدمات تنظيف احترافية مصممة خصيصاً لتلبية احتياجاتك بأعلى معايير الجودة والاحترافية
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 bg-[#1976D2] text-white px-4 py-1 rounded-full z-30 font-bold text-sm shadow-lg">
                  {service.badge}
                </div>
              )}
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 to-transparent z-10" />
              <div className="relative h-[250px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full z-20 shadow-md">
                  <span className="text-[#1976D2] font-bold">{service.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-20 p-6 -mt-10">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-white/80 ml-1" />
                    <span className="text-white/90 text-sm">{service.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 ml-1" />
                    <span className="text-white/90 text-sm">{service.rating} ({service.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#1976D2] ml-2" />
                    <span>مميزات الخدمة</span>
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-[#1976D2] rounded-full ml-3 mt-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-blue-50 rounded-xl p-4 mb-6">
                    <h4 className="text-md font-bold text-[#1976D2] mb-3 flex items-center">
                      <ShieldCheck className="w-5 h-5 text-[#1976D2] ml-2" />
                      <span>ما يميزنا</span>
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="w-1.5 h-1.5 bg-[#1976D2] rounded-full ml-3 mt-2" />
                          <span className="text-xs">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <a 
                      href="tel:+966592425077" 
                      className="w-full bg-[#1976D2] text-white py-3 rounded-xl flex items-center justify-center group-hover:bg-[#1565C0] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <span className="font-semibold text-white ml-2">احجز الآن</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white duration-300" />
                    </a>
                    <Link 
                      href="https://wa.me/966592425077" 
                      className="w-full bg-green-500 px-3 text-white border border-green-500 py-2 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-green-500 text-sm"
                    >
                       واتساب

                       <LucideMessageCircleDashed className="w-5 h-5  group-hover:translate-x-1 transition-transform text-white duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
