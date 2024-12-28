'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // هنا يمكنك إضافة الكود الخاص بإرسال البيانات إلى الخادم
    console.log(formData)
    alert('تم إرسال طلبك بنجاح!')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">اتصل بنا</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">الاسم</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">البريد الإلكتروني</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">رقم الهاتف</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block mb-2">الخدمة المطلوبة</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">اختر الخدمة</option>
              <option value="home">تنظيف منزلي</option>
              <option value="office">تنظيف مكتبي</option>
              <option value="carpet">تنظيف السجاد</option>
              <option value="windows">تنظيف النوافذ</option>
              <option value="other">خدمة أخرى</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">الرسالة</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="w-full p-2 border rounded h-32"></textarea>
          </div>
          <button type="submit" className="bg-[#1976D2] text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">إرسال الطلب</button>
        </form>
      </div>
    </section>
  )
}

