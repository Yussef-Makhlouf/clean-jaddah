import React from "react";

interface BlogPostSchemaProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}

const defaultBlogPost = {
  title: "أفضل طرق تنظيف المنازل في جدة",
  description: "تعرف على أفضل النصائح والخطوات لتنظيف منزلك في جدة بطريقة احترافية وصديقة للبيئة.",
  url: "https://cleanwithfresh.com/blog/best-home-cleaning-tips-jeddah",
  image: "/images/blog/home-disinfection.png",
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
  authorName: "أفضل شركة تنظيف في جدة",
};

const BlogPostSchema: React.FC<BlogPostSchemaProps> = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title || defaultBlogPost.title,
    description: description || defaultBlogPost.description,
    url: url || defaultBlogPost.url,
    image: image ? [image] : [defaultBlogPost.image],
    datePublished: datePublished || defaultBlogPost.datePublished,
    dateModified: dateModified || defaultBlogPost.dateModified,
    author: {
      "@type": "Person",
      name: authorName || defaultBlogPost.authorName,
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

export default BlogPostSchema; 