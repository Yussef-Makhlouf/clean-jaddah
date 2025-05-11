'use client';

import React from 'react';
import { JsonLd } from 'react-schemaorg';
import { BlogPosting } from 'schema-dts';

interface BlogPostSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  image: string;
  url: string;
}

const BlogPostSchema: React.FC<BlogPostSchemaProps> = ({
  title,
  description,
  datePublished,
  author,
  image,
  url,
}) => {
  return (
    <JsonLd<BlogPosting>
      item={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        image: image,
        datePublished: datePublished,
        author: {
          '@type': 'Person',
          name: author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'شركة النظافة المثالية',
          logo: {
            '@type': 'ImageObject',
            url: 'https://cleanwithfresh.com/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
      }}
    />
  );
};

export default BlogPostSchema;
