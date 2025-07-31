import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AppWindowIcon as WindowIcon, 
  CheckCircle, 
  Clock, 
  Star, 
  Shield, 
  Users, 
  Award, 
  Phone, 
  MessageCircle,
  Sparkles,
  Eye,
  Zap,
  Droplets,
  Wind,
  Sun,
  Moon,
  Heart,
  Leaf,
  Target,
  TrendingUp,
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
  CalendarHeart,
  Calendar,
  Building2,
  MapPin
} from 'lucide-react'
import PageSeo from '@/components/seo/PageSeo';
import ServiceSchema from '@/components/seo/ServiceSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'تنظيف النوافذ في جدة - شركة النظافة المثالية | تنظيف زجاج وواجهات',
  description: 'خدمة تنظيف النوافذ والواجهات الزجاجية في جدة. تنظيف بدون خطوط، تلميع احترافي، معدات متخصصة. أسعار تنافسية.',
  keywords: 'تنظيف نوافذ جدة, شركة تنظيف نوافذ جدة, تنظيف زجاج جدة, تنظيف واجهات جدة, تلميع زجاج جدة, تنظيف نوافذ خارجية جدة, تنظيف نوافذ شمال جدة, تنظيف نوافذ جنوب جدة, تنظيف نوافذ شرق جدة, تنظيف نوافذ غرب جدة, تنظيف نوافذ وسط جدة, تنظيف نوافذ الكورنيش جدة, تنظيف نوافذ شارع التحلية جدة, تنظيف نوافذ شارع الملك فهد جدة, تنظيف نوافذ النزهة جدة, تنظيف نوافذ الشاطئ جدة, تنظيف نوافذ الروضة جدة, تنظيف نوافذ البلد جدة, تنظيف نوافذ العزيزية جدة, تنظيف نوافذ السامر جدة, تنظيف نوافذ الحمراء جدة, تنظيف نوافذ السلامة جدة, تنظيف نوافذ النزلة اليمانية جدة, تنظيف نوافذ النزلة الشرقية جدة, تنظيف نوافذ النزلة الغربية جدة, تنظيف نوافذ الكندرة جدة, تنظيف نوافذ الثعالبة جدة, تنظيف نوافذ العمارية جدة, تنظيف نوافذ الكورنيش الشمالي جدة, تنظيف نوافذ الكورنيش الجنوبي جدة, تنظيف نوافذ احترافي جدة, تنظيف نوافذ متخصص جدة, تنظيف نوافذ شامل جدة, تنظيف نوافذ دقيق جدة, تنظيف نوافذ دوري جدة, تنظيف نوافذ أسبوعي جدة, تنظيف نوافذ شهري جدة, تنظيف نوافذ يومي جدة, تنظيف نوافذ سريع جدة, تنظيف نوافذ فوري جدة, أسعار تنظيف نوافذ جدة, سعر تنظيف نوافذ اقتصادي جدة, سعر تنظيف نوافذ تنافسي جدة, سعر تنظيف نوافذ مناسب جدة, شركة تنظيف نوافذ رخيصة جدة, شركة تنظيف نوافذ اقتصادية جدة, شركة تنظيف نوافذ موثوقة جدة, شركة تنظيف نوافذ مضمونة جدة, شركة تنظيف نوافذ معتمدة جدة, شركة تنظيف نوافذ مرخصة جدة, تنظيف نوافذ بالبخار جدة, تنظيف نوافذ عميق جدة, تنظيف نوافذ احترافي جدة, تنظيف نوافذ شامل جدة, تنظيف نوافذ دوري جدة, تنظيف نوافذ أسبوعي جدة, تنظيف نوافذ شهري جدة, تنظيف نوافذ يومي جدة, تنظيف نوافذ سريع جدة, تنظيف نوافذ فوري جدة, تنظيف نوافذ طوارئ جدة, تنظيف نوافذ عاجل جدة, تنظيف نوافذ في نفس اليوم جدة, تنظيف نوافذ خلال ساعات جدة, مواد تنظيف نوافذ آمنة جدة, مواد تنظيف نوافذ طبيعية جدة, مواد تنظيف نوافذ صديقة للبيئة جدة, مواد تنظيف نوافذ معتمدة جدة, معدات تنظيف نوافذ حديثة جدة, معدات تنظيف نوافذ متطورة جدة, معدات تنظيف نوافذ احترافية جدة, فريق تنظيف نوافذ محترف جدة, عمال تنظيف نوافذ مدربين جدة, عمال تنظيف نوافذ محترفين جدة, خدمة تنظيف نوافذ 24 ساعة جدة, خدمة تنظيف نوافذ فورية جدة, خدمة تنظيف نوافذ سريعة جدة, خدمة تنظيف نوافذ مضمونة جدة, نصائح تنظيف نوافذ جدة, طرق تنظيف نوافذ جدة, أساليب تنظيف نوافذ جدة, حلول تنظيف نوافذ جدة, مشاكل تنظيف نوافذ جدة, حلول بقع تنظيف نوافذ جدة, أدوات تنظيف نوافذ منزلية جدة, مواد تنظيف نوافذ طبيعية جدة, رقم شركة تنظيف نوافذ جدة, هاتف شركة تنظيف نوافذ جدة, واتساب شركة تنظيف نوافذ جدة, حجز تنظيف نوافذ جدة, طلب تنظيف نوافذ جدة, استفسار تنظيف نوافذ جدة, عرض سعر تنظيف نوافذ جدة, ضمان تنظيف نوافذ جدة, ضمان جودة تنظيف نوافذ جدة, ضمان رضا عميل تنظيف نوافذ جدة, ضمان إعادة تنظيف نوافذ جدة, ضمان نظافة نوافذ جدة, ضمان تعقيم نوافذ جدة, ضمان تطهير نوافذ جدة, أفضل شركة تنظيف نوافذ جدة, أرخص شركة تنظيف نوافذ جدة, أفضل أسعار تنظيف نوافذ جدة, مقارنة شركات تنظيف نوافذ جدة, تقييم شركات تنظيف نوافذ جدة, آراء شركات تنظيف نوافذ جدة, تجارب شركات تنظيف نوافذ جدة, تنظيف نوافذ ربيع جدة, تنظيف نوافذ صيف جدة, تنظيف نوافذ خريف جدة, تنظيف نوافذ شتاء جدة, تنظيف نوافذ عيد جدة, تنظيف نوافذ رمضان جدة, تنظيف نوافذ حج جدة, تنظيف نوافذ عمرة جدة, تنظيف نوافذ طوارئ جدة, تنظيف نوافذ فوري جدة, تنظيف نوافذ سريع جدة, تنظيف نوافذ عاجل جدة, تنظيف نوافذ في نفس اليوم جدة, تنظيف نوافذ خلال ساعات جدة, شركة النظافة المثالية تنظيف نوافذ جدة, مدونة تنظيف نوافذ جدة, مقالات تنظيف نوافذ جدة, نصائح نظافة نوافذ جدة, طرق تنظيف نوافذ منزلية جدة, حلول تنظيف نوافذ طبيعية جدة, تنظيف نوافذ صديق للبيئة جدة, تنظيف نوافذ آمن للأطفال جدة, تنظيف نوافذ آمن للحيوانات جدة, تنظيف نوافذ شامل شامل جدة, تنظيف نوافذ احترافي متخصص جدة, تنظيف نوافذ متخصص شامل جدة, تنظيف نوافذ دقيق شامل جدة, تنظيف نوافذ شامل شامل جدة, تعقيم نوافذ شامل جدة, تطهير نوافذ شامل جدة, رش نوافذ آمن جدة, تعقيم نوافذ ضد جميع الفيروسات جدة, تنظيف نوافذ ما بعد التشطيب جدة, تنظيف نوافذ شامل للمواقع الجديدة جدة, تنظيف نوافذ شامل للشقق الجديدة جدة, تنظيف نوافذ شامل للفلل الجديدة جدة, شركة تنظيف نوافذ في جميع أحياء جدة, شركة تنظيف نوافذ في الكورنيش جدة, شركة تنظيف نوافذ في شارع التحلية جدة, شركة تنظيف نوافذ في شارع الملك فهد جدة, تنظيف نوافذ بالبخار المتطور جدة, تنظيف نوافذ عميق شامل جدة, تنظيف نوافذ احترافي متخصص جدة, تنظيف نوافذ شامل شامل جدة, تنظيف نوافذ دوري منتظم جدة, تنظيف نوافذ أسبوعي شامل جدة, تنظيف نوافذ شهري شامل جدة, تنظيف نوافذ يومي شامل جدة, تنظيف نوافذ سريع احترافي جدة, تنظيف نوافذ فوري شامل جدة, أسعار تنظيف نوافذ تنافسية جدة, سعر تنظيف نوافذ اقتصادي جدة, سعر تنظيف نوافذ تنافسي جدة, سعر تنظيف نوافذ مناسب جدة, شركة تنظيف نوافذ رخيصة وموثوقة جدة, شركة تنظيف نوافذ اقتصادية وجودة جدة, شركة تنظيف نوافذ موثوقة ومعتمدة جدة, شركة تنظيف نوافذ مضمونة الجودة جدة, شركة تنظيف نوافذ معتمدة ومرخصة جدة, شركة تنظيف نوافذ مرخصة وموثوقة جدة, تنظيف نوافذ مكيفات شامل جدة, تنظيف نوافذ ثريات احترافي جدة, تنظيف نوافذ ستائر دقيق جدة, تنظيف نوافذ أثاث شامل جدة, تنظيف نوافذ أجهزة كهربائية آمن جدة, تنظيف نوافذ مداخل احترافي جدة, تنظيف نوافذ سلالم دقيق جدة, تنظيف نوافذ مصاعد شامل جدة, تنظيف نوافذ عائلات شاملة جدة, تنظيف نوافذ شركات احترافي جدة, تنظيف نوافذ مطاعم شامل جدة, تنظيف نوافذ فنادق احترافي جدة, تنظيف نوافذ مستشفيات متخصص جدة, تنظيف نوافذ مدارس شامل جدة, تنظيف نوافذ جامعات احترافي جدة, تنظيف نوافذ مراكز تجارية شامل جدة, تنظيف نوافذ مولات احترافي جدة, تنظيف نوافذ مساجد متخصص جدة, مواد تنظيف نوافذ آمنة وطبيعية جدة, مواد تنظيف نوافذ صديقة للبيئة ومعتمدة جدة, مواد تنظيف نوافذ معتمدة وآمنة جدة, مواد تنظيف نوافذ طبيعية وفعالة جدة, معدات تنظيف نوافذ حديثة ومتطورة جدة, معدات تنظيف نوافذ متطورة واحترافية جدة, معدات تنظيف نوافذ احترافية وحديثة جدة, فريق تنظيف نوافذ محترف ومدرب جدة, عمال تنظيف نوافذ مدربين ومحترفين جدة, عمال تنظيف نوافذ محترفين وموثوقين جدة, خدمة تنظيف نوافذ 24 ساعة متواصلة جدة, خدمة تنظيف نوافذ فورية وسريعة جدة, خدمة تنظيف نوافذ سريعة ومضمونة جدة, خدمة تنظيف نوافذ مضمونة وجودة جدة, نصائح تنظيف نوافذ شاملة جدة, طرق تنظيف نوافذ فعالة جدة, أساليب تنظيف نوافذ احترافية جدة, حلول تنظيف نوافذ متكاملة جدة, مشاكل تنظيف نوافذ وحلولها جدة, حلول بقع تنظيف نوافذ صعبة جدة, أدوات تنظيف نوافذ منزلية فعالة جدة, مواد تنظيف نوافذ طبيعية وآمنة جدة, رقم شركة تنظيف نوافذ موثوقة جدة, هاتف شركة تنظيف نوافذ معتمدة جدة, واتساب شركة تنظيف نوافذ سريعة جدة, حجز تنظيف نوافذ فوري جدة, طلب تنظيف نوافذ سريع جدة, استفسار تنظيف نوافذ شامل جدة, عرض سعر تنظيف نوافذ تنافسي جدة, ضمان تنظيف نوافذ شامل جدة, ضمان جودة تنظيف نوافذ عالية جدة, ضمان رضا عميل تنظيف نوافذ كامل جدة, ضمان إعادة تنظيف نوافذ مجاني جدة, ضمان نظافة نوافذ شاملة جدة, ضمان تعقيم نوافذ شامل جدة, ضمان تطهير نوافذ شامل جدة, أفضل شركة تنظيف نوافذ في جدة, أرخص شركة تنظيف نوافذ موثوقة جدة, أفضل أسعار تنظيف نوافذ تنافسية جدة, مقارنة شركات تنظيف نوافذ شاملة جدة, تقييم شركات تنظيف نوافذ موثوقة جدة, آراء شركات تنظيف نوافذ معتمدة جدة, تجارب شركات تنظيف نوافذ موثوقة جدة, تنظيف نوافذ ربيع شامل جدة, تنظيف نوافذ صيف احترافي جدة, تنظيف نوافذ خريف دقيق جدة, تنظيف نوافذ شتاء شامل جدة, تنظيف نوافذ عيد شامل جدة, تنظيف نوافذ رمضان احترافي جدة, تنظيف نوافذ حج متخصص جدة, تنظيف نوافذ عمرة شامل جدة, تنظيف نوافذ طوارئ فوري جدة, تنظيف نوافذ فوري وسريع جدة, تنظيف نوافذ سريع واحترافي جدة, تنظيف نوافذ عاجل وشامل جدة, تنظيف نوافذ في نفس اليوم مضمون جدة, تنظيف نوافذ خلال ساعات قليلة جدة',
  openGraph: {
    title: 'تنظيف النوافذ في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف النوافذ والواجهات الزجاجية الاحترافية في جدة',
    type: 'website',
    locale: 'ar_SA',
  },
}

