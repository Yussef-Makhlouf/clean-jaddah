import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SprayCanIcon as Spray, 
  CheckCircle, 
  Clock, 
  Star, 
  Shield, 
  Users, 
  Award, 
  Phone, 
  MessageCircle,
  Sparkles,
  Droplets,
  Zap,
  MapPin,
  Calendar,
  Heart,
  Leaf,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  HelpCircle as Help,
  MapPin as Location,
  ShoppingBag as Bag,
  GraduationCap as Cap,
  Briefcase as Case,
  TestTube,
  ShieldCheck,
  Wind,
  Building2
} from 'lucide-react'
import PageSeo from '@/components/seo/PageSeo';
import ServiceSchema from '@/components/seo/ServiceSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'خدمات التعقيم في جدة - شركة النظافة المثالية | تعقيم منازل ومكاتب',
  description: 'خدمة التعقيم والتطهير في جدة. تعقيم شامل للمنازل والمكاتب، حماية من الجراثيم والفيروسات. أسعار تنافسية.',
  keywords: 'تعقيم جدة, شركة تعقيم جدة, تعقيم منازل جدة, تعقيم مكاتب جدة, تطهير جدة, حماية من الجراثيم جدة, تعقيم ضد الفيروسات جدة, تعقيم شمال جدة, تعقيم جنوب جدة, تعقيم شرق جدة, تعقيم غرب جدة, تعقيم وسط جدة, تعقيم الكورنيش جدة, تعقيم شارع التحلية جدة, تعقيم شارع الملك فهد جدة, تعقيم النزهة جدة, تعقيم الشاطئ جدة, تعقيم الروضة جدة, تعقيم البلد جدة, تعقيم العزيزية جدة, تعقيم السامر جدة, تعقيم الحمراء جدة, تعقيم السلامة جدة, تعقيم النزلة اليمانية جدة, تعقيم النزلة الشرقية جدة, تعقيم النزلة الغربية جدة, تعقيم الكندرة جدة, تعقيم الثعالبة جدة, تعقيم العمارية جدة, تعقيم الكورنيش الشمالي جدة, تعقيم الكورنيش الجنوبي جدة, تعقيم احترافي جدة, تعقيم متخصص جدة, تعقيم شامل جدة, تعقيم دقيق جدة, تعقيم دوري جدة, تعقيم أسبوعي جدة, تعقيم شهري جدة, تعقيم يومي جدة, تعقيم سريع جدة, تعقيم فوري جدة, أسعار تعقيم جدة, سعر تعقيم اقتصادي جدة, سعر تعقيم تنافسي جدة, سعر تعقيم مناسب جدة, شركة تعقيم رخيصة جدة, شركة تعقيم اقتصادية جدة, شركة تعقيم موثوقة جدة, شركة تعقيم مضمونة جدة, شركة تعقيم معتمدة جدة, شركة تعقيم مرخصة جدة, تعقيم بالبخار جدة, تعقيم عميق جدة, تعقيم احترافي جدة, تعقيم شامل جدة, تعقيم دوري جدة, تعقيم أسبوعي جدة, تعقيم شهري جدة, تعقيم يومي جدة, تعقيم سريع جدة, تعقيم فوري جدة, تعقيم طوارئ جدة, تعقيم عاجل جدة, تعقيم في نفس اليوم جدة, تعقيم خلال ساعات جدة, مواد تعقيم آمنة جدة, مواد تعقيم طبيعية جدة, مواد تعقيم صديقة للبيئة جدة, مواد تعقيم معتمدة جدة, معدات تعقيم حديثة جدة, معدات تعقيم متطورة جدة, معدات تعقيم احترافية جدة, فريق تعقيم محترف جدة, عمال تعقيم مدربين جدة, عمال تعقيم محترفين جدة, خدمة تعقيم 24 ساعة جدة, خدمة تعقيم فورية جدة, خدمة تعقيم سريعة جدة, خدمة تعقيم مضمونة جدة, نصائح تعقيم جدة, طرق تعقيم جدة, أساليب تعقيم جدة, حلول تعقيم جدة, مشاكل تعقيم جدة, حلول بقع تعقيم جدة, أدوات تعقيم منزلية جدة, مواد تعقيم طبيعية جدة, رقم شركة تعقيم جدة, هاتف شركة تعقيم جدة, واتساب شركة تعقيم جدة, حجز تعقيم جدة, طلب تعقيم جدة, استفسار تعقيم جدة, عرض سعر تعقيم جدة, ضمان تعقيم جدة, ضمان جودة تعقيم جدة, ضمان رضا عميل تعقيم جدة, ضمان إعادة تعقيم جدة, ضمان نظافة تعقيم جدة, ضمان تعقيم شامل جدة, ضمان تطهير شامل جدة, أفضل شركة تعقيم جدة, أرخص شركة تعقيم جدة, أفضل أسعار تعقيم جدة, مقارنة شركات تعقيم جدة, تقييم شركات تعقيم جدة, آراء شركات تعقيم جدة, تجارب شركات تعقيم جدة, تعقيم ربيع جدة, تعقيم صيف جدة, تعقيم خريف جدة, تعقيم شتاء جدة, تعقيم عيد جدة, تعقيم رمضان جدة, تعقيم حج جدة, تعقيم عمرة جدة, تعقيم طوارئ جدة, تعقيم فوري جدة, تعقيم سريع جدة, تعقيم عاجل جدة, تعقيم في نفس اليوم جدة, تعقيم خلال ساعات جدة, شركة النظافة المثالية تعقيم جدة, مدونة تعقيم جدة, مقالات تعقيم جدة, نصائح نظافة تعقيم جدة, طرق تعقيم منزلية جدة, حلول تعقيم طبيعية جدة, تعقيم صديق للبيئة جدة, تعقيم آمن للأطفال جدة, تعقيم آمن للحيوانات جدة, تعقيم شامل شامل جدة, تعقيم احترافي متخصص جدة, تعقيم متخصص شامل جدة, تعقيم دقيق شامل جدة, تعقيم شامل شامل جدة, تعقيم شامل شامل جدة, تطهير شامل شامل جدة, رش تعقيم آمن جدة, تعقيم ضد جميع الفيروسات جدة, تعقيم ما بعد التشطيب جدة, تعقيم شامل للمواقع الجديدة جدة, تعقيم شامل للشقق الجديدة جدة, تعقيم شامل للفلل الجديدة جدة, شركة تعقيم في جميع أحياء جدة, شركة تعقيم في الكورنيش جدة, شركة تعقيم في شارع التحلية جدة, شركة تعقيم في شارع الملك فهد جدة, تعقيم بالبخار المتطور جدة, تعقيم عميق شامل جدة, تعقيم احترافي متخصص جدة, تعقيم شامل شامل جدة, تعقيم دوري منتظم جدة, تعقيم أسبوعي شامل جدة, تعقيم شهري شامل جدة, تعقيم يومي شامل جدة, تعقيم سريع احترافي جدة, تعقيم فوري شامل جدة, أسعار تعقيم تنافسية جدة, سعر تعقيم اقتصادي جدة, سعر تعقيم تنافسي جدة, سعر تعقيم مناسب جدة, شركة تعقيم رخيصة وموثوقة جدة, شركة تعقيم اقتصادية وجودة جدة, شركة تعقيم موثوقة ومعتمدة جدة, شركة تعقيم مضمونة الجودة جدة, شركة تعقيم معتمدة ومرخصة جدة, شركة تعقيم مرخصة وموثوقة جدة, تعقيم مكيفات شامل جدة, تعقيم ثريات احترافي جدة, تعقيم ستائر دقيق جدة, تعقيم أثاث شامل جدة, تعقيم أجهزة كهربائية آمن جدة, تعقيم مداخل احترافي جدة, تعقيم سلالم دقيق جدة, تعقيم مصاعد شامل جدة, تعقيم عائلات شاملة جدة, تعقيم شركات احترافي جدة, تعقيم مطاعم شامل جدة, تعقيم فنادق احترافي جدة, تعقيم مستشفيات متخصص جدة, تعقيم مدارس شامل جدة, تعقيم جامعات احترافي جدة, تعقيم مراكز تجارية شامل جدة, تعقيم مولات احترافي جدة, تعقيم مساجد متخصص جدة, مواد تعقيم آمنة وطبيعية جدة, مواد تعقيم صديقة للبيئة ومعتمدة جدة, مواد تعقيم معتمدة وآمنة جدة, مواد تعقيم طبيعية وفعالة جدة, معدات تعقيم حديثة ومتطورة جدة, معدات تعقيم متطورة واحترافية جدة, معدات تعقيم احترافية وحديثة جدة, فريق تعقيم محترف ومدرب جدة, عمال تعقيم مدربين ومحترفين جدة, عمال تعقيم محترفين وموثوقين جدة, خدمة تعقيم 24 ساعة متواصلة جدة, خدمة تعقيم فورية وسريعة جدة, خدمة تعقيم سريعة ومضمونة جدة, خدمة تعقيم مضمونة وجودة جدة, نصائح تعقيم شاملة جدة, طرق تعقيم فعالة جدة, أساليب تعقيم احترافية جدة, حلول تعقيم متكاملة جدة, مشاكل تعقيم وحلولها جدة, حلول بقع تعقيم صعبة جدة, أدوات تعقيم منزلية فعالة جدة, مواد تعقيم طبيعية وآمنة جدة, رقم شركة تعقيم موثوقة جدة, هاتف شركة تعقيم معتمدة جدة, واتساب شركة تعقيم سريعة جدة, حجز تعقيم فوري جدة, طلب تعقيم سريع جدة, استفسار تعقيم شامل جدة, عرض سعر تعقيم تنافسي جدة, ضمان تعقيم شامل جدة, ضمان جودة تعقيم عالية جدة, ضمان رضا عميل تعقيم كامل جدة, ضمان إعادة تعقيم مجاني جدة, ضمان نظافة تعقيم شاملة جدة, ضمان تعقيم شامل جدة, ضمان تطهير شامل جدة, أفضل شركة تعقيم في جدة, أرخص شركة تعقيم موثوقة جدة, أفضل أسعار تعقيم تنافسية جدة, مقارنة شركات تعقيم شاملة جدة, تقييم شركات تعقيم موثوقة جدة, آراء شركات تعقيم معتمدة جدة, تجارب شركات تعقيم موثوقة جدة, تعقيم ربيع شامل جدة, تعقيم صيف احترافي جدة, تعقيم خريف دقيق جدة, تعقيم شتاء شامل جدة, تعقيم عيد شامل جدة, تعقيم رمضان احترافي جدة, تعقيم حج متخصص جدة, تعقيم عمرة شامل جدة, تعقيم طوارئ فوري جدة, تعقيم فوري وسريع جدة, تعقيم سريع واحترافي جدة, تعقيم عاجل وشامل جدة, تعقيم في نفس اليوم مضمون جدة, تعقيم خلال ساعات قليلة جدة',
  openGraph: {
    title: 'خدمات التعقيم في جدة - شركة النظافة المثالية',
    description: 'خدمة التعقيم والتطهير الاحترافية في جدة لحماية العائلة',
    type: 'website',
    locale: 'ar_SA',
  },
}

