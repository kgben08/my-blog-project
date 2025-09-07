export interface Author {
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  title: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  mainImage: string;
  author: Author;
  categories: Category[];
  publishedAt: string;
  body: string[]; // Array of paragraphs for the article body
}

export type Page = 'home' | 'blog' | 'article' | 'about' | 'privacy';
