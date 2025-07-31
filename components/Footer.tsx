'use client';

import { Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1976D2] via-[#1565C0] to-[#0D47A1]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto relative">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-12">
          {/* Company Info */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 space-y-4">
            <h3 className="text-2xl font-bold text-white">شركة النظافة المثالية</h3>
            <p className="text-blue-100 leading-relaxed">
              نقدم خدمات تنظيف احترافية بأعلى معايير الجودة والكفاءة
            </p>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 space-y-4">
            <h4 className="text-xl font-semibold text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              {['خدماتنا', 'من نحن', 'معرض الأعمال', 'اتصل بنا'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-blue-100 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-300 rounded-full" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 space-y-4">
            <h4 className="text-xl font-semibold text-white">معلومات التواصل</h4>
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5" />, text: '0565265233', href: 'tel:0565265233' },
                { icon: <Mail className="w-5 h-5" />, text: 'info@cleanwithfresh.com', href: 'mailto:info@cleanwithfresh.com' },
                { icon: <MapPin className="w-5 h-5" />, text: 'المدينة، الشارع الرئيسي' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-blue-100">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="text-white">{item.text}</a>
                  ) : (
                    <span className="text-white">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 space-y-4">
            <h4 className="text-xl font-semibold text-white">تابعنا</h4>
            <div className="flex gap-4">
              {[Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.facebook.com/profile.php?id=61574108861445"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-blue-100" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-100">© {new Date().getFullYear()} شركة النظافة المثالية. جميع الحقوق محفوظة.</p>
              <a 
                href="https://fashne.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-100 hover:text-white transition-colors flex items-center gap-2"
              >
                تصميم وتطوير
                <span className="font-bold">فشني للتسويق الرقمي</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
