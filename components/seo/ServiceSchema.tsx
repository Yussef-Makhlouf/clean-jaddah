"use client";

import React from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  price?: string;
  priceCurrency?: string;
  imageUrl?: string;
  areaServed?: string;
  serviceUrl?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  price,
  priceCurrency = 'SAR',
  imageUrl = 'https://cleanwithfresh.com/images/services/default.jpg',
  areaServed = 'جدة',
  serviceUrl,
}) => {
  const schema = {
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
      name: areaServed
    },
    image: imageUrl,
    url: serviceUrl || `https://cleanwithfresh.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: priceCurrency
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
