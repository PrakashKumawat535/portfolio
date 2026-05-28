import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Journey', id: 'journey' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      const scrollPosition = window.scrollY + 120
      
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass py-4 shadow-sm border-b border-theme-border'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-xl font-bold tracking-tight text-primary cursor-pointer"
        >
          Prakash<span className="text-accent">.dev</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-1 glass rounded-full p-1 border border-theme-border bg-surface/50 dark:bg-black/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {navLinks.find(n => n.id === link.id)?.name}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-theme-border bg-surface hover:bg-page transition-colors cursor-pointer text-secondary hover:text-primary"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun className="w-5 h-5 text-yellow-400" /> : <FiMoon className="w-5 h-5 text-accent" />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-theme-border bg-surface text-secondary"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun className="w-5 h-5 text-yellow-400" /> : <FiMoon className="w-5 h-5 text-accent" />}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full border border-theme-border bg-surface text-primary"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-b border-theme-border py-6 px-6 flex flex-col space-y-4 shadow-lg bg-surface/95">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-left py-2.5 px-4 rounded-lg font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-accent text-white'
                  : 'text-secondary hover:bg-page hover:text-primary'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
