import { client } from '@/lib/sanity';
import { Article, Author, Category } from '@/types';

// GROQ query to fetch all articles
const articlesQuery = `
  *[_type == "post"]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    body,
    "author": author->{name, "imageUrl": image.asset->url},
    "categories": categories[]->{_id, title}
  } | order(publishedAt desc)
`;

// GROQ query to fetch a single article by slug
const articleBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    body,
    "author": author->{name, "imageUrl": image.asset->url},
    "categories": categories[]->{_id, title}
  }
`;

// GROQ query to fetch all categories
const categoriesQuery = `
  *[_type == "category"]{
    _id,
    title
  } | order(title asc)
`;

// GROQ query to fetch the author
const authorQuery = `
  *[_type == "author"][0]{
    name,
    "imageUrl": image.asset->url
  }
`;

export const getArticles = async (): Promise<Article[]> => {
  const articles = await client.fetch(articlesQuery, {}, { cache: 'no-store' });
  return articles.map((article: any) => ({
    ...article,
    mainImage: article.mainImage?.asset?.url,
    author: {
      name: article.author?.name,
      imageUrl: article.author?.imageUrl,
    },
  }));
};

export const getArticleBySlug = async (slug: string): Promise<Article | undefined> => {
  const article = await client.fetch(articleBySlugQuery, { slug }, { cache: 'no-store' });
  if (!article) return undefined;
  return {
    ...article,
    mainImage: article.mainImage?.asset?.url,
    author: {
      name: article.author?.name,
      imageUrl: article.author?.imageUrl,
    },
  };
};

export const getCategories = async (): Promise<Category[]> => {
  return client.fetch(categoriesQuery, {}, { cache: 'no-store' });
};

export const getAuthor = async (): Promise<Author> => {
  return client.fetch(authorQuery, {}, { cache: 'no-store' });
};
