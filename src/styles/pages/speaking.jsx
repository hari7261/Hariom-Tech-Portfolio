import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Experience - Hariom Kumar😉</title>
        <meta
          name="description"
          content="Explore my professional journey and experiences in technology and research."
        />
      </Head>
      <SimpleLayout
        title="My Professional Journey in Tech"
        intro="Embarking on a path filled with innovation, leadership, and development, my career in technology and research spans various roles and achievements. Here's a glimpse into my professional experiences."
      >
        <div className="space-y-20">
          <SpeakingSection title="Freelance Researcher – Online/On-site (Jan 2024 – Present)">
            <Appearance
              href=""
              title="Building Projects through learning with New Frameworks and Cutting-Edge Technologies"
              description="Built and managed development projects, leveraging generative AI tools to improve processes across various fields. Acquired over 20+ specialized skills through hands-on projects and extra courses, all while balancing my college workload"
              event="Freelance"
              cta="Ongoing"
            />  
          </SpeakingSection>

          <SpeakingSection title="Software Development Intern at Cognifyz Technologies – Online/On-site (June 2024 – Aug 2024)">
          <Appearance
          href=""
          title="Software Development Internship"
          description="During my time as a Software Development Intern, I had the opportunity to work on several projects that allowed me to apply my engineering knowledge in practical, meaningful ways. These experiences not only deepened my technical skills but also helped me grow both academically and professionally, setting a strong foundation for my future career."
          event= "Cognifyz Technologies"
          cta="Completed"
          />
          </SpeakingSection>


          <SpeakingSection title="Project Intern at Bharat Intern – Online (Dec 2023 – Jan 2024)">
            <Appearance
              href=""
              title="Leading Development Teams and Python Full Stack"
              description="Interned at Bharat Intern, contributing to full-stack Python projects, and leading development teams on critical tasks. Acquired +5 skills in this role."
              event="Bharat Intern"
              cta="Completed"
            />
          </SpeakingSection>
          <SpeakingSection title="Student Intern at InternPe – Online/On-site (Oct 2023 – Nov 2023)">
            <Appearance
              href=""
              title="Web Development Training"
              description="Completed comprehensive training as a web development intern, focusing on Python's Tkinter for GUI applications, while developing crucial industry skills."
              event="InternPe"
              cta="Completed"
            />
          </SpeakingSection>
  
        </div>
      </SimpleLayout>
    </>
  )
}
