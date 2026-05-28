import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Initialize theme from localStorage, defaulting to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme : 'dark'
  })

  // Apply dark class to document root
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-page text-primary transition-colors duration-300 relative">
      
      {/* Premium Background Mesh Glow Overlay (Global) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[60rem] h-[35rem] rounded-full bg-accent/5 blur-[120px] opacity-70"></div>
        <div className="absolute top-[40%] right-[5%] w-[45rem] h-[45rem] rounded-full bg-accent/5 blur-[150px] opacity-60"></div>
        <div className="absolute bottom-[10%] left-[2%] w-[50rem] h-[50rem] rounded-full bg-accent/3 blur-[180px] opacity-60"></div>
      </div>

      {/* Main UI Container */}
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Hero />
          
          <div className="space-y-12">
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Services />
            <Resume />
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
