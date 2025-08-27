
import Image from 'next/image'
import Link from 'next/link'
import { 
  Building2, 
  CheckCircle, 
  Clock, 

  Shield, 
  Users, 
  Award, 
  Phone, 
  MessageCircle,
  MapPin,

  Briefcase,
  Monitor,
  Zap,

  Target,
  TrendingUp,

  Lightbulb,

  TestTube,

  Droplets,

  AlertTriangle,

  HelpCircle,
  Calendar,

} from 'lucide-react'

import PageSeo from '@/components/seo/PageSeo';
import ServiceSchema from '@/components/seo/ServiceSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';


const features = [
  {
    title: 'تنظيف المكاتب والمساحات',
    description: 'تنظيف شامل للمكاتب والمساحات المشتركة بأحدث التقنيات',
    icon: Building2,
    details: 'نقوم بتنظيف شامل لجميع المكاتب والمساحات المشتركة في الشركة. نستخدم معدات متخصصة ومواد تنظيف عالية الجودة لضمان نظافة مثالية. نراعي خصوصية كل مكتب ونحافظ على ترتيب الأوراق والمستندات المهمة.'
  },
  {
    title: 'تنظيف قاعات الاجتماعات',
    description: 'تنظيف وتعقيم قاعات الاجتماعات والمؤتمرات',
    icon: Briefcase,
    details: 'نركز على تنظيف قاعات الاجتماعات والمؤتمرات بشكل خاص حيث أنها أكثر الأماكن استخداماً من قبل الموظفين والزوار. نستخدم مواد تعقيم قوية لضمان بيئة صحية وآمنة.'
  },
  {
    title: 'تنظيف المطابخ الصغيرة',
    description: 'تنظيف المطابخ وغرف الاستراحة والكافيتريا',
    icon: Shield,
    details: 'نقوم بتنظيف المطابخ الصغيرة وغرف الاستراحة والكافيتريا بشكل دقيق. نركز على إزالة البقع والروائح الكريهة وتنظيف الأجهزة الكهربائية والثلاجات.'
  },
  {
    title: 'تنظيف الأجهزة والمعدات',
    description: 'تنظيف أجهزة الكمبيوتر والطابعات والمعدات المكتبية',
    icon: Monitor,
    details: 'نستخدم مواد تنظيف متخصصة وآمنة لتنظيف أجهزة الكمبيوتر والطابعات والمعدات المكتبية. نراعي حساسية هذه الأجهزة ونستخدم تقنيات خاصة لضمان عدم إتلافها.'
  }
]

const cleaningTechniques = [
  {
    title: 'التنظيف بالبخار',
    description: 'استخدام البخار عالي الحرارة لقتل الجراثيم والبكتيريا',
    icon: Droplets,
    benefits: ['قتل 99.9% من الجراثيم', 'إزالة البقع الصعبة', 'تنظيف عميق للمنسوجات', 'آمن للأجهزة الإلكترونية']
  },
  {
    title: 'التنظيف بالمواد المتخصصة',
    description: 'استخدام مواد تنظيف متخصصة لكل نوع من الأسطح',
    icon: TestTube,
    benefits: ['مواد آمنة للأجهزة', 'فعالية عالية', 'عدم إتلاف الأسطح', 'نتائج ممتازة']
  },
  {
    title: 'التنظيف بالتقنيات المتقدمة',
    description: 'استخدام أحدث التقنيات والمعدات المتخصصة',
    icon: Zap,
    benefits: ['كفاءة عالية', 'توفير الوقت', 'جودة احترافية', 'نتائج دائمة']
  },
  {
    title: 'التنظيف بالجدولة المنتظمة',
    description: 'تنظيف منتظم ومجدول حسب احتياجات الشركة',
    icon: Calendar,
    benefits: ['جدولة مرنة', 'عدم إزعاج العمل', 'نظافة مستمرة', 'تكلفة محسنة']
  }
]

const businessBenefits = [
  {
    title: 'تحسين إنتاجية الموظفين',
    description: 'البيئة النظيفة تحسن التركيز والإنتاجية',
    icon: TrendingUp,
    details: 'البيئة النظيفة والمنظمة تساعد الموظفين على التركيز وزيادة الإنتاجية. الدراسات أثبتت أن بيئة العمل النظيفة تزيد من كفاءة الموظفين بنسبة تصل إلى 15%.'
  },
  {
    title: 'تقليل الإجازات المرضية',
    description: 'منع انتشار الأمراض والعدوى في مكان العمل',
    icon: Shield,
    details: 'التنظيف المنتظم والتعقيم يقلل من انتشار الأمراض والعدوى في مكان العمل، مما يقلل من الإجازات المرضية ويزيد من حضور الموظفين.'
  },
  {
    title: 'تحسين صورة الشركة',
    description: 'البيئة النظيفة تعكس الاحترافية والاهتمام بالتفاصيل',
    icon: Award,
    details: 'البيئة النظيفة والمنظمة تعكس احترافية الشركة واهتمامها بالتفاصيل، مما يحسن من صورة الشركة أمام العملاء والزوار.'
  },
  {
    title: 'توفير التكاليف',
    description: 'الوقاية من الأضرار وتقليل الحاجة للإصلاحات',
    icon: Target,
    details: 'التنظيف المنتظم يمنع تراكم الأوساخ والأضرار التي قد تحتاج إصلاحات مكلفة في المستقبل، مما يوفر على الشركة تكاليف إضافية.'
  }
]

