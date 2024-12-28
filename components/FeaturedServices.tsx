import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'تنظيف المنازل الفاخرة',
    description: 'خدمة تنظيف شاملة للمنازل مع عناية خاصة بالتفاصيل الدقيقة',
    image: '/cover.avif',
    price: 'تبدأ من 299 ريال',
    features: ['تنظيف عميق', 'تعقيم شامل', 'تعطير المكان', 'تلميع الأثاث'],
  },
  {
    title: 'تنظيف القصور والفلل',
    description: 'خدمات احترافية متكاملة للقصور والفلل الكبيرة',
    image: '/cover.avif',
    price: 'تبدأ من 599 ريال',
    features: ['تنظيف الواجهات', 'تنظيف المسابح', 'تنظيف الحدائق', 'تلميع الرخام'],
  },
  {
    title: 'تنظيف المجمعات السكنية',
    description: 'حلول تنظيف متكاملة للمجمعات السكنية والمباني',
    image: '/cover.avif',
    price: 'تبدأ من 999 ريال',
    features: ['تنظيف المرافق', 'تعقيم المداخل', 'تنظيف المصاعد', 'العناية بالمساحات الخضراء'],
  },
  {
    title: 'تنظيف المكاتب والشركات',
    description: 'خدمات تنظيف متكاملة للمكاتب والشركات',
    image: '/cover.avif',
    price: 'تبدأ من 499 ريال',
    features: ['تنظيف الأرضيات', 'تنظيف الأثاث', 'تنظيف النوافذ', 'تنظيف المطابخ'],
  },
  {
    title: 'تنظيف المطاعم والمطابخ',
    description: 'خدمات تنظيف متكاملة للمطاعم والمطابخ',
    image: '/cover.avif',
    price: 'تبدأ من 799 ريال',
    features: ['تنظيف الأرضيات', 'تنظيف الأثاث', 'تنظيف النوافذ', 'تنظيف المطابخ'],
  },

];
  export default function FeaturedServices() {
    return (
      <section className="py-24 bg-gradient-to-br from-[#E3F2FD] via-white to-[#BBDEFB] relative">
        {/* Add decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-50/50 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-[#1976D2] w-6 h-6" />
            <h2 className="text-lg font-medium text-[#1976D2]">خدماتنا المميزة</h2>
          </div>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            اختر الخدمة المناسبة لك
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="relative h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full z-20">
                    <span className="text-[#1976D2] font-semibold">{service.price}</span>
                  </div>
                </div>

                <div className="relative z-20 p-8 -mt-20">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-6">
                    {service.description}
                  </p>

                  <div className="bg-white rounded-2xl p-6">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-[#1976D2] rounded-full ml-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-[#1976D2] text-white py-4 rounded-xl flex items-center justify-center group-hover:bg-[#1565C0] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5" >
    <a href="tel:+966500000000" className="flex items-center gap-2">
       <span className="font-semibold text-white">احجز الآن</span>
       <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white 300duration-300" />
    </a>
</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
