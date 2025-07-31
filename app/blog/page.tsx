'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog-utils';

// Blog listing page component
export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-pattern-dots"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl text-white  md:text-6xl font-bold mb-6 text-center">مدونة شركة النظافة المثالية</h1>
          <p className="text-xl text-white md:text-2xl text-center max-w-3xl mx-auto opacity-90 leading-relaxed">
            أحدث النصائح والمقالات حول التنظيف المنزلي والمكتبي من خبراء التنظيف المحترفين
          </p>
        </div>
      </div>
      
      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-16 transform hover:shadow-2xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-80 md:h-full w-full">
                  <Image
                    src={blogPosts[0].coverImage}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {new Date(blogPosts[0].date).toLocaleDateString('ar-SA')}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="font-medium">{blogPosts[0].author}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${blogPosts[0].slug}`}>{blogPosts[0].title}</Link>
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/blog/${blogPosts[0].slug}`} 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  اقرأ المقال الكامل
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold border-r-4 border-blue-600 pr-4">أحدث المقالات</h2>
            <div className="flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 hover:shadow-xl">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-56 w-full">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {new Date(post.date).toLocaleDateString('ar-SA')}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`} 
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
      )}
      
      {/* Blog Categories Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">تصفح حسب الفئة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'تنظيف المنازل', count: 12, color: 'bg-green-500' },
              { name: 'تنظيف المكاتب', count: 8, color: 'bg-blue-500' },
              { name: 'نصائح التنظيف', count: 15, color: 'bg-purple-500' },
              { name: 'أدوات التنظيف', count: 6, color: 'bg-orange-500' },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.count} مقال</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
