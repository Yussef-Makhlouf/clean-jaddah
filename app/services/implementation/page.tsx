
import Image from 'next/image'
import Link from 'next/link'
import { 
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
  Settings,
  Target,
  FileText,

  CheckSquare,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Zap,
  Heart,
  Leaf,
  Building2,
  Briefcase,
  Home,
  Car,
  GraduationCap,
  ShoppingBag,
  HelpCircle,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Eye,
  Clipboard,
  CalendarDays,
  Timer,
  ShieldCheck,
  Wrench,
  Sparkles as SparklesIcon,
  Droplets,
  Wind,
  Sun,
  Moon,
  Coffee,
  Utensils,
  Bed,
  Sofa,
  Tv,
  Monitor,
  Printer,
  BookOpen,
  GraduationCap as Cap,
  Briefcase as Case,
  ShoppingBag as Bag,
  Home as House,
  Car as Vehicle,
  Building2 as Building,
  Users as Team,
  Clock as Time,
  Shield as Protection,
  Award as Quality,
  Phone as Call,
  MessageCircle as Chat,
  MapPin as Location,
  Calendar as Schedule,
  Sparkles as QualityIcon,
  Settings as Config,
  Target as Goal,
  FileText as Document,

  CheckSquare as Checklist,
  AlertCircle as Warning,
  Lightbulb as Idea,
  TrendingUp as Growth,
  Zap as Speed,
  Heart as Care,
  Leaf as Eco,
  HelpCircle as Help,
  ArrowRight as Next,
  Play as Start,
  Pause as Stop,
  RotateCcw as Reset,
  Eye as View,
  Clipboard as Board,
  CalendarDays as Days,
  Timer as Stopwatch,
  ShieldCheck as Verified,
  Wrench as Repair,
  Droplets as Water,
  Wind as Air,
  Sun as Day,
  Moon as Night,
  Coffee as Drink,
  Utensils as Kitchen,
  Bed as Sleep,
  Sofa as Living,
  Tv as Television,
  Monitor as Screen,
  Printer as Print,
  BookOpen as Book,
  PenTool,

} from 'lucide-react'



const implementationFeatures = [
  {
    title: 'منهجية علمية',
    description: 'اتباع منهجية علمية مدروسة ومجربة',
    icon: Target,
    details: 'نتبع منهجية علمية مدروسة ومجربة في تنفيذ جميع خدمات التنظيف. نطبق أحدث المعايير العالمية ونستخدم تقنيات متقدمة لضمان أفضل النتائج.'
  },
  {
    title: 'تخطيط استراتيجي',
    description: 'تخطيط استراتيجي شامل لكل مشروع',
    icon: Settings,
    details: 'نضع خطة استراتيجية شاملة لكل مشروع تنظيف. نحلل المكان ونحدد الأولويات ونضع جدول عمل محترف.'
  },
  {
    title: 'تنفيذ احترافي',
    description: 'تنفيذ احترافي بأحدث المعدات والمواد',
    icon: PenTool,
    details: 'نستخدم أحدث المعدات والمواد المتخصصة في تنفيذ خدمات التنظيف. نضمن كفاءة عالية وجودة متميزة.'
  },
  {
    title: 'مراقبة الجودة',
    description: 'مراقبة مستمرة لجودة العمل',
    icon: Eye,
    details: 'نراقب جودة العمل بشكل مستمر خلال جميع مراحل التنفيذ. نتأكد من تطبيق جميع المعايير المطلوبة.'
  }
]

const implementationMethodologies = [
  {
    title: 'منهجية التقييم الشامل',
    description: 'تقييم شامل للمكان واحتياجات التنظيف',
    icon: Clipboard,
    benefits: ['تحليل المكان', 'تحديد الأولويات', 'وضع الخطة', 'تحديد الموارد']
  },
  {
    title: 'منهجية التنفيذ المنظم',
    description: 'تنفيذ منظم ومتسلسل للخدمات',
    icon: Play,
    benefits: ['ترتيب منطقي', 'كفاءة عالية', 'توفير الوقت', 'نتائج مضمونة']
  },
  {
    title: 'منهجية المراقبة المستمرة',
    description: 'مراقبة مستمرة لجودة العمل',
    icon: Eye,
    benefits: ['جودة عالية', 'تصحيح الأخطاء', 'تحسين الأداء', 'رضا العملاء']
  },
  {
    title: 'منهجية التقييم النهائي',
    description: 'تقييم نهائي شامل للعمل المنجز',
    icon: CheckSquare,
    benefits: ['تأكيد الجودة', 'رضا العميل', 'تسجيل النتائج', 'تحسين المستقبل']
  }
]

