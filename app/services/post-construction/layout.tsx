import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceSchema from '@/components/seo/ServiceSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'تنظيف ما بعد البناء في جدة - شركة النظافة المثالية | تنظيف مخلفات البناء والترميم',
  description: 'خدمة تنظيف ما بعد البناء والترميم في جدة 🏗️ إزالة مخلفات البناء، تنظيف الأرضيات، النوافذ، المرافق الصحية، إزالة البقع والآثار، تنظيف الأتربة والغبار، تلميع وتطهير شامل',
  keywords: 'تنظيف ما بعد البناء جدة, شركة تنظيف ما بعد البناء جدة, تنظيف مخلفات البناء جدة, تنظيف مواقع البناء جدة, إزالة بقايا الدهانات جدة, تنظيف بعد الترميم جدة, شركة نظافة ما بعد البناء جدة, تنظيف بعد الإنشاءات جدة, إزالة أتربة البناء جدة, تنظيف أرضيات بعد البناء جدة, تنظيف نوافذ بعد البناء جدة, تنظيف حمامات بعد البناء جدة, تنظيف مطابخ بعد البناء جدة, إزالة بقع الأسمنت جدة, إزالة بقع الجبس جدة, إزالة بقع الطلاء جدة, تنظيف سيراميك بعد البناء جدة, تنظيف رخام بعد البناء جدة, تنظيف بلاط بعد البناء جدة, تنظيف جدران بعد البناء جدة, إزالة غبار البناء جدة, تنظيف مكيفات بعد البناء جدة, تنظيف إضاءة بعد البناء جدة, تنظيف أبواب بعد البناء جدة, تنظيف شبابيك بعد البناء جدة, تنظيف مصاعد بعد البناء جدة, تنظيف سلالم بعد البناء جدة, تنظيف موقع إنشائي جدة, تنظيف شقق جديدة جدة, تنظيف فلل جديدة جدة, تنظيف مكاتب جديدة جدة, تنظيف محلات جديدة جدة, تنظيف مباني جديدة جدة, تنظيف مستودعات بعد البناء جدة, تنظيف مصانع بعد البناء جدة, تنظيف مدارس بعد البناء جدة, تنظيف مستشفيات بعد البناء جدة, تنظيف فنادق بعد البناء جدة, تنظيف مراكز تجارية بعد البناء جدة, أسعار تنظيف ما بعد البناء جدة, شركة تنظيف ما بعد البناء رخيصة جدة, تنظيف ما بعد البناء فوري جدة, تنظيف ما بعد البناء سريع جدة, عمال تنظيف ما بعد البناء محترفين جدة, فريق تنظيف ما بعد البناء مدرب جدة, خدمة تنظيف ما بعد البناء 24 ساعة جدة',
  openGraph: {
    title: 'تنظيف ما بعد البناء في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف ما بعد البناء والترميم في جدة 🏗️ إزالة مخلفات البناء، تنظيف شامل للأرضيات والنوافذ والمرافق',
    type: 'website',
    locale: 'ar_SA',
    url: '/services/post-construction',
    siteName: 'شركة النظافة المثالية',
    images: [
      {
        url: '/images/blog/spring-cleaning-tips.jpg',
        width: 1200,
        height: 630,
        alt: 'تنظيف ما بعد البناء والترميم في جدة - شركة النظافة المثالية'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف ما بعد البناء في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف ما بعد البناء والترميم في جدة 🏗️ إزالة مخلفات البناء، تنظيف شامل',
    site: '@cleanwithfresh',
    creator: '@cleanwithfresh',
    images: ['/images/blog/spring-cleaning-tips.jpg']
  },
  alternates: {
    canonical: 'https://cleanwithfresh.com/services/post-construction',
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

export default function PostConstructionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbItems = [
    { name: "الرئيسية", url: "https://cleanwithfresh.com" },
    { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
    { name: "تنظيف ما بعد البناء", url: "https://cleanwithfresh.com/services/post-construction" }
  ];

  return (
    <>
      <ServiceSchema
        serviceName="تنظيف ما بعد البناء والترميم"
        serviceType="CleaningService"
        description="خدمة تنظيف ما بعد البناء والترميم المتخصصة في جدة. إزالة مخلفات البناء، تنظيف الأرضيات والنوافذ والمرافق الصحية، إزالة البقع والآثار، تنظيف الأتربة والغبار بأحدث المعدات والتقنيات."
        areaServed="جدة، المملكة العربية السعودية"
        priceRange="$$"
        availableHours="Mo-Su 08:00-20:00"
        image="/images/blog/spring-cleaning-tips.jpg"
        url="https://cleanwithfresh.com/services/post-construction"
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