const features = [
  {
    title: 'تنظيف بدون خطوط',
    description: 'تنظيف وتلميع الزجاج بدون خطوط أو آثار باستخدام تقنيات متخصصة',
    icon: Eye,
    details: 'نستخدم تقنيات متخصصة ومواد تنظيف عالية الجودة لضمان تنظيف الزجاج بدون ترك خطوط أو آثار. نطبق طرق مختلفة حسب نوع الزجاج ودرجة التلوث.'
  },
  {
    title: 'معدات متخصصة',
    description: 'معدات متخصصة للأماكن المرتفعة والواجهات الزجاجية',
    icon: Shield,
    details: 'نستخدم معدات متخصصة وآمنة للوصول إلى الأماكن المرتفعة والواجهات الزجاجية. معداتنا مجهزة بأحدث التقنيات لضمان الأمان والكفاءة.'
  },
  {
    title: 'تنظيف شامل',
    description: 'تنظيف النوافذ الداخلية والخارجية والواجهات',
    icon: WindowIcon,
    details: 'نقدم خدمة تنظيف شاملة تشمل النوافذ الداخلية والخارجية والواجهات الزجاجية. نراعي جميع التفاصيل لضمان نظافة مثالية.'
  },
  {
    title: 'تلميع احترافي',
    description: 'تلميع احترافي للزجاج والمرايا باستخدام تقنيات متقدمة',
    icon: Sparkles,
    details: 'نستخدم تقنيات تلميع متقدمة ومواد عالية الجودة لضمان تلميع احترافي للزجاج والمرايا. نراعي نوع الزجاج ونطبق الطريقة المناسبة.'
  }
]

