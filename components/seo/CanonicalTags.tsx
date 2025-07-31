import Head from 'next/head';

interface CanonicalTagsProps {
  canonicalUrl: string;
  alternateUrls?: {
    [key: string]: string;
  };
}

export default function CanonicalTags({ canonicalUrl, alternateUrls }: CanonicalTagsProps) {
  return (
    <Head>
      {/* Canonical URL - مهم لتجنب المحتوى المكرر */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate URLs for different languages/regions */}
      {alternateUrls && Object.entries(alternateUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Prevent indexing of duplicate content */}
      <meta name="robots" content="index, follow" />
      
      {/* Additional SEO meta tags */}
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
    </Head>
  );
} 