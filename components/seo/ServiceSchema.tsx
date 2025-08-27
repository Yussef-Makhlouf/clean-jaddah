import React from "react";

interface ServiceSchemaProps {
  serviceName?: string;
  serviceType?: string;
  description?: string;
  areaServed?: string;
  priceRange?: string;
  availableHours?: string;
  image?: string;
  url?: string;
  providerName?: string;
  providerUrl?: string;
  providerPhone?: string;
  providerAddress?: object;
}

const defaultService = {
  serviceName: "تنظيف المنازل",
  serviceType: "CleaningService",
  description: "خدمة شاملة لتنظيف جميع أنحاء منزلك بأعلى معايير الجودة والنظافة في جدة.",
  areaServed: "جدة، المملكة العربية السعودية",
  priceRange: "$$",
  availableHours: "Mo-Su 08:00-20:00",
  providerName: "شركة النظافة المثالية",
  providerUrl: "https://cleanwithfresh.com",
  providerPhone: "+966592425077",
  providerAddress: {
    "@type": "PostalAddress",
    streetAddress: "شارع الأمير محمد بن عبد العزيز",
    addressLocality: "جدة",
    addressRegion: "منطقة مكة المكرمة",
    postalCode: "21589",
    addressCountry: "SA"
  }
};

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  serviceType,
  description,
  areaServed,
  priceRange,
  availableHours,
  image,
  url,
  providerName,
  providerUrl,
  providerPhone,
  providerAddress,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName || defaultService.serviceName,
    serviceType: serviceType || defaultService.serviceType,
    description: description || defaultService.description,
    areaServed: {
      "@type": "City",
      name: areaServed || defaultService.areaServed
    },
    priceRange: priceRange || defaultService.priceRange,
    hoursAvailable: availableHours || defaultService.availableHours,
    ...(image && { image: image }),
    ...(url && { url: url }),
    provider: {
      "@type": "LocalBusiness",
      "@id": providerUrl || defaultService.providerUrl,
      name: providerName || defaultService.providerName,
      url: providerUrl || defaultService.providerUrl,
      telephone: providerPhone || defaultService.providerPhone,
      address: providerAddress || defaultService.providerAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude: "21.5433",
        longitude: "39.1728"
      },
      openingHours: availableHours || defaultService.availableHours,
      priceRange: priceRange || defaultService.priceRange
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "SAR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "SAR"
      },
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
      areaServed: {
        "@type": "City",
        name: areaServed || defaultService.areaServed
      }
    }
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

export default ServiceSchema; 