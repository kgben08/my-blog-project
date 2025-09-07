
import React, { useState, useEffect, useCallback } from 'react';
import { Article, Page } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface CarouselProps {
  articles: Article[];
  navigateTo: (page: Page, slug: string | null) => void;
}

const Carousel: React.FC<CarouselProps> = ({ articles, navigateTo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  }, [articles.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };
  
  useEffect(() => {
    if (articles.length > 1) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [articles.length, nextSlide]);

  if (articles.length === 0) {
    return <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">Loading...</div>;
  }

  const activeArticle = articles[currentIndex];

  return (
    <div className="relative w-full h-96 md:h-[450px] overflow-hidden rounded-lg shadow-2xl animate-fade-in-up">
      {articles.map((article, index) => (
        <div
          key={article.slug}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={article.mainImage} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white">
        <h2 className="text-2xl md:text-4xl font-bold font-lato mb-2">{activeArticle.title}</h2>
        <p className="hidden md:block md:text-lg mb-4 max-w-2xl">{activeArticle.excerpt}</p>
        <button
          onClick={() => navigateTo('article', activeArticle.slug)}
          className="bg-seafoam-green text-white font-bold font-lato px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 self-start"
        >
          記事を読む
        </button>
      </div>
       {articles.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-colors"
          >
            <ChevronLeftIcon className="h-6 w-6 text-dark-gray" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-colors"
          >
            <ChevronRightIcon className="h-6 w-6 text-dark-gray" />
          </button>
        </>
       )}
    </div>
  );
};

export default Carousel;
