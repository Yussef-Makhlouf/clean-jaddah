import React from "react";
import { defaultMetadata } from "./metadata";

interface PageSeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const PageSeo: React.FC<PageSeoProps> = ({ title, description, image, url, keywords, canonicalUrl }) => {
  const meta = {
    title: title || defaultMetadata.title,
    description: description || defaultMetadata.description,
    image: image || defaultMetadata.image,
    url: url || defaultMetadata.siteUrl,
    keywords: keywords || defaultMetadata.keywords,
    canonicalUrl: canonicalUrl || url || defaultMetadata.siteUrl,
  };
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      {meta.url && <meta property="og:url" content={meta.url} />}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {meta.image && <meta property="og:image" content={meta.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image && <meta name="twitter:image" content={meta.image} />}
      {/* Canonical URL - مهم لتجنب المحتوى المكرر */}
      <link rel="canonical" href={meta.canonicalUrl} />
    </>
  );
};

export default PageSeo; 