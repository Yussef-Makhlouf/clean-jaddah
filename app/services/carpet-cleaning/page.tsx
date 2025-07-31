import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CarIcon as Carpet, 
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
  HardHat,
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
  CalendarHeart
} from 'lucide-react'
import PageSeo from '@/components/seo/PageSeo';
import ServiceSchema from '@/components/seo/ServiceSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'تنظيف السجاد في جدة - شركة النظافة المثالية | تنظيف موكيت وستائر',
  description: 'خدمة تنظيف السجاد والموكيت في جدة. تنظيف بالبخار، إزالة البقع، تجفيف سريع. أسعار تنافسية وجودة عالية.',
  keywords: 'تنظيف سجاد جدة, شركة تنظيف سجاد جدة, تنظيف موكيت جدة, تنظيف بالبخار جدة, إزالة بقع السجاد جدة, تنظيف ستائر جدة, تنظيف سجاد شمال جدة, تنظيف سجاد جنوب جدة, تنظيف سجاد شرق جدة, تنظيف سجاد غرب جدة, تنظيف سجاد وسط جدة, تنظيف سجاد الكورنيش جدة, تنظيف سجاد شارع التحلية جدة, تنظيف سجاد شارع الملك فهد جدة, تنظيف سجاد النزهة جدة, تنظيف سجاد الشاطئ جدة, تنظيف سجاد الروضة جدة, تنظيف سجاد البلد جدة, تنظيف سجاد العزيزية جدة, تنظيف سجاد السامر جدة, تنظيف سجاد الحمراء جدة, تنظيف سجاد السلامة جدة, تنظيف سجاد النزلة اليمانية جدة, تنظيف سجاد النزلة الشرقية جدة, تنظيف سجاد النزلة الغربية جدة, تنظيف سجاد الكندرة جدة, تنظيف سجاد الثعالبة جدة, تنظيف سجاد العمارية جدة, تنظيف سجاد الكورنيش الشمالي جدة, تنظيف سجاد الكورنيش الجنوبي جدة, تنظيف سجاد احترافي جدة, تنظيف سجاد متخصص جدة, تنظيف سجاد شامل جدة, تنظيف سجاد دقيق جدة, تنظيف سجاد دوري جدة, تنظيف سجاد أسبوعي جدة, تنظيف سجاد شهري جدة, تنظيف سجاد يومي جدة, تنظيف سجاد سريع جدة, تنظيف سجاد فوري جدة, أسعار تنظيف سجاد جدة, سعر تنظيف سجاد اقتصادي جدة, سعر تنظيف سجاد تنافسي جدة, سعر تنظيف سجاد مناسب جدة, شركة تنظيف سجاد رخيصة جدة, شركة تنظيف سجاد اقتصادية جدة, شركة تنظيف سجاد موثوقة جدة, شركة تنظيف سجاد مضمونة جدة, شركة تنظيف سجاد معتمدة جدة, شركة تنظيف سجاد مرخصة جدة, تنظيف سجاد بالبخار جدة, تنظيف سجاد عميق جدة, تنظيف سجاد احترافي جدة, تنظيف سجاد شامل جدة, تنظيف سجاد دوري جدة, تنظيف سجاد أسبوعي جدة, تنظيف سجاد شهري جدة, تنظيف سجاد يومي جدة, تنظيف سجاد سريع جدة, تنظيف سجاد فوري جدة, تنظيف سجاد طوارئ جدة, تنظيف سجاد عاجل جدة, تنظيف سجاد في نفس اليوم جدة, تنظيف سجاد خلال ساعات جدة, مواد تنظيف سجاد آمنة جدة, مواد تنظيف سجاد طبيعية جدة, مواد تنظيف سجاد صديقة للبيئة جدة, مواد تنظيف سجاد معتمدة جدة, معدات تنظيف سجاد حديثة جدة, معدات تنظيف سجاد متطورة جدة, معدات تنظيف سجاد احترافية جدة, فريق تنظيف سجاد محترف جدة, عمال تنظيف سجاد مدربين جدة, عمال تنظيف سجاد محترفين جدة, خدمة تنظيف سجاد 24 ساعة جدة, خدمة تنظيف سجاد فورية جدة, خدمة تنظيف سجاد سريعة جدة, خدمة تنظيف سجاد مضمونة جدة, نصائح تنظيف سجاد جدة, طرق تنظيف سجاد جدة, أساليب تنظيف سجاد جدة, حلول تنظيف سجاد جدة, مشاكل تنظيف سجاد جدة, حلول بقع تنظيف سجاد جدة, أدوات تنظيف سجاد منزلية جدة, مواد تنظيف سجاد طبيعية جدة, رقم شركة تنظيف سجاد جدة, هاتف شركة تنظيف سجاد جدة, واتساب شركة تنظيف سجاد جدة, حجز تنظيف سجاد جدة, طلب تنظيف سجاد جدة, استفسار تنظيف سجاد جدة, عرض سعر تنظيف سجاد جدة, ضمان تنظيف سجاد جدة, ضمان جودة تنظيف سجاد جدة, ضمان رضا عميل تنظيف سجاد جدة, ضمان إعادة تنظيف سجاد جدة, ضمان نظافة سجاد جدة, ضمان تعقيم سجاد جدة, ضمان تطهير سجاد جدة, أفضل شركة تنظيف سجاد جدة, أرخص شركة تنظيف سجاد جدة, أفضل أسعار تنظيف سجاد جدة, مقارنة شركات تنظيف سجاد جدة, تقييم شركات تنظيف سجاد جدة, آراء شركات تنظيف سجاد جدة, تجارب شركات تنظيف سجاد جدة, تنظيف سجاد ربيع جدة, تنظيف سجاد صيف جدة, تنظيف سجاد خريف جدة, تنظيف سجاد شتاء جدة, تنظيف سجاد عيد جدة, تنظيف سجاد رمضان جدة, تنظيف سجاد حج جدة, تنظيف سجاد عمرة جدة, تنظيف سجاد طوارئ جدة, تنظيف سجاد فوري جدة, تنظيف سجاد سريع جدة, تنظيف سجاد عاجل جدة, تنظيف سجاد في نفس اليوم جدة, تنظيف سجاد خلال ساعات جدة, شركة النظافة المثالية تنظيف سجاد جدة, مدونة تنظيف سجاد جدة, مقالات تنظيف سجاد جدة, نصائح نظافة سجاد جدة, طرق تنظيف سجاد منزلية جدة, حلول تنظيف سجاد طبيعية جدة, تنظيف سجاد صديق للبيئة جدة, تنظيف سجاد آمن للأطفال جدة, تنظيف سجاد آمن للحيوانات جدة, تنظيف سجاد شامل شامل جدة, تنظيف سجاد احترافي متخصص جدة, تنظيف سجاد متخصص شامل جدة, تنظيف سجاد دقيق شامل جدة, تنظيف سجاد شامل شامل جدة, تعقيم سجاد شامل جدة, تطهير سجاد شامل جدة, رش سجاد آمن جدة, تعقيم سجاد ضد جميع الفيروسات جدة, تنظيف سجاد ما بعد التشطيب جدة, تنظيف سجاد شامل للمواقع الجديدة جدة, تنظيف سجاد شامل للشقق الجديدة جدة, تنظيف سجاد شامل للفلل الجديدة جدة, شركة تنظيف سجاد في جميع أحياء جدة, شركة تنظيف سجاد في الكورنيش جدة, شركة تنظيف سجاد في شارع التحلية جدة, شركة تنظيف سجاد في شارع الملك فهد جدة, تنظيف سجاد بالبخار المتطور جدة, تنظيف سجاد عميق شامل جدة, تنظيف سجاد احترافي متخصص جدة, تنظيف سجاد شامل شامل جدة, تنظيف سجاد دوري منتظم جدة, تنظيف سجاد أسبوعي شامل جدة, تنظيف سجاد شهري شامل جدة, تنظيف سجاد يومي شامل جدة, تنظيف سجاد سريع احترافي جدة, تنظيف سجاد فوري شامل جدة, أسعار تنظيف سجاد تنافسية جدة, سعر تنظيف سجاد اقتصادي جدة, سعر تنظيف سجاد تنافسي جدة, سعر تنظيف سجاد مناسب جدة, شركة تنظيف سجاد رخيصة وموثوقة جدة, شركة تنظيف سجاد اقتصادية وجودة جدة, شركة تنظيف سجاد موثوقة ومعتمدة جدة, شركة تنظيف سجاد مضمونة الجودة جدة, شركة تنظيف سجاد معتمدة ومرخصة جدة, شركة تنظيف سجاد مرخصة وموثوقة جدة, تنظيف سجاد مكيفات شامل جدة, تنظيف سجاد ثريات احترافي جدة, تنظيف سجاد ستائر دقيق جدة, تنظيف سجاد أثاث شامل جدة, تنظيف سجاد أجهزة كهربائية آمن جدة, تنظيف سجاد مداخل احترافي جدة, تنظيف سجاد سلالم دقيق جدة, تنظيف سجاد مصاعد شامل جدة, تنظيف سجاد عائلات شاملة جدة, تنظيف سجاد شركات احترافي جدة, تنظيف سجاد مطاعم شامل جدة, تنظيف سجاد فنادق احترافي جدة, تنظيف سجاد مستشفيات متخصص جدة, تنظيف سجاد مدارس شامل جدة, تنظيف سجاد جامعات احترافي جدة, تنظيف سجاد مراكز تجارية شامل جدة, تنظيف سجاد مولات احترافي جدة, تنظيف سجاد مساجد متخصص جدة, مواد تنظيف سجاد آمنة وطبيعية جدة, مواد تنظيف سجاد صديقة للبيئة ومعتمدة جدة, مواد تنظيف سجاد معتمدة وآمنة جدة, مواد تنظيف سجاد طبيعية وفعالة جدة, معدات تنظيف سجاد حديثة ومتطورة جدة, معدات تنظيف سجاد متطورة واحترافية جدة, معدات تنظيف سجاد احترافية وحديثة جدة, فريق تنظيف سجاد محترف ومدرب جدة, عمال تنظيف سجاد مدربين ومحترفين جدة, عمال تنظيف سجاد محترفين وموثوقين جدة, خدمة تنظيف سجاد 24 ساعة متواصلة جدة, خدمة تنظيف سجاد فورية وسريعة جدة, خدمة تنظيف سجاد سريعة ومضمونة جدة, خدمة تنظيف سجاد مضمونة وجودة جدة, نصائح تنظيف سجاد شاملة جدة, طرق تنظيف سجاد فعالة جدة, أساليب تنظيف سجاد احترافية جدة, حلول تنظيف سجاد متكاملة جدة, مشاكل تنظيف سجاد وحلولها جدة, حلول بقع تنظيف سجاد صعبة جدة, أدوات تنظيف سجاد منزلية فعالة جدة, مواد تنظيف سجاد طبيعية وآمنة جدة, رقم شركة تنظيف سجاد موثوقة جدة, هاتف شركة تنظيف سجاد معتمدة جدة, واتساب شركة تنظيف سجاد سريعة جدة, حجز تنظيف سجاد فوري جدة, طلب تنظيف سجاد سريع جدة, استفسار تنظيف سجاد شامل جدة, عرض سعر تنظيف سجاد تنافسي جدة, ضمان تنظيف سجاد شامل جدة, ضمان جودة تنظيف سجاد عالية جدة, ضمان رضا عميل تنظيف سجاد كامل جدة, ضمان إعادة تنظيف سجاد مجاني جدة, ضمان نظافة سجاد شاملة جدة, ضمان تعقيم سجاد شامل جدة, ضمان تطهير سجاد شامل جدة, أفضل شركة تنظيف سجاد في جدة, أرخص شركة تنظيف سجاد موثوقة جدة, أفضل أسعار تنظيف سجاد تنافسية جدة, مقارنة شركات تنظيف سجاد شاملة جدة, تقييم شركات تنظيف سجاد موثوقة جدة, آراء شركات تنظيف سجاد معتمدة جدة, تجارب شركات تنظيف سجاد موثوقة جدة, تنظيف سجاد ربيع شامل جدة, تنظيف سجاد صيف احترافي جدة, تنظيف سجاد خريف دقيق جدة, تنظيف سجاد شتاء شامل جدة, تنظيف سجاد عيد شامل جدة, تنظيف سجاد رمضان احترافي جدة, تنظيف سجاد حج متخصص جدة, تنظيف سجاد عمرة شامل جدة, تنظيف سجاد طوارئ فوري جدة, تنظيف سجاد فوري وسريع جدة, تنظيف سجاد سريع واحترافي جدة, تنظيف سجاد عاجل وشامل جدة, تنظيف سجاد في نفس اليوم مضمون جدة, تنظيف سجاد خلال ساعات قليلة جدة',
  openGraph: {
    title: 'تنظيف السجاد في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف السجاد والموكيت الاحترافية في جدة بأحدث التقنيات',
    type: 'website',
    locale: 'ar_SA',
  },
}