const implementationPhases = [
  {
    title: 'المرحلة التحضيرية',
    description: 'تحضير شامل للمشروع',
    icon: Settings,
    details: 'نبدأ بالمرحلة التحضيرية التي تشمل تحليل المكان وتحديد احتياجات التنظيف ووضع الخطة الاستراتيجية. نحدد الموارد المطلوبة والجدول الزمني.'
  },
  {
    title: 'مرحلة التنفيذ',
    description: 'تنفيذ الخدمات باحترافية',
    icon: Play,
    details: 'ننتقل لمرحلة التنفيذ حيث نطبق الخطة الموضوعة بأحدث المعدات والمواد. نراعي جميع التفاصيل ونضمن الجودة العالية.'
  },
  {
    title: 'مرحلة المراقبة',
    description: 'مراقبة مستمرة للجودة',
    icon: Eye,
    details: 'نراقب جودة العمل بشكل مستمر خلال التنفيذ. نتأكد من تطبيق جميع المعايير ونصحح أي أخطاء فوراً.'
  },
  {
    title: 'مرحلة التقييم',
    description: 'تقييم نهائي شامل',
    icon: CheckSquare,
    details: 'نختتم بالتقييم النهائي الشامل للعمل المنجز. نتأكد من رضا العميل ونحصل على التغذية الراجعة.'
  }
]

const bestPractices = [
  {
    title: 'استخدام المواد المناسبة',
    description: 'اختيار المواد المناسبة لكل سطح',
    icon: Droplets,
    details: 'نختار المواد المناسبة لكل سطح ونوع التلوث. نستخدم مواد آمنة وفعالة تضمن أفضل النتائج.'
  },
  {
    title: 'اتباع الترتيب المنطقي',
    description: 'ترتيب منطقي لخطوات التنظيف',
    icon: ArrowRight,
    details: 'نتبع ترتيباً منطقياً لخطوات التنظيف. نبدأ من الأعلى إلى الأسفل ومن الداخل إلى الخارج.'
  },
  {
    title: 'الاهتمام بالتفاصيل',
    description: 'الاهتمام بجميع التفاصيل الصغيرة',
    icon: Eye,
    details: 'نولي اهتماماً خاصاً للتفاصيل الصغيرة التي قد تغفل عنها. نضمن تنظيفاً شاملاً ودقيقاً.'
  },
  {
    title: 'ضمان السلامة',
    description: 'ضمان سلامة العمال والعملاء',
    icon: Shield,
    details: 'نراعي جميع إجراءات السلامة خلال العمل. نحمي العمال والعملاء من أي مخاطر محتملة.'
  }
]

const implementationAreas = [
  {
    title: 'تنظيف المنازل',
    description: 'تنظيف شامل للمنازل والشقق',
    icon: House,
    details: 'نطبق منهجية شاملة لتنظيف المنازل والشقق. نراعي جميع المساحات والأسطح لضمان تنظيف مثالي.'
  },
  {
    title: 'تنظيف المكاتب',
    description: 'تنظيف المكاتب والشركات',
    icon: Case,
    details: 'نطبق منهجية متخصصة لتنظيف المكاتب والشركات. نراعي ساعات العمل ونستخدم تقنيات متقدمة.'
  },
  {
    title: 'تنظيف المراكز التجارية',
    description: 'تنظيف المراكز التجارية والمحلات',
    icon: Bag,
    details: 'نطبق منهجية احترافية لتنظيف المراكز التجارية والمحلات. نراعي كثافة الزوار ونطبق أعلى معايير النظافة.'
  },
  {
    title: 'تنظيف المدارس',
    description: 'تنظيف المدارس والجامعات',
    icon: Cap,
    details: 'نطبق منهجية آمنة لتنظيف المدارس والجامعات. نراعي سلامة الطلاب ونستخدم مواد آمنة.'
  }
]

const implementationServices = [
  'تقييم شامل للمكان',
  'وضع خطة تنظيف مخصصة',
  'تحضير المعدات والمواد',
  'تنفيذ الخدمات باحترافية',
  'مراقبة جودة العمل',
  'تقييم نهائي شامل',
  'متابعة وضمان الجودة',
  'تسجيل النتائج والتوصيات',
  'تحسين المنهجية',
  'تدريب الفريق المستمر',
  'تطوير المعايير',
  'تحديث التقنيات',
  'تحليل الأداء',
  'تطوير الحلول',
  'تحسين الكفاءة',
  'ضمان الاستدامة'
]