const features = [
  {
    title: 'تعقيم شامل',
    description: 'تعقيم شامل لجميع الأسطح والأماكن',
    icon: Shield,
    details: 'نقوم بتعقيم شامل لجميع الأسطح والأماكن في المنزل أو المكتب. نستخدم مواد تعقيم قوية وآمنة لضمان قتل جميع الجراثيم والبكتيريا.'
  },
  {
    title: 'تقنيات متقدمة',
    description: 'استخدام أحدث تقنيات التعقيم والتبخير',
    icon: TestTube,
    details: 'نستخدم أحدث تقنيات التعقيم والتبخير لضمان فعالية عالية. نطبق طرق مختلفة حسب نوع المكان ودرجة التلوث.'
  },
  {
    title: 'مواد آمنة',
    description: 'مواد تعقيم آمنة للعائلة والحيوانات',
    icon: Leaf,
    details: 'نستخدم مواد تعقيم آمنة للعائلة والحيوانات الأليفة. نراعي السلامة ونطبق أعلى معايير الجودة.'
  },
  {
    title: 'حماية طويلة المدى',
    description: 'حماية طويلة المدى من الجراثيم والبكتيريا',
    icon: ShieldCheck,
    details: 'نقدم حماية طويلة المدى من الجراثيم والبكتيريا. نتأكد من استمرار فعالية التعقيم لفترة طويلة.'
  }
]

