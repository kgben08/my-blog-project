
import React from 'react';
import { Article, Page } from '../types';

interface ArticleCardProps {
  article: Article;
  navigateTo: (page: Page, slug: string | null) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, navigateTo }) => {
  return (
    <div 
      className="bg-base-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer animate-fade-in-up"
      onClick={() => navigateTo('article', article.slug)}
    >
      <img className="w-full h-48 object-cover" src={article.mainImage} alt={article.title} />
      <div className="p-6">
        <div className="flex items-center mb-2">
            {article.categories.slice(0, 2).map(cat => (
                <span key={cat.id} className="text-xs font-semibold text-seafoam-green bg-seafoam-green/10 rounded-full px-3 py-1 mr-2">
                    {cat.title}
                </span>
            ))}
        </div>
        <h3 className="text-xl font-bold font-lato text-dark-gray mb-2 leading-tight">{article.title}</h3>
        <p className="text-dark-gray/80 text-sm leading-[1.7] mb-4">{article.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <img className="w-8 h-8 rounded-full mr-3" src={article.author.imageUrl} alt={article.author.name} />
          <span>{article.author.name}</span>
          <span className="mx-2">&middot;</span>
          <span>{new Date(article.publishedAt).toLocaleDateString('ja-JP')}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
