import { motion } from 'framer-motion'
import { FiDownload, FiFileText, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-accent uppercase">
            Curriculum Vitae
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2">
            Professional Qualifications &amp; Resume
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Resume Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Summary & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 text-accent">
              <FiFileText className="w-6 h-6" />
              <h3 className="text-xl font-bold text-primary">
                Recruiter Ready
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-secondary leading-relaxed">
              Have a copy of my curriculum vitae handy for offline review or sharing with decision-makers. It details my academic milestones, MERN development expertise, and AI application learning tracks.
            </p>

            <div className="space-y-3.5 text-xs text-secondary">
              <div className="flex items-center space-x-2.5">
                <FiMapPin className="text-accent w-4 h-4 shrink-0" />
                <span>Rajasthan, India</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <FiMail className="text-accent w-4 h-4 shrink-0" />
                <span>prakashkumawat6128@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <FiPhone className="text-accent w-4 h-4 shrink-0" />
                <span>+91 9079213948</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/Prakash-Kumawat-Resume.pdf"
                download="Prakash-Kumawat-Resume.pdf"
                className="group inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold transition-all shadow-md hover:shadow-indigo-500/10 cursor-pointer"
              >
                <FiDownload className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download PDF Resume</span>
              </a>
            </div>
          </div>

          {/* Right: Premium Resume Sheet Mockup */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6 sm:p-8 border border-theme-border bg-surface shadow-theme relative max-h-[500px] overflow-y-auto"
            >
              {/* Floating scroll indicator */}
              <div className="absolute top-4 right-4 bg-accent-soft text-accent text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                Preview Sheet
              </div>

              {/* Inside paper representation */}
              <div className="space-y-6 font-sans text-left">
                {/* Header info */}
                <div className="border-b border-theme-border pb-4">
                  <h4 className="text-lg font-bold text-primary">
                    Prakash Kumawat
                  </h4>
                  <p className="text-xs text-accent font-medium">
                    Frontend &amp; Full Stack MERN Developer
                  </p>
                  <p className="text-[10px] text-muted mt-1">
                    Rajasthan, India • prakashkumawat6128@gmail.com
                  </p>
                </div>

                {/* Section: Profile */}
                <div>
                  <h5 className="text-[11px] font-bold text-primary uppercase tracking-wider border-b border-theme-border pb-1 mb-2">
                    Professional Summary
                  </h5>
                  <p className="text-[11px] text-secondary leading-relaxed">
                    Frontend and MERN Stack Developer focused on building modern, responsive, scalable, and business-oriented web applications. Passionate about AI workflow integrations, custom dashboards, and high-performance layouts.
                  </p>
                </div>

                {/* Section: Education */}
                <div>
                  <h5 className="text-[11px] font-bold text-primary uppercase tracking-wider border-b border-theme-border pb-1 mb-2">
                    Education
                  </h5>
                  <div className="flex justify-between items-start text-[11px] mb-1">
                    <div>
                      <span className="font-semibold text-primary">
                        Bachelor of Computer Applications (BCA)
                      </span>
                      <br />
                      <span className="text-[10px] text-secondary">
                        S.S. Jain Subodh P.G. College, Jaipur
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-secondary shrink-0">
                      5th Semester Student
                    </span>
                  </div>
                </div>

                {/* Section: Technical Skills */}
                <div>
                  <h5 className="text-[11px] font-bold text-primary uppercase tracking-wider border-b border-theme-border pb-1 mb-2">
                    Technical Stack
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-secondary">
                    <p>
                      <strong className="text-primary font-semibold">Frontend:</strong> React.js, JS, Tailwind, Flow
                    </p>
                    <p>
                      <strong className="text-primary font-semibold">Backend:</strong> Node.js, Express.js, FastAPI
                    </p>
                    <p>
                      <strong className="text-primary font-semibold">Databases:</strong> MongoDB, MySQL, Firebase
                    </p>
                    <p>
                      <strong className="text-primary font-semibold">Platforms:</strong> Vercel, Supabase, Git, WordPress
                    </p>
                  </div>
                </div>

                {/* Section: Projects */}
                <div>
                  <h5 className="text-[11px] font-bold text-primary uppercase tracking-wider border-b border-theme-border pb-1 mb-2">
                    Core Projects
                  </h5>
                  <div className="space-y-3 text-[11px] text-secondary">
                    <div>
                      <strong className="text-primary font-semibold">ShopMate MERN SaaS</strong>
                      <p className="text-[10px] leading-relaxed">
                        QR billing system and live business dashboard integration using MongoDB.
                      </p>
                    </div>
                    <div>
                      <strong className="text-primary font-semibold">AI Content Generator</strong>
                      <p className="text-[10px] leading-relaxed">
                        Instagram caption platform linking prompt structures with AI endpoints.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
