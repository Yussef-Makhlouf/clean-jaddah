import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getRelatedBlogPosts, getAllBlogPosts } from '@/lib/blog-utils';
import { Metadata } from 'next';
import PageSeo from '@/components/seo/PageSeo';
import BlogPostSchema from '@/components/seo/BlogPostSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';


// Generate metadata for blog posts
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'المقال غير موجود',
      description: 'المقال الذي تبحث عنه غير موجود',
    };
  }
  
  return {
    title: `${post.title} - مدونة شركة النظافة المثالية`,
    description: post.excerpt,

  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  
  return Promise.resolve(posts.map((post) => ({
    slug: post.slug,
  })));
}

// Blog post page component
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  // If post not found, return 404
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedBlogPosts(slug, 3);

  return (
    <>
      <PageSeo
        title={`${post.title} - مدونة شركة النظافة المثالية`}
        description={post.excerpt}
        image={post.coverImage}
        url={`https://cleanwithfresh.com/blog/${post.slug}`}
        keywords={"مدونة تنظيف, نصائح تنظيف, شركة تنظيف جدة, خدمات تنظيف جدة, تنظيف منازل, تنظيف مكاتب, تعقيم, سجاد, نوافذ"}
      />
      <BlogPostSchema
        title={post.title}
        description={post.excerpt}
        url={`https://cleanwithfresh.com/blog/${post.slug}`}
        image={post.coverImage}
        datePublished={post.date}
        dateModified={post.date}
        authorName={post.author}
      />
      <Breadcrumbs
        items={[
          { name: 'الرئيسية', url: 'https://cleanwithfresh.com' },
          { name: 'المدونة', url: 'https://cleanwithfresh.com/blog' },
          { name: post.title, url: `https://cleanwithfresh.com/blog/${post.slug}` }
        ]}
      />
      <div className="bg-gray-50 min-h-screen">

        {/* Hero Section with Cover Image */}
        <div className="relative">
          <div className="absolute inset-0">
            <div className="relative h-[500px] w-full">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>
            </div>
          </div>
          <div className="relative container mx-auto px-4 py-40 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-600/80 text-white text-sm px-4 py-1 rounded-full backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>
              <div className="flex items-center justify-center text-gray-200 mb-8">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                  <span className="font-medium">{post.author}</span>
                  <span className="mx-3">•</span>
                  <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-0 -mt-20 relative z-10 overflow-hidden">
            {/* Breadcrumbs - Top Bar */}
            <div className="bg-gray-50 p-4 border-b border-gray-100">
              <nav className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600 transition-colors">الرئيسية</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">المدونة</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">{post.title}</span>
              </nav>
            </div>
            
            {/* Article Content */}
            <div className="p-8 md:p-12">
              {/* Article Content */}
              <article className="prose prose-lg md:prose-xl max-w-none rtl:text-right">
                {/* Divide content into sections and render */}
                {divideAndRenderContent(post.content)}
              </article>
              
              {/* Author and Share Section */}
              <div className="border-t border-gray-200 mt-12 pt-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-6 md:mb-0 bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-500 text-sm mb-1">كتب بواسطة</p>
                    <p className="font-bold text-lg text-blue-700">{post.author}</p>
                    <p className="text-gray-600 text-sm mt-1">{new Date(post.date).toLocaleDateString('ar-SA')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-2">مشاركة المقال</p>
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      {/* Facebook Share */}
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://cleanwithfresh.com/blog/${post.slug}`)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                        aria-label="مشاركة على فيسبوك"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      
                      {/* Twitter/X Share */}
                      <a 
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://cleanwithfresh.com/blog/${post.slug}`)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
                        aria-label="مشاركة على تويتر"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      
                      {/* Instagram - Opens profile since direct sharing isn't supported */}
                      <a 
                        href="https://www.instagram.com/riaydh_ads?fbclid=IwY2xjawKNh5pleHRuA2FlbQIxMABicmlkETFxTThjaFdtbTRmT3QxOFduAR7lqlYCPpGFj5nkMrb8V-1EZFopHl-wO_q-YHnCceeW-nuDScNHgjaT1nzgrQ_aem_eHspWy7EflhV__5pEJa-WQ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                        aria-label="زيارة صفحتنا على انستغرام"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                        </svg>
                      </a>
                      
                      {/* WhatsApp Share */}
                      <a 
                        href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://cleanwithfresh.com/blog/${post.slug}`)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                        aria-label="مشاركة على واتساب"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Related Posts Section */}
            <div className="max-w-6xl mx-auto mt-16">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold border-r-4 border-blue-600 pr-4">مقالات ذات صلة</h2>
                <Link 
                  href="/blog" 
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  العودة إلى المدونة
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.slug} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 hover:shadow-xl">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="relative h-56 w-full">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                          {new Date(relatedPost.date).toLocaleDateString('ar-SA')}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="font-medium">{relatedPost.author}</span>
                      </div>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">{relatedPost.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {relatedPost.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={`/blog/${relatedPost.slug}`} 
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                      >
                        اقرأ المزيد
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 rtl:rotate-180 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Simple markdown to HTML converter (in a real app, use a proper markdown library)
function markdownToHtml(markdown: string): string {
  let html = markdown;
  
  // Convert headers
  html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  
  // Convert paragraphs
  html = html.replace(/^(?!<h[1-6]>)(.*$)/gm, function(match) {
    if (match.trim() === '') return '';
    return '<p>' + match + '</p>';
  });
  
  // Convert lists
  html = html.replace(/^\d+\. (.*$)/gm, '<li>$1</li>');
  html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
  
  // Wrap lists
  let inOrderedList = false;
  let inUnorderedList = false;
  
  const lines = html.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('<li>') && !inOrderedList && !inUnorderedList) {
      if (i > 0 && lines[i-1].match(/^\d+\./)) {
        lines[i] = '<ol>' + lines[i];
        inOrderedList = true;
      } else {
        lines[i] = '<ul>' + lines[i];
        inUnorderedList = true;
      }
    } else if (!lines[i].startsWith('<li>') && (inOrderedList || inUnorderedList)) {
      if (inOrderedList) {
        lines[i-1] = lines[i-1] + '</ol>';
        inOrderedList = false;
      } else {
        lines[i-1] = lines[i-1] + '</ul>';
        inUnorderedList = false;
      }
    }
  }
  
  // Close any open lists at the end
  if (inOrderedList) {
    lines.push('</ol>');
  } else if (inUnorderedList) {
    lines.push('</ul>');
  }
  
  html = lines.join('\n');
  
  // Convert bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  return html;
}

