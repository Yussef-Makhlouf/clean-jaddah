'use client';

import { MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function FloatingButtons() {
  const phoneNumber = '0565265233'; 
  const whatsappNumber = '966565265233'; 
  const message = encodeURIComponent('مرحباً، أود الاستفسار عن خدماتكم');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا على واتساب"
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-8 h-8" />
      </Link>

      {/* Phone Button */}
      <Link
        href={`tel:${phoneNumber}`}
        aria-label="اتصل بنا"
        className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </Link>
    </div>
  );
}
