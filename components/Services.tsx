"use client";

import { Home, Building2, CarIcon as Carpet, AppWindowIcon as WindowIcon, HardHat, SprayCanIcon as Spray, CheckCircle, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'تنظيف المنازل',
    description: 'خدمة شاملة لتنظيف جميع أنحاء منزلك بأعلى معايير الجودة والنظافة',
    icon: Home,
    duration: '3-5 ساعات',
    price: 'تبدأ من 299 ريال',
    features: ['تنظيف جميع الغرف', 'تنظيف المطبخ والحمامات', 'تنظيف الأرضيات والسجاد', 'إزالة الغبار من الأثاث'],
    popular: true,
    slug: '/services/home-cleaning'
  },
  {
    title: 'تنظيف المكاتب',
    description: 'خدمات احترافية لتنظيف مكاتب الشركات وتوفير بيئة عمل صحية ومريحة',
    icon: Building2,
    duration: '4-6 ساعات',
    price: 'تبدأ من 499 ريال',
    features: ['تنظيف المكاتب والمساحات المشتركة', 'تنظيف الزجاج والنوافذ', 'تنظيف المطابخ وغرف الاجتماعات', 'تعقيم الأسطح المشتركة'],
    popular: false,
    slug: '/services/office-cleaning'
  },
  {
    title: 'تنظيف السجاد',
    description: 'تنظيف عميق وتعقيم للسجاد والموكيت باستخدام أحدث التقنيات والمعدات',
    icon: Carpet,
    duration: '2-4 ساعات',
    price: 'تبدأ من 199 ريال',
    features: ['إزالة البقع الصعبة', 'تنظيف بالبخار', 'إزالة الروائح الكريهة', 'تجفيف سريع'],
    popular: true,
    slug: '/services/carpet-cleaning'
  },
  {
    title: 'تنظيف النوافذ',
    description: 'تنظيف وتلميع النوافذ والواجهات الزجاجية للمنازل والمباني التجارية',
    icon: WindowIcon,
    duration: '3-5 ساعات',
    price: 'تبدأ من 249 ريال',
    features: ['تنظيف النوافذ الداخلية والخارجية', 'تلميع الزجاج بدون خطوط', 'تنظيف الإطارات والمسارات', 'معدات متخصصة للأماكن المرتفعة'],
    popular: false,
    slug: '/services/window-cleaning'
  },
  {
    title: 'تنظيف ما بعد البناء',
    description: 'إزالة مخلفات البناء وتنظيف المواقع بعد انتهاء أعمال البناء أو الترميم',
    icon: HardHat,
    duration: 'يوم كامل',
    price: 'تبدأ من 899 ريال',
    features: ['إزالة بقايا الدهانات والغبار', 'تنظيف الأرضيات من مخلفات البناء', 'تنظيف النوافذ والأبواب', 'تنظيف المرافق الصحية'],
    popular: false,
    slug: '/services/post-construction'
  },
  {
    title: 'تنظيف وتعقيم',
    description: 'خدمات تعقيم شاملة للحماية من الجراثيم والفيروسات وضمان بيئة صحية',
    icon: Spray,
    duration: '2-3 ساعات',
    price: 'تبدأ من 349 ريال',
    features: ['تعقيم الأسطح عالية اللمس', 'رش مبيدات آمنة للأطفال والحيوانات', 'تطهير الحمامات والمطابخ', 'استخدام مواد معتمدة صحياً'],
    popular: true,
    slug: '/services/disinfection'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#E3F2FD]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#1976D2]">خدماتنا</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          مجموعة متكاملة من خدمات التنظيف المتخصصة لتلبية جميع احتياجاتك بأعلى مستويات الجودة
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`
                  relative p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2
                  ${index % 2 === 0 ? 'bg-white' : 'bg-[#E3F2FD]/70'}
                  ${index % 3 === 1 ? 'md:transform md:translate-y-8' : ''}
                  border border-blue-100
                `}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-[#1976D2] text-white px-3 py-1 rounded-full text-xs font-bold">
                    الأكثر طلباً
                  </div>
                )}

                {/* Service icon and title */}
                <div className="flex items-center mb-5">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <Icon className="w-8 h-8 text-[#1976D2]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>

                {/* Service details */}
                <div className="mb-5">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                  {/* Service metadata */}
                  <div className="flex justify-between items-center mb-5 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 ml-1 text-[#1976D2]" />
                      <span>{service.duration}</span>
                    </div>
              
                  </div>

                  {/* Service features */}
                  <div className="bg-white/80 rounded-xl p-4 mb-6 shadow-sm">
                    <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#1976D2] ml-2" />
                      <span>تشمل الخدمة</span>
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="w-1.5 h-1.5 bg-[#1976D2] rounded-full ml-2 mt-2" />
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to action */}
                <div className="flex space-x-2 space-x-reverse">
                  <Link
                    href={service.slug}
                    className="flex-1 bg-[#1976D2] text-white py-3 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#1565C0] text-sm font-bold"
                  >
                    <span className="ml-1">تفاصيل أكثر</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+966592425077"
                    className="flex-1 bg-white text-[#1976D2] border border-[#1976D2] py-3 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-blue-50 text-sm"
                  >
                    اتصل بنا
                  </a>
                </div>
              </div>

            )
          })}
  

        </div>
      </div>
      <div className="flex justify-center mt-10 mb-10 text-center bg-blue-500  text-white py-4 rounded-lg transition-all duration-300 font-bold w-fit px-10 mx-auto">
            <Link href="/services" className="text-white  ">
              المزيد من الخدمات
            </Link>
          </div>
    </section>
  )
}

