import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <NextSeo
        title="404 - الصفحة غير موجودة | شركة النظافة المثالية"
        description="عذراً، الصفحة التي تبحث عنها غير موجودة. يرجى العودة إلى الصفحة الرئيسية."
        noindex={true}
      />
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">عذراً، الصفحة التي تبحث عنها غير موجودة</h2>
        <p className="mb-8">يبدو أن الرابط الذي اتبعته قد تم نقله أو حذفه أو لم يعد موجوداً</p>
        <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </>
  );
}
