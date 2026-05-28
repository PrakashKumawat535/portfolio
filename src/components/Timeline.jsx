import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiGlobe, FiCpu, FiTrendingUp } from 'react-icons/fi'

export default function Timeline() {
  const steps = [
    {
      title: 'Frontend Foundations',
      subtitle: 'Starting the Journey',
      description: 'Mastered HTML5, CSS3, ES6+ Javascript, and modern layout systems like Flexbox and CSS Grid. Built interactive responsive landing pages and client interfaces.',
      icon: <FiCode className="w-5 h-5" />,
      color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
      badge: 'Level 1'
    },
    {
      title: 'Full Stack & MERN Development',
      subtitle: 'Diving into Backend & DBs',
      description: 'Expanded capabilities by learning Node.js, Express.js, and MongoDB. Structured CRUD endpoints, REST APIs, and managed databases to build interactive full stack systems.',
      icon: <FiLayers className="w-5 h-5" />,
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      badge: 'Level 2'
    },
    {
      title: 'Client Project Delivery',
      subtitle: 'Freelance & Wordpress Systems',
      description: 'Launched custom WordPress websites using Elementor, custom CSS, and contact configurations for clients. Deployed systems on Hostinger and managed SEO setup.',
      icon: <FiGlobe className="w-5 h-5" />,
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      badge: 'Level 3'
    },
    {
      title: 'AI Workflows & Integration',
      subtitle: 'Leveraging AI APIs',
      description: 'Dived into prompt engineering, automated workflows, and LLM orchestration (OpenAI, Gemini APIs) to power modern client-facing applications.',
      icon: <FiCpu className="w-5 h-5" />,
      color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
      badge: 'Level 4'
    },
    {
      title: 'SaaS Systems Development',
      subtitle: 'Active Development',
      description: 'Currently integrating payment structures, QR codes, billing managers, and authentication logic into subscription-based cloud systems.',
      icon: <FiTrendingUp className="w-5 h-5" />,
      color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
      badge: 'Active Focus'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-accent uppercase">
            Evolution
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2">
            My Professional Growth Journey
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline body */}
        <motion.div
          className="relative border-l border-theme-border pl-6 sm:pl-8 ml-4 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={stepVariants}
              className="relative flex flex-col items-start"
            >
              {/* Chronological Circle Indicator */}
              <div className={`absolute -left-[39px] sm:-left-[47px] p-2.5 rounded-full border bg-page ${step.color} shadow-xs z-10`}>
                {step.icon}
              </div>

              {/* Card item */}
              <div className="glass rounded-xl p-6 sm:p-8 border border-theme-border bg-card hover:shadow-theme hover:-translate-y-0.5 transition-all duration-300 w-full glow-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {step.title}
                    </h3>
                    <span className="text-xs text-accent font-semibold">
                      {step.subtitle}
                    </span>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-theme-border bg-page text-secondary w-fit font-bold">
                    {step.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
