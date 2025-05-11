/**
 * SEO Utility functions for Clean Jaddah website
 */

// Generate canonical URL
export const getCanonicalUrl = (path: string = ''): string => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cleanwithfresh.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

// Generate Open Graph image URL
export const getOgImageUrl = (imagePath: string = '/images/og-image.jpg'): string => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cleanwithfresh.com';
  const cleanImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl}${cleanImagePath}`;
};

// Generate structured data for FAQ page
export const generateFaqSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// Generate structured data for services
export const generateServiceSchema = (
  serviceName: string,
  description: string,
  price?: string,
  imageUrl?: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'شركة النظافة المثالية',
      url: 'https://cleanwithfresh.com'
    },
    areaServed: {
      '@type': 'City',
      name: 'جدة'
    },
    image: imageUrl || 'https://cleanwithfresh.com/images/services/default.jpg',
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'SAR'
      }
    })
  };
};

// Generate structured data for local business
export const generateLocalBusinessSchema = (customData = {}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'شركة النظافة المثالية',
    image: 'https://cleanwithfresh.com/images/logo.png',
    '@id': 'https://cleanwithfresh.com',
    url: 'https://cleanwithfresh.com',
    telephone: '+966563009155',
    priceRange: '$200',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'شارع جدة',
      addressLocality: 'جدة',
      addressRegion: 'مكة المكرمة',
      postalCode: '5554',
      addressCountry: 'SA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.5433,
      longitude: 39.1728
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
      ],
      opens: '09:00',
      closes: '17:00'
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61574108861445',
      'https://www.instagram.com/riaydh_ads?fbclid=IwY2xjawKNh5pleHRuA2FlbQIxMABicmlkETFxTThjaFdtbTRmT3QxOFduAR7lqlYCPpGFj5nkMrb8V-1EZFopHl-wO_q-YHnCceeW-nuDScNHgjaT1nzgrQ_aem_eHspWy7EflhV__5pEJa-WQ',
    ],
    ...customData
  };
};

// Generate meta tags for a page
export const generateMetaTags = (
  title: string,
  description: string,
  path: string = '',
  image: string = '/images/og-image.jpg'
) => {
  const canonicalUrl = getCanonicalUrl(path);
  const ogImageUrl = getOgImageUrl(image);
  
  return {
    title,
    description,
    canonical: canonicalUrl,
    openGraph: {
      type: 'website',
      locale: 'ar_SA',
      url: canonicalUrl,
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      site_name: 'شركة النظافة المثالية',
    },
    twitter: {
      handle: '@riaydh_ads',
      site: '@riaydh_ads',
      cardType: 'summary_large_image',
    },
  };
};
