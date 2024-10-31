import Image from 'next/future/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { FaCog, FaChartLine, FaSass, FaDocker, FaShoppingCart, FaBrain, FaShieldAlt, FaMobileAlt, FaDatabase, FaNetworkWired, FaCode, FaPaintBrush } from 'react-icons/fa'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import youphoria from '@/images/logos/github-desktop.svg'
import orb from '@/images/logos/orb.gif'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoHeart from '@/images/logos/gwc.png'
import BubbleBackground from '@/components/BubbleBackground'
// Project data with icons
const projects = [
  {
    name: 'GitHub Profile Finder: Discover and Explore GitHub Users',
    description:
      'Built with Next.js and leveraging GitHub API, this tool allows seamless search and detailed display of GitHub profiles. Deployed on Vercel for scalability.',
    link: {
      href: 'https://github-profile-finder.vercel.app',
      label: 'Live Demo',
    },
    logo: youphoria,
  },

  {
    name: 'MY-PYTHON-PROJECTS',
    description:
      'A diverse collection of Python projects showcasing various algorithms, data structures, and small applications. Ideal for beginners and enthusiasts to explore Python programming.',
    link: {
      href: 'https://github.com/hari7261/MY-PYTHON-PROJECTS',
      label: 'Github',
    },
    logo: orb,
  },
  {
    name: 'Modern React Portfolio',
    description:
      "A sleek, modern portfolio website created using React, CSS, and JavaScript. Features include a responsive design and an elegant interface to showcase skills and projects.",
    link: { href: 'https://github.com/hari7261/modern-react-portfolio.io', label: 'Github' },
    logo: logoHeart,
  },
  {
    name: 'Foodie Recipe.io',
    description:
      'A recipe-sharing platform for food enthusiasts. Built using React.js and API integration, it offers a user-friendly interface to discover, share, and submit recipes.',
    link: {
      href: 'https://github.com/hari7261/Foodie-recipe.io',
      label: 'Github',
    },
    logo: logoAnimaginary,
  },
  {
    name: 'Tic-Tac-Toe Game',
    description:
      'A browser-based Tic-Tac-Toe game offering both single-player and multiplayer modes. Designed with HTML, CSS, and JavaScript for a simple yet interactive experience.',
    link: {
      href: 'https://github.com/hari7261/Tic-Toe-Game',
      label: 'Github',
    },
    logo: logoHeart,
  },
  {
    name: 'TechFutureEmpire',
    description:
      'A platform for discussing and sharing insights on future technology trends and innovations. Built using HTML, CSS, and JavaScript.',
    link: {
      href: 'https://github.com/hari7261/TechFutureEmpire',
      label: 'Github',
    },
    logo: orb,
  },
  {
    name: 'Connect-4 Game',
    description:
      'A classic Connect-4 game implemented for web browsers, allowing players to enjoy this traditional game in a digital format. Developed using HTML, CSS, and JavaScript.',
    link: {
      href: 'https://github.com/hari7261/Connect-4-Game',
      label: 'Github',
    },
    logo: logoOpenShuttle,
  },
  {
    name: 'Hariom\'s Portfolio',
    description:
      'A personal portfolio showcasing web development skills, projects, and experiences. Built with HTML, CSS, and JavaScript, offering a responsive and visually appealing design.',
    link: {
      href: 'https://github.com/hari7261/Hariom--Portfolio',
      label: 'Github',
    },
    logo: youphoria,
  },
  {
    name: 'CodeVision',
    description:
      'A team-based project portfolio site highlighting various projects by the CodeVision team, featuring member profiles, skills, certifications, and more. Built with HTML, CSS, and JavaScript.',
    link: {
      href: 'https://github.com/hari7261/CodeVision',
      label: 'Github',
    },
    logo: orb,
  },
]



