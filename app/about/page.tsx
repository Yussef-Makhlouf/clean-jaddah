import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircle, 
  Users, 
  Trophy, 
  Clock, 
  Shield, 
  Star,
  Award,
  Phone,
  MessageCircle,
  Heart,
  Leaf,
  Target,
  Building2,
  Home,
  CarIcon as Carpet,
  AppWindowIcon as WindowIcon,
  HardHat,
  SprayCanIcon as Spray,
  ChevronRight,
  Lightbulb,
  Zap,
  Calendar,
  MapPin,
  Wrench,
  Sparkles
} from 'lucide-react'
import Footer from '@/components/Footer'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "5000+",
    label: "عميل سعيد"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    value: "15+",
    label: "سنوات خبرة"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "24/7",
    label: "خدمة متواصلة"
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: "4.9/5",
    label: "تقييم العملاء"
  }
];

const services = [
  {
    title: "تنظيف المنازل والفلل الشامل",
    description: "خدمة تنظيف شاملة ومتخصصة لجميع أنواع المنازل والفلل، تشمل تنظيف جميع الغرف والمساحات بأحدث التقنيات والمنتجات الآمنة. نضمن لك منزلاً نظيفاً ومريحاً لعائلتك.",
    icon: Home,
    features: [
      "تنظيف شامل لجميع الغرف والمساحات",
      "تنظيف المطبخ والحمامات بالتفصيل",
      "تنظيف الأرضيات والسجاد بالبخار",
      "إزالة الغبار من الأثاث والستائر",
      "تنظيف النوافذ والمرايا والزجاج",
      "تعطير المكان بروائح منعشة وآمنة",
      "تنظيف المكيفات والمراوح",
      "تنظيف الممرات والسلالم"
    ],
    tips: [
      "ننصح بتنظيف المنزل أسبوعياً للحفاظ على النظافة",
      "استخدم منتجات تنظيف آمنة للأطفال والحيوانات الأليفة",
      "احرص على تهوية المنزل بعد التنظيف"
    ]
  },
  {
    title: "تنظيف المكاتب والشركات الاحترافي",
    description: "خدمات تنظيف احترافية ومتخصصة للمكاتب والشركات، مع التركيز على توفير بيئة عمل صحية ومريحة. نستخدم تقنيات متقدمة لضمان نظافة مثالية.",
    icon: Building2,
    features: [
      "تنظيف المكاتب والمساحات المشتركة",
      "تنظيف الزجاج والنوافذ والواجهات",
      "تنظيف المطابخ وغرف الاجتماعات",
      "تعقيم الأسطح المشتركة والطاولات",
      "تنظيف دورات المياه وتعقيمها",
      "إزالة الغبار من الأجهزة الإلكترونية",
      "تنظيف الممرات والمداخل",
      "تنظيف غرف الاستراحة"
    ],
    tips: [
      "ننصح بتنظيف المكاتب يومياً للحفاظ على بيئة عمل صحية",
      "احرص على تعقيم الأسطح المشتركة بانتظام",
      "استخدم معطرات هواء طبيعية في المكاتب"
    ]
  },
  {
    title: "تنظيف السجاد والموكيت المتخصص",
    description: "خدمة تنظيف متخصصة للسجاد والموكيت باستخدام أحدث التقنيات والمنتجات الآمنة. نزيل البقع العنيدة والروائح الكريهة مع الحفاظ على جودة السجاد.",
    icon: Carpet,
    features: [
      "تنظيف بالبخار العميق لجميع أنواع السجاد",
      "إزالة البقع العنيدة والدهون",
      "معالجة الروائح الكريهة والرطوبة",
      "حماية ألوان السجاد من التلاشي",
      "تجفيف سريع وآمن",
      "ضمان النظافة والجودة",
      "معالجة الحساسية والغبار",
      "حماية السجاد من التلف"
    ],
    tips: [
      "ننصح بتنظيف السجاد كل 6 أشهر للحفاظ على جودته",
      "تجنب المشي على السجاد المبلل بعد التنظيف",
      "استخدم فرشاة ناعمة لتنظيف السجاد يومياً"
    ]
  },
  {
    title: "تنظيف النوافذ والواجهات الزجاجية",
    description: "خدمة تنظيف احترافية للنوافذ والواجهات الزجاجية باستخدام معدات متخصصة وآمنة. نضمن لك نوافذ شفافة ونظيفة تمنح منزلك مظهراً رائعاً.",
    icon: WindowIcon,
    features: [
      "تنظيف النوافذ الداخلية والخارجية",
      "تنظيف الواجهات الزجاجية العالية",
      "إزالة الأتربة والدهون والآثار",
      "تنظيف إطارات النوافذ والأبواب",
      "معالجة البقع العنيدة والصدأ",
      "ضمان الشفافية واللمعان",
      "تنظيف الستائر والبراويز",
      "حماية الزجاج من الخدوش"
    ],
    tips: [
      "ننصح بتنظيف النوافذ شهرياً للحفاظ على الشفافية",
      "تجنب تنظيف النوافذ في الأيام الممطرة",
      "استخدم مناشف ناعمة لتجنب خدش الزجاج"
    ]
  },
  {
    title: "خدمات التعقيم والتطهير الشامل",
    description: "خدمات تعقيم وتطهير شاملة للمنازل والمكاتب باستخدام منتجات معتمدة وآمنة. نركز على المناطق عالية اللمس لضمان حماية صحية مثالية.",
    icon: Spray,
    features: [
      "تعقيم جميع الأسطح والمناطق المشتركة",
      "معالجة المناطق عالية اللمس بالتفصيل",
      "استخدام منتجات معتمدة وآمنة",
      "حماية من الجراثيم والفيروسات",
      "رائحة منعشة وطبيعية",
      "ضمان التعقيم الشامل",
      "معالجة الحمامات والمطابخ",
      "تعقيم الأثاث والأجهزة"
    ],
    tips: [
      "ننصح بالتعقيم أسبوعياً للحماية من الأمراض",
      "احرص على تهوية المكان بعد التعقيم",
      "استخدم منتجات تعقيم آمنة للأطفال"
    ]
  },
  {
    title: "تنظيف ما بعد البناء والتشطيبات",
    description: "خدمة متخصصة لتنظيف المنازل والمباني بعد الانتهاء من أعمال البناء والتشطيبات. نزيل جميع آثار البناء ونحضر المكان للسكن.",
    icon: HardHat,
    features: [
      "إزالة آثار البناء والدهان",
      "تنظيف الأرضيات والجدران بالتفصيل",
      "تنظيف النوافذ والأبواب والزجاج",
      "إزالة الغبار والدهان من جميع الأسطح",
      "تنظيف الحمامات والمطبخ بالكامل",
      "تجهيز المكان للسكن والاستخدام",
      "تنظيف المكيفات والكهرباء",
      "إزالة المخلفات والبقايا"
    ],
    tips: [
      "ننصح بتنظيف ما بعد البناء قبل الانتقال للسكن",
      "احرص على تنظيف المكيفات بعد البناء",
      "تأكد من تنظيف جميع الزوايا والتفاصيل"
    ]
  }
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "الجودة المثالية",
    description: "نلتزم بأعلى معايير الجودة في جميع خدماتنا، مع ضمان رضا العملاء الكامل. نستخدم أحدث التقنيات والمنتجات لضمان نتائج استثنائية."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "الاهتمام بالعملاء",
    description: "نضع رضا العملاء في المقام الأول، ونقدم خدمة مخصصة تلبي جميع احتياجاتهم. فريق خدمة عملاء متخصص لمساعدتك على مدار الساعة."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "المنتجات الصديقة للبيئة",
    description: "نستخدم منتجات تنظيف آمنة وصديقة للبيئة، لحماية صحتك وصحة عائلتك. منتجات معتمدة وآمنة للأطفال والحيوانات الأليفة."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "الموثوقية والأمان",
    description: "فريق مدرب ومؤمن، مع ضمان أمان ممتلكاتك أثناء العمل. جميع العمال مؤمنون ومدرّبون على أعلى معايير الأمان."
  }
];

