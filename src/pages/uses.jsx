/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Hariom Kumar😉</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title={
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-green-500 bg-clip-text text-transparent animate-gradient-fast">
            Software I use, gadgets I love, and other things I recommend.
          </span>
        }
        intro="I get a lot of questions about the tools and gadgets I use to build software, stay on top of things, or even just distract myself from procrastination. Here’s a rundown of all my favorite picks."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Lenovo IdeaPad Slim i3(2024)">
              My system is a Lenovo IdeaPad Slim i3 (2024), a sleek and efficient laptop that handles all my tasks with ease. Its performance is impressive for its class, providing smooth operation even under demanding workloads. The lightweight design and long battery life make it perfect for both on-the-go and stationary use, and it’s become a reliable tool for everything from everyday tasks to more intensive projects.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              VS Code is my favorite code editor for its versatility and powerful features. Its customizable interface, extensive extension library, and built-in Git integration make coding a breeze. Whether I’m writing, debugging, or collaborating on projects, VS Code's smooth performance and user-friendly design keep me productive and focused.
            </Tool>

            <Tool title="OpenAI">
              I leverage OpenAI for various AI and API purposes, enhancing my applications with state-of-the-art language models.
            </Tool>

            <Tool title="Jupyter Notebook">
              A platform that lets me run machine learning models effortlessly, simplifying the integration of advanced AI capabilities into my projects using Jupyter Notebook.
            </Tool>

            <Tool title="GitHub Pages">
              An essential resource for model development and deployment, offering a vast collection of pre-trained models and tools.
            </Tool>

            <Tool title="Vercel">
              A powerful platform for front-end development and deployment, enabling seamless integration with frameworks like Next.js and React.
            </Tool>

            <Tool title="Google Colab">
              A platform that allows me to run machine learning models in the cloud, making it easy to integrate advanced AI capabilities into my projects using Google Colab.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Figma is my go-to design platform for creating, prototyping, and collaborating on user interfaces. Its real-time collaboration features make it incredibly easy to work with teams, iterate on designs, and gather feedback instantly—all in one place.
            </Tool>

            <Tool title="Canva">
              Canva is my all-in-one tool for creating stunning visuals, whether it's social media graphics, presentations, posters, or even quick mockups. Its user-friendly interface, combined with a vast library of templates, images, and design elements, makes it easy to bring ideas to life, even without advanced design skills.
            </Tool>  
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Todoist">
              Todoist is my go-to app for staying organized and managing tasks efficiently. Whether it’s daily to-dos, project deadlines, or long-term goals, Todoist helps me keep everything on track with its intuitive interface and flexible task management features. 
            </Tool>

            <Tool title="Newsletters">
              I like newsletters for keeping me informed and inspired. They deliver fresh ideas, industry updates, and interesting insights straight to my inbox. It’s like having a personalized stream of content that saves me time and keeps me in the know without the need to constantly search for information. 
            </Tool>

            <Tool title="Google Calendar">
              My go-to tool for scheduling, managing appointments, and organizing my time effectively.
            </Tool>

            <Tool title="Dev.community">
              Dev.community is my go-to space for connecting with fellow developers and staying up-to-date with the latest in tech. It’s where I share knowledge, ask questions, and collaborate on projects with a vibrant community of tech enthusiasts. The discussions are always insightful, and it’s a great way to get advice, solve problems, and keep learning from others in the field.
            </Tool>

            <Tool title="LinkedIn">
              LinkedIn is my essential platform for professional networking and career growth. It helps me connect with industry peers, explore job opportunities, and stay updated on trends and insights from my field. Whether I'm sharing my own updates, engaging with thought leaders, or discovering new professional connections, LinkedIn keeps me connected and informed in the ever-evolving world of work.
            </Tool>

            <Tool title="GitHub Blogs">
              GitHub Blogs are my go-to resource for staying updated on the latest developments in software and open-source projects. They offer insightful articles, tutorials, and updates from the GitHub community, helping me learn new techniques, discover innovative tools, and keep up with industry trends.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
