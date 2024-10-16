import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
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
// import image3 from '@/images/photos/hariom (3).jpg'
import image4 from '@/images/photos/hariom (4).jpg'
// import image5 from '@/images/photos/hariom (2).jpg'
import Cognifyz from '@/images/logos/cognifyz_techonologies_logo.jpeg'
// import internpe from '@/images/logos/interpe.jpeg'
// import bharatintern from '@/images/logos/bharat_intern_logo.jpeg'
//import logoTXST from '@/images/logos/txstStar.png'
import Projectsdev from '@/images/logos/batmandevloper.png'
// import amazonIcon from '@/images/logos/royal.png'

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
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read My Article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
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
      logo: Cognifyz, // You may want to add a logo if available
      start: 'Dec 2023',
      end: 'Jan 2024',
    },
    // {
    //   company: 'Bharat Intern',
    //   title: 'Project Intern',
    //   logo: bharatintern,
    //   start: 'Dec 2023',
    //   end: 'Jan 2024',
    // },
    // {
    //   company: 'InternPe',
    //   title: 'Student Intern',
    //   logo: internpe,
    //   start: 'Oct 2023',
    //   end: 'Nov 2023',
    // },
    // {
    //   company: 'College Projects',
    //   title: 'Project Developer',
    //   logo: Projectsdev,
    //   start: '2023',
    //   end: 'Present',
    // },
  ];

  // Rest of your component code here

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
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
      <Button href="https://drive.google.com/file/d/1NvCkZ0ruM_yIEi213kJ81JeIgPAltqXB/view?usp=sharing" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['-rotate-1', 'rotate-1', '-rotate-1'];

  const images = [image1, image2, image4]; 

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src} 
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length], // Adds rotation based on index
              'border-4 border-blue-500', // Blue border
              'shadow-[0_0_15px_rgba(0,0,255,0.75)]' // Neon blue glow
            )}
          >
            <Image
              src={image}
              alt="" 
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover" // Ensures image covers the whole div
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
        <title>Hariom Kumar | Portfolio😉</title>
        <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/138400713?v=4" />

        <meta
          name="title"
          content="Hariom kumar - Full Stack Developer/Software Engineer "
        />
        <meta
          name="description"
          content="I'm Hariom, full stack developer/software engineer. I am on my journey to exploring the world of Softwares and AI."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hariom-portfolio-amber.vercel.app/home" />
        <meta
          property="og:title"
          content="Hariom Kumar - Full Stack Developer/Software Engineer "
        />
        <meta
          property="og:description"
          content="I'm Hariom, full stack developer/software engineer. I am on my journey to exploring the world of Softwares and AI."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/138400713?v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hariom-portfolio-amber.vercel.app/home" />
        <meta
          property="twitter:title"
          content="Hariom Kumar - Full Stack Developer/Software Engineer "
        />
        <meta
          property="twitter:description"
          content="I'm Hariom, full stack developer/software engineer.  I am on my journey to exploring the world of Softwares and AI."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/138400713?v=4"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
  <span className="bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-text">Aspiring</span>
  <span className="bg-gradient-to-r from-green-300 via-lime-400 to-teal-500 bg-clip-text text-transparent animate-gradient-text"> Software Developer</span>
  <span className="bg-gradient-to-r from-pink-400 via-red-500 to-orange-600 bg-clip-text text-transparent animate-gradient-text"> and</span>
  <span className="bg-gradient-to-r from-purple-300 via-blue-400 to-pink-500 bg-clip-text text-transparent animate-gradient-text"> AI Enthusiast.</span>
</h1>

<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
  I&apos;m <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-text">Hariom</span>, an Aspiring <span className="bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 bg-clip-text text-transparent animate-gradient-text">Software Developer</span>. I am on my journey to exploring the world of <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-text">Softwares</span> and <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-text">AI</span>.
</p>


          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/hari7261"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/hariom-kumar-pandit-2k3/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://www.instagram.com/me_hari3/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            {/* Add your blog link here */}
            <SocialLink
              href="https://tech-blogs-gray.vercel.app/" // Replace with your blog URL
              aria-label="Visit my blog"
              icon={BlogIcon} // Replace with your blog icon
            />

            <SocialLink
              href="https://personal-chatbot-one.vercel.app/" // Replace with your chatbot URL
              aria-label="Chat with AI"
              icon={ChatbotIcon} // Use your chatbot icon here
            />
            <SocialLink
              href="https://twitter.com/Hari_Om_Pandit"
              aria-label="Follow on Twitter"
              icon={XIcon}
            />


            <SocialLink
              href="https://codolio.com/profile/hariompandit5556"
              aria-label="Check it my codefolio"
              icon={OwlIcon}
            />

          </div>

        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter/> */}
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
