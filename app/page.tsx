import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import FeaturedServices from "@/components/FeaturedServices";
import Features from "@/components/Features";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

// FAQ data for structured data
const faqData = [
  {
    question: "ما هي خدمات التنظيف التي تقدمونها؟",
    answer: "نقدم مجموعة واسعة من خدمات التنظيف بما في ذلك تنظيف المنازل والمكاتب والشركات والفلل والمباني التجارية."
  },
  {
    question: "هل تستخدمون منتجات تنظيف صديقة للبيئة؟",
    answer: "نعم، نحن نستخدم منتجات تنظيف عالية الجودة وصديقة للبيئة لضمان سلامة عملائنا والحفاظ على البيئة."
  },
  {
    question: "كم تكلفة خدمات التنظيف لديكم؟",
    answer: "تختلف التكلفة حسب نوع الخدمة وحجم المساحة المراد تنظيفها. يمكنكم الاتصال بنا للحصول على عرض سعر مجاني."
  },
  {
    question: "هل يمكنني حجز خدمة تنظيف في عطلة نهاية الأسبوع؟",
    answer: "نعم، نحن نعمل طوال أيام الأسبوع ويمكنكم حجز خدمة التنظيف في أي وقت يناسبكم."
  }
];

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
      <LatestBlogPosts />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </main>
  )
}

