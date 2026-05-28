import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiLayers, FiActivity, FiGlobe } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'QR Review & Billing Management System (ShopMate)',
      category: 'SaaS & MERN Stack',
      description: 'A comprehensive, business-oriented SaaS application designed for local shops to handle billing and collect review feedback via QR codes.',
      features: [
        'Interactive analytics dashboard',
        'Dynamic invoice generation',
        'QR-code triggered Google review redirects',
        'MongoDB database pipeline',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS Grid', 'REST APIs'],
      liveLink: 'https://shopmate-saas-ai.vercel.app/',
      githubLink: 'https://github.com/PrakashKumawat535',
      // Inline CSS Mockup for QR Review
      mockup: (
        <div className="w-full h-44 rounded-xl bg-page border border-theme-border p-4 flex flex-col justify-between overflow-hidden relative font-mono text-xs select-none">
          <div className="flex justify-between items-center border-b border-theme-border pb-2">
            <span className="text-[10px] text-secondary flex items-center gap-1">
              <FiActivity className="text-emerald-500 animate-pulse" />
              shopmate-billing-v1.0
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
              ONLINE
            </span>
          </div>
          <div className="flex gap-3 py-2 items-center">
            {/* Visual QR Code Mock */}
            <div className="w-16 h-16 bg-card border border-theme-border rounded p-1 flex items-center justify-center shrink-0">
              <div className="grid grid-cols-4 gap-1 w-full h-full opacity-80">
                <div className="bg-black dark:bg-white rounded-xs"></div>
                <div className="bg-black dark:bg-white rounded-xs"></div>
                <div className="bg-transparent"></div>
                <div className="bg-black dark:bg-white rounded-xs"></div>
                <div className="bg-black dark:bg-white rounded-xs"></div>
                <div className="bg-transparent"></div>
                <div className="bg-black dark:bg-white rounded-xs"></div>
                <div className="bg-black dark:bg-white rounded-xs"></div>
                <div className="bg-transparent"></div>
                <div className="bg-black dark:bg-white rounded-xs"></div>
                <div className="bg-black dark:bg-white rounded-xs"></div>
                <div className="bg-transparent"></div>
                <div className="bg-black dark:bg-white rounded-xs"></div>
                <div className="bg-transparent"></div>
                <div className="bg-black dark:bg-white rounded-xs"></div>
                <div className="bg-black dark:bg-white rounded-xs"></div>
              </div>
            </div>
            {/* Stats block */}
            <div className="flex-1 space-y-1">
              <div className="text-[10px] font-semibold text-primary">
                Review QR Campaigns
              </div>
              <div className="w-full bg-theme-border h-1.5 rounded-full overflow-hidden">
                <div className="bg-accent h-full w-[84%]"></div>
              </div>
              <div className="flex justify-between text-[8px] text-secondary">
                <span>Reviews: 128/150</span>
                <span>84% Rating</span>
              </div>
            </div>
          </div>
          <div className="bg-surface/90 px-2 py-1.5 rounded text-[9px] text-secondary border border-theme-border">
            Recent invoice: <span className="font-semibold text-accent">#INV-2026-081</span> - Rs. 4,500
          </div>
        </div>
      ),
    },
    {
      title: 'AI Social Media Content Generator',
      category: 'AI Integration',
      description: 'An intelligent AI content generation platform engineered for local businesses to streamline Instagram captions and marketing campaigns.',
      features: [
        'Prompt-to-caption generator',
        'Sleek responsive custom input dashboard',
        'Automatic hashtags suggestions and categorization',
        'Direct API link with OpenAI/Gemini systems',
      ],
      tech: ['React.js', 'Node.js', 'AI Endpoints', 'CSS Variables', 'Framer Motion'],
      liveLink: 'https://localboostai.vercel.app/',
      githubLink: 'https://github.com/PrakashKumawat535',
      // Inline CSS Mockup for AI Generator
      mockup: (
        <div className="w-full h-44 rounded-xl bg-page border border-theme-border p-4 flex flex-col justify-between overflow-hidden relative font-mono text-xs select-none">
          <div className="flex justify-between items-center border-b border-theme-border pb-2">
            <span className="text-[10px] text-secondary flex items-center gap-1">
              <FiLayers className="text-purple-500" />
              boost-ai-prompt-v2
            </span>
            <span className="text-[9px] text-purple-600 dark:text-purple-400 font-bold bg-purple-500/10 px-1.5 py-0.5 rounded">
              READY
            </span>
          </div>
          <div className="space-y-2 py-2">
            {/* Input mock */}
            <div className="bg-surface px-2.5 py-1.5 rounded border border-theme-border text-[9px] text-secondary italic">
              "Create a summer discount post for Jaipur Bakeries"
            </div>
            {/* AI Response mock */}
            <div className="bg-purple-500/10 border border-purple-500/20 px-2.5 py-1.5 rounded text-[9px] text-purple-700 dark:text-purple-300">
              ⚡ <span className="font-bold">AI Caption:</span> Savor the sweetness this summer! 🍰 Get 20% off all cakes in Jaipur... #JaipurEats #Bakes
            </div>
          </div>
          <div className="flex justify-between items-center text-[9px]">
            <span className="text-[8px] text-secondary">Latency: 240ms</span>
            <span className="font-semibold text-purple-500">Tokens: 64 used</span>
          </div>
        </div>
      ),
    },
    {
      title: 'WordPress Business Websites',
      category: 'CMS &amp; Web Design',
      description: 'High-conversion business websites crafted with custom responsive styling, optimized hosting parameters, and advanced lead pipelines.',
      features: [
        'Fully responsive Elementor custom structures',
        'Structured lead forms and notifications',
        'SEO-friendly site structures and indexing',
        'Clean layouts and optimized page speeds',
      ],
      tech: ['WordPress', 'Elementor', 'Custom CSS', 'SEO Setup', 'Domain/Hosting'],
      liveLink: '#',
      githubLink: 'https://github.com/PrakashKumawat535',
      // Inline CSS Mockup for WordPress Projects
      mockup: (
        <div className="w-full h-44 rounded-xl bg-page border border-theme-border p-4 flex flex-col justify-between overflow-hidden relative font-mono text-xs select-none">
          <div className="flex justify-between items-center border-b border-theme-border pb-2">
            <span className="text-[10px] text-secondary flex items-center gap-1">
              <FiGlobe className="text-blue-500" />
              wp-site-manager
            </span>
            <span className="text-[9px] text-blue-600 dark:text-blue-400 font-bold bg-blue-500/10 px-1.5 py-0.5 rounded">
              LIVE
            </span>
          </div>
          <div className="flex-1 py-2 grid grid-cols-3 gap-2">
            {/* Box layouts representing blocks */}
            <div className="border border-theme-border rounded bg-surface p-1.5 flex flex-col justify-between">
              <span className="text-[7px] text-secondary">Header</span>
              <div className="h-1 bg-blue-500/30 rounded w-full"></div>
            </div>
            <div className="border border-theme-border rounded bg-surface p-1.5 flex flex-col justify-between col-span-2">
              <span className="text-[7px] text-secondary">Hero Banner</span>
              <div className="h-1.5 bg-blue-500/50 rounded w-3/4"></div>
              <div className="h-1 bg-theme-border rounded w-1/2"></div>
            </div>
            <div className="border border-theme-border rounded bg-surface p-1.5 flex flex-col justify-between col-span-3">
              <div className="flex justify-between items-center">
                <span className="text-[7px] text-secondary">Leads Database</span>
                <span className="text-[7px] font-bold text-emerald-500">+12 today</span>
              </div>
            </div>
          </div>
          <div className="text-[8px] text-center text-secondary border-t border-theme-border pt-1">
            SEO Indexing Rank: 98% | Load Time: 0.9s
          </div>
        </div>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-accent uppercase">
            My Portfolio
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2">
            Selected SaaS &amp; Web Applications
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass rounded-2xl overflow-hidden border border-theme-border bg-card hover:shadow-theme hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between glow-card"
            >
              {/* Graphic Mockup Container */}
              <div className="p-4 bg-surface border-b border-theme-border">
                {project.mockup}
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-accent tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-1 mb-5">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-[11px] text-secondary flex items-start">
                        <span className="text-accent mr-1.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech badging */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] px-2 py-0.5 rounded-md font-semibold border border-theme-border bg-page text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-theme-border">
                    {project.liveLink !== '#' ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-accent flex items-center gap-1.5 hover:underline"
                      >
                        Live Demo
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-secondary cursor-not-allowed">
                        Internal Project
                      </span>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary flex items-center gap-1.5 hover:text-accent"
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
