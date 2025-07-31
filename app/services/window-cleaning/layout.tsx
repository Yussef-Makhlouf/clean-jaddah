import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceSchema from '@/components/seo/ServiceSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'تنظيف النوافذ في جدة - شركة النظافة المثالية | تنظيف زجاج وواجهات وأبراج',
  description: 'خدمة تنظيف النوافذ والواجهات الزجاجية المتخصصة في جدة 🪟 تنظيف داخلي وخارجي، تلميع بدون خطوط، تنظيف الإطارات والمسارات، تنظيف أبراج وناطحات السحاب. معدات حديثة وأمان كامل',
  keywords: 'تنظيف نوافذ جدة, شركة تنظيف نوافذ جدة, تنظيف زجاج جدة, تنظيف واجهات زجاجية جدة, تنظيف نوافذ خارجية جدة, تنظيف نوافذ داخلية جدة, تلميع زجاج جدة, شركة نظافة نوافذ جدة, تنظيف أبراج جدة, تنظيف ناطحات سحاب جدة, تنظيف واجهات مباني جدة, تنظيف نوافذ شقق جدة, تنظيف نوافذ فلل جدة, تنظيف نوافذ مكاتب جدة, تنظيف نوافذ شركات جدة, تنظيف نوافذ مستشفيات جدة, تنظيف نوافذ مدارس جدة, تنظيف نوافذ فنادق جدة, تنظيف نوافذ مطاعم جدة, تنظيف نوافذ مراكز تجارية جدة, تنظيف نوافذ مولات جدة, تنظيف زجاج شرفات جدة, تنظيف أبواب زجاجية جدة, تنظيف واجهات محلات جدة, تنظيف واجهات مكاتب جدة, تنظيف واجهات مصارف جدة, تنظيف نوافذ مراكز طبية جدة, تنظيف نوافذ صيدليات جدة, تنظيف نوافذ كافيهات جدة, تنظيف نوافذ صالونات جدة, تنظيف نوافذ معارض جدة, تنظيف نوافذ ورش جدة, تنظيف نوافذ مخازن جدة, تنظيف نوافذ مصانع جدة, تنظيف نوافذ من الداخل جدة, تنظيف نوافذ من الخارج جدة, تنظيف نوافذ طابقين جدة, تنظيف نوافذ ثلاث طوابق جدة, تنظيف نوافذ أدوار عالية جدة, تنظيف نوافذ بالحبال جدة, تنظيف نوافذ بالونش جدة, تنظيف نوافذ بالمصعد جدة, تنظيف نوافذ آمن جدة, تنظيف نوافذ محترف جدة, تنظيف نوافذ بمعدات حديثة جدة, تلميع زجاج بدون خطوط جدة, تلميع مرايا جدة, إزالة بقع الزجاج جدة, إزالة أتربة النوافذ جدة, تنظيف إطارات نوافذ جدة, تنظيف مسارات نوافذ جدة, تنظيف شبابيك ألمنيوم جدة, تنظيف شبابيك خشب جدة, تنظيف شبابيك حديد جدة, تنظيف ستائر زجاجية جدة, تنظيف زجاج سيكوريت جدة, تنظيف زجاج مقسى جدة, تنظيف زجاج ملون جدة, تنظيف زجاج عاكس جدة, أسعار تنظيف نوافذ جدة, شركة تنظيف نوافذ رخيصة جدة, تنظيف نوافذ بالساعة جدة, تنظيف نوافذ شهري جدة, تنظيف نوافذ أسبوعي جدة, عمال تنظيف نوافذ محترفين جدة, فريق تنظيف نوافذ مدرب جدة, خدمة تنظيف نوافذ سريعة جدة, تنظيف نوافذ فوري جدة, تنظيف نوافذ طارئ جدة',
  openGraph: {
    title: 'تنظيف النوافذ في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف النوافذ والواجهات الزجاجية المتخصصة في جدة 🪟 تنظيف داخلي وخارجي، تلميع بدون خطوط، معدات حديثة',
    type: 'website',
    locale: 'ar_SA',
    url: '/services/window-cleaning',
    siteName: 'شركة النظافة المثالية',
    images: [
      {
        url: '/images/blog/spring-cleaning-tips.jpg',
        width: 1200,
        height: 630,
        alt: 'تنظيف النوافذ والواجهات الزجاجية في جدة - شركة النظافة المثالية'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف النوافذ في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف النوافذ والواجهات الزجاجية المتخصصة في جدة 🪟 تنظيف داخلي وخارجي، تلميع بدون خطوط',
    site: '@cleanwithfresh',
    creator: '@cleanwithfresh',
    images: ['/images/blog/spring-cleaning-tips.jpg']
  },
  alternates: {
    canonical: 'https://cleanwithfresh.com/services/window-cleaning',
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

export default function WindowCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbItems = [
    { name: "الرئيسية", url: "https://cleanwithfresh.com" },
    { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
    { name: "تنظيف النوافذ", url: "https://cleanwithfresh.com/services/window-cleaning" }
  ];

  return (
    <>
      <ServiceSchema
        serviceName="تنظيف النوافذ والواجهات الزجاجية"
        serviceType="WindowCleaningService"
        description="خدمة تنظيف النوافذ والواجهات الزجاجية المتخصصة في جدة. تنظيف داخلي وخارجي، تلميع بدون خطوط، تنظيف الإطارات والمسارات، تنظيف أبراج وناطحات السحاب بأحدث المعدات."
        areaServed="جدة، المملكة العربية السعودية"
        priceRange="$$"
        availableHours="Mo-Su 08:00-20:00"
        image="/images/blog/spring-cleaning-tips.jpg"
        url="https://cleanwithfresh.com/services/window-cleaning"
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