const implementationProcess = [
  {
    step: '01',
    title: 'التقييم والتحليل',
    description: 'تقييم شامل للمكان وتحليل احتياجات التنظيف',
    details: 'نبدأ بتقييم شامل للمكان وتحليل احتياجات التنظيف. نحدد نوع التلوث ودرجته ونضع خطة عمل مفصلة.'
  },
  {
    step: '02',
    title: 'التخطيط الاستراتيجي',
    description: 'وضع خطة استراتيجية شاملة للمشروع',
    details: 'نضع خطة استراتيجية شاملة للمشروع تشمل الموارد المطلوبة والجدول الزمني والمعايير المطلوبة.'
  },
  {
    step: '03',
    title: 'التحضير والتجهيز',
    description: 'تحضير جميع المعدات والمواد المطلوبة',
    details: 'نحضر جميع المعدات والمواد المطلوبة للتنفيذ. نتأكد من جودة المواد وملاءمتها للمشروع.'
  },
  {
    step: '04',
    title: 'بدء التنفيذ',
    description: 'بدء تنفيذ الخدمات باحترافية عالية',
    details: 'نبدأ بتنفيذ الخدمات باحترافية عالية. نراعي جميع المعايير ونضمن الجودة المطلوبة.'
  },
  {
    step: '05',
    title: 'المراقبة المستمرة',
    description: 'مراقبة مستمرة لجودة العمل',
    details: 'نراقب جودة العمل بشكل مستمر خلال التنفيذ. نتأكد من تطبيق جميع المعايير ونصحح أي أخطاء.'
  },
  {
    step: '06',
    title: 'التقييم النهائي',
    description: 'تقييم نهائي شامل للعمل المنجز',
    details: 'نختتم بالتقييم النهائي الشامل للعمل المنجز. نتأكد من رضا العميل ونحصل على التغذية الراجعة.'
  }
]

const implementationTips = [
  {
    title: 'اختيار الوقت المناسب',
    description: 'اختار الوقت المناسب للتنظيف',
    icon: Clock,
    details: 'اختر الوقت المناسب للتنظيف لتجنب الإزعاج ولضمان أفضل النتائج. تجنب أوقات الذروة في المكاتب والمراكز التجارية.'
  },
  {
    title: 'استخدام المواد المناسبة',
    description: 'استخدام المواد المناسبة لكل سطح',
    icon: Droplets,
    details: 'استخدم المواد المناسبة لكل سطح ونوع التلوث. تجنب استخدام مواد قوية على الأسطح الحساسة.'
  },
  {
    title: 'اتباع الترتيب المنطقي',
    description: 'اتباع ترتيب منطقي للتنظيف',
    icon: ArrowRight,
    details: 'اتبع ترتيباً منطقياً للتنظيف. ابدأ من الأعلى إلى الأسفل ومن الداخل إلى الخارج.'
  },
  {
    title: 'الاهتمام بالتفاصيل',
    description: 'الاهتمام بجميع التفاصيل الصغيرة',
    icon: Eye,
    details: 'اهتم بجميع التفاصيل الصغيرة التي قد تغفل عنها. هذه التفاصيل تحدث فرقاً كبيراً في النتيجة النهائية.'
  },
  {
    title: 'ضمان التهوية',
    description: 'ضمان تهوية جيدة أثناء التنظيف',
    icon: Wind,
    details: 'تأكد من تهوية جيدة أثناء التنظيف خاصة عند استخدام المواد الكيميائية. هذا يحمي من الأبخرة الضارة.'
  },
  {
    title: 'المراقبة المستمرة',
    description: 'مراقبة مستمرة لجودة العمل',
    icon: Eye,
    details: 'راقب جودة العمل بشكل مستمر. تأكد من تطبيق جميع المعايير المطلوبة.'
  }
]

const faq = [
  {
    question: 'ما هي منهجية تنفيذ خدمات التنظيف؟',
    answer: 'نتبع منهجية علمية مدروسة تشمل التقييم الشامل والتخطيط الاستراتيجي والتنفيذ الاحترافي والمراقبة المستمرة والتقييم النهائي. نطبق أحدث المعايير العالمية ونستخدم تقنيات متقدمة.'
  },
  {
    question: 'كيف تضمنون جودة العمل؟',
    answer: 'نضمن جودة العمل من خلال المراقبة المستمرة خلال جميع مراحل التنفيذ. نتأكد من تطبيق جميع المعايير المطلوبة ونصحح أي أخطاء فوراً. نختتم بالتقييم النهائي الشامل.'
  },
  {
    question: 'ما هي المعايير التي تتبعونها؟',
    answer: 'نتبع معايير عالمية في تنفيذ خدمات التنظيف. نطبق أحدث التقنيات ونستخدم مواد آمنة وفعالة. نراعي جميع إجراءات السلامة ونضمن النتائج المطلوبة.'
  },
  {
    question: 'كيف تخططون للمشاريع الكبيرة؟',
    answer: 'نخطط للمشاريع الكبيرة بشكل استراتيجي شامل. نحلل المكان بدقة ونحدد الأولويات ونضع جدول عمل محترف. نراعي جميع المتغيرات ونضمن التنفيذ السلس.'
  },
  {
    question: 'ما هي مدة تنفيذ المشروع؟',
    answer: 'تختلف مدة تنفيذ المشروع حسب حجمه وتعقيده. نحدد المدة بدقة خلال مرحلة التخطيط ونلتزم بالجدول الزمني المتفق عليه. نضمن التنفيذ في الوقت المطلوب.'
  },
  {
    question: 'كيف تتعاملون مع المشاكل الطارئة؟',
    answer: 'نمتلك فريقاً مدرباً على التعامل مع المشاكل الطارئة. لدينا خطط بديلة وحلول سريعة لأي مشكلة قد تواجهنا. نضمن استمرارية العمل دون انقطاع.'
  }
]

