const { saveSitemap } = require('../lib/sitemap-generator.js');

// تحديث sitemap مع التاريخ الحالي
console.log('🔄 Updating sitemap with current date...');
saveSitemap();
console.log('✅ Sitemap updated successfully!'); 