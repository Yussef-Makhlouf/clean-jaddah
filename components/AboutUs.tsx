import Image from 'next/image';
import { CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "1000+",
    label: "عميل سعيد"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    value: "10",
    label: "سنوات خبرة"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "24/7",
    label: "خدمة متواصلة"
  }
];

const features = [
  "فريق محترف ومدرب على أعلى مستوى",
  "معدات وتقنيات تنظيف حديثة",
  "منتجات تنظيف صديقة للبيئة",
  "ضمان رضا العملاء 100%"
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/arabic color.avif"
                alt="فريق التنظيف المحترف"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#1976D2] text-white p-8 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold mb-2">15+</p>
              <p className="text-sm">عام من الخبرة في مجال التنظيف</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              نحن نقدم خدمات تنظيف
              <span className="text-[#1976D2] block">احترافية وموثوقة</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              نحن في شركة النظافة المثالية نؤمن بأن النظافة هي أساس الراحة والصحة. نقدم خدماتنا بأعلى معايير الجودة والاحترافية لنضمن رضا عملائنا الكرام.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-[#1976D2] hover:text-white transition-colors duration-300 group"
                >
                  <div className="text-[#1976D2] group-hover:text-white flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#1976D2] w-6 h-6" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