const upcomingProjects = [
  {
    id: 1,
    title: 'CloudFlow',
    description: 'SaaS project management tool with AI-powered insights.',
    category: 'SaaS',
    techStack: ['React', 'Node.js', 'MongoDB', 'AWS'],
    icon: <FaSass className="text-xl text-teal-500" />,
  },
  {
    id: 2,
    title: 'DevOps Platform',
    description: 'PaaS solution for streamlined development and deployment.',
    category: 'PaaS',
    techStack: ['Docker', 'Kubernetes', 'Jenkins', 'Go'],
    icon: <FaDocker className="text-xl text-blue-500" />,
  },
  {
    id: 3,
    title: 'E-commerce Engine',
    description: 'Robust e-commerce platform with custom features and integrations.',
    category: 'E-commerce',
    techStack: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Stripe'],
    icon: <FaShoppingCart className="text-xl text-orange-500" />,
  },
  {
    id: 4,
    title: 'AI Analytics Suite',
    description: 'AI-powered analytics platform for data-driven decision making.',
    category: 'AI',
    techStack: ['Python', 'TensorFlow', 'BigQuery', 'GCP'],
    icon: <FaBrain className="text-xl text-purple-500" />,
  },
  {
    id: 5,
    title: 'Network Security Pro',
    description: 'Advanced cybersecurity solutions for enterprise networks.',
    category: 'Cybersecurity',
    techStack: ['Fortinet', 'Snort', 'Splunk', 'Cisco'],
    icon: <FaShieldAlt className="text-xl text-red-500" />,
  },
  {
    id: 6,
    title: 'MobileApp Builder',
    description: 'Cross-platform mobile app development with a focus on performance.',
    category: 'Mobile App',
    techStack: ['Flutter', 'Firebase', 'Dart', 'Git'],
    icon: <FaMobileAlt className="text-xl text-green-500" />,
  },
  {
    id: 7,
    title: 'Database Manager',
    description: 'Comprehensive database management and optimization tools.',
    category: 'Database',
    techStack: ['MySQL', 'MongoDB', 'Redis', 'AWS RDS'],
    icon: <FaDatabase className="text-xl text-yellow-500" />,
  },
  {
    id: 8,
    title: 'IoT Connect',
    description: 'Platform for managing and connecting IoT devices with ease.',
    category: 'IoT',
    techStack: ['Node.js', 'MQTT', 'AWS IoT', 'Azure'],
    icon: <FaNetworkWired className="text-xl text-cyan-500" />,
  },
  {
    id: 9,
    title: 'Web Dev Suite',
    description: 'All-in-one toolkit for modern web development practices.',
    category: 'Web Dev',
    techStack: ['Next.js', 'GraphQL', 'TypeScript', 'Vercel'],
    icon: <FaCode className="text-xl text-indigo-500" />,
  },
  {
    id: 10,
    title: 'Design Studio',
    description: 'Creative tools for graphic design and multimedia content.',
    category: 'Design',
    techStack: ['Adobe Creative Cloud', 'Figma', 'Sketch', 'InVision'],
    icon: <FaPaintBrush className="text-xl text-pink-500" />,
  },
  {
    id: 11,
    title: 'AI Analytics Platform',
    description: 'Advanced analytics and predictive insights powered by AI. Ideal for data-driven decision making.',
    category: 'Analytics',
    techStack: ['TensorFlow', 'PyTorch', 'Google Cloud AI', 'Microsoft Azure ML'],
    icon: <FaChartLine className="text-xl text-blue-500" />,
},
{
    id: 12,
    title: 'Smart Automation Suite',
    description: 'Automate repetitive tasks and workflows using AI-driven solutions. Boost productivity and efficiency.',
    category: 'Automation',
    techStack: ['Zapier', 'UiPath', 'IBM Watson', 'Amazon Lex'],
    icon: <FaCog className="text-xl text-green-500" />,
}

]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
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
      {/* <FuturisticBackground /> */}
      <SimpleLayout
    title={
      <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-green-500 bg-clip-text text-transparent animate-gradient-fast">
        A couple of my favorite personal projects.
      </span>
    }
    intro="Here’s a collection of some projects I’m really proud of."
  >

{/* Content of the layout goes here */}
<ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt={project.name} width={48} height={48} />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        {/* Divider with blue shadow */}
        <div className="my-12 border-t-4 border-blue-500 shadow-lg shadow-blue-500/30"></div>

        <section className="mt-12">
        <h1 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 text-center mb-6">
    ---------Upcoming Projects---------</h1>
          <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {upcomingProjects.map((project) => (
  <Card
    as="li"
    key={project.id}
    className="relative p-4 bg-white border border-blue-500 shadow-lg shadow-blue-500/30 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-blue-500/50 dark:bg-zinc-800 dark:border-blue-400 dark:shadow-blue-600/30"
  >
    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-700 dark:ring-0 dark:shadow-zinc-600/50">
      {project.icon}
    </div>
    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
      {project.title}
    </h2>
    <Card.Description>{project.description}</Card.Description>
    <div className="mt-4">
      <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Tech Stack</h3>
      <ul className="mt-2 list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300">
        {project.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  </Card>
))}
          </ul>
        </section>
      </SimpleLayout>
    </>
  )
}