'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'ما هي مواعيد العمل لديكم؟',
    answer: 'نعمل على مدار الساعة طوال أيام الأسبوع لتلبية احتياجاتكم في أي وقت.'
  },
  {
    question: 'هل تستخدمون مواد تنظيف آمنة؟',
    answer: 'نعم، نستخدم منتجات تنظيف عالية الجودة وصديقة للبيئة وآمنة للأطفال والحيوانات الأليفة.'
  },
  {
    question: 'كم تستغرق عملية التنظيف؟',
    answer: 'تختلف المدة حسب حجم المكان ونوع الخدمة، ولكن عادةً ما تستغرق من 2-4 ساعات للمنازل المتوسطة.'
  },
  {
    question: 'هل تقدمون ضمان على خدماتكم؟',
    answer: 'نعم، نقدم ضمان رضا العملاء 100% على جميع خدماتنا.'
  },
  {
    question: 'كيف يمكنني حجز خدمة التنظيف؟',
    answer: 'يمكنك الحجز عبر الاتصال بنا مباشرة أو من خلال موقعنا الإلكتروني.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-[#E3F2FD] via-white to-[#BBDEFB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            إليك إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                className="w-full text-right px-6 py-4 flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#1976D2]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#1976D2]" />
                )}
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out
                ${openIndex === index ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
