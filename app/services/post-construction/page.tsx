import Image from 'next/image'
import Link from 'next/link'
import { 
  HardHat, 
  CheckCircle, 
  Clock, 
  Star, 
  Shield, 
  Users, 
  Award, 
  Phone, 
  MessageCircle,
  MapPin,
  Calendar,
  Sparkles,
  Droplets,
  Wind,
  Sun,
  Moon,
  Zap,
  Heart,
  Leaf,
  Target,
  TrendingUp,
  Eye,
  Scissors,
  Palette,
  Wrench,
  Lightbulb,
  BookOpen,
  GraduationCap,
  TestTube,
  Microscope,
  Thermometer,
  Gauge,
  Timer,
  Scale,
  ShieldCheck,
  RefreshCw,
  Filter,
  AlertTriangle,
  Info,
  HelpCircle,
  FileText,
  BarChart3,
  PieChart,
  Activity,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  X,
  Search,
  Settings,
  Truck,
  Package,
  Clipboard,
  FileCheck,
  CalendarDays,
  Clock3,
  Hourglass,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarClock,
  CalendarRange,
  CalendarHeart,
  Building2
} from 'lucide-react'
import PageSeo from '@/components/seo/PageSeo';
import ServiceSchema from '@/components/seo/ServiceSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';



const features = [
  {
    title: 'تنظيف شامل للموقع',
    description: 'تنظيف شامل لجميع أجزاء الموقع بعد الانتهاء من البناء',
    icon: HardHat,
    details: 'نقوم بتنظيف شامل لجميع أجزاء الموقع بعد الانتهاء من أعمال البناء. نراعي جميع التفاصيل لضمان نظافة مثالية وجاهزية الموقع للاستخدام.'
  },
  {
    title: 'إزالة مخلفات البناء',
    description: 'إزالة جميع مخلفات البناء والمواد المتبقية',
    icon: Truck,
    details: 'نقوم بإزالة جميع مخلفات البناء والمواد المتبقية مثل الحجارة، الخشب، المعادن، والمواد الكيميائية. نستخدم معدات متخصصة لضمان الإزالة الكاملة.'
  },
  {
    title: 'تنظيف الأسطح والجدران',
    description: 'تنظيف وتلميع جميع الأسطح والجدران',
    icon: Shield,
    details: 'نقوم بتنظيف وتلميع جميع الأسطح والجدران لإزالة آثار البناء والطلاء. نستخدم مواد متخصصة لضمان عدم إتلاف الأسطح.'
  },
  {
    title: 'تعقيم وتطهير',
    description: 'تعقيم وتطهير شامل للموقع',
    icon: Sparkles,
    details: 'نقوم بتعقيم وتطهير شامل للموقع لإزالة الغبار والمواد الضارة. نستخدم مواد تعقيم قوية وآمنة لضمان بيئة صحية.'
  }
]

const cleaningTechniques = [
  {
    title: 'التنظيف بالضغط العالي',
    description: 'استخدام الماء المضغوط لإزالة الأوساخ العنيدة',
    icon: Droplets,
    benefits: ['إزالة الأوساخ العنيدة', 'تنظيف عميق', 'توفير المياه', 'نتائج ممتازة']
  },
  {
    title: 'التنظيف بالمواد المتخصصة',
    description: 'استخدام مواد تنظيف متخصصة لكل نوع من الأسطح',
    icon: TestTube,
    benefits: ['مواد آمنة للأسطح', 'فعالية عالية', 'عدم إتلاف الأسطح', 'نتائج دائمة']
  },
  {
    title: 'التنظيف بالتقنيات المتقدمة',
    description: 'استخدام أحدث التقنيات والمعدات المتخصصة',
    icon: Zap,
    benefits: ['كفاءة عالية', 'توفير الوقت', 'جودة احترافية', 'نتائج مثالية']
  },
  {
    title: 'التنظيف بالجدولة المنتظمة',
    description: 'تنظيف منتظم ومجدول حسب مراحل البناء',
    icon: Calendar,
    benefits: ['جدولة مرنة', 'نظافة مستمرة', 'تكلفة محسنة', 'نتائج مثالية']
  }
]

