import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceSchema from '@/components/seo/ServiceSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'تنظيف المكاتب في جدة - شركة النظافة المثالية | تنظيف شركات ومؤسسات ومباني تجارية',
  description: 'خدمة تنظيف المكاتب والشركات المتخصصة في جدة 🏢 تنظيف المكاتب، غرف الاجتماعات، المطابخ، دورات المياه والواجهات الزجاجية. فريق محترف، معدات حديثة، خدمة 24/7',
  keywords: 'تنظيف مكاتب جدة, شركة تنظيف مكاتب جدة, تنظيف شركات جدة, تنظيف مؤسسات جدة, تنظيف مكاتب شركات جدة, تنظيف غرف اجتماعات جدة, تنظيف واجهات زجاجية جدة, شركة نظافة مكاتب جدة, تنظيف مباني تجارية جدة, تنظيف مجمعات إدارية جدة, تنظيف أبراج مكاتب جدة, تنظيف صالات عرض جدة, تنظيف مراكز خدمة جدة, تنظيف قاعات مؤتمرات جدة, تنظيف مكاتب محاماة جدة, تنظيف مكاتب طبية جدة, تنظيف مكاتب هندسية جدة, تنظيف مكاتب استشارية جدة, تنظيف مكاتب حكومية جدة, تنظيف مؤسسات خيرية جدة, تنظيف مكاتب بنوك جدة, تنظيف مكاتب تأمين جدة, تنظيف مكاتب عقارية جدة, تنظيف شركات نفط جدة, تنظيف مكاتب تقنية جدة, تنظيف مكاتب إعلامية جدة, تنظيف مكاتب تسويق جدة, تنظيف مكاتب ترجمة جدة, تنظيف مكاتب محاسبة جدة, تنظيف مكاتب مقاولات جدة, تنظيف مساحات عمل مشتركة جدة, تنظيف مكاتب مفتوحة جدة, تنظيف كبائن عمل جدة, تنظيف طاولات مكتبية جدة, تنظيف كراسي مكتبية جدة, تنظيف أجهزة كمبيوتر جدة, تنظيف شاشات جدة, تنظيف طابعات جدة, تنظيف مكيفات مكاتب جدة, تنظيف إضاءة مكاتب جدة, تنظيف أرضيات مكاتب جدة, تنظيف جدران مكاتب جدة, تنظيف أسقف مكاتب جدة, تنظيف سلالم مكاتب جدة, تنظيف مصاعد مكاتب جدة, تنظيف مواقف سيارات مكاتب جدة, تعقيم مكاتب جدة, تطهير مكاتب جدة, رش مبيدات مكاتب جدة, تنظيف مكاتب ليلي جدة, تنظيف مكاتب نهاري جدة, تنظيف مكاتب عطل نهاية الأسبوع جدة, أسعار تنظيف مكاتب جدة, شركة تنظيف مكاتب رخيصة جدة, عقود تنظيف مكاتب جدة, صيانة نظافة مكاتب جدة',
  openGraph: {
    title: 'تنظيف المكاتب في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف المكاتب والشركات المتخصصة في جدة 🏢 تنظيف شامل للمكاتب، غرف الاجتماعات، المطابخ. فريق محترف، معدات حديثة',
    type: 'website',
    locale: 'ar_SA',
    url: 'https://cleanwithfresh.com/services/office-cleaning',
    siteName: 'شركة النظافة المثالية',
    images: [
      {
        url: '/images/blog/professional-cleaning.png',
        width: 1200,
        height: 630,
        alt: 'تنظيف المكاتب والشركات والمؤسسات في جدة - شركة النظافة المثالية'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف المكاتب في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف المكاتب والشركات المتخصصة في جدة 🏢 تنظيف شامل للمكاتب، غرف الاجتماعات',
    site: '@cleanwithfresh',
    creator: '@cleanwithfresh',
    images: ['/images/blog/professional-cleaning.png']
  },
  alternates: {
    canonical: 'https://cleanwithfresh.com/services/office-cleaning',
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
  other: {
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
  },
}

export default function OfficeCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbItems = [
    { name: "الرئيسية", url: "https://cleanwithfresh.com" },
    { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
    { name: "تنظيف المكاتب", url: "https://cleanwithfresh.com/services/office-cleaning" }
  ];

  return (
    <>
      <ServiceSchema
        serviceName="تنظيف المكاتب والشركات"
        serviceType="OfficeCleaningService"
        description="خدمة تنظيف المكاتب والشركات المتخصصة في جدة. تنظيف المكاتب، غرف الاجتماعات، المطابخ، دورات المياه والواجهات الزجاجية. خدمة احترافية بأعلى معايير الجودة."
        areaServed="جدة، المملكة العربية السعودية"
        priceRange="$$"
        availableHours="Mo-Su 08:00-20:00"
        image="/images/blog/professional-cleaning.png"
        url="https://cleanwithfresh.com/services/office-cleaning"
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