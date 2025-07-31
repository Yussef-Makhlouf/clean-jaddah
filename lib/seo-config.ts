// تكوين SEO للروابط الأساسية
export const SEO_CONFIG = {
  // الروابط الأساسية التي يجب على Google أرشفتها
  CORE_PAGES: {
    HOME: '/',
    SERVICES: '/services/',
    BLOG: '/blog/',
    CONTACT: '/contact/',
    ABOUT: '/about/',
  },

  // صفحات الخدمات الأساسية
  SERVICE_PAGES: {
    HOME_CLEANING: '/services/home-cleaning/',
    OFFICE_CLEANING: '/services/office-cleaning/',
    CARPET_CLEANING: '/services/carpet-cleaning/',
    WINDOW_CLEANING: '/services/window-cleaning/',
    POST_CONSTRUCTION: '/services/post-construction/',
    DISINFECTION: '/services/disinfection/',
    IMPLEMENTATION: '/services/implementation/',
  },

  // مقالات المدونة الأساسية (محتوى فريد)
  BLOG_POSTS: {
    PROFESSIONAL_CLEANING: '/blog/professional-cleaning-services-in-jeddah',
    ECO_FRIENDLY: '/blog/eco-friendly-cleaning-solutions',
    SPRING_CLEANING: '/blog/spring-cleaning-tips',
    HOME_DISINFECTION: '/blog/home-disinfection',
    JEDDAH_SERVICES: '/blog/jeddah-cleaning-services',
    CARPET_CLEANING: '/blog/carpet-cleaning',
  },

  // الروابط التي يجب منع أرشفتها (محتوى مكرر)
  DISALLOWED_PAGES: {
    // صفحات التصنيفات في المدونة
    BLOG_CATEGORIES: [
      '/blog/?category=home-cleaning',
      '/blog/?category=office-cleaning',
      '/blog/?category=general-tips',
      '/blog/?category=carpet-cleaning',
      '/blog/?category=window-cleaning',
      '/blog/?category=disinfection',
    ],
    
    // صفحات البحث والفلترة
    SEARCH_PAGES: [
      '/blog/?search=',
      '/blog/?tag=',
      '/blog/?author=',
      '/blog/?date=',
    ],
    
    // صفحات النظام
    SYSTEM_PAGES: [
      '/admin/',
      '/private/',
      '/api/',
      '/_next/',
      '/static/',
      '/404',
      '/500',
      '/error',
    ],
  },

  // أولويات الصفحات للـ sitemap
  PAGE_PRIORITIES: {
    HOME: 1.0,
    SERVICES: 0.9,
    SERVICE_PAGES: 0.85,
    BLOG: 0.8,
    BLOG_POSTS: 0.75,
  },

  // تكرار تحديث الصفحات
  CHANGE_FREQUENCIES: {
    HOME: 'weekly',
    SERVICES: 'monthly',
    SERVICE_PAGES: 'monthly',
    BLOG: 'weekly',
    BLOG_POSTS: 'monthly',
  },
};

// دالة للتحقق من أن الرابط مسموح به
export function isAllowedPage(path: string): boolean {
  const allAllowedPages = [
    ...Object.values(SEO_CONFIG.CORE_PAGES),
    ...Object.values(SEO_CONFIG.SERVICE_PAGES),
    ...Object.values(SEO_CONFIG.BLOG_POSTS),
  ];
  
  return allAllowedPages.includes(path);
}

// دالة للتحقق من أن الرابط محظور
export function isDisallowedPage(path: string): boolean {
  const allDisallowedPages = [
    ...SEO_CONFIG.DISALLOWED_PAGES.BLOG_CATEGORIES,
    ...SEO_CONFIG.DISALLOWED_PAGES.SEARCH_PAGES,
    ...SEO_CONFIG.DISALLOWED_PAGES.SYSTEM_PAGES,
  ];
  
  return allDisallowedPages.some(disallowedPath => 
    path.startsWith(disallowedPath)
  );
}

// دالة للحصول على أولوية الصفحة
export function getPagePriority(path: string): number {
  if (path === SEO_CONFIG.CORE_PAGES.HOME) return SEO_CONFIG.PAGE_PRIORITIES.HOME;
  if (path === SEO_CONFIG.CORE_PAGES.SERVICES) return SEO_CONFIG.PAGE_PRIORITIES.SERVICES;
  if (Object.values(SEO_CONFIG.SERVICE_PAGES).includes(path)) return SEO_CONFIG.PAGE_PRIORITIES.SERVICE_PAGES;
  if (path === SEO_CONFIG.CORE_PAGES.BLOG) return SEO_CONFIG.PAGE_PRIORITIES.BLOG;
  if (Object.values(SEO_CONFIG.BLOG_POSTS).includes(path)) return SEO_CONFIG.PAGE_PRIORITIES.BLOG_POSTS;
  
  return 0.5; // أولوية افتراضية
}

// دالة للحصول على تكرار تحديث الصفحة
export function getChangeFrequency(path: string): string {
  if (path === SEO_CONFIG.CORE_PAGES.HOME) return SEO_CONFIG.CHANGE_FREQUENCIES.HOME;
  if (path === SEO_CONFIG.CORE_PAGES.SERVICES) return SEO_CONFIG.CHANGE_FREQUENCIES.SERVICES;
  if (Object.values(SEO_CONFIG.SERVICE_PAGES).includes(path)) return SEO_CONFIG.CHANGE_FREQUENCIES.SERVICE_PAGES;
  if (path === SEO_CONFIG.CORE_PAGES.BLOG) return SEO_CONFIG.CHANGE_FREQUENCIES.BLOG;
  if (Object.values(SEO_CONFIG.BLOG_POSTS).includes(path)) return SEO_CONFIG.CHANGE_FREQUENCIES.BLOG_POSTS;
  
  return 'monthly'; // تكرار افتراضي
} 