const constructionPhases = [
  {
    title: 'مرحلة ما بعد الحفر',
    description: 'تنظيف شامل بعد أعمال الحفر والتأسيس',
    icon: HardHat,
    details: 'نقوم بتنظيف شامل بعد أعمال الحفر والتأسيس. نركز على إزالة التربة الزائدة وتنظيف الموقع بالكامل.'
  },
  {
    title: 'مرحلة ما بعد البناء',
    description: 'تنظيف شامل بعد الانتهاء من أعمال البناء',
    icon: Building2,
    details: 'نقوم بتنظيف شامل بعد الانتهاء من أعمال البناء. نركز على إزالة مخلفات البناء وتنظيف جميع الأسطح.'
  },
  {
    title: 'مرحلة ما بعد التشطيبات',
    description: 'تنظيف دقيق بعد أعمال التشطيبات',
    icon: Palette,
    details: 'نقوم بتنظيف دقيق بعد أعمال التشطيبات مثل الطلاء والبلاط. نراعي حساسية الأسطح ونستخدم مواد مناسبة.'
  },
  {
    title: 'مرحلة التسليم النهائي',
    description: 'تنظيف نهائي وتجهيز الموقع للتسليم',
    icon: Award,
    details: 'نقوم بتنظيف نهائي وتجهيز الموقع للتسليم. نتأكد من نظافة مثالية وجاهزية الموقع للاستخدام.'
  }
]

const benefits = [
  {
    title: 'تسريع عملية التسليم',
    description: 'تنظيف سريع وفعال يسرع من عملية تسليم المشروع',
    icon: Clock,
    details: 'التنظيف السريع والفعال يسرع من عملية تسليم المشروع للعميل. هذا يوفر الوقت والجهد على جميع الأطراف.'
  },
  {
    title: 'تحسين صورة المشروع',
    description: 'المظهر النظيف يحسن من صورة المشروع',
    icon: Eye,
    details: 'المظهر النظيف والمنظم يحسن من صورة المشروع ويعكس الاحترافية والاهتمام بالتفاصيل.'
  },
  {
    title: 'ضمان السلامة',
    description: 'إزالة المخاطر وضمان بيئة آمنة',
    icon: Shield,
    details: 'إزالة مخلفات البناء والمواد الخطرة يضمن بيئة آمنة للعمال والمستخدمين النهائيين.'
  },
  {
    title: 'توفير التكاليف',
    description: 'الوقاية من الأضرار وتقليل الحاجة للإصلاحات',
    icon: Target,
    details: 'التنظيف المنتظم يمنع تراكم الأوساخ والأضرار التي قد تحتاج إصلاحات مكلفة في المستقبل.'
  }
]

const services = [
  'إزالة مخلفات البناء',
  'تنظيف الأسطح والجدران',
  'تنظيف الأرضيات',
  'إزالة آثار الطلاء',
  'تنظيف النوافذ والأبواب',
  'تنظيف الحمامات والمطابخ',
  'إزالة الغبار والمواد الضارة',
  'تنظيف أنظمة التكييف',
  'تنظيف الكهرباء والإضاءة',
  'تنظيف أنظمة السباكة',
  'إزالة المواد الكيميائية',
  'تنظيف الممرات والسلالم',
  'تنظيف المداخل والاستقبال',
  'تنظيف غرف التخزين',
  'تنظيف المناور والفتحات',
  'تعقيم وتطهير شامل'
]

const process = [
  {
    step: '01',
    title: 'التقييم والتخطيط',
    description: 'تقييم شامل للموقع وتحديد احتياجات التنظيف',
    details: 'نقوم بزيارة الموقع لتقييم شامل لحالة التنظيف المطلوبة. نحدد نوع المخلفات والمواد المتراكمة ونضع خطة عمل مفصلة.'
  },
  {
    step: '02',
    title: 'إزالة المخلفات الكبيرة',
    description: 'إزالة المخلفات الكبيرة والمواد المتبقية',
    details: 'نبدأ بإزالة المخلفات الكبيرة والمواد المتبقية مثل الحجارة، الخشب، المعادن، والمواد الكيميائية. نستخدم معدات متخصصة.'
  },
  {
    step: '03',
    title: 'التنظيف الشامل',
    description: 'تنظيف شامل لجميع الأسطح والمساحات',
    details: 'نقوم بتنظيف شامل لجميع الأسطح والمساحات. نستخدم مواد تنظيف متخصصة ومعدات متقدمة لضمان أفضل النتائج.'
  },
  {
    step: '04',
    title: 'التعقيم والتسليم',
    description: 'تعقيم شامل ومراجعة نهائية',
    details: 'نقوم بتعقيم شامل للموقع ومراجعة نهائية للعمل المنجز. نتأكد من نظافة مثالية وجاهزية الموقع للتسليم.'
  }
]

