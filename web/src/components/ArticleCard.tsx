import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link href={`/blog/${article.slug}`} className="block bg-base-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up">
      <div className="relative w-full h-48">
        <Image src={article.mainImage} alt={article.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2 flex-wrap">
            {(article.categories || []).slice(0, 2).map(cat => (
                <span key={cat.id} className="text-xs font-semibold text-seafoam-green bg-seafoam-green/10 rounded-full px-3 py-1 mr-2 mb-2">
                    {cat.title}
                </span>
            ))}
        </div>
        <h3 className="text-xl font-bold font-lato text-dark-gray mb-2 leading-tight">{article.title}</h3>
        <p className="text-dark-gray/80 text-sm leading-[1.7] mb-4">{article.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Image className="w-8 h-8 rounded-full mr-3" src={article.author.imageUrl} alt={article.author.name} width={32} height={32} />
          <span>{article.author.name}</span>
          <span className="mx-2">&middot;</span>
          <span>{format(new Date(article.publishedAt), 'yyyy年MM月dd日', { locale: ja })}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
