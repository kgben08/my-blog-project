import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// 星評価を表示するコンポーネント
const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
  ));
  return <div className="flex">{stars}</div>;
};

interface ProductEmbedProps {
  value: {
    name: string;
    image: SanityImageSource;
    affiliateLink: string;
    rating: number;
    summary: string;
    merits: string[];
    demerits: string[];
  };
}

const ProductEmbedComponent: React.FC<ProductEmbedProps> = ({ value }) => {
  if (!value) return null;

  const imageUrl = value.image ? urlForImage(value.image).width(500).url() : '';

  return (
    <div className="my-8 border rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
      <div className="md:flex">
        <div className="md:w-1/3 md:flex-shrink-0">
          {imageUrl && (
            <a href={value.affiliateLink} target="_blank" rel="noopener noreferrer">
              <Image src={imageUrl} alt={value.name} width={300} height={300} className="w-full h-auto object-cover" />
            </a>
          )}
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-2xl font-bold font-lato text-dark-gray dark:text-gray-100">{value.name}</h3>
          {value.rating && <StarRating rating={value.rating} />}
          <p className="mt-2 text-gray-600 dark:text-gray-300">{value.summary}</p>
        </div>
      </div>
      <div className="px-6 pb-6">
        {value.merits && value.merits.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-lg text-green-600 dark:text-green-400">メリット</h4>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-200">
              {value.merits.map((merit, index) => <li key={index}>{merit}</li>)}
            </ul>
          </div>
        )}
        {value.demerits && value.demerits.length > 0 && (
          <div>
            <h4 className="font-semibold text-lg text-red-600 dark:text-red-400">デメリット</h4>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-200">
              {value.demerits.map((demerit, index) => <li key={index}>{demerit}</li>)}
            </ul>
          </div>
        )}
        <div className="text-center mt-6">
            <a href={value.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-seafoam-green px-8 py-3 font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105 hover:bg-seafoam-green-dark">
                公式サイトで見る
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProductEmbedComponent;
