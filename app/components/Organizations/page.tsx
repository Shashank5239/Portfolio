'use client'

import { motion } from 'framer-motion'
import { Users, Award, Leaf, ArrowRight, Calendar, Trophy, Globe, Target, Lightbulb } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Organizations() {
  const organizations = [
    {
      name: "International Live Events Association (ILEA)",
      role: "Active Member",
      period: "2021 - Present",
      description: "Participate in professional development workshops and networking events focused on advancing the live events industry.",
      achievements: [
        "Organized 3 major networking events",
        "Led workshop on sustainable event planning",
        "Member of the Innovation Committee"
      ],
      icon: <Users className="w-8 h-8 text-sky-400" />,
      tags: ["Events", "Networking", "Professional Development"],
      stats: {
        events: 12,
        workshops: 8,
        projects: 5
      }
    },
    {
      name: "Event Planners United",
      role: "Board Member",
      period: "2020 - Present",
      description: "Contribute to the development of industry standards and best practices while mentoring upcoming event professionals.",
      achievements: [
        "Developed event planning guidelines",
        "Mentored 10+ junior planners",
        "Chaired quarterly board meetings"
      ],
      icon: <Award className="w-8 h-8 text-sky-400" />,
      tags: ["Leadership", "Mentoring", "Strategy"],
      stats: {
        members: 150,
        initiatives: 6,
        meetings: 15
      }
    },
    {
      name: "Sustainable Event Alliance",
      role: "Volunteer Coordinator",
      period: "2019 - Present",
      description: "Lead initiatives promoting eco-friendly practices in event management and sustainable event solutions.",
      achievements: [
        "Reduced event waste by 40%",
        "Implemented green vendor program",
        "Created sustainability guidelines"
      ],
      icon: <Leaf className="w-8 h-8 text-sky-400" />,
      tags: ["Sustainability", "Environment", "Community"],
      stats: {
        impact: "40%",
        programs: 4,
        volunteers: 50
      }
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="organizations" className="py-28">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          <motion.div variants={item} className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white">Professional Organizations</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Actively contributing to and learning from leading organizations in the events industry
            </p>
          </motion.div>

          <motion.div variants={item}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {organizations.map((org, index) => (
                <motion.div
                  key={org.name}
                  variants={item}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="glass-effect h-full bg-gradient-to-br from-sky-500/10 to-sky-500/10 border-sky-500/20 
                  overflow-hidden hover-glow duration-300 ease-in-out">
                    <CardContent className="p-6 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="p-2 rounded-lg bg-sky-400 bg-opacity-10">
                            {org.icon}
                          </div>
                          <Badge variant="secondary" className="bg-sky-400/10 text-sky-300">
                            <Calendar className="w-3 h-3 mr-1" />
                            {org.period}
                          </Badge>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{org.name}</h3>
                          <p className="text-sky-300 font-medium flex items-center gap-2">
                            {org.role}
                            <Trophy className="w-4 h-4" />
                          </p>
                        </div>
                        
                        <p className="text-gray-300 text-sm">{org.description}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {org.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-sky-400/5 border-sky-400/20 text-sky-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-white flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {org.achievements.map((achievement) => (
                              <li key={achievement} className="text-sm text-gray-300 flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-sky-400 mt-1 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-sky-500/20">
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(org.stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold text-sky-300">{value}</div>
                                <div className="text-xs text-gray-400 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="text-center"
          >
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors"
            >
              <Lightbulb className="w-5 h-5" />
              <span>Interested in collaboration? Let's connect</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
