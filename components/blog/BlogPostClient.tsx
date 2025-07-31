// "use client";

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import PageSeo from '@/components/seo/PageSeo';
// import BlogPostSchema from '@/components/seo/BlogPostSchema';
// import Breadcrumbs from '@/components/seo/Breadcrumbs';
// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
// import WebVitals from '@/components/seo/WebVitals';
// import { divideAndRenderContent } from '@/lib/content-utils';

// interface BlogPostClientProps {
//   post: any; // Replace with your proper post type
//   relatedPosts: any[]; // Replace with your proper post type
// }

// export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Header />
//       <PageSeo 
//         title={post.title + ' | مدونة شركة النظافة المثالية'}
//         description={post.excerpt}
//         canonical={`/blog/${post.slug}`}
//         openGraph={{
//           title: post.title,
//           description: post.excerpt,
//           url: `https://cleanwithfresh.com/blog/${post.slug}`,
//           type: 'article',
//           article: {
//             publishedTime: post.date,
//             tags: post.tags,
//             section: 'تنظيف',
//             authors: [post.author],
//           },
//           images: [
//             {
//               url: `https://cleanwithfresh.com${post.coverImage}`,
//               width: 1200,
//               height: 630,
//               alt: post.title,
//             },
//           ],
//         }}
//         twitter={{
//           cardType: 'summary_large_image',
//           site: '@cleanwithfresh',
//         }}
//         additionalMetaTags={[
//           {
//             name: 'keywords',
//             content: post.tags.join(', '),
//           },
//           {
//             name: 'article:published_time',
//             content: post.date,
//           },
//         ]}
//         robotsProps={{
//           maxImagePreview: 'large',
//           maxSnippet: -1,
//           maxVideoPreview: -1
//         }}
//       />
      
//       <BlogPostSchema 
//         title={post.title}
//         description={post.excerpt}
//         datePublished={post.date}
//         author={post.author}
//         image={`https://cleanwithfresh.com${post.coverImage}`}
//         url={`https://cleanwithfresh.com/blog/${post.slug}`}
//       />
      
//       {/* Web Vitals Monitoring for this page */}
//       <WebVitals id={`blog-post-${post.slug}`} />
      
//       {/* Hero Section with Cover Image */}
//       <div className="relative">
//         <div className="absolute inset-0">
//           <div className="relative h-[500px] w-full">
//             <Image
//               src={post.coverImage}
//               alt={post.title}
//               fill
//               className="object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>
//           </div>
//         </div>
//         <div className="relative container mx-auto px-4 py-40 text-white">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="flex flex-wrap gap-2 justify-center mb-6">
//               {post.tags.map((tag, index) => (
//                 <span key={index} className="bg-blue-600/80 text-white text-sm px-4 py-1 rounded-full backdrop-blur-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>
//             <div className="flex items-center justify-center text-gray-200 mb-8">
//               <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
//                 <span className="font-medium">{post.author}</span>
//                 <span className="mx-3">•</span>
//                 <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-0 -mt-20 relative z-10 overflow-hidden">
//           {/* Breadcrumbs - Top Bar */}
//           <div className="bg-gray-50 p-4 border-b border-gray-100">
//             <Breadcrumbs
//               items={[
//                 { label: 'الرئيسية', path: '/' },
//                 { label: 'المدونة', path: '/blog' },
//                 { label: post.title, path: `/blog/${post.slug}`, isCurrentPage: true },
//               ]}
//             />
//           </div>
          
//           {/* Article Content */}
//           <div className="p-8 md:p-12">
//             {/* Article Content */}
//             <article className="prose prose-lg md:prose-xl max-w-none rtl:text-right">
//               {/* Divide content into sections and render */}
//               {divideAndRenderContent(post.content)}
//             </article>
//           </div>
//         </div>
        
//         {/* Related Posts Section */}
//         {relatedPosts.length > 0 && (
//           <div className="max-w-6xl mx-auto mt-16">
//             <div className="flex justify-between items-center mb-10">
//               <h2 className="text-3xl font-bold border-r-4 border-blue-600 pr-4">مقالات ذات صلة</h2>
//               <Link 
//                 href="/blog" 
//                 className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//                 العودة إلى المدونة
//               </Link>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {relatedPosts.map((relatedPost) => (
//                 <div key={relatedPost.slug} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 hover:shadow-xl">
//                   <Link href={`/blog/${relatedPost.slug}`}>
//                     <div className="relative h-56 w-full">
//                       <Image
//                         src={relatedPost.coverImage}
//                         alt={relatedPost.title}
//                         fill
//                         className="object-cover transition-transform duration-500 hover:scale-105"
//                       />
//                     </div>
//                   </Link>
//                   <div className="p-6">
//                     <div className="flex items-center text-xs text-gray-500 mb-3">
//                       <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
//                         {new Date(relatedPost.date).toLocaleDateString('ar-SA')}
//                       </span>
//                     </div>
//                     <Link href={`/blog/${relatedPost.slug}`}>
//                       <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">{relatedPost.title}</h3>
//                     </Link>
//                     <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
//                     <Link 
//                       href={`/blog/${relatedPost.slug}`} 
//                       className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
//                     >
//                       اقرأ المزيد
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
      
//       <Footer />
//     </div>
//   );
// } 