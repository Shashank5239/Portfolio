'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "Built a VS Code extension that provides real-time code suggestions using machine learning.",
      tech: ["TypeScript", "Python", "TensorFlow", "VS Code API"],
      image: "/placeholder.svg",
      github: "https://github.com/johndoe/ai-code-assistant",
      live: "https://marketplace.visualstudio.com/items?itemName=example"
    },
    {
      title: "Blockchain Voting System",
      description: "Developed a secure e-voting system using Ethereum smart contracts.",
      tech: ["Solidity", "React", "Web3.js", "Node.js"],
      image: "/placeholder.svg",
      github: "https://github.com/johndoe/blockchain-voting",
      live: "https://blockchain-voting.example.com"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Created a collaborative coding environment with real-time syncing.",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Docker"],
      image: "/placeholder.svg",
      github: "https://github.com/johndoe/collab-tool",
      live: "https://collab.example.com"
    }
  ]

  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect hover-glow overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-sm px-3 py-1 rounded-full bg-sky-400 bg-opacity-10 text-sky-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full border-sky-400 hover:bg-sky-400 hover:text-white"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="rounded-full bg-sky-400 hover:bg-sky-500"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button asChild className="rounded-full border border-sky-400 hover:bg-sky-900 hover:border-none 
          text-white p-6 duration-600">
            <a href="/path-to-your-cv.pdf" download>View More</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

