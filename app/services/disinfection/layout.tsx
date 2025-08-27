import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceSchema from '@/components/seo/ServiceSchema'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

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