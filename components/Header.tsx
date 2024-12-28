'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="group">
            <div className="text-2xl font-bold text-[#1976D2] transition-all duration-300 group-hover:scale-105 flex items-center gap-2">
              <Image src="/arabic color.avif" alt="Logo" width={100} height={100} />
              <span className="text-gray-900">شركة النظافة المثالية</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: '#services', label: 'خدماتنا' },
              { href: '#features', label: 'لماذا نحن' },
              { href: '#pricing', label: 'الأسعار' },
              { href: '#contact', label: 'اتصل بنا' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-[#1976D2] transition-colors duration-300 py-2 px-4
                  after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#1976D2] 
                  after:left-0 after:bottom-0 after:transition-all hover:after:w-full
                  hover:scale-105 transform"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-[#1976D2]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