const features = [
  {
    title: 'تنظيف عميق بالبخار',
    description: 'استخدام البخار عالي الحرارة لتنظيف عميق وإزالة البقع الصعبة',
    icon: Droplets,
    details: 'نستخدم تقنية البخار عالي الحرارة لتنظيف عميق للسجاد والموكيت. هذه التقنية تصل إلى أعمق طبقات السجاد وتزيل البقع الصعبة والروائح الكريهة بشكل فعال.'
  },
  {
    title: 'إزالة البقع العنيدة',
    description: 'استخدام مواد متخصصة لإزالة جميع أنواع البقع',
    icon: Sparkles,
    details: 'نستخدم مواد تنظيف متخصصة لإزالة جميع أنواع البقع مثل القهوة، الشاي، الحبر، الدهون، والمواد اللاصقة. كل نوع من البقع يحتاج معاملة خاصة.'
  },
  {
    title: 'تعقيم وتطهير',
    description: 'قتل الجراثيم والبكتيريا وضمان بيئة صحية',
    icon: Shield,
    details: 'نستخدم مواد تعقيم قوية لقتل الجراثيم والبكتيريا الموجودة في السجاد. هذا مهم بشكل خاص للأشخاص الذين يعانون من الحساسية أو الربو.'
  },
  {
    title: 'تجفيف سريع',
    description: 'استخدام معدات متخصصة للتجفيف السريع',
    icon: Wind,
    details: 'نستخدم معدات تجفيف متخصصة لضمان تجفيف السجاد بسرعة وأمان. هذا يمنع نمو العفن والفطريات ويحافظ على جودة السجاد.'
  }
]