const services = [
  'تنظيف المكاتب والمساحات المشتركة',
  'تنظيف الزجاج والنوافذ',
  'تنظيف المطابخ وغرف الاجتماعات',
  'تعقيم الأسطح المشتركة',
  'تنظيف دورات المياه',
  'تنظيف المداخل والاستقبال',
  'تنظيف الأثاث المكتبي',
  'تنظيف الأرضيات والسجاد',
  'إزالة الغبار من الأجهزة',
  'تعطير المكان',
  'تنظيف قاعات المؤتمرات',
  'تنظيف الممرات والسلالم',
  'تنظيف غرف الاجتماعات',
  'تنظيف المطابخ والكافيتريا',
  'تنظيف أجهزة التكييف',
  'تنظيف الإضاءات والثريات'
]

const process = [
  {
    step: '01',
    title: 'التقييم والتخطيط',
    description: 'تقييم شامل للمكتب وتحديد احتياجات التنظيف',
    details: 'نقوم بزيارة المكتب لتقييم شامل للمساحات والاحتياجات. نحدد نوع التنظيف المطلوب، المساحات التي تحتاج اهتمام خاص، ونضع خطة عمل مفصلة تناسب جدول العمل.'
  },
  {
    step: '02',
    title: 'إعداد المعدات والمواد',
    description: 'تحضير المعدات والمواد المتخصصة للتنظيف',
    details: 'نحضر جميع المعدات والمواد المتخصصة المطلوبة للتنظيف. نتأكد من جودة المواد وملاءمتها لنوع الأسطح والأجهزة الموجودة في المكتب.'
  },
  {
    step: '03',
    title: 'بدء عملية التنظيف',
    description: 'تنفيذ خطة التنظيف بشكل منظم ومحترف',
    details: 'نبدأ بتنفيذ خطة التنظيف بشكل منظم ومحترف. نراعي ترتيب العمل لضمان كفاءة عالية وعدم إزعاج الموظفين أو العملاء.'
  },
  {
    step: '04',
    title: 'المراجعة والتسليم',
    description: 'مراجعة شاملة للعمل والتأكد من الجودة',
    details: 'في النهاية، نقوم بمراجعة شاملة للعمل المنجز. نتأكد من تحقيق جميع المعايير المطلوبة ونحصل على رضا العميل.'
  }
]

const tips = [
  {
    title: 'نصائح للحفاظ على نظافة المكتب',
    icon: Lightbulb,
    tips: [
      'نظف الأسطح يومياً لمنع تراكم الغبار',
      'أفرغ سلات المهملات بانتظام',
      'نظف المطبخ بعد كل استخدام',
      'استخدم معقمات اليدين',
      'احتفظ بمواد تنظيف أساسية',
      'نظف الأجهزة الإلكترونية بانتظام',
      'أبقِ الملفات والأوراق منظمة',
      'نظف النوافذ شهرياً'
    ]
  },
  {
    title: 'أخطاء شائعة في تنظيف المكاتب',
    icon: AlertTriangle,
    tips: [
      'استخدام مواد تنظيف قوية على الأجهزة',
      'إهمال تنظيف الأماكن المخفية',
      'عدم تنظيف أجهزة التكييف',
      'إهمال تعقيم الأسطح المشتركة',
      'عدم تنظيف المطابخ بشكل دقيق',
      'إهمال تنظيف قاعات الاجتماعات',
      'عدم تنظيف المداخل والاستقبال',
      'إهمال تعطير المكان'
    ]
  },
  {
    title: 'جدولة التنظيف المثالية',
    icon: Calendar,
    tips: [
      'تنظيف يومي للمساحات المشتركة',
      'تنظيف أسبوعي شامل',
      'تنظيف شهري للأجهزة',
      'تعقيم أسبوعي للأسطح',
      'تنظيف ربع سنوي عميق',
      'صيانة دورية للمعدات',
      'تحديث خطة التنظيف',
      'تدريب الموظفين على النظافة'
    ]
  }
]