const disinfectionTechniques = [
  {
    title: 'التعقيم بالبخار',
    description: 'استخدام البخار عالي الحرارة لقتل الجراثيم',
    icon: Droplets,
    benefits: ['قتل 99.9% من الجراثيم', 'تنظيف عميق', 'آمن للأسطح', 'فعالية عالية']
  },
  {
    title: 'التعقيم بالمواد الكيميائية',
    description: 'استخدام مواد تعقيم متخصصة وقوية',
    icon: TestTube,
    benefits: ['فعالية قوية', 'قتل البكتيريا', 'حماية طويلة', 'نتائج مضمونة']
  },
  {
    title: 'التعقيم بالأشعة فوق البنفسجية',
    description: 'استخدام تقنية الأشعة فوق البنفسجية',
    icon: Zap,
    benefits: ['تقنية متقدمة', 'قتل الفيروسات', 'آمن وفعال', 'نتائج سريعة']
  },
  {
    title: 'التعقيم بالضباب',
    description: 'استخدام تقنية الضباب للوصول لجميع الأماكن',
    icon: Wind,
    benefits: ['وصول شامل', 'تعقيم عميق', 'توفير الوقت', 'كفاءة عالية']
  }
]

const healthBenefits = [
  {
    title: 'منع انتشار الأمراض',
    description: 'التعقيم المنتظم يمنع انتشار الأمراض والعدوى',
    icon: Shield,
    details: 'التعقيم المنتظم يمنع انتشار الأمراض والعدوى في المنزل أو المكتب. هذا مهم بشكل خاص للأشخاص الذين يعانون من ضعف المناعة.'
  },
  {
    title: 'تحسين جودة الهواء',
    description: 'التعقيم يحسن من جودة الهواء الداخلي',
    icon: Wind,
    details: 'التعقيم يحسن من جودة الهواء الداخلي من خلال إزالة الجراثيم والبكتيريا المسببة للأمراض التنفسية.'
  },
  {
    title: 'حماية الأطفال',
    description: 'بيئة آمنة وصحية للأطفال',
    icon: Heart,
    details: 'التعقيم المنتظم يوفر بيئة آمنة وصحية للأطفال الذين هم أكثر عرضة للإصابة بالأمراض.'
  },
  {
    title: 'تقليل الحساسية',
    description: 'التعقيم يقلل من مسببات الحساسية',
    icon: Leaf,
    details: 'التعقيم يقلل من مسببات الحساسية مثل العث والفطريات مما يحسن من صحة الأشخاص المصابين بالحساسية.'
  }
]