const cleaningTechniques = [
  {
    title: 'التنظيف بالبخار',
    description: 'استخدام البخار عالي الحرارة لقتل الجراثيم وإزالة البقع',
    icon: Droplets,
    benefits: ['قتل 99.9% من الجراثيم', 'إزالة البقع الصعبة', 'تنظيف عميق', 'آمن للأطفال والحيوانات']
  },
  {
    title: 'التنظيف بالضغط العالي',
    description: 'استخدام الماء المضغوط لتنظيف السجاد السميك',
    icon: Wind,
    benefits: ['تنظيف عميق', 'إزالة الأوساخ العنيدة', 'توفير المياه', 'نتائج ممتازة']
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
    benefits: ['كفاءة عالية', 'توفير الوقت', 'جودة احترافية', 'نتائج دائمة']
  }
]

const healthBenefits = [
  {
    title: 'تحسين جودة الهواء',
    description: 'إزالة الغبار والمواد المسببة للحساسية من الهواء',
    icon: Wind,
    details: 'السجاد النظيف يحسن جودة الهواء الداخلي من خلال إزالة الغبار، حبوب اللقاح، والمواد المسببة للحساسية. هذا مهم بشكل خاص للأشخاص الذين يعانون من الربو أو الحساسية.'
  },
  {
    title: 'منع انتشار الأمراض',
    description: 'قتل الجراثيم والبكتيريا المسببة للأمراض',
    icon: Shield,
    details: 'السجاد النظيف يساعد في منع انتشار الأمراض والعدوى. التنظيف المنتظم يقلل من وجود البكتيريا والفيروسات في السجاد.'
  },
  {
    title: 'تحسين الصحة النفسية',
    description: 'البيئة النظيفة تحسن المزاج والصحة النفسية',
    icon: Heart,
    details: 'السجاد النظيف والمنظف له تأثير إيجابي على الصحة النفسية. يساعد في تقليل التوتر وتحسين المزاج العام للعائلة.'
  },
  {
    title: 'إطالة عمر السجاد',
    description: 'الرعاية المنتظمة تطيل من عمر السجاد',
    icon: Target,
    details: 'التنظيف المنتظم يحافظ على جودة السجاد ويطيل من عمره. يمنع تراكم الأوساخ التي قد تؤدي إلى تلف السجاد.'
  }
]

