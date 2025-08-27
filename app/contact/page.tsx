import { Metadata } from 'next'
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from 'lucide-react'
import PageSeo from '@/components/seo/PageSeo'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'اتصل بنا - شركة النظافة المثالية | تواصل معنا في جدة',
  description: 'تواصل مع شركة النظافة المثالية في جدة. خدمة عملاء 24/7، استشارة مجانية، عروض أسعار فورية لجميع خدمات التنظيف.',
  keywords: 'اتصل بنا, تواصل معنا, رقم هاتف شركة تنظيف جدة, واتساب تنظيف, خدمة عملاء, استشارة مجانية',
  openGraph: {
    title: 'اتصل بنا - شركة النظافة المثالية',
    description: 'تواصل معنا للحصول على أفضل خدمات التنظيف في جدة',
    type: 'website',
    locale: 'ar_SA',
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: 'اتصل بنا',
    details: '+966592425077',
    description: 'متاح 24/7 لجميع الاستفسارات',
    action: 'tel:+966592425077'
  },
  {
    icon: MessageCircle,
    title: 'واتساب',
    details: '+966592425077',
    description: 'تواصل سريع ومباشر',
    action: 'https://wa.me/966592425077'
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    details: 'info@cleanwithfresh.com',
    description: 'للاستفسارات الرسمية',
    action: 'mailto:info@cleanwithfresh.com'
  },
  {
    icon: MapPin,
    title: 'الموقع',
    details: 'جدة، المملكة العربية السعودية',
    description: 'نخدم جميع أحياء جدة',
    action: null
  }
]

const workingHours = [
  { day: 'السبت - الخميس', hours: '8:00 ص - 8:00 م' },
  { day: 'الجمعة', hours: '2:00 م - 8:00 م' },
  { day: 'الطوارئ', hours: '24 ساعة' }
]

export default function ContactPage() {
  return (
    <>
      <PageSeo
        title="اتصل بنا - شركة النظافة المثالية | تواصل معنا في جدة"
        description="تواصل مع شركة النظافة المثالية في جدة. خدمة عملاء 24/7، استشارة مجانية، عروض أسعار فورية لجميع خدمات التنظيف."
        url="https://cleanwithfresh.com/contact"
        keywords="اتصل بنا, تواصل معنا, رقم هاتف شركة تنظيف جدة, واتساب تنظيف, خدمة عملاء, استشارة مجانية"
        canonicalUrl="https://cleanwithfresh.com/contact"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", url: "https://cleanwithfresh.com" },
          { name: "اتصل بنا", url: "https://cleanwithfresh.com/contact" }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                اتصل بنا
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                نحن هنا لخدمتك على مدار الساعة. تواصل معنا للحصول على أفضل خدمات التنظيف في جدة
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{info.title}</h3>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors block mb-2"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-semibold text-lg mb-2">{info.details}</p>
                    )}
                    <p className="text-gray-600">{info.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Working Hours */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                ساعات العمل
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نحن متاحون لخدمتك في الأوقات التالية
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">جدول العمل الأسبوعي</h3>
                </div>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-gray-900">{schedule.day}</span>
                      <span className="text-blue-600 font-bold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-green-800 font-medium">
                    💡 خدمة الطوارئ متاحة 24 ساعة للحالات العاجلة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                تواصل سريع
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                اختر الطريقة الأنسب لك للتواصل معنا
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl">
                <Phone className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">اتصال مباشر</h3>
                <p className="mb-6">للحصول على استشارة فورية وحجز موعد</p>
                <a 
                  href="tel:+966592425077"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  اتصل الآن: 966592425077+
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl">
                <MessageCircle className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">واتساب</h3>
                <p className="mb-6">تواصل سريع مع إمكانية إرسال الصور والتفاصيل</p>
                <a 
                  href="https://wa.me/966592425077"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  تواصل عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                المناطق التي نخدمها
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدماتنا في جميع أحياء جدة مع ضمان الوصول السريع
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                'شمال جدة', 'جنوب جدة', 'شرق جدة', 'غرب جدة',
                'وسط جدة', 'الكورنيش', 'النزهة', 'الشاطئ',
                'الروضة', 'البلد', 'العزيزية', 'السامر'
              ].map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              جاهز للبدء؟
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              احصل على عرض سعر مجاني واكتشف كيف يمكننا مساعدتك في الحصول على أفضل خدمات التنظيف
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+966592425077"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                احصل على عرض سعر مجاني
              </a>
              <a 
                href="https://wa.me/966592425077"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                استشارة مجانية عبر واتساب
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