const cleaningTechniques = [
  {
    title: 'التنظيف بالبخار',
    description: 'استخدام البخار لإزالة الأوساخ العنيدة',
    icon: Droplets,
    benefits: ['إزالة الأوساخ العنيدة', 'قتل الجراثيم', 'تنظيف عميق', 'آمن للزجاج']
  },
  {
    title: 'التنظيف بالمواد المتخصصة',
    description: 'استخدام مواد تنظيف متخصصة لكل نوع من الزجاج',
    icon: TestTube,
    benefits: ['مواد آمنة للزجاج', 'فعالية عالية', 'عدم إتلاف الزجاج', 'نتائج ممتازة']
  },
  {
    title: 'التنظيف بالتقنيات المتقدمة',
    description: 'استخدام أحدث التقنيات والمعدات المتخصصة',
    icon: Zap,
    benefits: ['كفاءة عالية', 'توفير الوقت', 'جودة احترافية', 'نتائج دائمة']
  },
  {
    title: 'التنظيف بالجدولة المنتظمة',
    description: 'تنظيف منتظم ومجدول حسب احتياجات العميل',
    icon: Calendar,
    benefits: ['جدولة مرنة', 'نظافة مستمرة', 'تكلفة محسنة', 'نتائج مثالية']
  }
]

