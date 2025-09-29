"use client";

import React from 'react';

interface CustomHtmlEmbedProps {
  value: {
    htmlCode: string;
  };
}

const CustomHtmlEmbedComponent: React.FC<CustomHtmlEmbedProps> = ({ value }) => {
  const { htmlCode } = value;

  if (!htmlCode) return null;

  return (
    <div 
      className="my-8 custom-html-embed"
      dangerouslySetInnerHTML={{ __html: htmlCode }}
    />
  );
};

export default CustomHtmlEmbedComponent;
