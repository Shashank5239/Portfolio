'use client'

import { motion } from 'framer-motion'
import { Users, Award, Leaf } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Organizations() {
  const organizations = [
    {
      name: "International Live Events Association (ILEA)",
      role: "Active Member",
      description: "Participate in professional development workshops and networking events.",
      icon: <Users className="w-8 h-8 text-sky-400" />
    },
    {
      name: "Event Planners United",
      role: "Board Member",
      description: "Contribute to the development of industry standards and best practices.",
      icon: <Award className="w-8 h-8 text-sky-400" />
    },
    {
      name: "Sustainable Event Alliance",
      role: "Volunteer",
      description: "Promote eco-friendly practices in event management.",
      icon: <Leaf className="w-8 h-8 text-sky-400" />
    }
  ]

  return (
    <section id="organizations" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Organizations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {organizations.map((org) => (
              <Card className="glass-effect hover-glow mb-4">
                <CardContent className="p-12">
                  <div className="flex items-center mb-4">
                    {org.icon}
                    <h3 className="text-2xl font-semibold text-white ml-4">{org.name}</h3>
                  </div>
                  <p className="text-sky-300 mb-2">{org.role}</p>
                  <p className="text-gray-400">{org.description}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}

