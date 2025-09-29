"use client";

import React, { useEffect, useRef } from 'react';

interface AdEmbedProps {
  value: {
    adCode: string;
  };
}

const AdEmbedComponent: React.FC<AdEmbedProps> = ({ value }) => {
  const { adCode } = value;
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adRef.current && adCode) {
      // Clear previous ad
      adRef.current.innerHTML = '';

      const script = document.createElement('script');
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_CLIENT_ID"; // Replace with your client ID
      script.crossOrigin = "anonymous";

      const adContainer = document.createElement('div');
      adContainer.innerHTML = adCode;

      adRef.current.appendChild(adContainer);

      // If the ad code itself contains a script, we might need to re-evaluate it.
      const innerScript = adContainer.querySelector('script');
      if (innerScript) {
        const newScript = document.createElement('script');
        newScript.innerHTML = innerScript.innerHTML;
        document.body.appendChild(newScript);
      }
    }
  }, [adCode]);

  return <div ref={adRef} className="my-8 w-full flex justify-center"></div>;
};

export default AdEmbedComponent;
