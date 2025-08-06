import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'تنظيف المكاتب في جدة - شركة النظافة المثالية | تنظيف شركات ومؤسسات',
  description: 'خدمة تنظيف المكاتب والشركات في جدة. تنظيف احترافي للمكاتب، قاعات الاجتماعات، المطابخ الصغيرة. أسعار تنافسية.',
  keywords: 'تنظيف مكاتب جدة, شركة تنظيف مكاتب جدة, تنظيف شركات جدة, تنظيف مؤسسات جدة, تنظيف قاعات اجتماعات جدة, تنظيف مطابخ مكاتب جدة, تنظيف شركات جدة, تنظيف مؤسسات جدة, تنظيف مكاتب شركات جدة, تنظيف مكاتب مؤسسات جدة, تنظيف مكاتب احترافي جدة, تنظيف مكاتب متخصص جدة, تنظيف مكاتب شامل جدة, تنظيف مكاتب دقيق جدة, تنظيف مكاتب دوري جدة, تنظيف مكاتب أسبوعي جدة, تنظيف مكاتب شهري جدة, تنظيف مكاتب يومي جدة, تنظيف مكاتب سريع جدة, تنظيف مكاتب فوري جدة, أسعار تنظيف مكاتب جدة, سعر تنظيف مكاتب اقتصادي جدة, سعر تنظيف مكاتب تنافسي جدة, سعر تنظيف مكاتب مناسب جدة, شركة تنظيف مكاتب رخيصة جدة, شركة تنظيف مكاتب اقتصادية جدة, شركة تنظيف مكاتب موثوقة جدة, شركة تنظيف مكاتب مضمونة جدة, شركة تنظيف مكاتب معتمدة جدة, شركة تنظيف مكاتب مرخصة جدة, تنظيف مكاتب بالبخار جدة, تنظيف مكاتب عميق جدة, تنظيف مكاتب احترافي جدة, تنظيف مكاتب شامل جدة, تنظيف مكاتب دوري جدة, تنظيف مكاتب أسبوعي جدة, تنظيف مكاتب شهري جدة, تنظيف مكاتب يومي جدة, تنظيف مكاتب سريع جدة, تنظيف مكاتب فوري جدة, تنظيف مكاتب طوارئ جدة, تنظيف مكاتب عاجل جدة, تنظيف مكاتب في نفس اليوم جدة, تنظيف مكاتب خلال ساعات جدة, تنظيف مكاتب شمال جدة, تنظيف مكاتب جنوب جدة, تنظيف مكاتب شرق جدة, تنظيف مكاتب غرب جدة, تنظيف مكاتب وسط جدة, تنظيف مكاتب الكورنيش جدة, تنظيف مكاتب شارع التحلية جدة, تنظيف مكاتب شارع الملك فهد جدة, تنظيف مكاتب النزهة جدة, تنظيف مكاتب الشاطئ جدة, تنظيف مكاتب الروضة جدة, تنظيف مكاتب البلد جدة, تنظيف مكاتب العزيزية جدة, تنظيف مكاتب السامر جدة, تنظيف مكاتب الحمراء جدة, تنظيف مكاتب السلامة جدة, تنظيف مكاتب النزلة اليمانية جدة, تنظيف مكاتب النزلة الشرقية جدة, تنظيف مكاتب النزلة الغربية جدة, تنظيف مكاتب الكندرة جدة, تنظيف مكاتب الثعالبة جدة, تنظيف مكاتب العمارية جدة, تنظيف مكاتب الكورنيش الشمالي جدة, تنظيف مكاتب الكورنيش الجنوبي جدة, مواد تنظيف مكاتب آمنة جدة, مواد تنظيف مكاتب طبيعية جدة, مواد تنظيف مكاتب صديقة للبيئة جدة, مواد تنظيف مكاتب معتمدة جدة, معدات تنظيف مكاتب حديثة جدة, معدات تنظيف مكاتب متطورة جدة, معدات تنظيف مكاتب احترافية جدة, فريق تنظيف مكاتب محترف جدة, عمال تنظيف مكاتب مدربين جدة, عمال تنظيف مكاتب محترفين جدة, خدمة تنظيف مكاتب 24 ساعة جدة, خدمة تنظيف مكاتب فورية جدة, خدمة تنظيف مكاتب سريعة جدة, خدمة تنظيف مكاتب مضمونة جدة, نصائح تنظيف مكاتب جدة, طرق تنظيف مكاتب جدة, أساليب تنظيف مكاتب جدة, حلول تنظيف مكاتب جدة, مشاكل تنظيف مكاتب جدة, حلول بقع تنظيف مكاتب جدة, أدوات تنظيف مكاتب منزلية جدة, مواد تنظيف مكاتب طبيعية جدة, رقم شركة تنظيف مكاتب جدة, هاتف شركة تنظيف مكاتب جدة, واتساب شركة تنظيف مكاتب جدة, حجز تنظيف مكاتب جدة, طلب تنظيف مكاتب جدة, استفسار تنظيف مكاتب جدة, عرض سعر تنظيف مكاتب جدة, ضمان تنظيف مكاتب جدة, ضمان جودة تنظيف مكاتب جدة, ضمان رضا عميل تنظيف مكاتب جدة, ضمان إعادة تنظيف مكاتب جدة, ضمان نظافة مكاتب جدة, ضمان تعقيم مكاتب جدة, ضمان تطهير مكاتب جدة, أفضل شركة تنظيف مكاتب جدة, أرخص شركة تنظيف مكاتب جدة, أفضل أسعار تنظيف مكاتب جدة, مقارنة شركات تنظيف مكاتب جدة, تقييم شركات تنظيف مكاتب جدة, آراء شركات تنظيف مكاتب جدة, تجارب شركات تنظيف مكاتب جدة, تنظيف مكاتب ربيع جدة, تنظيف مكاتب صيف جدة, تنظيف مكاتب خريف جدة, تنظيف مكاتب شتاء جدة, تنظيف مكاتب عيد جدة, تنظيف مكاتب رمضان جدة, تنظيف مكاتب حج جدة, تنظيف مكاتب عمرة جدة, تنظيف مكاتب طوارئ جدة, تنظيف مكاتب فوري جدة, تنظيف مكاتب سريع جدة, تنظيف مكاتب عاجل جدة, تنظيف مكاتب في نفس اليوم جدة, تنظيف مكاتب خلال ساعات جدة, شركة النظافة المثالية تنظيف مكاتب جدة, مدونة تنظيف مكاتب جدة, مقالات تنظيف مكاتب جدة, نصائح نظافة مكاتب جدة, طرق تنظيف مكاتب منزلية جدة, حلول تنظيف مكاتب طبيعية جدة, تنظيف مكاتب صديق للبيئة جدة, تنظيف مكاتب آمن للأطفال جدة, تنظيف مكاتب آمن للحيوانات جدة, تنظيف مكاتب شامل شامل جدة, تنظيف مكاتب احترافي متخصص جدة, تنظيف مكاتب متخصص شامل جدة, تنظيف مكاتب دقيق شامل جدة, تنظيف مكاتب شامل شامل جدة, تعقيم مكاتب شامل جدة, تطهير مكاتب شامل جدة, رش مكاتب آمن جدة, تعقيم مكاتب ضد جميع الفيروسات جدة, تنظيف مكاتب ما بعد التشطيب جدة, تنظيف مكاتب شامل للمواقع الجديدة جدة, تنظيف مكاتب شامل للشقق الجديدة جدة, تنظيف مكاتب شامل للفلل الجديدة جدة, شركة تنظيف مكاتب في جميع أحياء جدة, شركة تنظيف مكاتب في الكورنيش جدة, شركة تنظيف مكاتب في شارع التحلية جدة, شركة تنظيف مكاتب في شارع الملك فهد جدة, تنظيف مكاتب بالبخار المتطور جدة, تنظيف مكاتب عميق شامل جدة, تنظيف مكاتب احترافي متخصص جدة, تنظيف مكاتب شامل شامل جدة, تنظيف مكاتب دوري منتظم جدة, تنظيف مكاتب أسبوعي شامل جدة, تنظيف مكاتب شهري شامل جدة, تنظيف مكاتب يومي شامل جدة, تنظيف مكاتب سريع احترافي جدة, تنظيف مكاتب فوري شامل جدة, أسعار تنظيف مكاتب تنافسية جدة, سعر تنظيف مكاتب اقتصادي جدة, سعر تنظيف مكاتب تنافسي جدة, سعر تنظيف مكاتب مناسب جدة, شركة تنظيف مكاتب رخيصة وموثوقة جدة, شركة تنظيف مكاتب اقتصادية وجودة جدة, شركة تنظيف مكاتب موثوقة ومعتمدة جدة, شركة تنظيف مكاتب مضمونة الجودة جدة, شركة تنظيف مكاتب معتمدة ومرخصة جدة, شركة تنظيف مكاتب مرخصة وموثوقة جدة, تنظيف مكاتب مكيفات شامل جدة, تنظيف مكاتب ثريات احترافي جدة, تنظيف مكاتب ستائر دقيق جدة, تنظيف مكاتب أثاث شامل جدة, تنظيف مكاتب أجهزة كهربائية آمن جدة, تنظيف مكاتب مداخل احترافي جدة, تنظيف مكاتب سلالم دقيق جدة, تنظيف مكاتب مصاعد شامل جدة, تنظيف مكاتب عائلات شاملة جدة, تنظيف مكاتب شركات احترافي جدة, تنظيف مكاتب مطاعم شامل جدة, تنظيف مكاتب فنادق احترافي جدة, تنظيف مكاتب مستشفيات متخصص جدة, تنظيف مكاتب مدارس شامل جدة, تنظيف مكاتب جامعات احترافي جدة, تنظيف مكاتب مراكز تجارية شامل جدة, تنظيف مكاتب مولات احترافي جدة, تنظيف مكاتب مساجد متخصص جدة, مواد تنظيف مكاتب آمنة وطبيعية جدة, مواد تنظيف مكاتب صديقة للبيئة ومعتمدة جدة, مواد تنظيف مكاتب معتمدة وآمنة جدة, مواد تنظيف مكاتب طبيعية وفعالة جدة, معدات تنظيف مكاتب حديثة ومتطورة جدة, معدات تنظيف مكاتب متطورة واحترافية جدة, معدات تنظيف مكاتب احترافية وحديثة جدة, فريق تنظيف مكاتب محترف ومدرب جدة, عمال تنظيف مكاتب مدربين ومحترفين جدة, عمال تنظيف مكاتب محترفين وموثوقين جدة, خدمة تنظيف مكاتب 24 ساعة متواصلة جدة, خدمة تنظيف مكاتب فورية وسريعة جدة, خدمة تنظيف مكاتب سريعة ومضمونة جدة, خدمة تنظيف مكاتب مضمونة وجودة جدة, نصائح تنظيف مكاتب شاملة جدة, طرق تنظيف مكاتب فعالة جدة, أساليب تنظيف مكاتب احترافية جدة, حلول تنظيف مكاتب متكاملة جدة, مشاكل تنظيف مكاتب وحلولها جدة, حلول بقع تنظيف مكاتب صعبة جدة, أدوات تنظيف مكاتب منزلية فعالة جدة, مواد تنظيف مكاتب طبيعية وآمنة جدة, رقم شركة تنظيف مكاتب موثوقة جدة, هاتف شركة تنظيف مكاتب معتمدة جدة, واتساب شركة تنظيف مكاتب سريعة جدة, حجز تنظيف مكاتب فوري جدة, طلب تنظيف مكاتب سريع جدة, استفسار تنظيف مكاتب شامل جدة, عرض سعر تنظيف مكاتب تنافسي جدة, ضمان تنظيف مكاتب شامل جدة, ضمان جودة تنظيف مكاتب عالية جدة, ضمان رضا عميل تنظيف مكاتب كامل جدة, ضمان إعادة تنظيف مكاتب مجاني جدة, ضمان نظافة مكاتب شاملة جدة, ضمان تعقيم مكاتب شامل جدة, ضمان تطهير مكاتب شامل جدة, أفضل شركة تنظيف مكاتب في جدة, أرخص شركة تنظيف مكاتب موثوقة جدة, أفضل أسعار تنظيف مكاتب تنافسية جدة, مقارنة شركات تنظيف مكاتب شاملة جدة, تقييم شركات تنظيف مكاتب موثوقة جدة, آراء شركات تنظيف مكاتب معتمدة جدة, تجارب شركات تنظيف مكاتب موثوقة جدة, تنظيف مكاتب ربيع شامل جدة, تنظيف مكاتب صيف احترافي جدة, تنظيف مكاتب خريف دقيق جدة, تنظيف مكاتب شتاء شامل جدة, تنظيف مكاتب عيد شامل جدة, تنظيف مكاتب رمضان احترافي جدة, تنظيف مكاتب حج متخصص جدة, تنظيف مكاتب عمرة شامل جدة, تنظيف مكاتب طوارئ فوري جدة, تنظيف مكاتب فوري وسريع جدة, تنظيف مكاتب سريع واحترافي جدة, تنظيف مكاتب عاجل وشامل جدة, تنظيف مكاتب في نفس اليوم مضمون جدة, تنظيف مكاتب خلال ساعات قليلة جدة',
  openGraph: {
    title: 'تنظيف المكاتب في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف المكاتب والشركات الاحترافية في جدة بأعلى معايير الجودة',
    type: 'website',
    locale: 'ar_SA',
  },
}

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
                    href="tel:+966592425757"
                    className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل الآن لتنظيف مكتبك في جدة
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
                href="tel:+966592425757"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل بنا: 966592425757+
              </a>
              <Link 
                href="https://wa.me/966592425757"
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