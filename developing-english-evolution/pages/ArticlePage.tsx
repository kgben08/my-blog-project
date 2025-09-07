
import React, { useState, useEffect } from 'react';
import { Article, Page } from '../types';
import { getArticleBySlug } from '../services/sanityService';
import Sidebar from '../components/Sidebar';

interface ArticlePageProps {
  slug: string;
  navigateTo: (page: Page, slug: string | null) => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ slug, navigateTo }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedArticle = await getArticleBySlug(slug);
        if (fetchedArticle) {
          setArticle(fetchedArticle);
        } else {
          setError('Article not found.');
        }
      } catch (err) {
        setError('Failed to load the article.');
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading article...</div>;
  }

  if (error || !article) {
    return <div className="text-center py-20 text-red-500">{error || 'Could not load article.'}</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row animate-fade-in-up">
      <article className="lg:w-3/4 lg:pr-8">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {article.categories.map(cat => (
              <span key={cat.id} className="text-sm font-semibold text-seafoam-green bg-seafoam-green/10 rounded-full px-3 py-1">
                {cat.title}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-lato text-dark-gray leading-tight mb-4">{article.title}</h1>
          <div className="flex items-center text-sm text-gray-500">
            <img className="w-10 h-10 rounded-full mr-4" src={article.author.imageUrl} alt={article.author.name} />
            <div>
              <span>By {article.author.name}</span>
              <span className="block">{new Date(article.publishedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </header>
        <img src={article.mainImage} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
        <div className="prose prose-lg max-w-none text-dark-gray/90 leading-[1.8] font-noto-sans-jp">
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      <div className="mt-12 lg:mt-0">
        <Sidebar navigateTo={navigateTo} />
      </div>
    </div>
  );
};

export default ArticlePage;
