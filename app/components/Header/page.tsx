'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, User, Code, Briefcase, Award, Mail, Book, Layers, Users } from 'lucide-react'
import HeaderLayout from './layout'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Header() {
  const [isFloating, setIsFloating] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "#about", icon: User, label: "About" },
    { href: "#projects", icon: Code, label: "Projects" },
    { href: "#experience", icon: Briefcase, label: "Experience" },
    { href: "#skills", icon: Layers, label: "Skills" },
    { href: "#education", icon: Book, label: "Education" },
    { href: "#organizations", icon: Users, label: "Organizations" },
    { href: "#achievements", icon: Award, label: "Achievements" },
  ]

  return (
    <HeaderLayout>
      <nav className={'container mx-auto px-6 py-4 nav-blur rounded-3xl'}>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-bold">
            John Doe
          </Link>
          
          <div className="hidden md:flex items-center justify-center space-x-4">
            <TooltipProvider>
              {navItems.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link href={item.href} className="nav-item text-white p-3 rounded-full">
                      <item.icon size={22} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='text-white items-center'>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>

          <Link 
            href="#contact" 
            className="hidden md:flex items-center px-4 py-2 bg-white hover:bg-sky-900 hover:text-white text-[#354F52] rounded-full 
            font-semibold transform transition duration-500 hover:scale-105 hover:bg-opacity-90"
          >
            <Mail size={20} className="mr-2" />
            Contact
          </Link>

          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 nav-blur p-8 shadow-lg">
            <div className="flex flex-col space-y-8 items-center">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href} className="nav-item text-white hover:text-sky-400 transition-colors flex items-center">
                  <item.icon size={20} className="mr-2" /> {item.label}
                </Link>
              ))}
              <Link href="#contact" className="nav-item text-white hover:text-sky-400 transition-colors flex items-center">
                <Mail size={20} className="mr-2" /> Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </HeaderLayout>
  )
}

