"use client";

import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

const DefaultSeoWrapper: React.FC = () => {
  return <DefaultSeo {...SEO} />;
};

export default DefaultSeoWrapper;
