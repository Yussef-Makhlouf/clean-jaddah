import React from "react";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
}

const defaultBusiness = {
  name: "شركة النظافة المثالية",
  description: "شركة النظافة المثالية تقدم خدمات تنظيف منازل، مكاتب، سجاد، نوافذ، وتعقيم في جدة بأعلى معايير الجودة وبأسعار منافسة.",
  url: "https://cleanwithfresh.com",
  logo: "/arabic color.avif",
  telephone: "+966592425077",
  address: {
    streetAddress: "جدة، الشارع الرئيسي",
    addressLocality: "جدة",
    addressRegion: "منطقة مكة المكرمة",
    postalCode: "21589",
    addressCountry: "SA"
  }
};

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = (props) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: props.name || defaultBusiness.name,
    description: props.description || defaultBusiness.description,
    url: props.url || defaultBusiness.url,
    logo: props.logo || defaultBusiness.logo,
    telephone: props.telephone || defaultBusiness.telephone,
    address: {
      "@type": "PostalAddress",
      ...(props.address || defaultBusiness.address),
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

export default LocalBusinessSchema; 