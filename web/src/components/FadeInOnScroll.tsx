"use client";

import { useState, useEffect, useRef, ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
