
import React, { useState, useEffect } from 'react';
import { Category, Article, Page } from '../types';
import { getCategories, getArticles } from '../services/sanityService';

interface SidebarProps {
  navigateTo: (page: Page, slug: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navigateTo }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [popularArticles, setPopularArticles] = useState<Article[]>([]);

  useEffect(() => {
    getCategories().then(setCategories);
    getArticles().then(articles => setPopularArticles(articles.slice(0, 3)));
  }, []);

  return (
    <aside className="w-full lg:w-1/4 lg:pl-8 space-y-8 animate-fade-in-up">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold font-lato text-dark-gray border-b-2 border-soft-coral pb-2 mb-4">人気記事</h3>
        <ul className="space-y-4">
          {popularArticles.map(article => (
            <li key={article.slug}>
              <button 
                onClick={() => navigateTo('article', article.slug)}
                className="flex items-start space-x-3 group"
              >
                <img src={article.mainImage} alt={article.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                <span className="text-left font-semibold text-dark-gray/90 group-hover:text-seafoam-green transition-colors duration-300">
                  {article.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold font-lato text-dark-gray border-b-2 border-soft-coral pb-2 mb-4">カテゴリー</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category.id}>
              <button className="text-dark-gray/80 hover:text-seafoam-green transition-colors duration-300">
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
        Ad Banner
      </div>
    </aside>
  );
};

export default Sidebar;
