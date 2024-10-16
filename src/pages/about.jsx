/* eslint-disable react/no-unescaped-entities */
// pages/about.js
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import ContactForm from '@/components/ContactForm'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About-Hariom Kumar😉</title>
        <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/138400713?v=4" />
        <meta
          name="description"
          content="I'm Hariom Kumar, a software Developer in India."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 
             border-4 border-blue-500 shadow-[0_0_15px_rgba(0,0,255,0.75)]" // Add border and glow effect
              />

            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
  I&apos;m <span className="bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-slow">Hariom</span>😉. 
  A <span className="bg-gradient-to-r from-green-400 via-lime-500 to-teal-500 bg-clip-text text-transparent animate-gradient-fast">Software Developer</span> 
  <span className="bg-gradient-to-r from-pink-400 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient-slow"> Enthusiast</span>.
</h1>

            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I'm a Skilled Software Development and Frontend Development professional with <b>1+ years of experience in my college itself through freelance projects.</b> Building dynamic and responsive websites. Proven ability to develop parallel processing applications and integrating DevOps practices to streamline workflows. Adept at task prioritization using a proactive approach to overcome data-related challenges. An entrepreneur who has <b>launched SaaS products</b> and built <b>over 20+ open-source projects.</b> A quick learner able to easily pick up new skills and thrive in challenging solutions. Holds a <b>Bachelor of Engineering</b> in Computer Science and Engineering.
              </p>
              <p>
                <b>Fluent</b> in English and Hindi <b>- Beginner in French.</b>
              </p>
              <p><b>Areas of Expertise:</b></p>
              <p>
                Software Engineering, Full Stack Development, Frontend Development, Web Development, DevOps, and SaaS Development
              </p>
              <p><b>Industry Experience:</b></p>
              <p>Software Developer (Python), virtual, Cognifyz Technologies.</p>
              <p>Feel free to reach out to me.</p>
              <p>Have a great day!</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink> */}
              <SocialLink href="https://www.instagram.com/me_hari3/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/hari7261"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/hariom-kumar-pandit-2k3/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>

              <SocialLink
                href="mailto:hariompandit9999@gmail.com"
                icon={(props) => <MailIcon {...props} color="currentColor" />} // Customize color here
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Mail me
              </SocialLink>


            </ul>
          </div>
        </div>
        {/* Add the ContactForm component here */}
        <div className="mt-16 sm:mt-32">
          {/* <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-center">
            Contact Me
          </h2> */}
          <ContactForm />
        </div>
      </Container>
    </>
  )
}
