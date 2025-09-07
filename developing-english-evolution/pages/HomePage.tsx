
import React, { useState, useEffect } from 'react';
import { Article, Page } from '../types';
import { getArticles } from '../services/sanityService';
import Carousel from '../components/Carousel';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';

interface HomePageProps {
  navigateTo: (page: Page, slug: string | null) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const fetchedArticles = await getArticles();
      setArticles(fetchedArticles);
      setLoading(false);
    };
    fetchArticles();
  }, []);
  
  const featuredArticles = articles.slice(0, 3);
  const recentArticles = articles.slice(0, 6);

  if (loading) {
    return <div className="text-center py-20">Loading content...</div>;
  }

  return (
    <div>
      <section className="mb-12">
        <Carousel articles={featuredArticles} navigateTo={navigateTo} />
      </section>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 lg:pr-8">
            <h2 className="text-3xl font-bold font-lato text-dark-gray border-b-2 border-seafoam-green pb-2 mb-8">
                新着記事
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentArticles.map(article => (
                <ArticleCard key={article.slug} article={article} navigateTo={navigateTo} />
            ))}
            </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <Sidebar navigateTo={navigateTo}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
