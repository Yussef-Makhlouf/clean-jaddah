
import Image from 'next/image'
import Link from 'next/link'
import { 
  Home, 
  CheckCircle, 
  Clock, 

  Shield, 
  Users, 
 
  Phone, 
  MessageCircle,
  MapPin,


  Droplets,
  Wind,

  Zap,
  Heart,
  Leaf,
  Target,

  Lightbulb,
  BookOpen,

  Sparkles,
  Star,
  Award,


} from 'lucide-react'
import PageSeo from '@/components/seo/PageSeo';
import ServiceSchema from '@/components/seo/ServiceSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';



const features = [
  {
    title: 'تنظيف شامل للمنزل',
    description: 'تنظيف جميع الغرف والمساحات بأحدث المعدات والمواد المتخصصة',
    icon: Home,
    details: 'نقوم بتنظيف شامل لجميع غرف المنزل بما في ذلك غرف النوم، غرف المعيشة، الممرات، والمساحات المشتركة. نستخدم معدات متخصصة ومواد تنظيف عالية الجودة لضمان نظافة مثالية.'
  },
  {
    title: 'تنظيف المطبخ والحمامات',
    description: 'تنظيف عميق للمطابخ والحمامات مع إزالة البقع والروائح الكريهة',
    icon: Shield,
    details: 'نركز على تنظيف المطابخ والحمامات بشكل خاص حيث أنها أكثر الأماكن عرضة للبكتيريا والجراثيم. نستخدم مواد تنظيف قوية وآمنة لإزالة البقع الصعبة والروائح الكريهة.'
  },
  {
    title: 'تنظيف السجاد والأرضيات',
    description: 'تنظيف السجاد والموكيت والأرضيات بطرق متخصصة ومعدات حديثة',
    icon: Sparkles,
    details: 'نستخدم معدات متخصصة لتنظيف السجاد والموكيت والأرضيات. نطبق تقنيات مختلفة حسب نوع الأرضية (رخام، سيراميك، باركيه، موكيت) لضمان أفضل النتائج.'
  },
  {
    title: 'تنظيف النوافذ والمرايا',
    description: 'تلميع النوافذ والمرايا بدون خطوط أو آثار باستخدام تقنيات متخصصة',
    icon: Star,
    details: 'نستخدم تقنيات متخصصة لتنظيف النوافذ والمرايا بدون ترك خطوط أو آثار. نطبق طرق مختلفة للنوافذ الداخلية والخارجية لضمان نظافة مثالية.'
  }
]

const cleaningTechniques = [
  {
    title: 'التنظيف بالبخار',
    description: 'استخدام البخار عالي الحرارة لقتل الجراثيم والبكتيريا',
    icon: Droplets,
    benefits: ['قتل 99.9% من الجراثيم', 'إزالة البقع الصعبة', 'تنظيف عميق للمنسوجات', 'آمن للأطفال والحيوانات']
  },
  {
    title: 'التنظيف بالضغط العالي',
    description: 'استخدام الماء المضغوط لتنظيف الأسطح الصلبة',
    icon: Wind,
    benefits: ['إزالة الأوساخ العنيدة', 'تنظيف الأرضيات الخارجية', 'تنظيف الواجهات', 'توفير المياه']
  },
  {
    title: 'التنظيف بالمواد الطبيعية',
    description: 'استخدام مواد تنظيف طبيعية وصديقة للبيئة',
    icon: Leaf,
    benefits: ['آمن للعائلة', 'صديق للبيئة', 'غير سام', 'فعال في التنظيف']
  },
  {
    title: 'التنظيف بالتقنيات المتقدمة',
    description: 'استخدام أحدث التقنيات والمعدات المتخصصة',
    icon: Zap,
    benefits: ['كفاءة عالية', 'نتائج ممتازة', 'توفير الوقت', 'جودة احترافية']
  }
]