const windowTypes = [
  {
    title: 'النوافذ المنزلية',
    description: 'تنظيف شامل للنوافذ المنزلية',
    icon: WindowIcon,
    details: 'نقدم خدمة تنظيف شاملة للنوافذ المنزلية تشمل النوافذ الداخلية والخارجية. نراعي خصوصية المنزل ونستخدم مواد آمنة.'
  },
  {
    title: 'النوافذ التجارية',
    description: 'تنظيف احترافي للنوافذ التجارية',
    icon: Building2,
    details: 'نقدم خدمة تنظيف احترافية للنوافذ التجارية والمحلات. نراعي ساعات العمل ونستخدم معدات متخصصة.'
  },
  {
    title: 'الواجهات الزجاجية',
    description: 'تنظيف الواجهات الزجاجية للمباني',
    icon: Sparkles,
    details: 'نستخدم معدات متخصصة لتنظيف الواجهات الزجاجية للمباني العالية. نراعي الأمان ونطبق أحدث التقنيات.'
  },
  {
    title: 'المرايا والزجاج',
    description: 'تلميع احترافي للمرايا والزجاج',
    icon: Eye,
    details: 'نقدم خدمة تلميع احترافية للمرايا والزجاج. نستخدم تقنيات متقدمة لضمان تلميع مثالي بدون خطوط.'
  }
]

