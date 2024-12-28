import './globals.css'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata = {
  title: 'شركة النظافة المثالية - خدمات تنظيف احترافية',
  description: 'شركة النظافة المثالية توفر خدمات تنظيف احترافية للمنازل والمكاتب والشركات. نقدم أفضل جودة بأسعار تنافسية.',
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