const disinfectionAreas = [
  {
    title: 'تعقيم المنازل',
    description: 'تعقيم شامل للمنازل والشقق',
    icon: Building2,
    details: 'نقدم خدمة تعقيم شامل للمنازل والشقق. نراعي جميع المساحات والأسطح لضمان تعقيم مثالي.'
  },
  {
    title: 'تعقيم المكاتب',
    description: 'تعقيم المكاتب والشركات',
    icon: Briefcase,
    details: 'نقدم خدمة تعقيم للمكاتب والشركات. نراعي ساعات العمل ونستخدم تقنيات متقدمة.'
  },
  {
    title: 'تعقيم المراكز التجارية',
    description: 'تعقيم المراكز التجارية والمحلات',
    icon: ShoppingBag,
    details: 'نقدم خدمة تعقيم للمراكز التجارية والمحلات. نراعي كثافة الزوار ونطبق أعلى معايير التعقيم.'
  },
  {
    title: 'تعقيم المدارس',
    description: 'تعقيم المدارس والجامعات',
    icon: GraduationCap,
    details: 'نقدم خدمة تعقيم للمدارس والجامعات. نراعي سلامة الطلاب ونستخدم مواد آمنة.'
  }
]

const services = [
  'تعقيم جميع الأسطح',
  'تعقيم الهواء الداخلي',
  'تعقيم المطابخ والحمامات',
  'تعقيم غرف النوم',
  'تعقيم غرف المعيشة',
  'تعقيم الممرات والسلالم',
  'تعقيم الأثاث',
  'تعقيم الأجهزة الإلكترونية',
  'تعقيم السجاد والموكيت',
  'تعقيم النوافذ والأبواب',
  'تعقيم أنظمة التكييف',
  'تعقيم المطابخ',
  'تعقيم الحمامات',
  'تعقيم غرف الأطفال',
  'تعقيم غرف الضيوف',
  'تعقيم غرف التخزين'
]

