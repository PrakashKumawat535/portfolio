import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const handleScrollToHome = () => {
    const el = document.getElementById('home')
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

  const handleLinkClick = (id) => {
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
    <footer className="border-t border-theme-border py-12 relative z-10 bg-page/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          <button
            onClick={handleScrollToHome}
            className="text-sm font-bold text-primary mb-1 cursor-pointer block hover:text-accent transition-colors"
          >
            Prakash Kumawat
          </button>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Prakash Kumawat. Handcrafted in India.
          </p>
        </div>

        {/* Middle Side: Quick navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-secondary">
          {['about', 'skills', 'projects', 'journey', 'services', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => handleLinkClick(section)}
              className="hover:text-primary transition-colors capitalize cursor-pointer font-medium"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Right Side: Social Media */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/PrakashKumawat535"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-theme-border rounded-full bg-card hover:bg-surface text-secondary hover:text-accent transition-all"
            aria-label="GitHub"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/prakashkumawat535"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-theme-border rounded-full bg-card hover:bg-surface text-secondary hover:text-accent transition-all"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:prakashkumawat6128@gmail.com"
            className="p-2 border border-theme-border rounded-full bg-card hover:bg-surface text-secondary hover:text-accent transition-all"
            aria-label="Email"
          >
            <FiMail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
