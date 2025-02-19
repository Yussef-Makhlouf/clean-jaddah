import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import FeaturedServices from "@/components/FeaturedServices";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="bg-[#E3F2FD] text-gray-800">
      <Header />
      <Hero />
      <AboutUs />
      <FeaturedServices />
      <Services />
      <Features />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FAQ  />
      <Footer />
    </main>
  )
}

