import Image from 'next/future/image';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { SimpleLayout } from '@/components/SimpleLayout';
import {
  XIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  BlogIcon,
  ChatbotIcon,
  OwlIcon,
} from '@/components/SocialIcons';
import image1 from '@/images/photos/hariom (1).webp';
import image2 from '@/images/photos/hariom.webp';
import image4 from '@/images/photos/B612_20220904_084510_654.webp';
import Cognifyz from '@/images/logos/cognifyz_techonologies_logo.jpeg';
import Projectsdev from '@/images/logos/batmandevloper.png';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Article({ article }) {
  return (
    <Card as="article" className="hover:shadow-lg transition-shadow duration-200">
      <Card.Title href={`/articles/${article.slug}`} className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100">
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} className="text-lg text-zinc-600 dark:text-zinc-400">
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description className="mt-4 text-xl text-zinc-700 dark:text-zinc-300">
        {article.description}
      </Card.Description>
      <Card.Cta className="mt-6 text-xl font-medium text-blue-600 dark:text-blue-400">
        Read Article
      </Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-2 sm:p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors" {...props}>
      <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200" />
    </Link>
  );
}

function Resume() {
  let resume = [
    {
      company: 'College Projects',
      title: 'Project Developer',
      logo: Projectsdev,
      start: '2023',
      end: 'Present',
    },
    {
      company: 'Cognifyz Technologies',
      title: 'Software Developer (Python)',
      logo: Cognifyz,
      start: 'Dec 2023',
      end: 'Jan 2024',
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-lg">
      <h2 className="flex items-center text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 flex-none" />
        <span className="ml-2 sm:ml-3">Work Experience</span>
      </h2>
      <ol className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex items-start gap-3 sm:gap-4 md:gap-6">
            <div className="flex-shrink-0">
              <Image src={role.logo} alt="" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full" unoptimized />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-800 dark:text-zinc-100">{role.company}</h3>
              <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300">{role.title}</p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                {role.start} — {role.end}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <Button
        href="https://drive.google.com/file/d/1NvCkZ0ruM_yIEi213kJ81JeIgPAltqXB/view?usp=sharing"
        variant="secondary"
        className="mt-4 sm:mt-6 md:mt-8 w-full text-base sm:text-lg md:text-xl text-zinc-800 dark:text-zinc-100"
      >
        Download CV
        <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 ml-2 text-zinc-600 dark:text-zinc-400" />
      </Button>
    </div>
  );
}

function Photos() {
  const images = [image1, image2, image4];

  return (
    <div className="mt-12 sm:mt-16">
      <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 overflow-hidden">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <Image
              src={image}
              alt=""
              quality={100}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Hariom Kumar | Portfolio</title>
        <meta name="description" content="Innovative Software Developer and AI Enthusiast." />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/138400713?v=4" />
        <style>{`
          .cyberpunk-text {
            background: linear-gradient(
              90deg,
              #00dbde,
              #fc00ff,
              #00dbde,
              #fc00ff
            );
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradient 10s ease infinite;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @media (max-width: 640px) {
            .cyberpunk-text {
              font-size: 2.5rem;
            }
          }
        `}</style>
      </Head>

      <SimpleLayout />
      <Container className="mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="cyberpunk-text">Innovative Software Developer and AI Enthusiast.</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300">
            I&apos;m Hariom, an Innovative Software Developer. I am on my journey to exploring the world of Software and AI...!
          </p>
          <div className="mt-6 flex gap-3 sm:gap-4 md:gap-6">
            <SocialLink href="https://www.instagram.com/me_hari3" icon={InstagramIcon} />
            <SocialLink href="https://github.com/hari7261" icon={GitHubIcon} />
            <SocialLink href="https://www.linkedin.com/in/hariom-kumar-pandit-2k3" icon={LinkedInIcon} />
            <SocialLink href="https://tech-blogs-gray.vercel.app" icon={BlogIcon} />
            <SocialLink href="https://gemini-chatbot-phi-sage.vercel.app/" icon={ChatbotIcon} />
            <SocialLink href="https://codolio.com/profile/hariompandit5556" icon={OwlIcon} />
            <SocialLink href="https://twitter.com/Hari_Om_Pandit" icon={XIcon} />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-6 sm:space-y-8">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}