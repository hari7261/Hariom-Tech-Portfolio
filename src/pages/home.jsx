import Image from 'next/future/image'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {SimpleLayout}  from '@/components/SimpleLayout'
import {
  XIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  BlogIcon,
  ChatbotIcon,
  OwlIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/hariom (1).jpg'
import image2 from '@/images/photos/hariom.jpg'
import image4 from '@/images/photos/hariom (4).jpg'
import Cognifyz from '@/images/logos/cognifyz_techonologies_logo.jpeg'
import Projectsdev from '@/images/logos/batmandevloper.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

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
  )
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
  )
}

function Article({ article }) {
  return (
    <Card as="article" className="glassmorphism w-full">
      <Card.Title href={`/articles/${article.slug}`} className="text-gradient text-base sm:text-lg md:text-xl lg:text-2xl">
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate className="text-blue-400 text-sm sm:text-base">
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description className="mt-2 text-sm sm:text-base">{article.description}</Card.Description>
      <Card.Cta className="neon-text text-sm sm:text-base">Read My Article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="social-icon-container" {...props}>
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 social-icon" />
    </Link>
  )
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
  ]

  return (
    <div className="glassmorphism-card">
      <h2 className="flex text-sm sm:text-base font-semibold text-gradient">
        <BriefcaseIcon className="h-5 w-5 sm:h-6 sm:w-6 flex-none animate-pulse" />
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-4 sm:mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="resume-item">
            <div className="logo-container">
              <Image
                src={role.logo}
                alt=""
                className="h-6 w-6 sm:h-7 sm:w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm sm:text-base font-medium text-gradient">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs sm:text-sm text-blue-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs sm:text-sm text-zinc-400 dark:text-zinc-500">
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="https://drive.google.com/file/d/1NvCkZ0ruM_yIEi213kJ81JeIgPAltqXB/view?usp=sharing"
        variant="secondary"
        className="neon-button mt-4 sm:mt-6 w-full sm:w-auto"
      >
        Download CV
        <ArrowDownIcon className="h-3 w-3 sm:h-4 sm:w-4 animate-bounce ml-2" />
      </Button>
    </div>
  )
}

function Photos() {
  const images = [image1, image2, image4];

  return (
    <div className="mt-8 sm:mt-12 md:mt-16">
      <div className="-my-4 flex justify-center gap-3 sm:gap-4 md:gap-5 overflow-hidden py-4">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className="photo-frame relative w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px]"
            style={{
              animationDelay: `${imageIndex * 200}ms`
            }}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}


export default function Home({ articles }) {
  const [isDarkMode] = useState(false)
  return (
    <>
      <Head>
        <title>Hariom Kumar | Portfolio😉</title>
        <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/138400713?v=4" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Responsive css for the modern looking  portfolio */}
        <style>{`
          .glassmorphism {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .glassmorphism-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
          }

          .text-gradient {
            background: linear-gradient(
              to right,
              #00dbde,
              #fc00ff
            );
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradient 8s linear infinite;
            background-size: 200% auto;
          }

          .neon-text {
            color: #fff;
            text-shadow: 0 0 10px #00fff2,
                         0 0 20px #00fff2,
                         0 0 40px #00fff2;
          }

          .neon-button {
            position: relative;
            overflow: hidden;
            background: rgba(0, 255, 242, 0.1);
            border: 1px solid #00fff2;
            box-shadow: 0 0 5px #00fff2,
                       0 0 20px rgba(0, 255, 242, 0.3);
            transition: all 0.3s ease;
          }

          .photo-frame {
            position: relative;
            aspect-ratio: 9/10;
            overflow: hidden;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
            animation: float 6s ease-in-out infinite;
          }

          .social-icon-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(8px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          @media (min-width: 640px) {
            .social-icon-container {
              width: 45px;
              height: 45px;
            }
          }

          @media (min-width: 768px) {
            .social-icon-container {
              width: 50px;
              height: 50px;
            }
          }

          .social-icon-container:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 20px rgba(0, 255, 255, 0.5);
          }

          .social-icon {
            fill: #00fff2;
            filter: drop-shadow(0 0 10px #00fff2);
            transition: transform 0.3s;
          }

          .social-icon:hover {
            transform: scale(1.1);
          }

          .logo-container {
            position: relative;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 10px rgba(0, 255, 242, 0.3);
          }

          .resume-item {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @media (max-width: 640px) {
            .glassmorphism,
            .glassmorphism-card {
              padding: 16px;
              border-radius: 12px;
            }

            .photo-frame {
              border-radius: 12px;
            }
          }
        `}</style>
      </Head>
      <SimpleLayout/>
      <Container className="mt-6 sm:mt-9 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl glassmorphism mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Aspiring Software Developer</span>
            <br />
            <span className="text-gradient">and AI Enthusiast.</span>
          </h1>

          <p className="mt-6 text-base">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              I&apos;m
            </span>{" "}
            <span className={`${isDarkMode ? "text-green-300" : "text-green-600"} font-semibold`}>
              Hariom,
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              an
            </span>{" "}
            <span className={`${isDarkMode ? "text-blue-300" : "text-blue-500"} font-semibold`}>
              Aspiring Software Developer.
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              I am on my journey to exploring the world of
            </span>{" "}
            <span className={`${isDarkMode ? "text-purple-300" : "text-purple-500"} font-semibold`}>
              Software
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              and
            </span>{" "}
            <span className={`${isDarkMode ? "text-orange-300" : "text-orange-500"} font-semibold`}>
              AI...!
            </span>
          </p>

          {/* social icons */}
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center sm:justify-start">
            <SocialLink href="https://www.instagram.com/me_hari3" icon={InstagramIcon} />
            <SocialLink href="https://github.com/hari7261" icon={GitHubIcon} />
            <SocialLink href="https://www.linkedin.com/in/hariom-kumar-pandit-2k3" icon={LinkedInIcon} />
            <SocialLink href="https://tech-blogs-gray.vercel.app" icon={BlogIcon} />
            <SocialLink href="https://personal-chatbot-one.vercel.app" icon={ChatbotIcon} />
            <SocialLink href="https://codolio.com/profile/hariompandit5556" icon={OwlIcon} />
            <SocialLink href="https://twitter.com/Hari_Om_Pandit" icon={XIcon} label="Twitter" />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
          <div className="flex flex-col gap-12 sm:gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-8 sm:space-y-10 lg:pl-8 xl:pl-12">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}