const carpetTypes = [
  {
    title: 'السجاد الصوفي',
    description: 'تنظيف خاص للسجاد الصوفي الطبيعي',
    icon: Leaf,
    details: 'السجاد الصوفي يحتاج معاملة خاصة نظراً لحساسيته. نستخدم مواد تنظيف لطيفة ومعدات متخصصة لضمان عدم إتلاف الألياف الطبيعية.'
  },
  {
    title: 'السجاد الصناعي',
    description: 'تنظيف فعال للسجاد الصناعي',
    icon: Sparkles,
    details: 'السجاد الصناعي أكثر مقاومة للتنظيف. نستخدم مواد تنظيف قوية ومعدات متخصصة لضمان تنظيف عميق وفعال.'
  },
  {
    title: 'الموكيت',
    description: 'تنظيف شامل للموكيت والفرش',
    icon: Carpet,
    details: 'الموكيت يحتاج تنظيف دقيق نظراً لطبيعته. نراعي نوع الألياف ونستخدم تقنيات مناسبة لكل نوع.'
  },
  {
    title: 'السجاد الفاخر',
    description: 'تنظيف احترافي للسجاد الفاخر',
    icon: Star,
    details: 'السجاد الفاخر يحتاج عناية خاصة. نستخدم تقنيات متقدمة ومواد عالية الجودة لضمان الحفاظ على جودته.'
  }
]

