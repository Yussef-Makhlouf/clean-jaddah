"use client";

import React from 'react';

type JsonLdProps = {
  type: 'Organization' | 'LocalBusiness' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList';
  data: Record<string, any>;
};

const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  let schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export const OrganizationJsonLd: React.FC<{ data?: Record<string, any> }> = ({ data = {} }) => {
  const defaultData = {
    name: 'شركة النظافة المثالية',
    url: 'https://cleanwithfresh.com',
    logo: 'https://cleanwithfresh.com/images/logo.png',
    sameAs: [
      'https://www.facebook.com/cleanjaddah',
      'https://www.instagram.com/cleanjaddah',
      'https://twitter.com/cleanjaddah'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966563009155',
      contactType: 'customer service',
      availableLanguage: ['Arabic', 'English']
    }
  };

  return <JsonLd type="Organization" data={{ ...defaultData, ...data }} />;
};

export const LocalBusinessJsonLd: React.FC<{ data?: Record<string, any> }> = ({ data = {} }) => {
  const defaultData = {
    name: 'شركة النظافة المثالية',
    image: 'https://cleanwithfresh.com/images/storefront.jpg',
    '@id': 'https://cleanwithfresh.com',
    url: 'https://cleanwithfresh.com',
    telephone: '+966563009155',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'شارع جدة',
      addressLocality: 'جدة',
      addressRegion: 'مكة المكرمة',
      postalCode: 'XXXXX',
      addressCountry: 'SA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.5433,
      longitude: 39.1728
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '17:00'
      }
    ]
  };

  return <JsonLd type="LocalBusiness" data={{ ...defaultData, ...data }} />;
};

export const WebPageJsonLd: React.FC<{ data: Record<string, any> }> = ({ data }) => {
  return <JsonLd type="WebPage" data={data} />;
};

export const ServiceJsonLd: React.FC<{ data: Record<string, any> }> = ({ data }) => {
  return <JsonLd type="Service" data={data} />;
};

export const FAQPageJsonLd: React.FC<{ questions: Array<{ question: string; answer: string }> }> = ({ questions }) => {
  const data = {
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };

  return <JsonLd type="FAQPage" data={data} />;
};

export const BreadcrumbListJsonLd: React.FC<{ items: Array<{ name: string; url: string }> }> = ({ items }) => {
  const data = {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return <JsonLd type="BreadcrumbList" data={data} />;
};

export default JsonLd;