const benefits = [
  {
    title: 'تحسين المظهر العام',
    description: 'النوافذ النظيفة تحسن من مظهر المبنى',
    icon: Eye,
    details: 'النوافذ النظيفة والواضحة تحسن من المظهر العام للمبنى وتعكس الاحترافية والاهتمام بالتفاصيل.'
  },
  {
    title: 'تحسين الإضاءة الطبيعية',
    description: 'النوافذ النظيفة تسمح بدخول المزيد من الضوء',
    icon: Sun,
    details: 'النوافذ النظيفة تسمح بدخول المزيد من الضوء الطبيعي مما يحسن من جودة الإضاءة في المكان.'
  },
  {
    title: 'تحسين كفاءة الطاقة',
    description: 'النوافذ النظيفة تحسن من كفاءة التكييف',
    icon: Zap,
    details: 'النوافذ النظيفة تحسن من كفاءة التكييف والتدفئة مما يوفر في استهلاك الطاقة.'
  },
  {
    title: 'تحسين الصحة النفسية',
    description: 'المنظر الواضح يحسن من الصحة النفسية',
    icon: Heart,
    details: 'المنظر الواضح من النوافذ النظيفة يحسن من الصحة النفسية ويقلل من التوتر.'
  }
]

const services = [
  'تنظيف النوافذ الداخلية والخارجية',
  'تلميع الزجاج بدون خطوط',
  'تنظيف الإطارات والمسارات',
  'معدات متخصصة للأماكن المرتفعة',
  'تنظيف الواجهات الزجاجية',
  'إزالة البقع العنيدة',
  'تنظيف المرايا',
  'تنظيف أبواب زجاجية',
  'تنظيف المناور',
  'تنظيف الشرفات الزجاجية',
  'تنظيف النوافذ المزدوجة',
  'تنظيف النوافذ المائلة',
  'تنظيف النوافذ المطلة على البحر',
  'تنظيف النوافذ في الطوابق العالية',
  'تنظيف النوافذ في المراكز التجارية',
  'تنظيف النوافذ في المطاعم والفنادق'
]

