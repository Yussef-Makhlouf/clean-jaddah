import { Home, Building2, CarIcon as Carpet, AppWindowIcon as WindowIcon, HardHat, SprayCanIcon as Spray } from 'lucide-react'

const services = [
  { title: 'تنظيف المنازل', description: 'خدمة شاملة لتنظيف جميع أنحاء منزلك', icon: Home },
  { title: 'تنظيف المكاتب', description: 'خدمات احترافية لتنظيف مكاتب الشركات', icon: Building2 },
  { title: 'تنظيف السجاد', description: 'تنظيف عميق وتعقيم للسجاد والموكيت', icon: Carpet },
  { title: 'تنظيف النوافذ', description: 'تنظيف وتلميع النوافذ والواجهات الزجاجية', icon: WindowIcon },
  { title: 'تنظيف ما بعد البناء', description: 'إزالة مخلفات البناء وتنظيف المواقع', icon: HardHat },
  { title: 'تنظيف وتعقيم', description: 'خدمات تعقيم شاملة للحماية من الجراثيم', icon: Spray },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#E3F2FD]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1976D2]">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className={`
                  p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl
                  ${index % 2 === 0 ? 'bg-white' : 'bg-[#E3F2FD]'}
                  ${index % 3 === 1 ? 'md:transform md:translate-y-8' : ''}
                `}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-10 h-10 text-[#1976D2] mr-4" />
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
                <a href="#contact" className="mt-4 inline-block text-[#1976D2] hover:underline">
                  احجز الآن
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

