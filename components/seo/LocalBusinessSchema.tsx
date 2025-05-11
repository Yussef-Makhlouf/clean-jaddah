"use client";

import React from 'react';

const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Clean With Fresh',
    image: 'https://cleanwithfresh.com/images/logo.png',
    '@id': 'https://cleanwithfresh.com',
    url: 'https://cleanwithfresh.com',
    telephone: '+966563009155',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jaddah Street',
      addressLocality: 'Jaddah',
      addressRegion: 'Makkah Province',
      postalCode: '55554',
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
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