const process = [
  {
    step: '01',
    title: 'التقييم والفحص',
    description: 'فحص حالة النوافذ وتحديد طريقة التنظيف',
    details: 'نقوم بفحص حالة النوافذ، نوع الزجاج، ودرجة التلوث. نحدد طريقة التنظيف المناسبة والمواد المطلوبة.'
  },
  {
    step: '02',
    title: 'التحضير والتجهيز',
    description: 'تحضير المعدات والمواد المتخصصة',
    details: 'نحضر جميع المعدات والمواد المتخصصة المطلوبة للتنظيف. نتأكد من جودة المواد وملاءمتها لنوع الزجاج.'
  },
  {
    step: '03',
    title: 'بدء عملية التنظيف',
    description: 'تنظيف شامل باستخدام التقنيات المتخصصة',
    details: 'نبدأ بتنظيف شامل للنوافذ باستخدام التقنيات المتخصصة. نراعي ترتيب العمل لضمان كفاءة عالية.'
  },
  {
    step: '04',
    title: 'التلميع والمراجعة',
    description: 'تلميع النوافذ ومراجعة النتائج النهائية',
    details: 'نقوم بتلميع النوافذ ومراجعة شاملة للعمل المنجز. نتأكد من عدم وجود خطوط أو آثار.'
  }
]

const tips = [
  {
    title: 'نصائح للحفاظ على نظافة النوافذ',
    icon: Lightbulb,
    tips: [
      'نظف النوافذ شهرياً على الأقل',
      'استخدم مواد تنظيف مناسبة للزجاج',
      'تجنب استخدام الماء الساخن',
      'نظف النوافذ في الصباح الباكر',
      'استخدم مناشف ناعمة للتنظيف',
      'تجنب تنظيف النوافذ في الشمس المباشرة',
      'نظف الإطارات والمسارات',
      'استخدم مواد طبيعية للتنظيف'
    ]
  },
  {
    title: 'أخطاء شائعة في تنظيف النوافذ',
    icon: AlertTriangle,
    tips: [
      'استخدام الماء الساخن على الزجاج',
      'فرك الزجاج بقوة',
      'استخدام مواد تنظيف قوية',
      'إهمال تنظيف الإطارات',
      'تنظيف النوافذ في الشمس',
      'استخدام مناشف خشنة',
      'إهمال تنظيف المسارات',
      'عدم تجفيف الزجاج جيداً'
    ]
  },
  {
    title: 'مواد تنظيف طبيعية للنوافذ',
    icon: Leaf,
    tips: [
      'استخدم الخل الأبيض لتنظيف الزجاج',
      'استخدم عصير الليمون للبقع',
      'استخدم بيكربونات الصوديوم',
      'استخدم زيت الزيتون للتلميع',
      'استخدم الملح للتنظيف',
      'استخدم الشاي الأخضر',
      'استخدم الزيوت العطرية',
      'استخدم الماء المقطر'
    ]
  }
]

