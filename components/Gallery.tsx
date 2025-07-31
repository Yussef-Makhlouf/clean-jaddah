"use client";	
import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: '/luxury-villa-cleaning.avif',
    title: 'تنظيف الفلل الفاخرة',
    category: 'تنظيف منازل'
  },
  {
    src: '/office-cleaning.avif',
    title: 'تنظيف المكاتب',
    category: 'تنظيف تجاري'
  },
  {
    src: '/carpet-cleaning-gallery.avif',
    title: 'تنظيف السجاد',
    category: 'تنظيف متخصص'
  },
  {
    src: '/facade-cleaning.avif',
    title: 'تنظيف الواجهات',
    category: 'خدمات خارجية'
  },
  {
    src: '/home-disinfection.avif',
    title: 'تعقيم المنازل',
    category: 'تنظيف منازل'
  },
  {
    src: '/kitchen-cleaning.avif',
    title: 'تنظيف المطابخ',
    category: 'تنظيف متخصص'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('الكل');

  const filters = ['الكل', 'تنظيف منازل', 'تنظيف تجاري', 'تنظيف متخصص', 'خدمات خارجية'];

  const filteredImages = activeFilter === 'الكل' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">معرض أعمالنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            شاهد نتائج عملنا المتميز في مختلف المشاريع والخدمات التي نقدمها
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#1976D2] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-[#1976D2] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="self-end">
                    <ZoomIn className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-4xl h-[80vh] mx-6">
              <Image
                src={selectedImage}
                alt="Gallery preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
