import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceSchema from '@/components/seo/ServiceSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'تنظيف المنازل في جدة - شركة النظافة المثالية | تنظيف شقق وفلل ومطابخ وحمامات',
  description: 'خدمة تنظيف المنازل الشاملة في جدة 🏠 تنظيف المطابخ، الحمامات، غرف النوم، الصالات، السجاد والنوافذ. فريق مدرب، مواد آمنة، أسعار منافسة. نخدم جميع أحياء جدة 24/7',
  keywords: 'تنظيف منازل جدة, شركة تنظيف منازل جدة, تنظيف شقق جدة, تنظيف فلل جدة, تنظيف مطابخ جدة, تنظيف حمامات جدة, تنظيف سجاد جدة, تنظيف نوافذ جدة, شركة نظافة منازل جدة, تنظيف منزل جدة, تنظيف بيوت جدة, غسيل منازل جدة, تنظيف استراحات جدة, تنظيف قصور جدة, تنظيف شاليهات جدة, تنظيف أثاث منزلي جدة, تنظيف غرف نوم جدة, تنظيف صالات جدة, تنظيف مجالس جدة, تنظيف غرف طعام جدة, تنظيف مداخل جدة, تنظيف سلالم جدة, تنظيف شرفات جدة, تنظيف حدائق منزلية جدة, تنظيف أسطح منازل جدة, تنظيف خزائن جدة, تنظيف دواليب جدة, تنظيف أجهزة كهربائية جدة, تنظيف ثلاجات جدة, تنظيف أفران جدة, تنظيف مايكروويف جدة, تنظيف ديب فريزر جدة, تنظيف غسالات جدة, تنظيف مكيفات جدة, تنظيف مراوح جدة, تنظيف تلفزيونات جدة, تنظيف كنب جدة, تنظيف مفروشات جدة, تنظيف ستائر جدة, تنظيف مخدات جدة, تنظيف فرش جدة, تنظيف بلاط جدة, تنظيف رخام جدة, تنظيف باركيه جدة, تنظيف جرانيت جدة, تنظيف سيراميك جدة, تعقيم منازل جدة, تطهير منازل جدة, رش مبيدات منازل جدة, إزالة العفن من المنازل جدة, تنظيف أرضيات منازل جدة, تنظيف جدران منازل جدة, تنظيف أسقف منازل جدة, أسعار تنظيف منازل جدة, شركة تنظيف منازل رخيصة جدة, تنظيف منازل بالساعة جدة, تنظيف منازل شهري جدة, تنظيف منازل أسبوعي جدة, تنظيف منازل يومي جدة, خدمة تنظيف منازل عاملات جدة, عاملات تنظيف منازل جدة, فريق تنظيف منازل محترف جدة, تنظيف منازل بعد الحفلات جدة, تنظيف منازل بعد العزائم جدة',
  openGraph: {
    title: 'تنظيف المنازل في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف المنازل الشاملة في جدة 🏠 تنظيف المطابخ، الحمامات، غرف النوم، الصالات. فريق مدرب، مواد آمنة',
    type: 'website',
    locale: 'ar_SA',
    url: 'https://cleanwithfresh.com/services/home-cleaning',
    siteName: 'شركة النظافة المثالية',
    images: [
      {
        url: '/images/blog/home-disinfection.png',
        width: 1200,
        height: 630,
        alt: 'تنظيف المنازل والشقق والفلل في جدة - شركة النظافة المثالية'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف المنازل في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف المنازل الشاملة في جدة 🏠 تنظيف المطابخ، الحمامات، غرف النوم، الصالات',
    site: '@cleanwithfresh',
    creator: '@cleanwithfresh',
    images: ['/images/blog/home-disinfection.png']
  },
  alternates: {
    canonical: 'https://cleanwithfresh.com/services/home-cleaning',
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

export default function HomeCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbItems = [
    { name: "الرئيسية", url: "https://cleanwithfresh.com" },
    { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
    { name: "تنظيف المنازل", url: "https://cleanwithfresh.com/services/home-cleaning" }
  ];

  return (
    <>
      <ServiceSchema
        serviceName="تنظيف المنازل والشقق والفلل"
        serviceType="HouseholdCleaningService"
        description="خدمة تنظيف المنازل الشاملة في جدة. تنظيف المطابخ، الحمامات، غرف النوم، الصالات، السجاد والنوافذ. فريق مدرب ومعدات حديثة ومواد آمنة."
        areaServed="جدة، المملكة العربية السعودية"
        priceRange="$$"
        availableHours="Mo-Su 08:00-20:00"
        image="/images/blog/home-disinfection.png"
        url="https://cleanwithfresh.com/services/home-cleaning"
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