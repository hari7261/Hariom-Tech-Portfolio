import React from 'react';
import Image from 'next/future/image';
import Head from 'next/head';
// import Link from 'next/link';
// import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
// import { GitHubIcon, InstagramIcon, LinkedInIcon } from '@/components/SocialIcons';
import { SimpleLayout } from '@/components/SimpleLayout';
import portraitImage from '@/images/portrait.jpg';
import ContactForm from '@/components/ContactForm';
import GitHubStatsCard from '@/components/GitHubStatsComponent';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Hariom Kumar</title>
        <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/138400713?v=4" />
        <meta
          name="description"
          content="I'm Hariom Kumar, a Software Developer in India."
        />
        <style>{`
        .github-stats-card {
    width: 100%;
    max-width: 400px;
    padding: 16px;
    margin: 0 auto; /* Centers the card */
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s ease;
  }

  .github-stats-card:hover {
    transform: translateY(-4px); /* Subtle hover effect */
  }

  /* Medium devices (tablets, 640px and up) */
  @media (min-width: 640px) {
    .github-stats-card {
      padding: 24px;
      max-width: 500px;
    }
  }

  /* Large devices (desktops, 1024px and up) */
  @media (min-width: 1024px) {
    .github-stats-card {
      padding: 32px;
      max-width: 600px;
    }
  }
        `}</style>
      </Head>
      <SimpleLayout />
      <Container className="mt-16 sm:mt-32 relative">
        <motion.div
          className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:pl-20">
            <motion.div
              className="max-w-xs px-2.5 lg:max-w-none relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 blur-xl opacity-30 animate-pulse" />
              <Image
                src={portraitImage}
                alt="Portrait of Hariom Kumar"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="relative aspect-square rounded-2xl bg-gray-900 object-cover 
                border border-gray-700 shadow-lg transition-transform transform hover:scale-105"
              />
            </motion.div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">Hey there!</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500"> I&apos;m</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"> Hariom</span> 😉
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">. Aspiring Software Developer</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500"> Enthusiast</span>.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-base text-gray-400"
            >
              <div className="relative p-6 rounded-xl bg-gray-800 backdrop-blur-sm border border-gray-700 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl" />
                <p className="relative">
                  I&apos;m a <span className="text-blue-400">Skilled Software Development and Frontend Development professional</span> with
                  <span className="text-blue-400"> 1+ years of experience in my college itself through freelance projects.</span>
                  Building dynamic and responsive websites. Proven ability to develop parallel processing applications and integrating DevOps practices
                  to streamline workflows. Adept at task prioritization using a proactive approach to overcome data-related challenges. An entrepreneur
                  who has launched <span className="text-purple-400">SaaS products</span> and built <span className="text-emerald-400">over 20+ open-source projects.</span>
                  A quick learner able to easily pick up new skills and thrive in challenging solutions. Holds a Bachelor of Engineering in
                  Computer Science and Engineering.
                  <span className='text-purple-500'>Fluent in English and Hindi - Beginner in French.</span>
                </p>
              </div>

              <div className="relative p-6 rounded-xl bg-gray-800 backdrop-blur-sm border border-gray-700 transition-transform ">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl" />
                <h3 className="text-lg font-semibold text-white mb-2">Areas of Expertise</h3>
                <p className="relative">
                  Software Engineering, Full Stack Development, Frontend Development, Web Development, DevOps, and SaaS Development
                </p>
              </div>

              <div className="relative p-6 rounded-xl bg-gray-800 backdrop-blur-sm border border-gray-700 transition-transform ">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-xl" />
                <h3 className="text-lg font-semibold text-white mb-2">Industry Experience</h3>
                <p className="relative">
                  Software Developer (Python), virtual, Cognifyz Technologies
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pl-20"
          >
          </motion.div>
        </motion.div>

        </Container>
            {/* GitHub Stats Card */}
            <Container className="mt-8 sm:mt-12 px-4 sm:px-6 lg:px-8">
        <GitHubStatsCard />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-32"
        >
          <ContactForm />
        </motion.div>

      </Container>
    </>
  );
}
