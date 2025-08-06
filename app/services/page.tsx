import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Home, 
  Building2, 
  CarIcon as Carpet, 
  AppWindowIcon as WindowIcon, 
  HardHat, 
  SprayCanIcon as Spray,
  CheckCircle,
  Clock,
  Star,
  Shield,
  Users,
  Award,
  Phone,
  MessageCircle,
  Settings,
  HelpCircle,
  ChevronDown
} from 'lucide-react'
import Footer from '@/components/Footer'
import ServiceSchema from '@/components/seo/ServiceSchema'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'خدمات التنظيف في جدة - أفضل شركة تنظيف في جدة | تنظيف منازل ومكاتب وفلل والتنفيذ',
  description: 'أفضل شركة تنظيف في جدة تقدم خدمات شاملة: تنظيف المنازل والفلل، المكاتب والشركات، السجاد والموكيت، النوافذ والواجهات، التعقيم والتطهير، وخدمات التنفيذ المتخصصة. خدمة 24 ساعة بأسعار تنافسية وضمان جودة عالية في جميع أحياء جدة.',
  keywords: 'خدمات تنظيف جدة, شركة نظافة جدة, تنظيف منازل جدة, تنظيف مكاتب جدة, تنظيف فلل جدة, تنظيف سجاد جدة, تنظيف نوافذ جدة, تعقيم جدة, تنظيف ما بعد البناء جدة, خدمات التنفيذ جدة, شركة تنظيف شمال جدة, شركة تنظيف جنوب جدة, تنظيف احترافي جدة, تنظيف بالبخار جدة, شركة النظافة المثالية, أفضل شركة تنظيف في جدة, تنظيف 24 ساعة جدة, أسعار تنظيف جدة, عرض أسعار تنظيف مجاني',
  openGraph: {
    title: 'خدمات التنظيف في جدة - أفضل شركة تنظيف في جدة',
    description: 'أفضل شركة تنظيف في جدة - خدمات شاملة ومتخصصة بأعلى معايير الجودة والاحترافية',
    type: 'website',
    locale: 'ar_SA',
    url: '/services',
    siteName: 'أفضل شركة تنظيف في جدة',
    images: [{
      url: '/cover.avif',
      width: 1200,
      height: 630,
      alt: 'خدمات التنظيف في جدة - أفضل شركة تنظيف في جدة'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدمات التنظيف في جدة - أفضل شركة تنظيف في جدة',
    description: 'أفضل شركة تنظيف في جدة - خدمات شاملة ومتخصصة',
    images: ['/cover.avif']
  },
  alternates: {
    canonical: 'https://cleanwithfresh.com/services'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}

const services = [
  {
    id: 'home-cleaning',
    title: 'تنظيف المنازل',
    description: 'خدمة شاملة لتنظيف جميع أنحاء منزلك بأعلى معايير الجودة والنظافة',
    icon: Home,
    duration: '3-5 ساعات',
    price: 'تبدأ من 299 ريال',
    features: [
      'تنظيف جميع الغرف والمساحات',
      'تنظيف المطبخ والحمامات',
      'تنظيف الأرضيات والسجاد',
      'إزالة الغبار من الأثاث',
      'تنظيف النوافذ والمرايا',
      'تعطير المكان'
    ],
    image: '/images/blog/home-disinfection.png',
    popular: true,
    slug: 'home-cleaning'
  },
  {
    id: 'office-cleaning',
    title: 'تنظيف المكاتب',
    description: 'خدمات احترافية لتنظيف مكاتب الشركات وتوفير بيئة عمل صحية ومريحة',
    icon: Building2,
    duration: '4-6 ساعات',
    price: 'تبدأ من 499 ريال',
    features: [
      'تنظيف المكاتب والمساحات المشتركة',
      'تنظيف الزجاج والنوافذ',
      'تنظيف المطابخ وغرف الاجتماعات',
      'تعقيم الأسطح المشتركة',
      'تنظيف دورات المياه',
      'تنظيف المداخل والاستقبال'
    ],
    image: '/images/blog/professional-cleaning.png',
    popular: false,
    slug: 'office-cleaning'
  },
  {
    id: 'carpet-cleaning',
    title: 'تنظيف السجاد',
    description: 'تنظيف عميق وتعقيم للسجاد والموكيت باستخدام أحدث التقنيات والمعدات',
    icon: Carpet,
    duration: '2-4 ساعات',
    price: 'تبدأ من 199 ريال',
    features: [
      'إزالة البقع الصعبة',
      'تنظيف بالبخار',
      'إزالة الروائح الكريهة',
      'تجفيف سريع',
      'تعقيم السجاد',
      'حماية الألوان'
    ],
    image: '/images/blog/carpet-cleaning.avif',
    popular: true,
    slug: 'carpet-cleaning'
  },
  {
    id: 'window-cleaning',
    title: 'تنظيف النوافذ',
    description: 'تنظيف وتلميع النوافذ والواجهات الزجاجية للمنازل والمباني التجارية',
    icon: WindowIcon,
    duration: '3-5 ساعات',
    price: 'تبدأ من 249 ريال',
    features: [
      'تنظيف النوافذ الداخلية والخارجية',
      'تلميع الزجاج بدون خطوط',
      'تنظيف الإطارات والمسارات',
      'معدات متخصصة للأماكن المرتفعة',
      'تنظيف الواجهات الزجاجية',
      'إزالة البقع العنيدة'
    ],
    image: '/images/blog/spring-cleaning-tips.jpg',
    popular: false,
    slug: 'window-cleaning'
  },
  {
    id: 'post-construction',
    title: 'تنظيف ما بعد البناء',
    description: 'إزالة مخلفات البناء وتنظيف المواقع بعد انتهاء أعمال البناء أو الترميم',
    icon: HardHat,
    duration: 'يوم كامل',
    price: 'تبدأ من 899 ريال',
    features: [
      'إزالة بقايا الدهانات والغبار',
      'تنظيف الأرضيات من مخلفات البناء',
      'تنظيف النوافذ والأبواب',
      'تنظيف المرافق الصحية',
      'إزالة البقع والآثار',
      'تعقيم شامل'
    ],
    image: '/images/blog/spring-cleaning-tips.jpg',
    popular: false,
    slug: 'post-construction'
  },
  {
    id: 'disinfection',
    title: 'تنظيف وتعقيم',
    description: 'خدمات تعقيم شاملة للحماية من الجراثيم والفيروسات وضمان بيئة صحية',
    icon: Spray,
    duration: '2-3 ساعات',
    price: 'تبدأ من 349 ريال',
    features: [
      'تعقيم الأسطح عالية اللمس',
      'رش مبيدات آمنة للأطفال والحيوانات',
      'تطهير الحمامات والمطابخ',
      'استخدام مواد معتمدة صحياً',
      'تعقيم الهواء',
      'حماية من الفيروسات'
    ],
    image: '/images/blog/eco-friendly-cleaning-solutions.png',
    popular: true,
    slug: 'disinfection'
  },
  {
    id: 'implementation',
    title: 'تنفيذ وإدارة مشاريع النظافة',
    description: 'خدمات تنفيذ متكاملة للمشاريع السكنية والتجارية مع ضمان الجودة والإتقان',
    icon: Settings,
    duration: 'حسب حجم المشروع',

    features: [
      'تنفيذ المشاريع السكنية',
      'تنفيذ المشاريع التجارية',
      'إشراف هندسي متخصص',
      'ضمان الجودة والمواعيد',
      'استخدام أفضل المواد',
      'متابعة دورية للمشروع'
    ],
    image: '/images/blog/professional-cleaning.png',
    popular: false,
    slug: 'implementation'
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'مواد آمنة',
    description: 'نستخدم مواد تنظيف آمنة وصديقة للبيئة'
  },
  {
    icon: Users,
    title: 'فريق محترف',
    description: 'فريق عمل مدرب ومحترف مع خبرة 15+ عام'
  },
  {
    icon: Award,
    title: 'جودة عالية',
    description: 'نضمن لك أعلى معايير الجودة والاحترافية'
  },
  {
    icon: Clock,
    title: 'خدمة سريعة',
    description: 'نصل إليك في الوقت المحدد وننهي العمل بسرعة'
  }
]

const faqData = [

  {
    question: 'هل تقدمون خدمات التنظيف في جميع أحياء جدة؟',
    answer: 'نعم، نقدم خدماتنا في جميع أحياء جدة بما في ذلك: شمال جدة، جنوب جدة، شرق جدة، غرب جدة، وسط جدة، الكورنيش، شارع التحلية، شارع الملك فهد، النزهة، الروضة، العزيزية، السلامة، والعديد من الأحياء الأخرى.'
  },
  {
    question: 'كم من الوقت تستغرق خدمة تنظيف المنزل؟',
    answer: 'تتراوح مدة تنظيف المنزل من 3-5 ساعات حسب حجم المنزل ونوع الخدمة المطلوبة. نوفر فريق عمل محترف للانتهاء من العمل في الوقت المحدد.'
  },
  {
    question: 'هل المواد المستخدمة آمنة للأطفال والحيوانات الأليفة؟',
    answer: 'نعم، نستخدم مواد تنظيف آمنة 100% وصديقة للبيئة. جميع منتجاتنا معتمدة صحياً وآمنة تماماً للأطفال والحيوانات الأليفة.'
  },
  {
    question: 'هل تقدمون ضمان على خدمات التنظيف؟',
    answer: 'نعم، نقدم ضمان جودة شامل على جميع خدماتنا. في حال عدم رضاك عن الخدمة، نعيد التنظيف مجاناً أو نسترد المبلغ كاملاً.'
  },
  {
    question: 'هل يمكن حجز خدمة التنظيف في نفس اليوم؟',
    answer: 'نعم، نوفر خدمة تنظيف فورية في نفس اليوم (حسب توفر الموعد). اتصل بنا على 966592425757+ أو راسلنا عبر واتساب لحجز موعد فوري.'
  }
]

const jeddahAreas = [
  'شمال جدة', 'جنوب جدة', 'شرق جدة', 'غرب جدة', 'وسط جدة',
  'الكورنيش', 'شارع التحلية', 'شارع الملك فهد', 'النزهة', 'الروضة',
  'العزيزية', 'السلامة', 'البلد', 'الحمراء', 'السامر',
  'النزلة اليمانية', 'النزلة الشرقية', 'الكندرة', 'الثعالبة', 'العمارية'
]

export default function ServicesPage() {
  return (
    <>
      {/* SEO Components */}
      <LocalBusinessSchema 
        name="شركة النظافة المثالية"
        description="أفضل شركة تنظيف في جدة تقدم خدمات تنظيف شاملة للمنازل والمكاتب والفلل والسجاد والنوافذ والتعقيم بأعلى معايير الجودة"
        url="/"
        telephone="+966592425757"
      />
      <ServiceSchema 
        serviceName="خدمات التنظيف في جدة"
        serviceType="CleaningService"
        description="خدمات تنظيف شاملة ومتخصصة في جدة تشمل تنظيف المنازل والمكاتب والفلل والسجاد والنوافذ والتعقيم"
        areaServed="جدة، المملكة العربية السعودية"
        priceRange="199-1999 ريال سعودي"
        url="/services"
        image="/cover.avif"
      />
      <Breadcrumbs 
        items={[
          { name: "الرئيسية", url: "/" },
          { name: "خدمات التنظيف في جدة", url: "/services" }
        ]}
      />

    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto pt-20 ">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              خدمات التنظيف في جدة
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              نقدم خدمات تنظيف شاملة ومتخصصة في جدة وأحيائها المختلفة. 
              نضمن لك بيئة نظيفة وصحية لمنزلك أو مكتبك بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+966592425757"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل الآن للاستفسار عن خدمات التنظيف في جدة
              </a>
              <Link 
                href="https://wa.me/966592425757"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                استشارة مجانية عبر واتساب
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            لماذا تختار شركة النظافة المثالية؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
            خدماتنا المتخصصة
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
            نقدم مجموعة متكاملة من خدمات التنظيف المتخصصة لتلبية جميع احتياجاتك في جدة وأحيائها المختلفة
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 pt-10">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover "
                    />
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        الأكثر طلباً
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 ml-2 text-blue-600" />
                        <span>{service.duration}</span>
                      </div>
               
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                        تشمل الخدمة:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-1 bg-blue-600 text-white py-3 rounded-xl text-center font-bold hover:bg-blue-700 transition-colors"
                      >
                        تفاصيل خدمة {service.title} في جدة
                      </Link>
                      <a
                        href="tel:+966592425757"
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl text-center font-bold hover:bg-green-600 transition-colors"
                      >
                        احجز {service.title} الآن عبر الهاتف
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Jeddah Areas Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            المناطق التي نخدمها في جدة
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            نقدم خدمات التنظيف المتخصصة في جميع أحياء ومناطق جدة مع فريق محترف وخدمة سريعة
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {jeddahAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">{area}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              لا تجد منطقتك في القائمة؟ اتصل بنا - نقدم خدماتنا في جميع أنحاء جدة!
            </p>
            <a 
              href="tel:+966592425757"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              استفسر عن منطقتك
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
            الأسئلة الشائعة حول خدمات التنظيف في جدة
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
            إجابات على أهم الأسئلة التي يطرحها عملاؤنا حول خدمات التنظيف في جدة
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full flex-shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-relaxed">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              لديك سؤال آخر؟ تواصل معنا مباشرة للحصول على إجابة فورية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+966592425757"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل للاستفسار
              </a>
              <Link 
                href="https://wa.me/966592425757"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            احصل على خدمة تنظيف احترافية اليوم في جدة
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white">
            شركة النظافة المثالية - أفضل اختيار لخدمات التنظيف في جدة. 
            اتصل الآن واحصل على عرض سعر مجاني وخصم خاص للعملاء الجدد!
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">⭐ عرض خاص ⭐</h3>
            <p className="text-lg mb-4">خصم 15% للعملاء الجدد</p>
            <p className="text-sm opacity-90">صالح حتى نهاية الشهر</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+966592425757"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              اتصل الآن: 966592425757+
            </a>
            <Link 
              href="https://wa.me/966592425757"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب فوري
            </Link>
          </div>
          <div className="mt-8 text-sm opacity-90">
            <p>✅ عرض أسعار مجاني | ✅ خدمة 24 ساعة | ✅ ضمان الجودة</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
</>
  )
} 