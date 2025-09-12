export interface Author {
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  title: string;
}

// Basic type for Sanity's Portable Text
export interface PortableTextBlock {
  _key: string;
  _type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allow for other properties like children, marks, etc.
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  mainImage: string;
  author: Author;
  categories: Category[];
  publishedAt: string;
  body: PortableTextBlock[]; // Use the defined type for the article body
}

export type Page = 'home' | 'blog' | 'article' | 'about' | 'privacy';