const process = [
  {
    step: '01',
    title: 'التقييم والفحص',
    description: 'فحص نوع السجاد وتحديد طريقة التنظيف المناسبة',
    details: 'نقوم بفحص نوع السجاد، نوع الألياف، وحالة البقع. نحدد طريقة التنظيف المناسبة والمواد المطلوبة.'
  },
  {
    step: '02',
    title: 'التحضير والتنظيف الأولي',
    description: 'إزالة الأثاث وتنظيف أولي للسجاد',
    details: 'نقوم بإزالة الأثاث من المنطقة وتنظيف أولي للسجاد لإزالة الغبار والأوساخ السطحية.'
  },
  {
    step: '03',
    title: 'التنظيف العميق',
    description: 'تنظيف عميق باستخدام البخار والمواد المتخصصة',
    details: 'نستخدم البخار عالي الحرارة والمواد المتخصصة لتنظيف عميق وإزالة البقع الصعبة.'
  },
  {
    step: '04',
    title: 'التجفيف والمراجعة',
    description: 'تجفيف السجاد ومراجعة النتائج النهائية',
    details: 'نستخدم معدات تجفيف متخصصة ونتأكد من جودة العمل قبل الانتهاء.'
  }
]

const tips = [
  {
    title: 'نصائح للحفاظ على نظافة السجاد',
    icon: Lightbulb,
    tips: [
      'نظف السجاد بالمكنسة الكهربائية يومياً',
      'عالج البقع فور حدوثها',
      'استخدم ممسحة جافة للبقع السائلة',
      'تجنب استخدام الماء الساخن على البقع',
      'نظف السجاد بالبخار كل 6-12 شهر',
      'استخدم مواد تنظيف مناسبة لنوع السجاد',
      'احتفظ بمواد تنظيف أساسية',
      'راقب حالة السجاد بانتظام'
    ]
  },
  {
    title: 'أخطاء شائعة في تنظيف السجاد',
    icon: AlertTriangle,
    tips: [
      'استخدام الماء الساخن على البقع',
      'فرك البقع بقوة',
      'استخدام مواد تنظيف قوية',
      'إهمال تنظيف السجاد بانتظام',
      'عدم تجفيف السجاد جيداً',
      'استخدام مواد غير مناسبة',
      'إهمال معالجة البقع فوراً',
      'عدم قراءة تعليمات المواد'
    ]
  },
  {
    title: 'مواد تنظيف طبيعية للسجاد',
    icon: Leaf,
    tips: [
      'استخدم بيكربونات الصوديوم لإزالة الروائح',
      'استخدم الخل الأبيض لتنظيف البقع',
      'استخدم عصير الليمون للبقع الدهنية',
      'استخدم الملح لامتصاص السوائل',
      'استخدم صودا الخبز لتنظيف السجاد',
      'استخدم الزيوت العطرية للتعطير',
      'استخدم الشاي الأخضر للبقع الحبرية',
      'استخدم زيت الزيتون لتلميع السجاد'
    ]
  }
]

