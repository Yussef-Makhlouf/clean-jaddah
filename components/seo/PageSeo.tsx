"use client";

import React from 'react';
import { NextSeo } from 'next-seo';

interface PageSeoProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: any;
  twitter?: any;
  additionalMetaTags?: any[];
  noindex?: boolean;
}

const PageSeo: React.FC<PageSeoProps> = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  additionalMetaTags,
  noindex = false
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={openGraph}
      twitter={twitter}
      additionalMetaTags={additionalMetaTags}
      noindex={noindex}
    />
  );
};

export default PageSeo;
