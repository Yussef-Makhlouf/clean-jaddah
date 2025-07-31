import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceSchema from '@/components/seo/ServiceSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'خدمات التعقيم في جدة - شركة النظافة المثالية | تعقيم منازل ومكاتب وشركات',
  description: 'خدمة التعقيم والتطهير الشاملة في جدة 🦠 تعقيم ضد الفيروسات، الجراثيم، كوفيد-19. تعقيم الأسطح، الهواء، الحمامات والمطابخ. مواد آمنة ومعتمدة',
  keywords: 'تعقيم جدة, شركة تعقيم جدة, تعقيم منازل جدة, تعقيم مكاتب جدة, تعقيم أسطح جدة, تعقيم هواء جدة, تعقيم حمامات جدة, تعقيم مطابخ جدة, شركة نظافة تعقيم جدة, تعقيم ضد كورونا جدة, تعقيم ضد كوفيد جدة, تعقيم ضد الفيروسات جدة, تعقيم ضد الجراثيم جدة, تعقيم ضد البكتيريا جدة, تطهير منازل جدة, تطهير مكاتب جدة, تطهير شركات جدة, رش مبيدات جدة, رش معقمات جدة, تعقيم شقق جدة, تعقيم فلل جدة, تعقيم قصور جدة, تعقيم استراحات جدة, تعقيم مزارع جدة, تعقيم مستشفيات جدة, تعقيم عيادات جدة, تعقيم مدارس جدة, تعقيم جامعات جدة, تعقيم مطاعم جدة, تعقيم فنادق جدة, تعقيم صالات أفراح جدة, تعقيم قاعات معايشة جدة, تعقيم مساجد جدة, تعقيم مراكز تجارية جدة, تعقيم مولات جدة, تعقيم معامل جدة, تعقيم مصانع جدة, تعقيم ورش جدة, تعقيم مخازن جدة, تعقيم مستودعات جدة, تعقيم طائرات جدة, تعقيم سفن جدة, تعقيم حافلات جدة, تعقيم سيارات جدة, تعقيم إسعاف جدة, تعقيم فوري جدة, تعقيم طارئ جدة, خدمة تعقيم 24 ساعة جدة, أسعار تعقيم جدة, شركة تعقيم رخيصة جدة, شركة تعقيم موثوقة جدة, شركة تعقيم مضمونة جدة, شركة تعقيم معتمدة جدة, شركة تعقيم مرخصة جدة, مواد تعقيم آمنة جدة, مواد تعقيم طبيعية جدة, مواد تعقيم صديقة للبيئة جدة, معدات تعقيم حديثة جدة, معدات تعقيم متطورة جدة, فريق تعقيم محترف جدة, عمال تعقيم مدربين جدة, تعقيم بالأوزون جدة, تعقيم بالبخار جدة, تعقيم بالأشعة فوق البنفسجية جدة, تعقيم بالقنابل الذرية جدة',
  openGraph: {
    title: 'خدمات التعقيم في جدة - شركة النظافة المثالية',
    description: 'خدمة التعقيم والتطهير الشاملة في جدة 🦠 تعقيم ضد الفيروسات، الجراثيم، كوفيد-19',
    type: 'website',
    locale: 'ar_SA',
    url: 'https://cleanwithfresh.com/services/disinfection',
    siteName: 'شركة النظافة المثالية',
    images: [
      {
        url: '/images/blog/eco-friendly-cleaning-solutions.png',
        width: 1200,
        height: 630,
        alt: 'خدمات التعقيم والتطهير في جدة - شركة النظافة المثالية'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدمات التعقيم في جدة - شركة النظافة المثالية',
    description: 'خدمة التعقيم والتطهير الشاملة في جدة 🦠 تعقيم ضد الفيروسات، الجراثيم',
    site: '@cleanwithfresh',
    creator: '@cleanwithfresh',
    images: ['/images/blog/eco-friendly-cleaning-solutions.png']
  },
  alternates: {
    canonical: 'https://cleanwithfresh.com/services/disinfection',
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

export default function DisinfectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbItems = [
    { name: "الرئيسية", url: "https://cleanwithfresh.com" },
    { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
    { name: "خدمات التعقيم", url: "https://cleanwithfresh.com/services/disinfection" }
  ];

  return (
    <>
      <ServiceSchema
        serviceName="خدمات التعقيم والتطهير"
        serviceType="DisinfectionService"
        description="خدمة التعقيم والتطهير الشاملة في جدة. تعقيم ضد الفيروسات، الجراثيم، البكتيريا وكوفيد-19. مواد آمنة ومعتمدة عالمياً."
        areaServed="جدة، المملكة العربية السعودية"
        priceRange="$$"
        availableHours="Mo-Su 08:00-20:00"
        image="/images/blog/eco-friendly-cleaning-solutions.png"
        url="https://cleanwithfresh.com/services/disinfection"
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