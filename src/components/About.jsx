import { motion } from 'framer-motion'
import { FiCpu, FiAward, FiBookOpen } from 'react-icons/fi'

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-accent uppercase">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2">
            The Developer Behind The Code
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Summary */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass rounded-2xl p-8 border border-theme-border bg-card flex flex-col justify-between hover:shadow-theme hover:-translate-y-1 transition-all duration-300 glow-card"
          >
            <div>
              <div className="p-3 bg-accent-soft rounded-xl text-accent w-fit mb-6">
                <FiAward className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Core Profile
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                I am a Frontend and MERN Stack Developer focused on building modern, responsive, scalable, and business-oriented web applications. I love bringing sleek visual ideas to life with solid code structures.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-theme-border text-xs text-muted">
              Based in Rajasthan, India
            </div>
          </motion.div>

          {/* Card 2: AI Journey */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15 }}
            className="glass rounded-2xl p-8 border border-theme-border bg-card flex flex-col justify-between hover:shadow-theme hover:-translate-y-1 transition-all duration-300 glow-card"
          >
            <div>
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400 w-fit mb-6">
                <FiCpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                AI &amp; Automation
              </h3>
              <p className="text-sm text-secondary leading-relaxed mb-4">
                Beyond traditional web development, I am actively building workflows, prompt templates, and AI SaaS integrations.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI Agents', 'Workflows', 'Prompt Eng.', 'AI SaaS'].map((tech) => (
                  <span key={tech} className="text-[10px] px-2.5 py-1 rounded bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold border border-purple-500/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-theme-border text-xs text-muted">
              Currently learning AI Orchestration
            </div>
          </motion.div>

          {/* Card 3: BCA & Passion */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-8 border border-theme-border bg-card flex flex-col justify-between hover:shadow-theme hover:-translate-y-1 transition-all duration-300 glow-card"
          >
            <div>
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400 w-fit mb-6">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Education &amp; Growth
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Currently pursuing a Bachelor of Computer Applications (BCA) as a 5th-semester student at S.S. Jain Subodh P.G. College, Jaipur. I focus heavily on performance, modern responsive layouts, and solving client problems.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-theme-border text-xs text-muted">
              Jaipur, India
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
