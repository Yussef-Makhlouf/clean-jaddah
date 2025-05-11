import { Check } from 'lucide-react'

export default function Pricing() {
  const packages = [
    { 
      name: 'أساسي', 
      price: '200', 
      features: ['تنظيف عام', 'كنس وممسحة', 'تنظيف الحمامات'],
      color: 'bg-gray-100',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    { 
      name: 'قياسي', 
      price: '350', 
      features: ['كل ما في الأساسي', 'تنظيف المطبخ', 'تنظيف النوافذ', 'إزالة الغبار'],
      color: 'bg-blue-100',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      name: 'شامل', 
      price: '500', 
      features: ['كل ما في القياسي', 'تنظيف عميق للسجاد', 'تلميع الأثاث', 'تعقيم كامل'],
      color: 'bg-yellow-100',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700'
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#E3F2FD] to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1976D2]">باقات الأسعار</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`${pkg.color} p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2`}>
              <h3 className="text-2xl font-semibold mb-4 text-center">{pkg.name}</h3>
              <p className="text-4xl font-bold mb-6 text-center">{pkg.price} <span className="text-xl">ريال</span></p>
              <ul className="mb-8 space-y-4">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/966563009155" 
                className={`block w-full text-center ${pkg.buttonColor} text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300`}
              >
                احجز الآن
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

