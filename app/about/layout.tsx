import { Metadata } from 'next'
import Header from '@/components/Header'
import PageSeo from '@/components/seo/PageSeo'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: "من نحن - أفضل شركة تنظيف في جدة | خدمات تنظيف احترافية منذ 15 عام",
  description: "تعرف على أفضل شركة تنظيف في جدة مع 15 عام من الخبرة. نقدم خدمات تنظيف منازل، مكاتب، سجاد، نوافذ، وتعقيم في جميع أحياء جدة. فريق محترف وخدمة 24 ساعة.",
  keywords: [
    "شركة تنظيف جدة",
    "أفضل شركة تنظيف في جدة", 
    "خدمات تنظيف جدة",
    "تنظيف منازل جدة",
    "تنظيف مكاتب جدة",
    "تنظيف سجاد جدة",
    "تنظيف نوافذ جدة",
    "تعقيم جدة",
    "شركة تنظيف احترافية جدة",
    "تنظيف احترافي جدة",
    "خدمات تنظيف شاملة جدة",
    "فريق تنظيف محترف جدة",
    "تنظيف فلل جدة",
    "تنظيف شقق جدة",
    "تنظيف واجهات جدة",
    "تنظيف ما بعد البناء جدة",
    "شركة تنظيف موثوقة جدة",
    "خدمة تنظيف 24 ساعة جدة",
    "تنظيف بالبخار جدة",
    "منتجات تنظيف آمنة جدة"
  ],
  openGraph: {
    title: "من نحن - أفضل شركة تنظيف في جدة | خدمات تنظيف احترافية منذ 15 عام",
    description: "تعرف على أفضل شركة تنظيف في جدة مع 15 عام من الخبرة. نقدم خدمات تنظيف شاملة ومتخصصة في جميع أحياء جدة.",
    url: "https://cleanwithfresh.com/about",
    siteName: "شركة تنظيف جدة",
    images: [
      {
        url: "/arabic color.avif",
        width: 1200,
        height: 630,
        alt: "فريق التنظيف المحترف في جدة"
      }
    ],
    locale: "ar_SA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن - أفضل شركة تنظيف في جدة",
    description: "تعرف على أفضل شركة تنظيف في جدة مع 15 عام من الخبرة",
    images: ["/arabic color.avif"]
  },
  alternates: {
    canonical: "https://cleanwithfresh.com/about"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageSeo 
        title="من نحن - أفضل شركة تنظيف في جدة"
        description="تعرف على أفضل شركة تنظيف في جدة مع 15 عام من الخبرة. نقدم خدمات تنظيف شاملة ومتخصصة في جميع أحياء جدة."
        keywords="شركة تنظيف جدة, أفضل شركة تنظيف في جدة, خدمات تنظيف جدة, تنظيف منازل جدة, تنظيف مكاتب جدة, تنظيف سجاد جدة, تعقيم جدة, تنظيف نوافذ جدة"
        image="/arabic color.avif"
        url="https://cleanwithfresh.com/about"
      />
      <LocalBusinessSchema />
      <Breadcrumbs 
        items={[
          { name: 'الرئيسية', url: '/' },
          { name: 'من نحن', url: '/about' }
        ]} 
      />
      <Header />
      {children}
    </>
  )
}
