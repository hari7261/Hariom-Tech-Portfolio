"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const Skill = ({ name, delay }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative px-4 py-2 rounded-full text-sm transition-all duration-300
                 bg-gray-100 text-gray-800 border border-gray-300 shadow-md
                 dark:bg-[#0a1628] dark:text-[#4cc9f0] dark:border-[#4cc9f0]/20
                 dark:shadow-[0_0_15px_rgba(76,201,240,0.1)]
                 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(76,201,240,0.2)]"
        >
            {name}

            {hovered && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-[-30px] left-1/2 transform -translate-x-1/2
                     px-2 py-1 rounded-md text-xs font-medium shadow-lg
                     bg-gray-800 text-gray-100 dark:bg-[#4cc9f0] dark:text-[#0a1628]"
                >
                    {name}
                </motion.div>
            )}
        </motion.div>
    )
}

const SkillGroup = ({ title, skills }) => (
    <div className="space-y-4">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-800 dark:text-[#4cc9f0] text-sm font-medium mb-2"
        >
            {title}
        </motion.div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <Skill key={skill} name={skill} delay={index * 0.1} />
            ))}
        </div>
    </div>
)

export default function SkillsShowcase() {
    const frontendSkills = [
        "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
        "Tailwind CSS", "Framer Motion", "Material UI", "Chakra UI", "ShadCN/UI",
        "SSR (Server-Side Rendering)", "Unit Testing", "Performance Optimization"
    ]

    const backendSkills = [
        "Node.js", "Bun", "Express.js", "WebSockets",
         "JWT / OAuth", "SQL", "Firebase",
    , "Mongoose", "Database Modeling", "Stripe Payments", "supabase",
    ]

    const cloudDevOpsSkills = [
        "AWS (EC2, S3, Lambda)", "Docker", "Terraform", "Cloudflare", "DigitalOcean", "Vercel", "Netlify", "Linux"
    ]

    const aiMachineLearningSkills = [
        "Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain",
        "AI Agents",  "Hugging Face"
    ]

    const otherSkills = [
        "Git", "GitHub", "Blockchain Basics",
          "Three.js(Basics)",
    ]

    const designSkills = ["UX/UI Design", "Product Design", "Figma", "Adobe XD", "Wireframing", "Prototyping"]

    return (
        <div className="min-h-screen p-8 md:p-16 bg-gray-50 dark:bg-[#020817] transition-all duration-300">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-gray-800 dark:text-[#4cc9f0] mb-12 text-center"
                >
                    MY SKILLS
                </motion.h2>
                <div className="grid gap-12 md:grid-cols-2">
                    <SkillGroup title="Frontend Development" skills={frontendSkills} />
                    <SkillGroup title="Backend Development" skills={backendSkills} />
                    <SkillGroup title="Cloud & DevOps" skills={cloudDevOpsSkills} />
                    <SkillGroup title="AI & Machine Learning" skills={aiMachineLearningSkills} />
                    <SkillGroup title="Other Technologies" skills={otherSkills} />
                    <SkillGroup title="Design" skills={designSkills} />
                </div>
            </div>
        </div>
    )
}
