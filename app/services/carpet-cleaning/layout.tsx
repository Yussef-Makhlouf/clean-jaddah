import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceSchema from '@/components/seo/ServiceSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'تنظيف السجاد في جدة - شركة النظافة المثالية | تنظيف موكيت وسجاد بالبخار',
  description: 'خدمة تنظيف السجاد والموكيت المتخصصة في جدة ✨ تنظيف عميق بالبخار، إزالة البقع المستعصية، تجفيف سريع وتعقيم شامل. خبرة 10+ سنوات، أسعار منافسة، ضمان الجودة 100%',
  keywords: 'تنظيف سجاد جدة, شركة تنظيف سجاد جدة, تنظيف موكيت جدة, تنظيف سجاد بالبخار جدة, إزالة بقع السجاد جدة, تنظيف سجاد عميق جدة, شركة نظافة سجاد جدة, تنظيف سجاد منزلي جدة, غسيل سجاد جدة, تنظيف موكيت شقق جدة, تنظيف سجاد فلل جدة, تنظيف سجاد مكاتب جدة, تنظيف سجاد صالونات جدة, إزالة الروائح من السجاد جدة, تعقيم السجاد جدة, تنظيف سجاد فارسي جدة, تنظيف سجاد حرير جدة, تنظيف سجاد صوف جدة, تنظيف سجاد قطني جدة, خدمات غسيل سجاد جدة, شركة غسيل موكيت جدة, أسعار تنظيف سجاد جدة, تنظيف سجاد رخيص جدة, تنظيف سجاد سريع جدة, تنظيف سجاد فوري جدة, تنظيف سجاد طارئ جدة, تنظيف سجاد منزلي احترافي جدة, خدمة تنظيف سجاد 24 ساعة جدة, تنظيف بقع النبيذ من السجاد جدة, تنظيف بقع القهوة من السجاد جدة, تنظيف بقع الدم من السجاد جدة, تنظيف بقع الحبر من السجاد جدة, تنظيف سجاد الأطفال جدة, تنظيف سجاد آمن للأطفال جدة, مواد تنظيف سجاد طبيعية جدة, تنظيف سجاد صديق للبيئة جدة, معقمات سجاد آمنة جدة, تجفيف سجاد سريع جدة, خدمة توصيل واستلام سجاد جدة, ضمان تنظيف سجاد جدة, إصلاح السجاد جدة',
  openGraph: {
    title: 'تنظيف السجاد في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف السجاد والموكيت المتخصصة في جدة ✨ تنظيف عميق بالبخار، إزالة البقع المستعصية، خبرة 10+ سنوات',
    type: 'website',
    locale: 'ar_SA',
    url: '/services/carpet-cleaning',
    siteName: 'شركة النظافة المثالية',
    images: [
      {
        url: '/images/blog/carpet-cleaning.avif',
        width: 1200,
        height: 630,
        alt: 'تنظيف السجاد والموكيت في جدة - شركة النظافة المثالية'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف السجاد في جدة - شركة النظافة المثالية',
    description: 'خدمة تنظيف السجاد والموكيت المتخصصة في جدة ✨ تنظيف عميق بالبخار، إزالة البقع المستعصية',
    site: '@cleanwithfresh',
    creator: '@cleanwithfresh',
    images: ['/images/blog/carpet-cleaning.avif']
  },
  alternates: {
    canonical: 'https://cleanwithfresh.com/services/carpet-cleaning',
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

export default function CarpetCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbItems = [
    { name: "الرئيسية", url: "https://cleanwithfresh.com" },
    { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
    { name: "تنظيف السجاد", url: "https://cleanwithfresh.com/services/carpet-cleaning" }
  ];

  return (
    <>
      <ServiceSchema
        serviceName="تنظيف السجاد والموكيت"
        serviceType="CarpetCleaningService"
        description="خدمة تنظيف السجاد والموكيت المتخصصة في جدة. تنظيف عميق بالبخار، إزالة البقع المستعصية، تجفيف سريع وتعقيم شامل. خبرة أكثر من 10 سنوات في المجال."
        areaServed="جدة، المملكة العربية السعودية"
        priceRange="$$"
        availableHours="Mo-Su 08:00-20:00"
        image="/images/blog/carpet-cleaning.avif"
        url="https://cleanwithfresh.com/services/carpet-cleaning"
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