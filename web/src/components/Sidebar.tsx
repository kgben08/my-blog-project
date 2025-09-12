import Link from 'next/link';
import Image from 'next/image';
import { getCategories, getArticles } from '@/services/sanityService';

const Sidebar = async () => {
  const categories = await getCategories();
  const popularArticles = (await getArticles()).slice(0, 3);

  return (
    <aside className="w-full lg:w-1/2 lg:pl-8 space-y-8 animate-fade-in-up">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold font-lato text-dark-gray border-b-2 border-soft-coral pb-2 mb-4">人気記事</h3>
        <ul className="space-y-4">
          {popularArticles.map(article => {
            // slugやmainImageがない記事はリストに表示しない
            if (!article?.slug || !article.mainImage) {
              return null;
            }
            return (
              <li key={article.slug}>
                <Link href={`/blog/${article.slug}`} className="flex items-start space-x-3 group">
                  <div className="relative w-16 h-16 rounded-md flex-shrink-0">
                    <Image src={article.mainImage} alt={article.title ?? '記事の画像'} fill style={{ objectFit: 'cover' }} className="rounded-md" />
                  </div>
                  <span className="text-left font-semibold text-dark-gray/90 group-hover:text-seafoam-green transition-colors duration-300">
                    {article.title ?? '無題の記事'}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold font-lato text-dark-gray border-b-2 border-soft-coral pb-2 mb-4">カテゴリー</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category.id}>
              <Link href={`/blog/category/${category.id}`} className="text-dark-gray/80 hover:text-seafoam-green transition-colors duration-300">
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500 sticky top-24">
        Ad Banner
      </div>
    </aside>
  );
};

export default Sidebar;