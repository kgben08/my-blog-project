import Image from 'next/image'
import {urlForImage} from '@/lib/sanity' // Sanityの画像URLを生成するヘルパー

export const AffiliateProductComponent = ({value}: any) => {
  const {productName, productImage, description, affiliateUrl, buttonText} = value

  return (
    <div className="my-8 flex flex-col rounded-lg border md:flex-row">
      <div className="relative h-48 w-full md:h-auto md:w-1/3">
        <Image
          src={urlForImage(productImage).width(400).height(400).url()}
          alt={productName}
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-xl font-bold">{productName}</h3>
        <p className="mt-2 flex-grow text-gray-600">{description}</p>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 self-end rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}
