import { getArticlesByCategory, getCategories, getCategoryById } from '@/services/sanityService';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import type { PageProps } from 'next';

const CategoryPage = async ({ params }: PageProps<{ categoryId: string }>) => {
  const { categoryId } = params;

  // Fetch articles, all categories, and the current category in parallel
  const [articles, allCategories, currentCategory] = await Promise.all([
    getArticlesByCategory(categoryId),
    getCategories(),
    getCategoryById(categoryId),
  ]);

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-lato text-dark-gray">
          {currentCategory?.title || 'Category'}
        </h1>
        <p className="text-dark-gray/70 mt-2">
          {currentCategory?.description || `A collection of articles in the ${currentCategory?.title} category.`}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-8">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
             <Link href="/blog" className="bg-gray-200 text-dark-gray px-4 py-2 rounded-full text-sm hover:bg-soft-coral transition-colors">All</Link>
             {allCategories.map(category => (
                <Link 
                  key={category.id} 
                  href={`/blog/category/${category.id}`} 
                  className={
                    category.id === categoryId 
                      ? "bg-seafoam-green text-white px-4 py-2 rounded-full text-sm" 
                      : "bg-gray-200 text-dark-gray px-4 py-2 rounded-full text-sm hover:bg-soft-coral transition-colors"
                  }
                >
                  {category.title}
                </Link>
             ))}
          </div>
          
          {/* Articles List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.length > 0 ? (
              articles.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))
            ) : (
              <p>このカテゴリの記事はまだありません。</p>
            )}
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="mt-12 lg:mt-0 lg:w-1/3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