const faq = [
  {
    question: 'هل تقدمون خدمة تنظيف في ساعات العمل؟',
    answer: 'نعم، نقدم خدمة تنظيف مرنة تناسب جدول عملك. يمكننا العمل في ساعات العمل أو بعد انتهاء الدوام حسب تفضيلك.'
  },
  {
    question: 'هل تستخدمون مواد آمنة للأجهزة الإلكترونية؟',
    answer: 'نعم، نستخدم مواد تنظيف متخصصة وآمنة للأجهزة الإلكترونية. نراعي حساسية هذه الأجهزة ونستخدم تقنيات خاصة.'
  },
  {
    question: 'كم مرة أحتاج لتنظيف المكتب؟',
    answer: 'نوصي بتنظيف يومي للمساحات المشتركة وتنظيف أسبوعي شامل. يمكننا وضع خطة تنظيف مخصصة تناسب احتياجاتك.'
  },
  {
    question: 'هل تقدمون خدمة تعقيم؟',
    answer: 'نعم، نقدم خدمة تعقيم شاملة للأسطح والأجهزة المشتركة. نستخدم مواد تعقيم قوية وآمنة.'
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

export default function OfficeCleaningPage() {
  return (
    <>
      <PageSeo
        title="تنظيف المكاتب في جدة | شركة النظافة المثالية"
        description="خدمة تنظيف مكاتب احترافية في جدة تضمن بيئة عمل صحية ونظيفة. اتصل بنا الآن!"
        image="/images/blog/professional-cleaning.png"
        url="https://cleanwithfresh.com/services/office-cleaning"
        keywords="تنظيف مكاتب جدة, شركة تنظيف مكاتب, تنظيف شركات, تنظيف بيئة عمل, خدمات تنظيف جدة, تنظيف أثاث مكتبي, تعقيم مكاتب"
        canonicalUrl="https://cleanwithfresh.com/services/office-cleaning"
      />
      <ServiceSchema
        serviceType="تنظيف المكاتب"
        description="خدمة تنظيف مكاتب احترافية في جدة تضمن بيئة عمل صحية ونظيفة."
        providerName="شركة النظافة المثالية"
        providerUrl="https://cleanwithfresh.com"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", url: "https://cleanwithfresh.com" },
          { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
          { name: "تنظيف المكاتب", url: "https://cleanwithfresh.com/services/office-cleaning" }
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
                  <Building2 className="w-8 h-8 mr-3 text-yellow-400" />
                  <span className="bg-yellow-400/20 text-yellow-400 py-1 px-4 rounded-full text-sm font-medium">
                    خدمة تنظيف المكاتب
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  تنظيف المكاتب في جدة
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  نقدم خدمات تنظيف احترافية ومتخصصة للمكاتب والشركات في جدة. 
                  نستخدم أحدث التقنيات والمعدات المتخصصة لضمان بيئة عمل نظيفة وصحية لموظفيك.
                  فريقنا المحترف يضمن لك مكتب نظيف ومنظم يعكس احترافية شركتك.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+966592425077"
                    className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل الآن لتنظيف مكتبك في جدة
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
              <div className="relative pt-12">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/blog/professional-cleaning.png"
                    alt="تنظيف المكاتب في جدة"
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
                نتميز بخبرة 15+ عام في مجال تنظيف المكاتب مع فريق محترف ومعدات حديثة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">فريق محترف</h3>
                <p className="text-gray-600">فريق عمل مدرب ومحترف مع خبرة 15+ عام في تنظيف المكاتب</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">مواد آمنة</h3>
                <p className="text-gray-600">نستخدم مواد تنظيف آمنة للأجهزة الإلكترونية والأسطح الحساسة</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">جودة عالية</h3>
                <p className="text-gray-600">نضمن لك أعلى معايير الجودة والاحترافية في جميع خدماتنا</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">خدمة مرنة</h3>
                <p className="text-gray-600">خدمة مسائية بعد ساعات العمل لتجنب إزعاج الموظفين</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                خدمات تنظيف المكاتب
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم مجموعة شاملة من خدمات تنظيف المكاتب لتلبية جميع احتياجات شركتك
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

        {/* Business Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                فوائد تنظيف المكاتب على الأعمال
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                التنظيف المنتظم للمكاتب له فوائد عديدة على الأعمال والموظفين
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessBenefits.map((benefit, index) => {
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                ما تشمله الخدمة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                قائمة شاملة بجميع الخدمات المقدمة في تنظيف المكاتب
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
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                نصائح ومعلومات مفيدة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم لك نصائح ومعلومات مفيدة للحفاظ على نظافة مكتبك
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
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                الأسئلة الشائعة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                إجابات على أكثر الأسئلة شيوعاً حول خدمات تنظيف المكاتب
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
        <section className="py-20 bg-white">
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
              احصل على مكتب نظيف اليوم
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              لا تنتظر أكثر! اتصل بنا الآن واحصل على عرض سعر مجاني لتنظيف مكتبك في جدة
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