const team = [
  {
    name: "فريق التنظيف المحترف",
    role: "فريق مدرب ومؤهل",
    description: "فريق من المحترفين المدربين على أحدث تقنيات التنظيف، مع خبرة في جميع أنواع التنظيف. عمال مهرة ومؤمنون لضمان أفضل النتائج."
  },
  {
    name: "مشرفي الجودة",
    role: "ضمان الجودة",
    description: "مشرفون متخصصون لضمان أعلى معايير الجودة في جميع الخدمات المقدمة. مراقبة مستمرة لضمان رضا العملاء الكامل."
  },
  {
    name: "خدمة العملاء",
    role: "دعم متواصل",
    description: "فريق خدمة عملاء متخصص لتلبية جميع احتياجاتك والرد على استفساراتك. خدمة 24 ساعة لمساعدتك في أي وقت."
  }
];

const tips = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "نصائح للحفاظ على النظافة",
    tips: [
      "نظف المنزل يومياً للحفاظ على النظافة",
      "استخدم منتجات تنظيف آمنة للأطفال",
      "تهوية المنزل يومياً لتجديد الهواء",
      "تنظيف المكيفات بانتظام",
      "تجنب تراكم الغبار في الزوايا"
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "نصائح للتنظيف السريع",
    tips: [
      "ابدأ من الأعلى إلى الأسفل",
      "استخدم مناشف مختلفة لكل منطقة",
      "نظف الأجهزة الإلكترونية بحذر",
      "تجنب خلط منتجات التنظيف",
      "احرص على تجفيف الأسطح جيداً"
    ]
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "نصائح للتنظيف العميق",
    tips: [
      "خطط للتنظيف العميق أسبوعياً",
      "استخدم أدوات تنظيف متخصصة",
      "ركز على المناطق المهملة",
      "نظف خلف الأثاث بانتظام",
      "احرص على تنظيف المكيفات"
    ]
  }
];

