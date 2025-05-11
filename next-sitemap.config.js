/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cleanwithfresh.com/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://cleanwithfresh.com/server-sitemap.xml', // Optional: for dynamic sitemap
    ],
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
    ],
  },
  exclude: ['/admin/*', '/server-sitemap.xml'],
  changefreq: 'weekly',
  priority: 0.7,
  // Add higher priority for blog pages
  transform: async (config, path) => {
    // Set higher priority for blog posts
    if (path.startsWith('/blog/') && !path.endsWith('/blog/')) {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Set highest priority for blog index page
    if (path === '/blog') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Use default transformation for all other paths
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
