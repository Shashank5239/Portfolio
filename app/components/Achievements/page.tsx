import { Trophy, Award, Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import AchievementsLayout from './layout'

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: "National Coding Champion",
      description: "Won first place in the National Collegiate Programming Contest 2023",
      highlight: "1st Place",
      year: "2023"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Research Publication",
      description: "Published paper on AI-driven software optimization in IEEE Conference",
      highlight: "IEEE Published",
      year: "2023"
    },
    {
      icon: <Star className="w-12 h-12 text-purple-500" />,
      title: "Google Summer of Code",
      description: "Selected contributor for TensorFlow project under Google Summer of Code",
      highlight: "Selected Developer",
      year: "2022"
    }
  ]

  return (
    <AchievementsLayout>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="glass-effect hover-glow overflow-hidden transition duration-300 ease-in-out"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-[#354F52]/10">
                    {achievement.icon}
                  </div>
                  <span className="px-4 py-1 rounded-full bg-[#354F52]/10 text-[#7c7a7a] text-sm font-medium mb-4">
                    {achievement.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {achievement.description}
                  </p>
                  <span className="text-sm text-gray-500">
                    {achievement.year}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AchievementsLayout>
  )
}

