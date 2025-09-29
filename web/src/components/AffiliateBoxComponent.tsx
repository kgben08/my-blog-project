import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface AffiliateBoxProps {
  value: {
    affiliateLink: {
      displayTitle: string;
      description: string;
      imageAsset: SanityImageSource; // Sanity image asset
      trackingUrl: string;
      buttonText: string;
      rel: string;
    };
    layout: 'card' | 'banner';
  };
}

const AffiliateBoxComponent: React.FC<AffiliateBoxProps> = ({ value }) => {
  const { affiliateLink, layout } = value;

  if (!affiliateLink?.trackingUrl) return null;

  const imageUrl = affiliateLink.imageAsset ? urlForImage(affiliateLink.imageAsset).width(400).url() : '';

  if (layout === 'banner') {
    return (
        <div className="my-8 rounded-lg border border-gray-200 bg-white shadow-lg">
            <a href={affiliateLink.trackingUrl} target="_blank" rel={affiliateLink.rel || 'noopener noreferrer'} className="block p-4 transition-opacity hover:opacity-80">
                {imageUrl && (
                    <Image src={imageUrl} alt={affiliateLink.displayTitle} width={800} height={150} className="w-full h-auto object-cover rounded-t-lg" />
                )}
            </a>
        </div>
    );
  }

  // Default to 'card' layout
  return (
    <div className="my-8 flex flex-col md:flex-row items-center rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
      {imageUrl && (
        <div className="md:w-1/3 flex-shrink-0">
          <Image src={imageUrl} alt={affiliateLink.displayTitle} width={250} height={250} className="w-full h-auto object-cover" />
        </div>
      )}
      <div className="flex-grow p-6">
        <h4 className="mb-2 text-xl font-bold font-lato text-dark-gray">{affiliateLink.displayTitle}</h4>
        <p className="mb-4 text-dark-gray/80 text-sm leading-relaxed">{affiliateLink.description}</p>
        <a
          href={affiliateLink.trackingUrl}
          target="_blank"
          rel={affiliateLink.rel || 'noopener noreferrer'}
          className="inline-block rounded-md bg-seafoam-green px-8 py-2.5 font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-seafoam-green-dark"
        >
          {affiliateLink.buttonText || 'Check it out'}
        </a>
      </div>
    </div>
  );
};

export default AffiliateBoxComponent;
