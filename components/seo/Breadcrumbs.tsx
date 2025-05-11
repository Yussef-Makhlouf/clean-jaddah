"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StructuredData from './StructuredData';

export interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  homeLabel?: string;
  separator?: string | React.ReactNode;
  containerClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  customLabels?: Record<string, string>;
  items?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  homeLabel = 'الرئيسية',
  separator = '/',
  containerClassName = 'py-3 text-sm',
  listClassName = 'flex flex-wrap items-center',
  itemClassName = 'text-gray-600 hover:text-blue-600 transition-colors',
  activeItemClassName = 'text-blue-600 font-semibold',
  customLabels = {},
  items,
}) => {
  const pathname = usePathname();
  
  // Skip rendering breadcrumbs on homepage
  if (pathname === '/' && !items) {
    return null;
  }
  
  // Define the type for our internal breadcrumb items
  type BreadcrumbItemInternal = {
    name: string;
    path: string;
    isCurrentPage?: boolean;
  };
  
  let breadcrumbItems: BreadcrumbItemInternal[];
  
  if (items) {
    // Use provided items
    breadcrumbItems = items.map(item => ({
      name: item.label,
      path: item.path,
      isCurrentPage: item.isCurrentPage || false
    }));
  } else {
    // Generate breadcrumb items from pathname
    const pathSegments = pathname.split('/').filter(Boolean);
    
    breadcrumbItems = [
      { name: homeLabel, path: '/' },
      ...pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        // Use custom label if provided, otherwise capitalize the segment
        const name = customLabels[segment] || 
                    segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        const isCurrentPage = index === pathSegments.length - 1;
        return { name, path, isCurrentPage };
      }),
    ];
  }

  // Create structured data for SEO
  const structuredDataItems = breadcrumbItems.map(item => ({
    name: item.name,
    url: `https://cleanwithfresh.com${item.path}`,
  }));

  return (
    <nav aria-label="breadcrumbs" className={containerClassName}>
      <StructuredData 
        type="BreadcrumbList" 
        data={{ items: structuredDataItems }} 
      />
      
      <ol className={listClassName}>
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1 || !!item.isCurrentPage;
          
          return (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">{separator}</span>
              )}
              
              {isLast ? (
                <span className={activeItemClassName}>{item.name}</span>
              ) : (
                <Link href={item.path} className={itemClassName}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
