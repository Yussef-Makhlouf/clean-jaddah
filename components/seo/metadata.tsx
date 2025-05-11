"use client";

import React from 'react';
import { NextSeo } from 'next-seo';

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export const Metadata: React.FC<MetadataProps> = ({
  title = 'شركة النظافة المثالية - خدمات تنظيف احترافية',
  description = 'شركة النظافة المثالية توفر خدمات تنظيف احترافية للمنازل والمكاتب والشركات. نقدم أفضل جودة بأسعار تنافسية.',
  keywords = 'تنظيف, جدة, شركة تنظيف, تنظيف منازل, تنظيف مكاتب, تنظيف شركات, تنظيف فلل',
  ogTitle,
  ogDescription,
  ogImage = 'https://cleanwithfresh.com/images/og-image.jpg',
  ogUrl = 'https://cleanwithfresh.com',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl = 'https://cleanwithfresh.com',
  noIndex = false,
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonicalUrl}
      noindex={noIndex}
      openGraph={{
        type: 'website',
        url: ogUrl,
        title: ogTitle || title,
        description: ogDescription || description,
        images: [
          {
            url: ogImage,
            alt: ogTitle || title,
          },
        ],
        locale: 'ar_SA',
        site_name: 'Clean Jaddah',
      }}
      twitter={{
        handle: '@cleanwithfresh',
        site: '@cleanwithfresh',
        cardType: twitterCard,
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: keywords,
        },
      ]}
    />
  );
};

export default Metadata;