const process = [
  {
    step: '01',
    title: 'التقييم والتخطيط',
    description: 'تقييم شامل للمكان وتحديد احتياجات التعقيم',
    details: 'نقوم بزيارة المكان لتقييم شامل وتحديد احتياجات التعقيم. نحدد نوع الجراثيم المحتملة ونضع خطة عمل مفصلة.'
  },
  {
    step: '02',
    title: 'التحضير والتجهيز',
    description: 'تحضير المعدات والمواد المتخصصة',
    details: 'نحضر جميع المعدات والمواد المتخصصة المطلوبة للتعقيم. نتأكد من جودة المواد وملاءمتها لنوع المكان.'
  },
  {
    step: '03',
    title: 'بدء عملية التعقيم',
    description: 'تنفيذ خطة التعقيم بشكل منظم ومحترف',
    details: 'نبدأ بتنفيذ خطة التعقيم بشكل منظم ومحترف. نراعي ترتيب العمل لضمان كفاءة عالية وتغطية شاملة.'
  },
  {
    step: '04',
    title: 'المراجعة والتسليم',
    description: 'مراجعة شاملة للعمل والتأكد من الجودة',
    details: 'في النهاية، نقوم بمراجعة شاملة للعمل المنجز. نتأكد من تحقيق جميع معايير التعقيم ونحصل على رضا العميل.'
  }
]

const tips = [
  {
    title: 'نصائح للحفاظ على التعقيم',
    icon: Lightbulb,
    tips: [
      'عقم الأسطح يومياً',
      'اغسل اليدين بانتظام',
      'عقم الأجهزة الإلكترونية',
      'عقم المطبخ بعد كل استخدام',
      'عقم الحمامات يومياً',
      'عقم غرف النوم أسبوعياً',
      'عقم الأثاث بانتظام',
      'عقم أنظمة التكييف شهرياً'
    ]
  },
  {
    title: 'أخطاء شائعة في التعقيم',
    icon: AlertTriangle,
    tips: [
      'استخدام مواد تعقيم قوية',
      'إهمال تعقيم الأماكن المخفية',
      'عدم تعقيم الأجهزة الإلكترونية',
      'إهمال تعقيم أنظمة التكييف',
      'عدم تعقيم السجاد',
      'إهمال تعقيم المطابخ',
      'عدم تعقيم الحمامات',
      'إهمال تعقيم الأثاث'
    ]
  },
  {
    title: 'جدولة التعقيم المثالية',
    icon: Calendar,
    tips: [
      'تعقيم يومي للأسطح المشتركة',
      'تعقيم أسبوعي شامل',
      'تعقيم شهري للأجهزة',
      'تعقيم ربع سنوي عميق',
      'تعقيم بعد الزيارات',
      'تعقيم بعد السفر',
      'تعقيم عند المرض',
      'تعقيم دوري للأنظمة'
    ]
  }
]

