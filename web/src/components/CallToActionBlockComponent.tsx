import React from 'react';

interface CallToActionBlockProps {
  value: {
    title: string;
    text: string;
    linkText: string;
    linkUrl: string;
  };
}

const CallToActionBlockComponent: React.FC<CallToActionBlockProps> = ({ value }) => {
  if (!value?.linkUrl) return null;

  return (
    <div className="my-8 rounded-lg border border-seafoam-green-dark bg-seafoam-green/10 p-6 text-center shadow-md">
      <h3 className="mb-2 text-2xl font-bold font-lato text-dark-gray">{value.title}</h3>
      <p className="mb-4 text-dark-gray/80">{value.text}</p>
      <a
        href={value.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-md bg-seafoam-green px-6 py-2 font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-seafoam-green-dark"
      >
        {value.linkText}
      </a>
    </div>
  );
};

export default CallToActionBlockComponent;