const tips = [
  {
    title: 'نصائح لتنظيف ما بعد البناء',
    icon: Lightbulb,
    tips: [
      'ابدأ التنظيف فور انتهاء كل مرحلة',
      'استخدم معدات الحماية المناسبة',
      'رتب المخلفات حسب النوع',
      'استخدم مواد تنظيف متخصصة',
      'نظف من الأعلى إلى الأسفل',
      'اهتم بالتفاصيل الصغيرة',
      'استخدم الإضاءة الجيدة',
      'احتفظ بسجلات التنظيف'
    ]
  },
  {
    title: 'أخطاء شائعة في تنظيف ما بعد البناء',
    icon: AlertTriangle,
    tips: [
      'إهمال تنظيف المراحل المبكرة',
      'استخدام مواد تنظيف قوية',
      'إهمال معدات الحماية',
      'عدم ترتيب المخلفات',
      'إهمال التفاصيل الصغيرة',
      'عدم تنظيف الأنظمة',
      'إهمال التعقيم',
      'عدم مراجعة العمل'
    ]
  },
  {
    title: 'جدولة تنظيف ما بعد البناء',
    icon: Calendar,
    tips: [
      'تنظيف يومي للمخلفات',
      'تنظيف أسبوعي شامل',
      'تنظيف بعد كل مرحلة',
      'تنظيف نهائي شامل',
      'مراجعة دورية للعمل',
      'تحديث خطة التنظيف',
      'تدريب العمال',
      'توثيق جميع الأعمال'
    ]
  }
]

const faq = [
  {
    question: 'متى يجب البدء في تنظيف ما بعد البناء؟',
    answer: 'يجب البدء في التنظيف فور انتهاء كل مرحلة من مراحل البناء لضمان سهولة العمل.'
  },
  {
    question: 'هل تنظفون جميع أنواع المشاريع؟',
    answer: 'نعم، ننظف جميع أنواع المشاريع السكنية والتجارية والصناعية.'
  },
  {
    question: 'كم تستغرق عملية التنظيف؟',
    answer: 'تستغرق عملية التنظيف 1-3 أيام حسب حجم المشروع وكمية المخلفات.'
  },
  {
    question: 'هل تستخدمون معدات متخصصة؟',
    answer: 'نعم، نستخدم معدات متخصصة وآمنة لضمان كفاءة عالية وأمان تام.'
  }
]

const areas = [
  'حي النزهة',
  'حي الشاطئ',
  'حي الكورنيش',
  'حي الروضة',
  'حي البلد',
  'حي العزيزية',
  'حي السامر',
  'حي الحمراء',
  'حي السلامة',
  'حي النزلة اليمانية',
  'حي النزلة الشرقية',
  'حي النزلة الغربية',
  'حي الكندرة',
  'حي الثعالبة',
  'حي العمارية',
  'حي الشاطئ',
  'حي الكورنيش الشمالي',
  'حي الكورنيش الجنوبي'
]

