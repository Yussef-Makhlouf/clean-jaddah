
import Header from '@/components/Header'



export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
} 