import { getArticles, getCategories } from '@/services/sanityService';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const BlogPage = async () => {
  const articles = await getArticles();
  const categories = await getCategories();

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-lato text-dark-gray">Blog</h1>
        <p className="text-dark-gray/70 mt-2">親子で学ぶ、英語の世界へようこそ。</p>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="mb-8 flex flex-wrap gap-2">
             <Link href="/blog" className="bg-seafoam-green text-white px-4 py-2 rounded-full text-sm">All</Link>
             {categories.map(category => (
                <Link key={category.id} href={`/blog/category/${category.id}`} className="bg-gray-200 text-dark-gray px-4 py-2 rounded-full text-sm hover:bg-soft-coral transition-colors">
                  {category.title}
                </Link>
             ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
