# دليل تحديث Sitemap مع التاريخ الحقيقي

## المشكلة السابقة
كان ملف `sitemap.xml` يحتوي على تاريخ ثابت (`2025-01-20T06:26:38+00:00`) لا يتطابق مع التاريخ الحقيقي لتحديث الموقع.

## الحل المطبق
تم إنشاء نظام ديناميكي لتوليد sitemap مع التاريخ الحقيقي:

### الملفات الجديدة:
1. `lib/sitemap-generator.js` - مولّد sitemap ديناميكي
2. `lib/seo-config.js` - تكوين SEO للروابط
3. `scripts/update-sitemap.js` - script لتحديث sitemap

### كيفية الاستخدام:

#### 1. تحديث sitemap يدوياً:
```bash
npm run update-sitemap
```

#### 2. تحديث sitemap تلقائياً عند البناء:
أضف هذا السطر إلى `package.json` في scripts:
```json
"build": "npm run update-sitemap && next build"
```

### المميزات:
✅ **تاريخ حقيقي**: يتم استخدام التاريخ الحالي عند التحديث
✅ **توليد ديناميكي**: يتم إنشاء sitemap من التكوين
✅ **سهولة الاستخدام**: أمر واحد لتحديث sitemap
✅ **أولويات صحيحة**: كل صفحة لها أولوية مناسبة
✅ **تكرار تحديث**: كل صفحة لها تكرار تحديث مناسب

### مثال على النتيجة:
```xml
<url>
<loc>https://cleanwithfresh.com/</loc>
<lastmod>2025-07-31T09:38:30.277Z</lastmod>
<priority>1.00</priority>
<changefreq>weekly</changefreq>
</url>
```

### نصائح مهمة:
1. **قم بتحديث sitemap قبل كل نشر**: `npm run update-sitemap`
2. **أضف script التحديث إلى عملية البناء**: لتحديث تلقائي
3. **تحقق من التاريخ**: تأكد من أن التاريخ يتطابق مع الوقت الحقيقي

### للتحقق من التحديث:
```bash
# عرض تاريخ آخر تحديث
Get-ChildItem -Path "public/sitemap.xml" | Select-Object LastWriteTime

# عرض محتوى sitemap
Get-Content "public/sitemap.xml" | Select-String "lastmod"
```

---
**ملاحظة**: الآن sitemap يعكس التاريخ الحقيقي للتحديثات وليس تاريخ ثابت! 