const faq = [
  {
    question: 'كم مرة أحتاج لتنظيف النوافذ؟',
    answer: 'نوصي بتنظيف النوافذ شهرياً على الأقل، أو كل أسبوعين في المناطق المتربة.'
  },
  {
    question: 'هل تنظفون النوافذ في الطوابق العالية؟',
    answer: 'نعم، نستخدم معدات متخصصة وآمنة لتنظيف النوافذ في الطوابق العالية.'
  },
  {
    question: 'كم تستغرق عملية التنظيف؟',
    answer: 'تستغرق عملية التنظيف 3-5 ساعات حسب عدد النوافذ ومساحة العمل.'
  },
  {
    question: 'هل تنظفون جميع أنواع النوافذ؟',
    answer: 'نعم، ننظف جميع أنواع النوافذ والواجهات الزجاجية باستخدام تقنيات مناسبة.'
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

export default function WindowCleaningPage() {
  return (
    <>
      <PageSeo
        title="تنظيف النوافذ في جدة | شركة النظافة المثالية"
        description="خدمة تنظيف وتلميع النوافذ والواجهات الزجاجية للمنازل والمباني التجارية في جدة. اتصل بنا الآن!"
        image="/images/blog/spring-cleaning-tips.jpg"
        url="https://cleanwithfresh.com/services/window-cleaning"
        keywords="تنظيف نوافذ جدة, شركة تنظيف نوافذ, تنظيف واجهات زجاجية, تلميع زجاج, تنظيف منازل, تنظيف مباني تجارية, خدمات تنظيف جدة"
      />
      <ServiceSchema
        serviceType="تنظيف النوافذ"
        description="خدمة تنظيف وتلميع النوافذ والواجهات الزجاجية للمنازل والمباني التجارية في جدة."
        providerName="شركة النظافة المثالية"
        providerUrl="https://cleanwithfresh.com"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", url: "https://cleanwithfresh.com" },
          { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
          { name: "تنظيف النوافذ", url: "https://cleanwithfresh.com/services/window-cleaning" }
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
                  <WindowIcon className="w-8 h-8 mr-3 text-yellow-400" />
                  <span className="bg-yellow-400/20 text-yellow-400 py-1 px-4 rounded-full text-sm font-medium">
                    خدمة تنظيف النوافذ
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  تنظيف النوافذ في جدة
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  نقدم خدمة تنظيف النوافذ والواجهات الزجاجية الاحترافية في جدة. 
                  نستخدم أحدث التقنيات والمعدات المتخصصة لضمان تنظيف بدون خطوط وتلميع احترافي.
                  فريقنا المحترف يضمن لك نوافذ نظيفة وواضحة تعكس جمال منزلك أو مكتبك.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+966565265233"
                    className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل الآن لتنظيف نوافذك في جدة
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
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/blog/spring-cleaning-tips.jpg"
                    alt="تنظيف النوافذ في جدة"
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
                نتميز بخبرة 15+ عام في مجال تنظيف النوافذ مع فريق محترف ومعدات حديثة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">فريق متخصص</h3>
                <p className="text-gray-600">فريق متخصص في تنظيف النوافذ والواجهات مع خبرة 15+ عام</p>
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
                <p className="text-gray-600">تنظيف سريع وفعال في نفس اليوم مع كفاءة عالية</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                مميزات تنظيف النوافذ
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نستخدم أحدث التقنيات والمعدات لضمان أفضل نتائج تنظيف النوافذ
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

        {/* Window Types Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                أنواع النوافذ التي ننظفها
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ننظف جميع أنواع النوافذ والواجهات الزجاجية باستخدام تقنيات مناسبة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {windowTypes.map((type, index) => {
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

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                فوائد تنظيف النوافذ
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                تنظيف النوافذ المنتظم له فوائد عديدة على المظهر والصحة
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
                خدمات تنظيف النوافذ
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                قائمة شاملة بجميع خدمات تنظيف النوافذ والواجهات الزجاجية
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
                نقدم لك نصائح ومعلومات مفيدة للحفاظ على نظافة نوافذك
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
                إجابات على أكثر الأسئلة شيوعاً حول خدمات تنظيف النوافذ
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
              احصل على نوافذ نظيفة اليوم
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              لا تنتظر أكثر! اتصل بنا الآن واحصل على عرض سعر مجاني لتنظيف نوافذك في جدة
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