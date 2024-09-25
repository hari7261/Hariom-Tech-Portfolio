import { Head, Html, Main, NextScript } from 'next/document';

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  updateMode();
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions);
  window.addEventListener('storage', updateModeWithoutTransitions);

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches;
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily();
    updateMode();
  }
`;

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="https://avatars.githubusercontent.com/u/138400713?v=4" />
        <meta name="description" content="I'm Hariom, a full stack developer/software engineer exploring the world of software and AI." />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hariom-react-next.vercel.app/home" />
        <meta property="og:title" content="Hariom Kumar - Full Stack Developer/Software Engineer" />
        <meta property="og:description" content="I'm Hariom, a full stack developer/software engineer exploring the world of software and AI." />
        <meta property="og:image" content="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-19%20at%202.36.33%E2%80%AFAM.png" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://hariom-react-next.vercel.app/home" />
        <meta name="twitter:title" content="Hariom Kumar - Full Stack Developer/Software Engineer" />
        <meta name="twitter:description" content="I'm Hariom, a full stack developer/software engineer exploring the world of software and AI." />
        <meta name="twitter:image" content="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-19%20at%202.36.33%E2%80%AFAM.png" />

        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link rel="alternate" type="application/rss+xml" href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`} />
        <link rel="alternate" type="application/feed+json" href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`} />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
