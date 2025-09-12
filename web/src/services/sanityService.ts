import { client } from '@/lib/sanity';
import { Article, Author, Category } from '@/types';

// GROQ query to fetch all articles with plain text excerpt and mapped category IDs
const articlesQuery = `
  *[_type == "post"]{
    _id,
    title,
    "slug": slug.current,
    "excerpt": pt::text(excerpt),
    mainImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    body,
    "author": author->{name, "imageUrl": image.asset->url},
    "categories": categories[]->{"id": _id, title}
  } | order(publishedAt desc)
`;

// GROQ query to fetch a single article by slug with plain text excerpt and mapped category IDs
const articleBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "excerpt": pt::text(excerpt),
    mainImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    body,
    "author": author->{name, "imageUrl": image.asset->url},
    "categories": categories[]->{"id": _id, title}
  }
`;

// GROQ query to fetch all categories with mapped IDs
const categoriesQuery = `
  *[_type == "category"]{
    "id": _id,
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
  // The query now returns the data in the shape that the Article type expects for the most part.
  // We just need to flatten the mainImage and author objects.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // The query now returns the data in the shape that the Article type expects for the most part.
  // We just need to flatten the mainImage and author objects.
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
  // The query now returns the data in the shape that the Category type expects.
  return client.fetch(categoriesQuery, {}, { cache: 'no-store' });
};

export const getAuthor = async (): Promise<Author> => {
  return client.fetch(authorQuery, {}, { cache: 'no-store' });
};