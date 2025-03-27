import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header/page'
import Footer from './components/Footer/page'
import ScrollToTop from './components/ScrollToTop/page'
import SocialMedia from './components/SocialMedia/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shashank Kumar',
  description: 'Computer Science & Engineering student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} text-white min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
          <SocialMedia />
        </div>
      </body>
    </html>
  )
}

