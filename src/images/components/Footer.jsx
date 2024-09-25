import Link from 'next/link'
import { Container } from '@/components/Container'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition-colors hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 bg-gray-100 dark:bg-gray-800">
      <Container.Outer>
        <div className="border-t border-gray-300 pt-10 pb-16 dark:border-gray-700">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Experience</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a
                  href="https://twitter.com/Hari_Om_Pandit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                >
                  <FaTwitter size={20} color="#1DA1F2" />
                </a>
                <a
                  href="https://github.com/hari7261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                >
                  <FaGithub size={20} color="#333" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hariom-kumar-pandit-2k3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                >
                  <FaLinkedin size={20} color="#0077B5" />
                </a>
                <a
                  href="mailto:hariompandit9999@gmail.com"
                  className="transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                >
                  <FaEnvelope size={20} color="#D44638" />
                </a>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-0">
                &copy; {new Date().getFullYear()} Hariom Kumar😉. All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
