import { useEffect, useRef, useState } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Loader from '@/components/Loader';
import MusicPlayer from '@/components/MusicPlayer';
// import BubbleBackground from '@/components/BubbleBackground';

import '@/styles/tailwind.css';
import 'focus-visible';

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);
  let previousPathname = usePrevious(router.pathname);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 7000); // Matches the Loader's duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader />
      {!isLoading && (
        <>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative">
            {/* <BubbleBackground /> */}
            <Header />
            <main>
              <Component previousPathname={previousPathname} {...pageProps} />
            </main>
            <Footer />
          </div>
          <MusicPlayer />
        </>
      )}
    </>
  );
}
