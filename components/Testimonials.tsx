import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'صاحب فيلا',
      comment: 'خدمة ممتازة وفريق عمل محترف. النتائج كانت مبهرة وتجاوزت توقعاتي. أنصح بهم بشدة!',
      image: '/cover.avif',
      rating: 5
    },
    {
      name: 'فاطمة علي',
      role: 'مديرة شركة',
      comment: 'نتائج مبهرة في تنظيف مكاتب الشركة. الفريق منظم ومحترف في التعامل. سأتعامل معهم دائمًا.',
      image: '/cover.avif',
      rating: 5
    },
    {
      name: 'خالد عبدالله',
      role: 'مالك مجمع سكني',
      comment: 'سرعة في الاستجابة وجودة عالية في التنظيف. يستخدمون أحدث المعدات والتقنيات. شكرًا لكم!',
      image: '/cover.avif',
      rating: 5
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#E3F2FD] to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#1976D2] font-semibold mb-2 block">آراء العملاء</span>
          <h2 className="text-4xl font-bold">ماذا يقول عملاؤنا عنا</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <Quote className="absolute -top-4 -right-4 text-[#1976D2] opacity-20 w-16 h-16" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      fill
                      className="rounded-full object-cover border-4 border-[#1976D2]/10"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed relative z-10">
                  &quot;{testimonial.comment}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1976D2]/10 px-6 py-3 rounded-full">
            <span className="text-[#1976D2] font-semibold">رضا العملاء</span>
            <span className="bg-[#1976D2] text-white px-3 py-1 rounded-full text-sm">100%</span>
          </div>
        </div>
      </div>
    </section>
  )
}
