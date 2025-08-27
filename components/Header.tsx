'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/#services', label: 'خدماتنا', isActive: false },
    { href: '/about', label: 'من نحن', isActive: false },
    { href: '/#features', label: 'لماذا نحن', isActive: false },
    { href: '/#pricing', label: 'الأسعار', isActive: false },
    { href: '/blog', label: 'المدونة', isActive: false },
    { href: '/contact', label: 'اتصل بنا', isActive: false },
  ]

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg ' : 'bg-white '}`}
      aria-label="رأس الصفحة"
    >
      {/* Top contact bar */}
      <div className="hidden lg:block bg-[#1976D2] text-white py-1">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+966592425077" className="flex items-center gap-1 hover:text-yellow-300 transition-colors" aria-label="اتصل بنا">
              <Phone className="w-4 h-4" />
              <span>+966592425077</span>
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>جدة، المملكة العربية السعودية</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/profile.php?id=61574108861445" aria-label="فيسبوك" className="hover:text-yellow-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.instagram.com/riaydh_ads?fbclid=IwY2xjawKNh5pleHRuA2FlbQIxMABicmlkETFxTThjaFdtbTRmT3QxOFduAR7lqlYCPpGFj5nkMrb8V-1EZFopHl-wO_q-YHnCceeW-nuDScNHgjaT1nzgrQ_aem_eHspWy7EflhV__5pEJa-WQ" aria-label="انستغرام" className="hover:text-yellow-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
        
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-2" aria-label="القائمة الرئيسية">
        <div className="flex justify-between items-center">
          <Link href="/" className="group" aria-label="الصفحة الرئيسية">
            <div className="flex items-center gap-2 transition-all duration-300 group-hover:scale-105">
              <Image 
                src="/arabic color.avif" 
                alt="أفضل شركة تنظيف في جدة" 
                width={50} 
                height={50} 
                className="object-contain rounded-full border-2 border-[#1976D2] p-1" 
                priority
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-[#1976D2]">أفضل شركة تنظيف في جدة</span>
                <span className="text-xs md:text-sm text-gray-600">خدمات تنظيف احترافية</span>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-[#1976D2] transition-colors duration-300 py-2 px-2 lg:px-4
                  font-medium text-base
                  after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#1976D2] 
                  after:right-0 after:bottom-0 after:transition-all hover:after:w-full
                  hover:scale-105 transform"
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="https://wa.me/966592425077" 
              className="bg-[#1976D2] hover:bg-[#1565C0] text-white py-2 px-4 lg:px-6 rounded-full text-sm font-medium transition duration-300 flex items-center gap-1 shadow-md hover:shadow-lg"
              aria-label="احجز الآن"
            >
              احجز الآن
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#1976D2] p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t mt-4 py-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#1976D2] hover:bg-blue-50 py-2 px-6 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="https://wa.me/966592425077" 
                className="bg-[#1976D2] text-white py-2 px-6 mx-6 rounded-md text-center font-medium shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                احجز الآن
              </a>
              <div className="border-t border-gray-200 pt-3 mt-3 px-6 flex justify-center space-x-4 rtl:space-x-reverse">
                <a href="tel:0592425077" className="text-gray-600 hover:text-[#1976D2] transition-colors" aria-label="اتصل بنا">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" aria-label="فيسبوك" className="text-gray-600 hover:text-[#1976D2] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" aria-label="انستغرام" className="text-gray-600 hover:text-[#1976D2] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
