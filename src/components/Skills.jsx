import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiLayers } from 'react-icons/fi'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FiCode className="w-5 h-5 text-indigo-500" />,
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap 5', 'React Flow'],
    },
    {
      title: 'Backend & Databases',
      icon: <FiDatabase className="w-5 h-5 text-emerald-500" />,
      skills: ['Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'MySQL', 'Firebase', 'Supabase'],
    },
    {
      title: 'Tools & Platforms',
      icon: <FiTool className="w-5 h-5 text-purple-500" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Cursor AI', 'Vercel', 'Hostinger', 'Cloudinary', 'API Integration'],
    },
    {
      title: 'CMS & Customization',
      icon: <FiLayers className="w-5 h-5 text-pink-500" />,
      skills: ['WordPress', 'Elementor', 'Theme Customization'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-accent uppercase">
            My Toolbox
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2">
            Languages, Frameworks &amp; Platforms
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass rounded-2xl p-6 border border-theme-border bg-card hover:shadow-theme hover:-translate-y-0.5 transition-all duration-300 glow-card"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-lg bg-page border border-theme-border">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-2 rounded-xl text-xs font-medium border border-theme-border bg-surface text-secondary hover:border-accent/40 hover:text-primary hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {skill}
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