export default function PostConstructionPage() {
  return (
    <>
      <PageSeo
        title="تنظيف ما بعد البناء في جدة | شركة النظافة المثالية"
        description="خدمة تنظيف شاملة للمواقع بعد انتهاء أعمال البناء أو الترميم في جدة. اتصل بنا الآن!"
        image="/images/blog/spring-cleaning-tips.jpg"
        url="https://cleanwithfresh.com/services/post-construction"
        keywords="تنظيف ما بعد البناء جدة, شركة تنظيف بعد البناء, إزالة مخلفات البناء, تنظيف مواقع البناء, تنظيف بعد الترميم, خدمات تنظيف جدة"
      />
      <ServiceSchema
        serviceType="تنظيف ما بعد البناء"
        description="خدمة تنظيف شاملة للمواقع بعد انتهاء أعمال البناء أو الترميم في جدة."
        providerName="شركة النظافة المثالية"
        providerUrl="https://cleanwithfresh.com"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", url: "https://cleanwithfresh.com" },
          { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
          { name: "تنظيف ما بعد البناء", url: "https://cleanwithfresh.com/services/post-construction" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <HardHat className="w-8 h-8 mr-3 text-yellow-400" />
                  <span className="bg-yellow-400/20 text-yellow-400 py-1 px-4 rounded-full text-sm font-medium">
                    خدمة تنظيف ما بعد البناء
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  تنظيف ما بعد البناء في جدة
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  نقدم خدمة تنظيف ما بعد البناء الاحترافية في جدة. 
                  نستخدم أحدث التقنيات والمعدات المتخصصة لإزالة جميع مخلفات البناء.
                  فريقنا المحترف يضمن لك موقع نظيف وجاهز للتسليم في أسرع وقت ممكن.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+966592425077"
                    className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل الآن لتنظيف موقعك بعد البناء في جدة
                  </a>
                  <Link 
                    href="https://wa.me/966592425077"
                    className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    استشارة مجانية عبر واتساب
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/blog/spring-cleaning-tips.jpg"
                    alt="تنظيف ما بعد البناء في جدة"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                لماذا تختار شركة النظافة المثالية؟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نتميز بخبرة 15+ عام في مجال تنظيف ما بعد البناء مع فريق محترف ومعدات حديثة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">فريق متخصص</h3>
                <p className="text-gray-600">فريق متخصص في تنظيف ما بعد البناء مع خبرة 15+ عام</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">أمان تام</h3>
                <p className="text-gray-600">معدات آمنة وطرق عمل محترفة لضمان الأمان التام</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">جودة عالية</h3>
                <p className="text-gray-600">نتائج مضمونة ورضا العملاء مع أعلى معايير الجودة</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">خدمة سريعة</h3>
                <p className="text-gray-600">تنظيف سريع وفعال يسرع من عملية تسليم المشروع</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                خدمات تنظيف ما بعد البناء
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم مجموعة شاملة من خدمات تنظيف ما بعد البناء لتلبية جميع احتياجاتك
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 p-4 rounded-full mr-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <p className="text-gray-700 leading-relaxed">{feature.details}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Cleaning Techniques Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                تقنيات التنظيف المتقدمة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نستخدم أحدث التقنيات والمعدات المتخصصة لضمان أفضل النتائج
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cleaningTechniques.map((technique, index) => {
                const Icon = technique.icon
                return (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                    <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{technique.title}</h3>
                    <p className="text-gray-600 mb-4 text-center">{technique.description}</p>
                    <ul className="space-y-2">
                      {technique.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Construction Phases Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                مراحل تنظيف ما بعد البناء
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نتبع مراحل منظمة ومحترفة لضمان تنظيف شامل وفعال
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {constructionPhases.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="bg-green-100 p-4 rounded-full mr-4">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <p className="text-gray-700 leading-relaxed">{phase.details}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                فوائد تنظيف ما بعد البناء
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                تنظيف ما بعد البناء له فوائد عديدة على المشروع والعملاء
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="bg-green-100 p-4 rounded-full mr-4">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <p className="text-gray-700 leading-relaxed">{benefit.details}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                ما تشمله الخدمة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                قائمة شاملة بجميع خدمات تنظيف ما بعد البناء
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3" />
                  <span className="text-gray-900 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                كيف نعمل
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نتبع خطوات منظمة ومحترفة لضمان أفضل نتائج التنظيف
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <p className="text-gray-700 leading-relaxed text-sm">{step.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                نصائح ومعلومات مفيدة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم لك نصائح ومعلومات مفيدة لتنظيف ما بعد البناء
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tips.map((tip, index) => {
                const Icon = tip.icon
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="bg-yellow-100 p-4 rounded-full mr-4">
                        <Icon className="w-8 h-8 text-yellow-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {tip.tips.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                الأسئلة الشائعة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                إجابات على أكثر الأسئلة شيوعاً حول خدمات تنظيف ما بعد البناء
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 flex items-center">
                    <HelpCircle className="w-5 h-5 text-blue-600 ml-2" />
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                نخدم جميع أحياء جدة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدماتنا في جميع أحياء جدة مع ضمان الوصول السريع والخدمة المميزة
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-xl text-center hover:bg-blue-100 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-white text-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              احصل على موقع نظيف اليوم
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              لا تنتظر أكثر! اتصل بنا الآن واحصل على عرض سعر مجاني لتنظيف موقعك في جدة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+966592425077"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل بنا: 966592425077+
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