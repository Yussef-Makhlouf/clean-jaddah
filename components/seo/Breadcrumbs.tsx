import React from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

const defaultItems: BreadcrumbItem[] = [
  { name: "الرئيسية", url: "https://cleanwithfresh.com" },
  { name: "الخدمات", url: "https://cleanwithfresh.com/services" },
];

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: (items || defaultItems).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

export default Breadcrumbs; 