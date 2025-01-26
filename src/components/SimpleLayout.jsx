import { Container } from '@/components/Container';
import React, { useEffect, useRef } from 'react';

export function SimpleLayout({ title, intro, children }) {
  // Optional: Add a fade-in animation on mount
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = 0;
      headerRef.current.style.transform = 'translateY(20px)';
      const fadeIn = setTimeout(() => {
        headerRef.current.style.opacity = 1;
        headerRef.current.style.transform = 'translateY(0)';
        headerRef.current.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      }, 100);
      return () => clearTimeout(fadeIn);
    }
  }, []);

  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl" ref={headerRef}>
        {/* Title with responsive font size */}
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {/* Intro text with responsive font size and spacing */}
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:mt-6 sm:text-lg">
          {intro}
        </p>
      </header>

      {/* Children with dynamic spacing */}
      <div className="mt-12 sm:mt-16 lg:mt-20">{children}</div>
    </Container>
  );
}