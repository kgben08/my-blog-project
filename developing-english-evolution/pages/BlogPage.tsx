
import React, { useState, useEffect } from 'react';
import { Article, Page } from '../types';
import { getArticles } from '../services/sanityService';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';

interface BlogPageProps {
  navigateTo: (page: Page, slug: string | null) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ navigateTo }) => {
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

  if (loading) {
    return <div className="text-center py-20">Loading articles...</div>;
  }

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-lato text-dark-gray">Blog</h1>
        <p className="text-dark-gray/70 mt-2">親子で学ぶ、英語の世界へようこそ。</p>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 lg:pr-8">
          <div className="mb-8 flex flex-wrap gap-2">
             <button className="bg-seafoam-green text-white px-4 py-2 rounded-full text-sm">All</button>
             <button className="bg-gray-200 text-dark-gray px-4 py-2 rounded-full text-sm hover:bg-soft-coral transition-colors">親子英語のヒント</button>
             <button className="bg-gray-200 text-dark-gray px-4 py-2 rounded-full text-sm hover:bg-soft-coral transition-colors">おすすめ絵本</button>
             <button className="bg-gray-200 text-dark-gray px-4 py-2 rounded-full text-sm hover:bg-soft-coral transition-colors">日常フレーズ</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map(article => (
              <ArticleCard key={article.slug} article={article} navigateTo={navigateTo} />
            ))}
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <Sidebar navigateTo={navigateTo} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