const serviceAreas = [
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
  'حي الكورنيش الشمالي',
  'حي الكورنيش الجنوبي',
  'حي الشاطئ الشمالي',
  'حي الشاطئ الجنوبي',
  'حي الروضة الشرقية',
  'حي الروضة الغربية',
  'حي البلد القديم',
  'حي البلد الجديد',
  'حي العزيزية الشرقية',
  'حي العزيزية الغربية'
]



export default function ImplementationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className=" py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto pt-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              منهجية تنفيذ خدمات التنظيف في جدة
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              نتبع منهجية علمية احترافية في تنفيذ جميع خدمات التنظيف في جدة. 
              نطبق أحدث المعايير العالمية ونستخدم تقنيات متقدمة لضمان أفضل النتائج.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+966592425077"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل الآن لمعرفة منهجية تنفيذ خدمات التنظيف في جدة
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              مميزات منهجيتنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتميز بمنهجية علمية احترافية تضمن أفضل النتائج
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <p className="text-sm text-gray-500">{feature.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              منهجيات التنفيذ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نطبق منهجيات علمية متقدمة في تنفيذ خدمات التنظيف
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationMethodologies.map((methodology, index) => {
              const Icon = methodology.icon
              return (
                <div key={index} className="p-6 rounded-xl bg-white hover:bg-blue-50 transition-colors shadow-sm">
                  <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{methodology.title}</h3>
                  <p className="text-gray-600 mb-4">{methodology.description}</p>
                  <ul className="space-y-2">
                    {methodology.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
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

      {/* Phases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              مراحل التنفيذ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع مراحل منظمة ومحترفة في تنفيذ جميع المشاريع
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationPhases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <div key={index} className="p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{phase.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{phase.description}</p>
                  <p className="text-sm text-gray-500">{phase.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              أفضل الممارسات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نطبق أفضل الممارسات العالمية في تنفيذ خدمات التنظيف
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestPractices.map((practice, index) => {
              const Icon = practice.icon
              return (
                <div key={index} className="p-6 rounded-xl bg-white hover:bg-blue-50 transition-colors shadow-sm">
                  <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{practice.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{practice.description}</p>
                  <p className="text-sm text-gray-500">{practice.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Implementation Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              مجالات التنفيذ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نطبق منهجيتنا في جميع أنواع الأماكن والمساحات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <div key={index} className="p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{area.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{area.description}</p>
                  <p className="text-sm text-gray-500">{area.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              خدمات التنفيذ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات التنفيذ الاحترافية
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {implementationServices.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <span className="text-gray-900 font-medium text-sm">{service}</span>
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
              خطوات التنفيذ التفصيلية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع خطوات منظمة ومحترفة في تنفيذ جميع المشاريع
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationProcess.map((step, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <p className="text-sm text-gray-500">{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              نصائح للتنفيذ الأمثل
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نصائح مهمة لضمان تنفيذ مثالي لخدمات التنظيف
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div key={index} className="p-6 rounded-xl bg-white hover:bg-blue-50 transition-colors shadow-sm">
                  <div className="bg-yellow-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{tip.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{tip.description}</p>
                  <p className="text-sm text-gray-500">{tip.details}</p>
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
              إجابات على أكثر الأسئلة شيوعاً حول منهجية التنفيذ
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900 flex items-center">
                  <HelpCircle className="w-5 h-5 text-blue-600 ml-2" />
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
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
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-sm">
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
            احصل على خدمة تنفيذ احترافية اليوم
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            لا تنتظر أكثر! اتصل بنا الآن واحصل على عرض سعر مجاني لخدمات التنفيذ الاحترافية في جدة
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
  )
} 