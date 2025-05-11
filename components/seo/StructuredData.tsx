"use client";

import React from 'react';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Organization' | 'WebSite' | 'BreadcrumbList' | 'FAQPage' | 'Service' | 'Product' | 'WebPage' | 'BlogPosting';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let structuredData = {};

  switch (type) {
    case 'LocalBusiness':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: data.name || 'شركة النظافة المثالية',
        image: data.image || 'https://cleanwithfresh.com/images/logo.png',
        '@id': data.id || 'https://cleanwithfresh.com',
        url: data.url || 'https://cleanwithfresh.com',
        telephone: data.telephone || '+966563009155',
        priceRange: data.priceRange || '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.streetAddress || 'شارع جدة',
          addressLocality: data.addressLocality || 'جدة',
          addressRegion: data.addressRegion || 'مكة المكرمة',
          postalCode: data.postalCode || 'XXXXX',
          addressCountry: data.addressCountry || 'SA'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: data.latitude || 21.5433,
          longitude: data.longitude || 39.1728
        },
        openingHoursSpecification: data.openingHours || {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
          ],
          opens: '09:00',
          closes: '17:00'
        },
        sameAs: data.socialLinks || [
          'https://www.facebook.com/profile.php?id=61574108861445',
          'https://www.instagram.com/riaydh_ads?fbclid=IwY2xjawKNh5pleHRuA2FlbQIxMABicmlkETFxTThjaFdtbTRmT3QxOFduAR7lqlYCPpGFj5nkMrb8V-1EZFopHl-wO_q-YHnCceeW-nuDScNHgjaT1nzgrQ_aem_eHspWy7EflhV__5pEJa-WQ',

        ]
      };
      break;
    
    case 'FAQPage':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer
          }
        }))
      };
      break;
    
    case 'Service':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: data.serviceType || 'خدمات التنظيف',
        provider: {
          '@type': 'LocalBusiness',
          name: data.providerName || 'شركة النظافة المثالية',
          url: data.providerUrl || 'https://cleanjaddah.com'
        },
        areaServed: {
          '@type': 'City',
          name: data.areaServed || 'جدة'
        },
        description: data.description || 'خدمات تنظيف احترافية للمنازل والمكاتب والشركات',
        offers: {
          '@type': 'Offer',
          price: data.price || '',
          priceCurrency: data.priceCurrency || 'SAR'
        }
      };
      break;
    
    case 'BreadcrumbList':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.items.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      };
      break;
    
    case 'WebPage':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        ...data
      };
      break;
      
    case 'BlogPosting':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        ...data
      };
      break;
    
    default:
      structuredData = data;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
