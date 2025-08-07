import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s - مدونة شركة النظافة المثالية',
    default: 'المدونة - شركة النظافة المثالية',
  },
  description: 'مقالات ونصائح حول خدمات التنظيف في جدة - شركة النظافة المثالية. نقدم أفضل خدمات تنظيف المنازل والمكاتب والتعقيم في جدة',
  keywords: [
    'مدونة تنظيف',
    'نصائح تنظيف',
    'شركة تنظيف جدة',
    'خدمات تنظيف جدة',
    'تنظيف منازل',
    'تنظيف مكاتب',
    'تعقيم',
    'سجاد',
    'نوافذ',
    'تنظيف خزانات',
    'تنظيف كنب',
    'تنظيف سيراميك',
    'تنظيف مطابخ',
    'تنظيف حمامات',
    'شركة نظافة جدة',
    'مؤسسة تنظيف جدة',
    'تنظيف شقق',
    'تنظيف فيلات',
    'تنظيف فنادق',
    'تنظيف مستشفيات',
    'تنظيف مدارس',
    'تنظيف مساجد',
    'تنظيف مراكز تجارية',
    'تنظيف مصانع',
    'تنظيف مخازن',
    'تنظيف مواقف سيارات',
    'تنظيف حدائق',
    'تنظيف برك سباحة',
    'تنظيف خزانات مياه',
    'تنظيف مكيفات',
    'تنظيف مجاري',
    'تنظيف باطن',
    'تنظيف خارجي',
    'تنظيف داخلي',
    'تنظيف شامل',
    'تنظيف دوري',
    'تنظيف أسبوعي',
    'تنظيف شهري',
    'تنظيف سنوي',
    'تنظيف قبل السكن',
    'تنظيف بعد السكن',
    'تنظيف قبل العرس',
    'تنظيف بعد العرس',

  ],
  authors: [{ name: 'شركة النظافة المثالية' }],
  creator: 'شركة النظافة المثالية',
  publisher: 'شركة النظافة المثالية',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cleanwithfresh.com'),
  alternates: {
    canonical: '/blog',
    languages: {
      'ar-SA': '/blog',
    },
  },
  openGraph: {
    type: 'article',
    locale: 'ar_SA',
    siteName: 'شركة النظافة المثالية',
    title: 'مدونة شركة النظافة المثالية',
    description: 'مقالات ونصائح حول خدمات التنظيف في جدة - شركة النظافة المثالية',
    url: 'https://cleanwithfresh.com/blog',
    images: [
      {
        url: '/logo.avif',
        width: 1200,
        height: 630,
        alt: 'شركة النظافة المثالية - خدمات تنظيف جدة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cleanwithfresh',
    creator: '@cleanwithfresh',
    title: 'مدونة شركة النظافة المثالية',
    description: 'مقالات ونصائح حول خدمات التنظيف في جدة',
    images: ['/logo.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'خدمات التنظيف',
  classification: 'شركة تنظيف',
  other: {
    'geo.region': 'SA-02',
    'geo.placename': 'جدة',
    'geo.position': '21.4858;39.1925',
    'ICBM': '21.4858, 39.1925',
    'DC.title': 'مدونة شركة النظافة المثالية',
    'DC.creator': 'شركة النظافة المثالية',
    'DC.subject': 'خدمات التنظيف',
    'DC.description': 'مقالات ونصائح حول خدمات التنظيف في جدة',
    'DC.publisher': 'شركة النظافة المثالية',
    'DC.contributor': 'شركة النظافة المثالية',
    'DC.date': new Date().toISOString(),
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://cleanwithfresh.com/blog',
    'DC.language': 'ar',
    'DC.coverage': 'جدة، المملكة العربية السعودية',
    'DC.rights': 'جميع الحقوق محفوظة لشركة النظافة المثالية',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Structured Data for Blog Post */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://cleanwithfresh.com/blog"
            },
            "headline": "مدونة شركة النظافة المثالية",
            "description": "مقالات ونصائح حول خدمات التنظيف في جدة - شركة النظافة المثالية",
            "image": {
              "@type": "ImageObject",
              "url": "https://cleanwithfresh.com/logo.avif",
              "width": 1200,
              "height": 630
            },
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString(),
            "publisher": {
              "@type": "Organization",
              "name": "شركة النظافة المثالية",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cleanwithfresh.com/logo.avif",
                "width": 600,
                "height": 60
              },
              "url": "https://cleanwithfresh.com",
              "sameAs": [
                "https://www.facebook.com/cleanwithfresh",
                "https://twitter.com/cleanwithfresh",
                "https://www.instagram.com/cleanwithfresh"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-50-000-0000",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": "Arabic"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "شارع التحلية",
                "addressLocality": "جدة",
                "addressRegion": "منطقة مكة المكرمة",
                "postalCode": "21421",
                "addressCountry": "SA"
              }
            },
            "author": {
              "@type": "Organization",
              "name": "شركة النظافة المثالية",
              "url": "https://cleanwithfresh.com"
            },
            "articleSection": "خدمات التنظيف",
            "keywords": "تنظيف، جدة، شركة تنظيف، خدمات تنظيف، تعقيم، سجاد، نوافذ",
            "inLanguage": "ar",
            "isAccessibleForFree": true,
            "potentialAction": {
              "@type": "ReadAction",
              "target": "https://cleanwithfresh.com/blog"
            }
          })
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "شركة النظافة المثالية",
            "description": "أفضل شركة تنظيف في جدة - خدمات تنظيف المنازل والمكاتب والتعقيم",
            "url": "https://cleanwithfresh.com",
            "logo": "https://cleanwithfresh.com/logo.avif",
            "image": "https://cleanwithfresh.com/logo.avif",
            "telephone": "+966-50-000-0000",
            "email": "info@cleanwithfresh.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "شارع التحلية",
              "addressLocality": "جدة",
              "addressRegion": "منطقة مكة المكرمة",
              "postalCode": "21421",
              "addressCountry": "SA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.4858,
              "longitude": 39.1925
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "priceRange": "$$",
            "paymentAccepted": "Cash, Credit Card",
            "currenciesAccepted": "SAR",
            "areaServed": {
              "@type": "City",
              "name": "جدة"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 21.4858,
                "longitude": 39.1925
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "خدمات التنظيف",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "تنظيف المنازل"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "تنظيف المكاتب"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "التعقيم"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "شركة النظافة المثالية",
            "url": "https://cleanwithfresh.com",
            "description": "أفضل شركة تنظيف في جدة - خدمات تنظيف المنازل والمكاتب والتعقيم",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://cleanwithfresh.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "شركة النظافة المثالية"
            }
          })
        }}
      />
      
      {/* Main Content */}
      <main className="relative">
        {children}
      </main>
      
      {/* Enhanced Analytics and SEO Scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Enhanced blog post analytics
            if (typeof window !== 'undefined') {
              const currentPath = window.location.pathname;
              if (currentPath.includes('/blog/')) {
                // Track blog post views with enhanced data
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'blog_post_view', {
                    'blog_title': document.title,
                    'blog_url': window.location.href,
                    'blog_category': 'خدمات التنظيف',
                    'blog_language': 'ar'
                  });
                }

                // Track scroll depth
                let maxScroll = 0;
                window.addEventListener('scroll', () => {
                  const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                  if (scrollPercent > maxScroll) {
                    maxScroll = scrollPercent;
                    if (maxScroll % 25 === 0 && typeof gtag !== 'undefined') {
                      gtag('event', 'scroll_depth', {
                        'scroll_percentage': maxScroll,
                        'blog_url': window.location.href
                      });
                    }
                  }
                });

                // Track time on page
                let startTime = Date.now();
                window.addEventListener('beforeunload', () => {
                  const timeOnPage = Math.round((Date.now() - startTime) / 1000);
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'time_on_page', {
                      'time_on_page': timeOnPage,
                      'blog_url': window.location.href
                    });
                  }
                });
              }
            }

            // Add structured data for breadcrumbs
            const breadcrumbData = {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "الرئيسية",
                  "item": "https://cleanwithfresh.com"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "المدونة",
                  "item": "https://cleanwithfresh.com/blog"
                }
              ]
            };

            // Add breadcrumb structured data to page
            const breadcrumbScript = document.createElement('script');
            breadcrumbScript.type = 'application/ld+json';
            breadcrumbScript.text = JSON.stringify(breadcrumbData);
            document.head.appendChild(breadcrumbScript);
          `
        }}
      />
    </div>
  );
}