export default function AboutPage() {
  return (
    <main className="bg-[#E3F2FD] text-gray-800">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { name: 'الرئيسية', url: '/' },
          { name: 'من نحن', url: '/about' }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#1976D2] to-[#1565C0] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl text-white font-bold mb-6 leading-tight">
                من نحن
                <span className="block text-3xl mt-2 font-normal">أفضل شركة تنظيف في جدة</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                نحن شركة تنظيف رائدة في جدة، نقدم خدمات تنظيف شاملة ومتخصصة منذ أكثر من 15 عام. 
                نلتزم بأعلى معايير الجودة والاحترافية لضمان رضا عملائنا الكرام. فريقنا المحترف مدرب على أحدث تقنيات التنظيف ويستخدم منتجات آمنة وصديقة للبيئة.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/services" 
                  className="bg-white text-[#1976D2] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  خدماتنا
                </Link>
                <Link 
                  href="https://wa.me/966592425757" 
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1976D2] transition-colors"
                >
                  اتصل بنا
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden my-10 bg-white ">
                <Image
                  src="/arabic color.avif"
                  alt="فريق التنظيف المحترف في جدة"
                  fill
                  className="object-contain  rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-[#1976D2] hover:text-white transition-all duration-300 group"
              >
                <div className="text-[#1976D2] group-hover:text-white flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                قصتنا
                <span className="text-[#1976D2] block">15 عام من التميز والثقة</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                بدأت رحلتنا في عام 2009 كشركة صغيرة في جدة، مع رؤية واضحة لتقديم خدمات تنظيف استثنائية. 
                على مدار 15 عام، نمت شركتنا لتصبح واحدة من أفضل شركات التنظيف في جدة، مع خدمة آلاف العملاء الراضين.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                نؤمن بأن النظافة هي أساس الراحة والصحة، ولذلك نلتزم بتقديم خدمات تنظيف شاملة ومتخصصة تلبي جميع احتياجات عملائنا. 
                فريقنا المحترف مدرب على أحدث تقنيات التنظيف ويستخدم منتجات آمنة وصديقة للبيئة.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                نحن نفخر بخدمة جميع أحياء جدة، من شمال جدة إلى جنوبها، مع ضمان وصول سريع وخدمة 24 ساعة لجميع عملائنا الكرام. 
                نقدم خدمات مخصصة لكل عميل حسب احتياجاته الخاصة.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#1976D2] w-5 h-5" />
                  <span className="text-gray-700">خدمة جميع أحياء جدة</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-[#1976D2] w-5 h-5" />
                  <span className="text-gray-700">خدمة 24 ساعة متواصلة</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench className="text-[#1976D2] w-5 h-5" />
                  <span className="text-gray-700">أحدث المعدات والتقنيات</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-[#1976D2] w-5 h-5" />
                  <span className="text-gray-700">فريق مؤمن ومدرب</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src="/luxury-villa-cleaning.avif"
                  alt="خدمات تنظيف الفلل الفاخرة في جدة"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#1976D2] text-white p-8 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold mb-2">5000+</p>
                <p className="text-sm">عميل سعيد في جدة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              قيمنا
              <span className="text-[#1976D2] block">ما يميزنا عن الآخرين</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              نلتزم بقيم أساسية تجعلنا الخيار الأمثل لجميع احتياجات التنظيف في جدة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-[#1976D2] hover:text-white transition-all duration-300 group">
                <div className="text-[#1976D2] group-hover:text-white flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-200">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              خدماتنا الشاملة
              <span className="text-[#1976D2] block">في جميع أنحاء جدة</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات التنظيف المتخصصة لتلبية جميع احتياجاتك مع نصائح مفيدة للحفاظ على النظافة
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-[#1976D2] mb-6">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">ما نقدمه:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="text-[#1976D2] w-5 h-5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#1976D2] mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    نصائح مفيدة:
                  </h4>
                  <ul className="space-y-2">
                    {service.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-[#1976D2] mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              نصائح مفيدة
              <span className="text-[#1976D2] block">للحفاظ على النظافة</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              نقدم لك أفضل النصائح للحفاظ على نظافة منزلك ومكتبك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tipGroup, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8">
                <div className="text-[#1976D2] mb-6 flex justify-center">
                  {tipGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{tipGroup.title}</h3>
                <ul className="space-y-3">
                  {tipGroup.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-3">
                      <CheckCircle className="text-[#1976D2] w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              فريقنا المحترف
              <span className="text-[#1976D2] block">خبرة وتميز في العمل</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              فريق من المحترفين المدربين على أحدث تقنيات التنظيف لضمان أفضل النتائج
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-white hover:bg-[#1976D2] hover:text-white transition-all duration-300 group shadow-lg">
                <div className="w-24 h-24 bg-[#1976D2] group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white group-hover:text-[#1976D2]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#1976D2] group-hover:text-gray-200 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 group-hover:text-gray-200">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-[#1976D2] to-[#1565C0] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              لماذا تختارنا؟
              <span className="block text-2xl font-normal mt-2">نحن الخيار الأمثل لجميع احتياجات التنظيف في جدة</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">خبرة 15 عام</h3>
              <p className="text-gray-200">خبرة طويلة في مجال التنظيف مع آلاف العملاء الراضين</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">ضمان الجودة</h3>
              <p className="text-gray-200">نضمن رضا العملاء 100% مع ضمان جودة جميع الخدمات</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">خدمة 24 ساعة</h3>
              <p className="text-gray-200">خدمة متواصلة على مدار الساعة لجميع احتياجاتك</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">منتجات آمنة</h3>
              <p className="text-gray-200">نستخدم منتجات تنظيف آمنة وصديقة للبيئة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            جاهزون لخدمتك؟
            <span className="text-[#1976D2] block">اتصل بنا الآن</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            احصل على عرض سعر مجاني وابدأ في الاستمتاع بمنزل نظيف ومريح مع أفضل شركة تنظيف في جدة. 
            فريقنا المحترف جاهز لخدمتك في أي وقت.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://wa.me/966592425757" 
              className="bg-[#1976D2] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1565C0] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              احصل على عرض سعر مجاني
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-[#1976D2] text-[#1976D2] px-8 py-4 rounded-full font-semibold hover:bg-[#1976D2] hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <ChevronRight className="w-5 h-5" />
              استكشف خدماتنا
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Schema */}
      <LocalBusinessSchema />
      
      <Footer />
    </main>
  )
}
