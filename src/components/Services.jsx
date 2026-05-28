import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiEye, FiSettings, FiSliders, FiCpu } from 'react-icons/fi'

export default function Services() {
  const serviceList = [
    {
      title: 'Frontend Development',
      description: 'Building performance-focused interfaces with clean semantic HTML, modular CSS structures, and interactive states using modern library standards.',
      icon: <FiCode className="w-5 h-5 text-indigo-500" />,
      features: ['React components', 'Framer animations', 'State architecture']
    },
    {
      title: 'Full Stack Development',
      description: 'Creating robust, scalable web backends with Node.js and Express.js, integrated with MongoDB databases for full data integrity.',
      icon: <FiLayers className="w-5 h-5 text-emerald-500" />,
      features: ['Secure CRUD pipelines', 'Database schemas', 'User authentication']
    },
    {
      title: 'Responsive Web Design',
      description: 'Designing elegant layouts optimized for screen sizes ranging from 320px mobile up to ultra-wide displays with strict typography hierarchies.',
      icon: <FiEye className="w-5 h-5 text-sky-500" />,
      features: ['Mobile-first rules', 'Liquid grids', 'Balanced layout grids']
    },
    {
      title: 'REST API Integration',
      description: 'Connecting backend endpoints and public APIs (OAuth, maps, storage, mail clients) with responsive web systems via optimized fetch protocols.',
      icon: <FiSliders className="w-5 h-5 text-amber-500" />,
      features: ['JSON endpoints', 'State loaders', 'Async/Await error handling']
    },
    {
      title: 'WordPress Development',
      description: 'Deploying WordPress sites using custom Elementor blocks, branding assets, custom widgets, and optimized hosting settings.',
      icon: <FiSettings className="w-5 h-5 text-blue-500" />,
      features: ['Speed optimizations', 'SEO tag indexing', 'Client lead triggers']
    },
    {
      title: 'AI Web Applications',
      description: 'Integrating LLM workflows, prompt structures, automation logic, and neural text generation into user-friendly business software.',
      icon: <FiCpu className="w-5 h-5 text-purple-500" />,
      features: ['AI caption generators', 'Prompt frameworks', 'Workflow automations']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-accent uppercase">
            Services
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2">
            Professional Web &amp; SaaS Offerings
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceList.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass rounded-2xl p-6 sm:p-8 border border-theme-border bg-card hover:shadow-theme hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between glow-card"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="p-3 bg-page border border-theme-border rounded-xl w-fit mb-6">
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bullets list */}
              <div className="mt-8 pt-4 border-t border-theme-border flex flex-wrap gap-1.5">
                {service.features.map((feature, fIdx) => (
                  <span
                    key={fIdx}
                    className="text-[9px] px-2 py-0.5 rounded bg-accent-soft border border-accent/10 text-secondary font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
