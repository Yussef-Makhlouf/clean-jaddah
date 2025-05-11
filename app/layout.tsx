import './globals.css'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['arabic'] })

// Next.js 13+ metadata API - still used for basic metadata
export const metadata = {
  title: 'شركة النظافة المثالية - خدمات تنظيف احترافية',
  description: 'شركة النظافة المثالية توفر خدمات تنظيف احترافية للمنازل والمكاتب والشركات. نقدم أفضل جودة بأسعار تنافسية.',
  alternates: {
    canonical: 'https://cleanwithfresh.com',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://cleanwithfresh.com',
    title: 'شركة النظافة المثالية - خدمات تنظيف احترافية',
    description: 'شركة النظافة المثالية توفر خدمات تنظيف احترافية للمنازل والمكاتب والشركات',
    siteName: 'Clean With Fresh',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cleanwithfresh',
    creator: '@cleanwithfresh',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}