const faq = [
  {
    question: 'كم مرة أحتاج لتعقيم المنزل؟',
    answer: 'نوصي بتعقيم يومي للأسطح المشتركة وتعقيم أسبوعي شامل للمنزل.'
  },
  {
    question: 'هل مواد التعقيم آمنة للأطفال؟',
    answer: 'نعم، نستخدم مواد تعقيم آمنة للأطفال والحيوانات الأليفة.'
  },
  {
    question: 'كم تستغرق عملية التعقيم؟',
    answer: 'تستغرق عملية التعقيم 2-4 ساعات حسب مساحة المكان.'
  },
  {
    question: 'هل تعقيمون جميع أنواع الأماكن؟',
    answer: 'نعم، نعقم جميع أنواع الأماكن السكنية والتجارية والصناعية.'
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

export default function DisinfectionPage() {
  return (
    <>
      <PageSeo
        title="خدمة التعقيم في جدة | شركة النظافة المثالية"
        description="خدمة تعقيم شاملة للمنازل والمكاتب في جدة للحماية من الجراثيم والفيروسات. اتصل بنا الآن!"
        image="/images/blog/eco-friendly-cleaning-solutions.png"
        url="https://cleanwithfresh.com/services/disinfection"
        keywords="تعقيم جدة, شركة تعقيم, تعقيم منازل, تعقيم مكاتب, تعقيم ضد الفيروسات, خدمات تعقيم جدة, تطهير المنازل, تطهير المكاتب"
      />
      <ServiceSchema
        serviceType="تعقيم المنازل والمكاتب"
        description="خدمة تعقيم شاملة للمنازل والمكاتب في جدة للحماية من الجراثيم والفيروسات."
        providerName="شركة النظافة المثالية"
        providerUrl="https://cleanwithfresh.com"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", url: "https://cleanwithfresh.com" },
          { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
          { name: "خدمة التعقيم", url: "https://cleanwithfresh.com/services/disinfection" }
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
                  <Shield className="w-8 h-8 mr-3 text-yellow-400" />
                  <span className="bg-yellow-400/20 text-yellow-400 py-1 px-4 rounded-full text-sm font-medium">
                    خدمة التعقيم
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  خدمات التعقيم في جدة
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  نقدم خدمات التعقيم الاحترافية في جدة. 
                  نستخدم أحدث التقنيات والمواد المتخصصة لضمان تعقيم شامل وفعال.
                  فريقنا المحترف يضمن لك بيئة آمنة وصحية لجميع أفراد أسرتك.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+966565265233"
                    className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل الآن لحجز خدمة تعقيم في جدة
                  </a>
                  <Link 
                    href="https://wa.me/966565265233"
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
                    src="/images/blog/home-disinfection.png"
                    alt="خدمات التعقيم في جدة"
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
                نتميز بخبرة 15+ عام في مجال التعقيم مع فريق محترف وتقنيات حديثة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">فريق متخصص</h3>
                <p className="text-gray-600">فريق متخصص في التعقيم مع خبرة 15+ عام</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">مواد آمنة</h3>
                <p className="text-gray-600">مواد تعقيم آمنة للعائلة والحيوانات الأليفة</p>
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
                <p className="text-gray-600">تعقيم سريع وفعال في نفس اليوم</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                خدمات التعقيم
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم مجموعة شاملة من خدمات التعقيم لتلبية جميع احتياجاتك
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

        {/* Disinfection Techniques Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                تقنيات التعقيم المتقدمة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نستخدم أحدث التقنيات والمواد المتخصصة لضمان أفضل النتائج
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {disinfectionTechniques.map((technique, index) => {
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

        {/* Disinfection Areas Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                أماكن التعقيم
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نعقم جميع أنواع الأماكن باستخدام تقنيات مناسبة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {disinfectionAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="bg-green-100 p-4 rounded-full mr-4">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <p className="text-gray-700 leading-relaxed">{area.details}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Health Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                فوائد التعقيم على الصحة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                التعقيم المنتظم له فوائد صحية عديدة على جميع أفراد العائلة
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

        {/* Services List */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                ما تشمله الخدمة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                قائمة شاملة بجميع خدمات التعقيم
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
                نتبع خطوات منظمة ومحترفة لضمان أفضل نتائج التعقيم
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
                نقدم لك نصائح ومعلومات مفيدة للحفاظ على التعقيم
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
                إجابات على أكثر الأسئلة شيوعاً حول خدمات التعقيم
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 flex items-center">
                    <Help className="w-5 h-5 text-blue-600 ml-2" />
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
                  <Location className="w-6 h-6 text-blue-600 mx-auto mb-2" />
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
              احصل على تعقيم شامل اليوم
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              لا تنتظر أكثر! اتصل بنا الآن واحصل على عرض سعر مجاني لتعقيم منزلك في جدة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+966565265233"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل بنا: 966565265233+
              </a>
              <Link 
                href="https://wa.me/966565265233"
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