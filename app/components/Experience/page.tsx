'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const experienceData = [
    {
      position: "Office Assistant",
      company: "LPU",
      duration: "2024 - Present",
      location: "In-Office LPU",
      responsibilities: [
        "Assisted in various office tasks",
        "Managed office supplies and inventory",
        "Coordinated with other departments"
      ]
    },
    {
      position: "Event Manager",
      company: "E-cell LPU",
      duration: "2024 - Present",
      location: "Lovely Professional University",
      responsibilities: [
        "Organized and managed various events and workshops",
        "Entrepreneurship and leadership development"
      ]
    },
    {
      position: "Management Team Member",
      company: "UNYC LPU",
      duration: "2023 - 2024",
      location: "Lovely Professional University",
      responsibilities: [
        "Led a team of few students in developing a campus event management",
        "Organized and managed various events and workshops",
        "Collaborated with other teams to ensure smooth functioning of the event"
      ]
    }
  ]

  return (
    <section id="experience" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect hover-glow h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-8 h-8 text-sky-400 mr-4" />
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{exp.position}</h3>
                      <p className="text-sky-300">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{exp.duration}</span>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