const faq = [
  {
    question: 'كم مرة أحتاج لتنظيف السجاد؟',
    answer: 'نوصي بتنظيف السجاد بالبخار كل 6-12 شهر، مع التنظيف اليومي بالمكنسة الكهربائية.'
  },
  {
    question: 'هل تنظيف البخار آمن للأطفال؟',
    answer: 'نعم، تنظيف البخار آمن للأطفال والحيوانات. نستخدم مواد طبيعية وآمنة.'
  },
  {
    question: 'كم تستغرق عملية التنظيف؟',
    answer: 'تستغرق عملية التنظيف 2-4 ساعات حسب مساحة السجاد وعدد الغرف.'
  },
  {
    question: 'هل تنظفون جميع أنواع السجاد؟',
    answer: 'نعم، ننظف جميع أنواع السجاد والموكيت باستخدام تقنيات ومواد مناسبة لكل نوع.'
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

export default function CarpetCleaningPage() {
  return (
    <>
      <PageSeo
        title="تنظيف السجاد في جدة | شركة النظافة المثالية"
        description="خدمة تنظيف سجاد عميق وتعقيم في جدة باستخدام أحدث التقنيات والمعدات. اتصل بنا الآن!"
        image="/images/blog/carpet-cleaning.avif"
        url="https://cleanwithfresh.com/services/carpet-cleaning"
        keywords="تنظيف سجاد جدة, شركة تنظيف سجاد, تنظيف موكيت, تعقيم سجاد, إزالة بقع السجاد, تنظيف بالبخار, خدمات تنظيف جدة"
      />
      <ServiceSchema
        serviceType="تنظيف السجاد"
        description="خدمة تنظيف سجاد عميق وتعقيم في جدة باستخدام أحدث التقنيات والمعدات."
        providerName="شركة النظافة المثالية"
        providerUrl="https://cleanwithfresh.com"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", url: "https://cleanwithfresh.com" },
          { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
          { name: "تنظيف السجاد", url: "https://cleanwithfresh.com/services/carpet-cleaning" }
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
                  <Carpet className="w-8 h-8 mr-3 text-yellow-400" />
                  <span className="bg-yellow-400/20 text-yellow-400 py-1 px-4 rounded-full text-sm font-medium">
                    خدمة تنظيف السجاد
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  تنظيف السجاد في جدة
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  نقدم خدمة تنظيف السجاد والموكيت الاحترافية في جدة. 
                  نستخدم أحدث التقنيات والمعدات المتخصصة لضمان تنظيف عميق وإزالة البقع الصعبة.
                  فريقنا المحترف يضمن لك سجاد نظيف وصحي لجميع أفراد أسرتك.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+966565265233"
                    className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل الآن لتنظيف سجادك في جدة
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
                    src="/images/blog/carpet-cleaning.avif"
                    alt="تنظيف السجاد في جدة"
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
                نتميز بخبرة 15+ عام في مجال تنظيف السجاد مع فريق محترف ومعدات حديثة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">فريق محترف</h3>
                <p className="text-gray-600">فريق عمل مدرب ومحترف مع خبرة 15+ عام في تنظيف السجاد</p>
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
                خدمات تنظيف السجاد
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم مجموعة شاملة من خدمات تنظيف السجاد لتلبية جميع احتياجاتك
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

        {/* Carpet Types Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                أنواع السجاد التي ننظفها
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ننظف جميع أنواع السجاد والموكيت باستخدام تقنيات ومواد مناسبة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {carpetTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="bg-green-100 p-4 rounded-full mr-4">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <p className="text-gray-700 leading-relaxed">{type.details}</p>
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
                فوائد تنظيف السجاد على الصحة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                تنظيف السجاد المنتظم له فوائد صحية عديدة على جميع أفراد العائلة
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
                نقدم لك نصائح ومعلومات مفيدة للحفاظ على نظافة سجادك
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
                إجابات على أكثر الأسئلة شيوعاً حول خدمات تنظيف السجاد
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
              احصل على سجاد نظيف اليوم
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              لا تنتظر أكثر! اتصل بنا الآن واحصل على عرض سعر مجاني لتنظيف سجادك في جدة
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