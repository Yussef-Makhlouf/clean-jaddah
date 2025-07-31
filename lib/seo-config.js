// تكوين SEO للروابط الأساسية
const SEO_CONFIG = {
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

module.exports = { SEO_CONFIG }; 