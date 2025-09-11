'use client';

import { useEffect, useState } from 'react';

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    setWidth(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-1 bg-gray-200">
      <div
        className="h-1 bg-seafoam-green transition-all duration-75 ease-out"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ReadingProgressBar;