// Function to divide content into sections and render them
function divideAndRenderContent(content: string): React.ReactNode {
  // Check if content is HTML (from the blog data)
  const isHtml = content.trim().startsWith('<!DOCTYPE html>') || content.trim().startsWith('<html');
  
  if (isHtml) {
    // Extract the body content from HTML
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const bodyContent = bodyMatch ? bodyMatch[1] : content;
    
    // Split content by headers (h1, h2, h3)
    const sections = [];
    
    // Extract sections based on headers
    const headerRegex = /<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi;
    const contentSplit = bodyContent.split(headerRegex);
    
    // Process the split content
    if (contentSplit.length > 1) {
      for (let i = 0; i < contentSplit.length; i += 2) {
        const sectionContent = contentSplit[i];
        const headerContent = contentSplit[i + 1] || '';
        
        if (sectionContent.trim()) {
          sections.push(
            <div key={`section-${i}`} className="mb-12 article-section bg-white p-6 rounded-lg shadow-sm">
              <div dangerouslySetInnerHTML={{ __html: sectionContent }} />
            </div>
          );
        }
        
        if (headerContent) {
          sections.push(
            <div key={`header-${i}`} className="mb-6 bg-blue-50 p-4 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-800">{headerContent}</h2>
            </div>
          );
        }
      }
    } else {
      // If no headers found, extract paragraphs using regex
      const paragraphRegex = /<p>(.*?)<\/p>/gi;
      let match;
      let index = 0;
      const paragraphs = [];
      
      // Create a temporary string to work with
      let tempContent = bodyContent;
      
      // Extract all paragraphs
      while ((match = paragraphRegex.exec(tempContent)) !== null) {
        if (match[0].trim()) {
          paragraphs.push(match[0]);
        }
      }
      
      // If paragraphs were found, create sections for each
      if (paragraphs.length > 0) {
        paragraphs.forEach((paragraph, idx) => {
          sections.push(
            <div key={`para-${idx}`} className="mb-8 article-paragraph bg-white p-6 rounded-lg shadow-sm">
              <div dangerouslySetInnerHTML={{ __html: paragraph }} />
            </div>
          );
        });
      } else {
        // If no paragraphs found, split by any HTML tag that might indicate a section
        const sectionRegex = /(<section>|<div>|<article>)(.*?)(<\/section>|<\/div>|<\/article>)/gi;
        
        while ((match = sectionRegex.exec(tempContent)) !== null) {
          if (match[2].trim()) {
            sections.push(
              <div key={`section-${index}`} className="mb-12 article-section bg-white p-6 rounded-lg shadow-sm">
                <div dangerouslySetInnerHTML={{ __html: match[0] }} />
              </div>
            );
            index++;
          }
        }
      }
    }
    
    return (
      <div className="article-content space-y-6">
        {sections.length > 0 ? (
          sections
        ) : (
          // Fallback if no sections were created
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
          </div>
        )}
      </div>
    );
  } else {
    // For markdown content
    const html = markdownToHtml(content);
    
    // Split by headers
    const sections = [];
    const headerRegex = /<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi;
    const contentSplit = html.split(headerRegex);
    
    if (contentSplit.length > 1) {
      for (let i = 0; i < contentSplit.length; i += 2) {
        const sectionContent = contentSplit[i];
        const headerContent = contentSplit[i + 1] || '';
        
        if (sectionContent.trim()) {
          sections.push(
            <div key={`section-${i}`} className="mb-12 article-section bg-white p-6 rounded-lg shadow-sm">
              <div dangerouslySetInnerHTML={{ __html: sectionContent }} />
            </div>
          );
        }
        
        if (headerContent) {
          sections.push(
            <div key={`header-${i}`} className="mb-6 bg-blue-50 p-4 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-800">{headerContent}</h2>
            </div>
          );
        }
      }
    } else {
      // If no headers found, split by paragraphs
      const paragraphRegex = /<p>(.*?)<\/p>/gi;
      let match;
      let index = 0;
      
      while ((match = paragraphRegex.exec(html)) !== null) {
        sections.push(
          <div key={`para-${index}`} className="mb-8 article-paragraph bg-white p-6 rounded-lg shadow-sm">
            <p>{match[1]}</p>
          </div>
        );
        index++;
      }
    }
    
    return (
      <div className="article-content space-y-6">
        {sections.length > 0 ? (
          sections
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        )}
      </div>
    );
  }
}
