import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const handleContactScroll = () => {
    const el = document.getElementById('contact')
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
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-accent/5 blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] rounded-full bg-accent/5 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column: Headline and CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-theme-border bg-card text-xs font-semibold text-accent mb-6 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-primary animate-fade-in"
          >
            Hi, I'm <span className="shimmer-text">Prakash Kumawat</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold text-secondary mt-3"
          >
            Full Stack &amp; MERN Developer
          </motion.h2>

          {/* Intro Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-secondary mt-6 max-w-xl leading-relaxed"
          >
            I architect modern, responsive, and highly business-oriented web applications. Based in Rajasthan, India, I specialize in crafting clean UI/UX experiences, automated SaaS setups, and integrations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <button
              onClick={handleContactScroll}
              className="group px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-indigo-500/10 cursor-pointer"
            >
              Get in Touch
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Prakash-Kumawat-Resume.pdf"
              download="Prakash-Kumawat-Resume.pdf"
              className="px-6 py-3 rounded-xl border border-theme-border bg-card hover:bg-page font-medium flex items-center justify-center gap-2 transition-all text-primary hover:border-primary/25"
            >
              <FiDownload className="text-accent" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-5 mt-10"
          >
            <a
              href="https://github.com/PrakashKumawat535"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-theme-border bg-card hover:bg-page transition-all text-secondary hover:text-accent"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/prakashkumawat535"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-theme-border bg-card hover:bg-page transition-all text-secondary hover:text-accent"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:prakashkumawat6128@gmail.com"
              className="p-2.5 rounded-full border border-theme-border bg-card hover:bg-page transition-all text-secondary hover:text-accent"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Premium Dev Mockup */}
        <motion.div
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass rounded-2xl p-6 border border-theme-border shadow-theme glow-card bg-card">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-4 border-b border-theme-border mb-4">
              <div className="flex space-x-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F]"></span>
              </div>
              <span className="text-xs font-mono text-secondary bg-page px-2.5 py-1 rounded border border-theme-border">
                prakash-system.sh
              </span>
            </div>

            {/* Simulated terminal/stats */}
            <div className="space-y-4 font-mono text-sm">
              <div>
                <span className="text-accent">$</span> <span className="text-primary">fetch-developer-info</span>
              </div>
              <div className="pl-4 text-xs space-y-1.5 text-secondary">
                <p><span className="text-emerald-500 font-semibold dark:text-emerald-400">Location:</span> Rajasthan, India</p>
                <p><span className="text-emerald-500 font-semibold dark:text-emerald-400">Focus:</span> MERN Stack + AI Workflows</p>
                <p><span className="text-emerald-500 font-semibold dark:text-emerald-400">Education:</span> BCA 5th Sem Student</p>
                <p><span className="text-emerald-500 font-semibold dark:text-emerald-400">Status:</span> Coding live products</p>
              </div>

              <div className="border-t border-theme-border my-4 pt-4">
                <span className="text-accent">$</span> <span className="text-primary">list-active-projects</span>
              </div>
              
              <div className="space-y-2">
                {/* Project 1 info card inside console */}
                <div className="bg-page p-3 rounded-lg border border-theme-border">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-primary">ShopMate SaaS</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold">MERN</span>
                  </div>
                  <p className="text-[11px] text-secondary mt-1">QR Billing & Reviews Platform</p>
                </div>

                {/* Project 2 info card inside console */}
                <div className="bg-page p-3 rounded-lg border border-theme-border">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-primary">LocalBoost AI</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold">AI APIs</span>
                  </div>
                  <p className="text-[11px] text-secondary mt-1">Insta Marketing generator for local businesses</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
