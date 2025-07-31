'use client'

import { MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export default function FloatingButtons() {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/966563009155"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-6 h-6" />
      </Link>

      {/* Contact Button */}
      <button
        onClick={scrollToContact}
        className="bg-[#1976D2] hover:bg-[#1565C0] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="اتصل بنا"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  )
}