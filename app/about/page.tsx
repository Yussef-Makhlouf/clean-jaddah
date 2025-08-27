
import Image from 'next/image'
import Link from 'next/link'
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  Phone,
  MessageCircle,
  CheckCircle,
  Star
} from 'lucide-react'
import PageSeo from '@/components/seo/PageSeo'
import Breadcrumbs from '@/components/seo/Breadcrumbs'


const stats = [
  { number: '15+', label: 'سنة خبرة', icon: Award },
  { number: '5000+', label: 'عميل راضي', icon: Users },
  { number: '24/7', label: 'خدمة متواصلة', icon: Clock },
  { number: '100%', label: 'ضمان الجودة', icon: Shield },
]

const values = [
  {
    title: 'الجودة العالية',
    description: 'نلتزم بأعلى معايير الجودة في جميع خدماتنا',
    icon: Star
  },
  {
    title: 'الثقة والأمانة',
    description: 'نبني علاقات طويلة الأمد مع عملائنا على أساس الثقة',
    icon: Shield
  },
  {
    title: 'الاحترافية',
    description: 'فريق مدرب ومحترف يستخدم أحدث التقنيات',
    icon: Award
  },
  {
    title: 'خدمة العملاء',
    description: 'نضع رضا العميل في المقدمة ونسعى لتجاوز توقعاته',
    icon: Users
  }
]

export default function AboutPage() {
  return (
    <>
      <PageSeo
        title="من نحن - شركة النظافة المثالية | أفضل شركة تنظيف في جدة"
        description="تعرف على شركة النظافة المثالية، الرائدة في خدمات التنظيف بجدة منذ 15 عاماً. فريق محترف، خدمة مضمونة، وأسعار تنافسية."
        url="https://cleanwithfresh.com/about"
        keywords="شركة النظافة المثالية, من نحن, تاريخ الشركة, فريق التنظيف, خبرة 15 عام, شركة تنظيف موثوقة جدة"
        canonicalUrl="https://cleanwithfresh.com/about"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", url: "https://cleanwithfresh.com" },
          { name: "من نحن", url: "https://cleanwithfresh.com/about" }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                من نحن
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                شركة النظافة المثالية - الرائدة في خدمات التنظيف بجدة منذ 15 عاماً
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  قصة نجاحنا
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    بدأت شركة النظافة المثالية رحلتها في عام 2009 برؤية واضحة: تقديم خدمات تنظيف 
                    استثنائية تتجاوز توقعات العملاء في جدة. منذ ذلك الحين، نمت الشركة لتصبح واحدة 
                    من أكثر شركات التنظيف ثقة واحتراماً في المنطقة.
                  </p>
                  <p>
                    نفخر بفريقنا المحترف المكون من أكثر من 100 موظف مدرب، يستخدمون أحدث التقنيات 
                    والمعدات المتطورة لضمان نتائج مثالية في كل مرة. نحن لا نقدم مجرد خدمة تنظيف، 
                    بل نقدم راحة البال والثقة لعملائنا.
                  </p>
                  <p>
                    التزامنا بالجودة والاحترافية جعلنا الخيار الأول لأكثر من 5000 عميل راضي، 
                    من الأسر والشركات والمؤسسات الحكومية في جميع أنحاء جدة.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/blog/professional-cleaning-services-in-jeddah.jpg"
                    alt="فريق شركة النظافة المثالية"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                قيمنا ومبادئنا
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نؤمن بأن النجاح الحقيقي يأتي من الالتزام بالقيم والمبادئ الأساسية
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              انضم إلى عائلة عملائنا الراضين
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              اكتشف الفرق الذي يمكن أن تحدثه الخبرة والاحترافية في نظافة منزلك أو مكتبك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+966592425077"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل بنا الآن
              </a>
              <Link 
                href="https://wa.me/966592425077"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل عبر واتساب
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
