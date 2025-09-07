import { getArticles } from '@/services/sanityService';
import Carousel from '@/components/Carousel';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';

const HomePage = async () => {
  const articles = await getArticles();
  
  const featuredArticles = articles.slice(0, 3);
  const recentArticles = articles.slice(0, 6);

  return (
    <div>
      <section className="mb-12">
        <Carousel articles={featuredArticles} />
      </section>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold font-lato text-dark-gray border-b-2 border-seafoam-green pb-2 mb-8">
                新着記事
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentArticles.map(article => (
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

export default HomePage;