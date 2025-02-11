import Image from 'next/future/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { FaCog, FaChartLine, FaSass, FaDocker, FaShoppingCart, FaBrain, FaShieldAlt, FaMobileAlt, FaDatabase, FaNetworkWired, FaCode, FaPaintBrush, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import youphoria from '@/images/logos/github-desktop.svg'
import orb from '@/images/logos/orb.gif'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoHeart from '@/images/logos/gwc.png'
import BubbleBackground from '@/components/BubbleBackground'
import project from '@/images/logos/fypm1.svg'

const projects = [
  {
    name: "MysticUI",
    description:
      "A collection of futuristic, modern UI components and design templates.",
    link: {
      href: "https://mysticui.vercel.app/",
      label: "Live Demo",
    },
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: project,
    type: "live"
  },
  {
    name: "UML Editor",
    description:
      "A simple and intuitive UML diagram editor for developers and architects.",
    link: {
      href: "https://uml-editor-hari.vercel.app/",
      label: "Live Demo",
    },
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: project,
    type: "live"
  },
  {
    name: "OpenSource Learning",
    description:
      "A platform to start your journey into open-source development.",
    link: {
      href: "https://learn-open-source.vercel.app/",
      label: "Live Demo",
    },
    github: "https://github.com/yourusername/opensource-learning",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: project,
    type: "live"
  },
  {
    name: "GitHub Wrapped",
    description:
      "A visual summary of your GitHub activity, inspired by Spotify Wrapped.",
    link: {
      href: "https://github-wrapped-peach.vercel.app/",
      label: "Live Demo",
    },
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: project,
    type: "live"
  },
  {
    name: "Quantum Banking System",
    description:
      "Combines AI technology with modern banking features for financial management.",
    link: {
      href: "https://github.com/hari7261/Quantum-Banking-System",
      label: "GitHub",
    },
    github: "https://github.com/hari7261/Quantum-Banking-System",
    techStack: ["Python", "Django", "AI"],
    logo: project,
    type: "github"
  },
  {
    name: "NLP Translator",
    description:
      "A language translation tool with auto-translate and manual modes.",
    link: {
      href: "https://github.com/hari7261/NLP-Translator",
      label: "GitHub",
    },
    github: "https://github.com/hari7261/NLP-Translator",
    techStack: ["Python", "NLP", "Flask"],
    logo: project,
    type: "github"
  },
  {
    name: "AuraVoice",
    description:
      "A voice assistant with speech recognition and text-to-speech capabilities.",
    link: {
      href: "https://github.com/hari7261/AuraVoice",
      label: "GitHub",
    },
    github: "https://github.com/hari7261/AuraVoice",
    techStack: ["Python", "SpeechRecognition", "Flask"],
    logo: project,
    type: "github"
  },
  {
    name: "Modern Data Visualization App",
    description:
      "A Python-based app for real-time data visualization and analysis.",
    link: {
      href: "https://github.com/hari7261/Data-Visualization-",
      label: "GitHub",
    },
    github: "https://github.com/hari7261/Data-Visualization-",
    techStack: ["Python", "Matplotlib", "Flask"],
    logo: project,
    type: "github"
  },
  {
    name: "Student Management System (SMS)",
    description:
      "A system to manage student and teacher activities in educational institutions.",
    link: {
      href: "https://github.com/hari7261/StdnManage-WithCURD",
      label: "GitHub",
    },
    github: "https://github.com/hari7261/StdnManage-WithCURD",
    techStack: ["Python", "Django", "SQLite"],
    logo: project,
    type: "github"
  },
  {
    name: "Enhanced PDF Viewer & Converter",
    description:
      "A desktop app for viewing, navigating, and converting PDF and Word documents.",
    link: {
      href: "https://github.com/hari7261/PDF-Viewer-Converter",
      label: "GitHub",
    },
    github: "https://github.com/hari7261/PDF-Viewer-Converter",
    techStack: ["Python", "Tkinter", "PyPDF2"],
    logo: project,
    type: "github"
  },
  {
    name: "Typing Speed Test",
    description:
      "An advanced typing speed test with multiple difficulty levels.",
    link: {
      href: "https://typing-assessments.vercel.app/",
      label: "Live Demo",
    },
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: project,
    type: "live"
  },
  {
    name: "YouTube Clone",
    description: "A modern, fully functional YouTube clone.",
    link: {
      href: "https://github.com/hari7261/Youtube-Clone",
      label: "GitHub",
    },
    github: "https://github.com/hari7261/Youtube-Clone",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: project,
    type: "github"
  },
  {
    name: "Netflix Clone",
    description:
      "A Netflix clone with a seamless interface for content browsing.",
    link: {
      href: "https://netflix-cllone.vercel.app/",
      label: "Live Demo",
    },
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: project,
    type: "live"
  },
  {
    name: "VidTalk",
    description: "A peer-to-peer video calling app with instant connections.",
    link: {
      href: "https://vid-talk.vercel.app/",
      label: "Live Demo",
    },
    github: "https://github.com/yourusername/vidtalk",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: project,
    type: "live"
  },
  {
    name: 'GitHub Profile Finder: Discover and Explore GitHub Users',
    description:
      'Built with Next.js and leveraging GitHub API, this tool allows seamless search and detailed display of GitHub profiles. Deployed on Vercel for scalability.',
    link: {
      href: 'https://github-profile-finder.vercel.app',
      label: 'Live Demo',
    },
    github: "https://github.com/yourusername/github-profile-finder",
    techStack: ["Next.js", "TailwindCSS", "JavaScript"],
    logo: youphoria,
    type: "live"
  },
  {
    name: 'MY-PYTHON-PROJECTS',
    description:
      'A diverse collection of Python projects showcasing various algorithms, data structures, and small applications.',
    link: {
      href: 'https://github.com/hari7261/MY-PYTHON-PROJECTS',
      label: 'Github',
    },
    github: "https://github.com/hari7261/MY-PYTHON-PROJECTS",
    techStack: ["Python", "Algorithms", "Data Structures"],
    logo: orb,
    type: "github"
  },
  {
    name: 'Foodie Recipe.io',
    description:
      'A recipe-sharing platform for food enthusiasts. Built using React.js and API integration.',
    link: {
      href: 'https://github.com/hari7261/Foodie-recipe.io',
      label: 'Github',
    },
    github: "https://github.com/hari7261/Foodie-recipe.io",
    techStack: ["React", "API", "JavaScript"],
    logo: logoAnimaginary,
    type: "github"
  },
  {
    name: 'Tic-Tac-Toe Game',
    description:
      'A browser-based Tic-Tac-Toe game offering both single-player and multiplayer modes.',
    link: {
      href: 'https://github.com/hari7261/Tic-Toe-Game',
      label: 'Github',
    },
    github: "https://github.com/hari7261/Tic-Toe-Game",
    techStack: ["JavaScript", "HTML", "CSS"],
    logo: logoHeart,
    type: "github"
  },
  {
    name: 'TechFutureEmpire',
    description:
      'A platform for discussing and sharing insights on future technology trends and innovations.',
    link: {
      href: 'https://github.com/hari7261/TechFutureEmpire',
      label: 'Github',
    },
    github: "https://github.com/hari7261/TechFutureEmpire",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: orb,
    type: "github"
  },
  {
    name: 'Connect-4 Game',
    description:
      'A classic Connect-4 game implemented for web browsers.',
    link: {
      href: 'https://github.com/hari7261/Connect-4-Game',
      label: 'Github',
    },
    github: "https://github.com/hari7261/Connect-4-Game",
    techStack: ["JavaScript", "HTML", "CSS"],
    logo: logoOpenShuttle,
    type: "github"
  },
  {
    name: "Hariom's Portfolio",
    description:
      'A personal portfolio showcasing web development skills, projects, and experiences.',
    link: {
      href: 'https://github.com/hari7261/Hariom--Portfolio',
      label: 'Github',
    },
    github: "https://github.com/hari7261/Hariom--Portfolio",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: youphoria,
    type: "github"
  },
  {
    name: 'CodeVision',
    description:
      'A team-based project portfolio site highlighting various projects by the CodeVision team.',
    link: {
      href: 'https://github.com/hari7261/CodeVision',
      label: 'Github',
    },
    github: "https://github.com/hari7261/CodeVision",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    logo: orb,
    type: "github"
  },
]

function TechStackBadge({ tech }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mr-2 mb-2">
      {tech}
    </span>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Hariom Kumar😉</title>
        <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/138400713?v=4" />
        <meta name="description" content="Things I’ve made trying to put my dent in the universe." />
      </Head>
      <BubbleBackground />
      <SimpleLayout
        title={
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-green-500 bg-clip-text text-transparent animate-gradient-fast">
            A couple of my favorite personal projects.
          </span>
        }
        intro="Here’s a collection of some projects I’m really proud of."
      >
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card as="li" key={project.name} className="flex flex-col">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt={project.name} width={48} height={48} />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
              <Card.Description className="flex-grow">
                {project.description}
              </Card.Description>
              
              {/* Tech Stack Section */}
              <div className="mt-4 flex flex-wrap">
                {project.techStack.map((tech) => (
                  <TechStackBadge key={tech} tech={tech} />
                ))}
              </div>

              {/* Buttons Section */}
              <div className="mt-6 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.type === 'live' && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
