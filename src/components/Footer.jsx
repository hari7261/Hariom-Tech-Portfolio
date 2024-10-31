import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { FaTimes, FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition-colors hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 1,
      dy: (Math.random() - 0.5) * 1,
      size: Math.random() * 5 + 2, // Increased size range for bigger bubbles
      color: `rgba(66, 153, 225, ${Math.random() * 0.5 + 0.2})`,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <footer className="relative mt-32 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

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
                  <FaTimes size={20} color="black" />
                </a>
                <a
                  href="https://github.com/hari7261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                >
                  <FaGithubSquare size={20} color="#333" />
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

      {/* Additional Bubble Animation Components */}
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-blue-500/10 backdrop-blur-sm`}
          style={{
            width: `${Math.random() * 50 + 30}px`, // Random width between 30px and 80px
            height: `${Math.random() * 50 + 30}px`, // Random height between 30px and 80px
            left: `${Math.random() * 100}%`,
            bottom: '-50px',
            animation: `float ${Math.random() * 5 + 5}s infinite`, // Random float duration between 5s and 10s
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
}