const healthBenefits = [
  {
    title: 'تحسين جودة الهواء',
    description: 'إزالة الغبار والمواد المسببة للحساسية من الهواء',
    icon: Wind,
    details: 'يساعد التنظيف المنتظم على تحسين جودة الهواء الداخلي من خلال إزالة الغبار، حبوب اللقاح، والمواد المسببة للحساسية. هذا مهم بشكل خاص للأشخاص الذين يعانون من الربو أو الحساسية.'
  },
  {
    title: 'منع انتشار الأمراض',
    description: 'قتل الجراثيم والبكتيريا المسببة للأمراض',
    icon: Shield,
    details: 'المنزل النظيف يساعد في منع انتشار الأمراض والعدوى. التنظيف المنتظم يقلل من وجود البكتيريا والفيروسات على الأسطح المشتركة.'
  },
  {
    title: 'تحسين الصحة النفسية',
    description: 'البيئة النظيفة تحسن المزاج والصحة النفسية',
    icon: Heart,
    details: 'البيئة النظيفة والمنظمة لها تأثير إيجابي على الصحة النفسية. تساعد في تقليل التوتر وتحسين المزاج العام للعائلة.'
  },
  {
    title: 'زيادة الإنتاجية',
    description: 'البيئة النظيفة تساعد على التركيز والإنتاجية',
    icon: Target,
    details: 'المنزل النظيف والمنظم يساعد على التركيز وزيادة الإنتاجية، خاصة للأشخاص الذين يعملون من المنزل أو الطلاب.'
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

const process = [
  {
    step: '01',
    title: 'التقييم الأولي',
    description: 'نقوم بتقييم شامل للمنزل وتحديد احتياجات التنظيف المحددة',
    details: 'في هذه المرحلة، يقوم فريقنا المحترف بزيارة منزلك لتقييم شامل. نحدد نوع التنظيف المطلوب، المساحات التي تحتاج اهتمام خاص، ونضع خطة عمل مفصلة تناسب احتياجاتك.'
  },
  {
    step: '02',
    title: 'إعداد الخطة',
    description: 'نضع خطة تنظيف مخصصة تناسب مساحة منزلك ونوع التنظيف المطلوب',
    details: 'بناءً على التقييم الأولي، نضع خطة تنظيف مفصلة تشمل جميع المراحل، المواد المستخدمة، والوقت المتوقع. نراعي احتياجاتك الخاصة ونضمن تغطية جميع المناطق.'
  },
  {
    step: '03',
    title: 'بدء التنظيف',
    description: 'نبدأ بتنظيف شامل لجميع الغرف والمساحات باستخدام أحدث التقنيات',
    details: 'نبدأ العمل وفقاً للخطة الموضوعة. نستخدم معدات متخصصة ومواد تنظيف عالية الجودة. نراعي ترتيب العمل لضمان كفاءة عالية وعدم إزعاج العائلة.'
  },
  {
    step: '04',
    title: 'المراجعة النهائية',
    description: 'نتأكد من جودة العمل ورضا العميل قبل الانتهاء',
    details: 'في النهاية، نقوم بمراجعة شاملة للعمل المنجز. نتأكد من تحقيق جميع المعايير المطلوبة ونحصل على رضا العميل. نقدم نصائح للحفاظ على النظافة.'
  }
]

const tips = [
  {
    title: 'نصائح للحفاظ على نظافة المنزل',
    icon: Lightbulb,
    tips: [
      'نظف الأسطح يومياً لمنع تراكم الغبار',
      'اغسل الملابس والمناشف بانتظام',
      'أفرغ سلة المهملات يومياً',
      'نظف المطبخ بعد كل وجبة',
      'استخدم مواد تنظيف مناسبة لكل سطح',
      'احتفظ بجدول تنظيف منتظم',
      'استخدم مراوح التهوية في الحمامات',
      'نظف السجاد بالمكنسة الكهربائية يومياً'
    ]
  },
  {
    title: 'أخطاء شائعة في التنظيف',
    icon: BookOpen,
    tips: [
      'استخدام مواد تنظيف قوية على الأسطح الحساسة',
      'عدم قراءة تعليمات مواد التنظيف',
      'خلط مواد التنظيف المختلفة',
      'إهمال تنظيف المعدات المستخدمة',
      'عدم تهوية المنزل أثناء التنظيف',
      'استخدام مناشف قذرة للتنظيف',
      'إهمال تنظيف الأماكن المخفية',
      'عدم ارتداء قفازات الحماية'
    ]
  },
  {
    title: 'مواد تنظيف طبيعية',
    icon: Leaf,
    tips: [
      'استخدم الخل الأبيض لتنظيف الزجاج',
      'استخدم بيكربونات الصوديوم لإزالة البقع',
      'استخدم عصير الليمون لتلميع المعادن',
      'استخدم زيت الزيتون لتلميع الخشب',
      'استخدم الملح لتنظيف الأواني',
      'استخدم صودا الخبز لتنظيف السجاد',
      'استخدم الشاي الأخضر لتنظيف المرايا',
      'استخدم الزيوت العطرية للتعطير'
    ]
  }
]

export default function HomeCleaningPage() {
  return (
    <>
      <PageSeo
        title="تنظيف المنازل في جدة | شركة النظافة المثالية"
        description="خدمة تنظيف منازل شاملة في جدة بأعلى معايير الجودة. اتصل بنا الآن!"
        image="/images/blog/home-disinfection.png"
        url="https://cleanwithfresh.com/services/home-cleaning"
        keywords="تنظيف منازل جدة, شركة تنظيف منازل, تنظيف غرف, تنظيف مطبخ, تنظيف حمامات, تنظيف أرضيات, تنظيف سجاد, خدمات تنظيف جدة"
        canonicalUrl="https://cleanwithfresh.com/services/home-cleaning"
      />
      <ServiceSchema
        serviceType="تنظيف المنازل"
        description="خدمة تنظيف منازل شاملة في جدة بأعلى معايير الجودة."
        providerName="شركة النظافة المثالية"
        providerUrl="https://cleanwithfresh.com"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", url: "https://cleanwithfresh.com" },
          { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
          { name: "تنظيف المنازل", url: "https://cleanwithfresh.com/services/home-cleaning" }
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
                  <Home className="w-8 h-8 mr-3 text-yellow-400" />
                  <span className="bg-yellow-400/20 text-yellow-400 py-1 px-4 rounded-full text-sm font-medium">
                    خدمة تنظيف المنازل
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  تنظيف المنازل في جدة
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  نقدم خدمة تنظيف شاملة ومتخصصة للمنازل والشقق في جدة وأحيائها المختلفة. 
                  نستخدم أحدث التقنيات والمعدات المتخصصة لضمان نظافة مثالية وصحة عائلتك.
                  فريقنا المحترف يضمن لك منزل نظيف وصحي لجميع أفراد أسرتك بأعلى معايير الجودة والاحترافية.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+966592425077"
                    className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل الآن لحجز تنظيف منزلك في جدة
                  </a>
                  <Link 
                    href="https://wa.me/966592425077"
                    className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                     اطلب خدمات النظافة المنزلية عبر واتساب
                  </Link>
                </div>
              </div>
              <div className="relative pt-12">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/blog/home-disinfection.png"
                    alt="تنظيف المنازل في جدة"
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
                نتميز بخبرة 15+ عام في مجال التنظيف مع فريق محترف ومعدات حديثة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">فريق محترف</h3>
                <p className="text-gray-600">فريق عمل مدرب ومحترف مع خبرة 15+ عام في مجال التنظيف</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">مواد آمنة</h3>
                <p className="text-gray-600">نستخدم مواد تنظيف آمنة وصديقة للبيئة وآمنة للأطفال</p>
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
                <h3 className="text-xl font-bold mb-3 text-gray-900">خدمة سريعة</h3>
                <p className="text-gray-600">نصل إليك في الوقت المحدد وننهي العمل بسرعة وكفاءة عالية</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                ما تشمله خدمة تنظيف المنازل
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدمة تنظيف شاملة ومتخصصة تشمل جميع جوانب المنزل لضمان نظافة مثالية
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

        {/* Health Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                فوائد التنظيف المنتظم على الصحة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                التنظيف المنتظم له فوائد صحية عديدة على جميع أفراد العائلة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {healthBenefits.map((benefit, index) => {
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
                نقدم لك نصائح ومعلومات مفيدة للحفاظ على نظافة منزلك
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
              احصل على منزل نظيف اليوم
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              لا تنتظر أكثر! اتصل بنا الآن واحصل على عرض سعر مجاني لتنظيف منزلك في جدة
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