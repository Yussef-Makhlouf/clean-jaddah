const { SEO_CONFIG } = require('./seo-config.js');

// دالة لتوليد sitemap ديناميكي
function generateSitemap() {
  const currentDate = new Date().toISOString();
  const baseUrl = 'https://cleanwithfresh.com';
  
  const sitemapEntries = [
    // الصفحة الرئيسية
    {
      url: `${baseUrl}/`,
      priority: SEO_CONFIG.PAGE_PRIORITIES.HOME,
      changefreq: SEO_CONFIG.CHANGE_FREQUENCIES.HOME,
    },
    
    // صفحة الخدمات الرئيسية
    {
      url: `${baseUrl}/services/`,
      priority: SEO_CONFIG.PAGE_PRIORITIES.SERVICES,
      changefreq: SEO_CONFIG.CHANGE_FREQUENCIES.SERVICES,
    },
    
    // صفحات الخدمات
    ...Object.values(SEO_CONFIG.SERVICE_PAGES).map(path => ({
      url: `${baseUrl}${path}`,
      priority: SEO_CONFIG.PAGE_PRIORITIES.SERVICE_PAGES,
      changefreq: SEO_CONFIG.CHANGE_FREQUENCIES.SERVICE_PAGES,
    })),
    
    // صفحة المدونة
    {
      url: `${baseUrl}/blog/`,
      priority: SEO_CONFIG.PAGE_PRIORITIES.BLOG,
      changefreq: SEO_CONFIG.CHANGE_FREQUENCIES.BLOG,
    },
    
    // مقالات المدونة
    ...Object.values(SEO_CONFIG.BLOG_POSTS).map(path => ({
      url: `${baseUrl}${path}`,
      priority: SEO_CONFIG.PAGE_PRIORITIES.BLOG_POSTS,
      changefreq: SEO_CONFIG.CHANGE_FREQUENCIES.BLOG_POSTS,
    })),
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!--  Sitemap for Clean Jeddah - Generated Dynamically  -->

${sitemapEntries.map(entry => `<!-- ${entry.url.replace(baseUrl, '')} -->
<url>
<loc>${entry.url}</loc>
<lastmod>${currentDate}</lastmod>
<priority>${entry.priority.toFixed(2)}</priority>
<changefreq>${entry.changefreq}</changefreq>
</url>`).join('\n\n')}

</urlset>`;

  return sitemapContent;
}

// دالة لحفظ sitemap إلى ملف
function saveSitemap() {
  const fs = require('fs');
  const path = require('path');
  
  const sitemapContent = generateSitemap();
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('✅ Sitemap updated with current date:', new Date().toISOString());
}

module.exports = { generateSitemap, saveSitemap }; 