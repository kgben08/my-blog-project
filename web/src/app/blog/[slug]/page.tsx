import { getArticleBySlug } from '@/services/sanityService';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

// This is a dummy comment to trigger a new commit.
const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return <div className="text-center py-20 text-red-500">Article not found.</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row animate-fade-in-up">
      <article className="lg:w-1/2 lg:pr-8">
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
            <Image className="w-10 h-10 rounded-full mr-4" src={article.author.imageUrl} alt={article.author.name} width={40} height={40} />
            <div>
              <span>By {article.author.name}</span>
              <span className="block">{format(new Date(article.publishedAt), 'yyyy年MM月dd日', { locale: ja })}</span>
            </div>
          </div>
        </header>
        <div className="relative w-full h-auto max-h-[500px] mb-8">
          <Image src={article.mainImage} alt={article.title} layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
        </div>
        <div className="prose prose-lg max-w-none text-dark-gray/90 leading-[1.8] font-noto-sans-jp">
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      <div className="mt-12 lg:mt-0 lg:w-1/3">
        <Sidebar />
      </div>
    </div>
  );
};

export default ArticlePage;
