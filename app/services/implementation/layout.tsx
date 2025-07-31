import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceSchema from '@/components/seo/ServiceSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'خدمات التنفيذ والإدارة في جدة - شركة النظافة المثالية | تنفيذ وإدارة مشاريع النظافة',
  description: 'خدمة تنفيذ وإدارة مشاريع النظافة في جدة 📋 تنفيذ خطط النظافة، إدارة فرق العمل، مراقبة الجودة، تقديم التقارير، إشراف مباشر، متابعة دورية، ضمان الجودة والالتزام بالمواعيد',
  keywords: 'تنفيذ مشاريع نظافة جدة, شركة تنفيذ نظافة جدة, إدارة فرق نظافة جدة, مراقبة جودة نظافة جدة, خطط نظافة جدة, تقارير نظافة جدة, شركة نظافة تنفيذ جدة, إشراف مشاريع نظافة جدة, تنفيذ عقود نظافة جدة, إدارة عمال نظافة جدة, تدريب فرق نظافة جدة, رقابة جودة نظافة جدة, متابعة مشاريع نظافة جدة, تقييم أداء نظافة جدة, تحسين خدمات نظافة جدة, تطوير عمليات نظافة جدة, ضبط جودة نظافة جدة, مراجعة معايير نظافة جدة, تدقيق نظافة جدة, فحص جودة نظافة جدة, اختبار نظافة جدة, قياس كفاءة نظافة جدة, تحليل أداء نظافة جدة, تخطيط مشاريع نظافة جدة, برمجة أعمال نظافة جدة, جدولة خدمات نظافة جدة, تنسيق فرق نظافة جدة, توزيع مهام نظافة جدة, تحديد أولويات نظافة جدة, وضع معايير نظافة جدة, تصميم برامج نظافة جدة, بناء نظم نظافة جدة, تطبيق معايير نظافة جدة, تفعيل خطط نظافة جدة, تشغيل برامج نظافة جدة, إدارة موارد نظافة جدة, تخصيص إمكانيات نظافة جدة, توفير مستلزمات نظافة جدة, شراء معدات نظافة جدة, صيانة أدوات نظافة جدة, تجديد مواد نظافة جدة, استبدال أجهزة نظافة جدة, ترقية تقنيات نظافة جدة, تحديث أساليب نظافة جدة, تحسين طرق نظافة جدة, تطوير وسائل نظافة جدة, ابتكار حلول نظافة جدة, أسعار تنفيذ مشاريع نظافة جدة, شركة تنفيذ مشاريع نظافة رخيصة جدة, تنفيذ مشاريع نظافة فوري جدة, إدارة مشاريع نظافة سريعة جدة',
  openGraph: {
    title: 'خدمات التنفيذ والإدارة في جدة - شركة النظافة المثالية',
    description: 'خدمة تنفيذ وإدارة مشاريع النظافة في جدة 📋 تنفيذ خطط النظافة، إدارة فرق العمل، مراقبة الجودة والتقارير',
    type: 'website',
    locale: 'ar_SA',
    url: 'https://cleanwithfresh.com/services/implementation',
    siteName: 'شركة النظافة المثالية',
    images: [
      {
        url: '/images/blog/professional-cleaning.png',
        width: 1200,
        height: 630,
        alt: 'خدمات التنفيذ وإدارة مشاريع النظافة في جدة - شركة النظافة المثالية'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدمات التنفيذ والإدارة في جدة - شركة النظافة المثالية',
    description: 'خدمة تنفيذ وإدارة مشاريع النظافة في جدة 📋 تنفيذ خطط النظافة، إدارة فرق العمل، مراقبة الجودة',
    site: '@cleanwithfresh',
    creator: '@cleanwithfresh',
    images: ['/images/blog/professional-cleaning.png']
  },
  alternates: {
    canonical: 'https://cleanwithfresh.com/services/implementation',
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
    },
  },

}

export default function ImplementationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbItems = [
    { name: "الرئيسية", url: "https://cleanwithfresh.com" },
    { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
    { name: "خدمات التنفيذ", url: "https://cleanwithfresh.com/services/implementation" }
  ];

  return (
    <>
      <ServiceSchema
        serviceName="خدمات التنفيذ وإدارة مشاريع النظافة"
        serviceType="CleaningService"
        description="خدمة تنفيذ وإدارة مشاريع النظافة المتخصصة في جدة. تنفيذ خطط النظافة، إدارة فرق العمل، مراقبة الجودة، تقديم التقارير الدورية، إشراف مباشر ومتابعة مستمرة لضمان أعلى معايير الجودة."
        areaServed="جدة، المملكة العربية السعودية"
        priceRange="$$"
        availableHours="Mo-Su 08:00-20:00"
        image="/images/blog/professional-cleaning.png"
        url="https://cleanwithfresh.com/services/implementation"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
} 