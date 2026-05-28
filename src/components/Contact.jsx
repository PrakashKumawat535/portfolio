import { useState } from 'react'
import { FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

// Replace with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyFTFP7HgGc8FTPnT_WQJR5Q8_mYMWbTJ0kP6qbydP43CcqJyhcoJwjbhxiCCXCx7nqQ/exec'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [toastMsg, setToastMsg] = useState('')

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters'
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        tempErrors.email = 'Please enter a valid email address'
      }
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    setToastMsg('Sending message...')

    try {
      const formBody = new URLSearchParams()
      formBody.append('name', formData.name.trim())
      formBody.append('email', formData.email.trim())
      formBody.append('message', formData.message.trim())

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      })

      setStatus('success')
      setToastMsg('Message sent successfully! Thank you.')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setStatus('idle')
        setToastMsg('')
      }, 5000)

    } catch (error) {
      console.error('Contact Form Error:', error)
      setStatus('error')
      setToastMsg('Failed to send message. Please try again.')

      setTimeout(() => {
        setStatus('idle')
        setToastMsg('')
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-accent uppercase">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2">
            Let's Collaborate On Your Next Project
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Form Wrapper */}
        <div className="glass rounded-2xl p-6 sm:p-10 border border-theme-border bg-card shadow-theme glow-card">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Input Row: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs font-semibold text-primary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  disabled={status === 'loading'}
                  className={`px-4 py-3 rounded-xl border bg-surface text-primary placeholder-muted/60 text-sm focus:outline-hidden focus:ring-2 transition-all ${errors.name
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-theme-border focus:ring-accent/20 focus:border-accent'
                    }`}
                />
                {errors.name && <span className="text-[10px] text-red-500 mt-1">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs font-semibold text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled={status === 'loading'}
                  className={`px-4 py-3 rounded-xl border bg-surface text-primary placeholder-muted/60 text-sm focus:outline-hidden focus:ring-2 transition-all ${errors.email
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-theme-border focus:ring-accent/20 focus:border-accent'
                    }`}
                />
                {errors.email && <span className="text-[10px] text-red-500 mt-1">{errors.email}</span>}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-xs font-semibold text-primary mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Brief details about your project or inquiry..."
                rows="5"
                disabled={status === 'loading'}
                className={`px-4 py-3 rounded-xl border bg-surface text-primary placeholder-muted/60 text-sm focus:outline-hidden focus:ring-2 transition-all resize-y min-h-[120px] ${errors.message
                    ? 'border-red-500 focus:ring-red-500/20'
                    : 'border-theme-border focus:ring-accent/20 focus:border-accent'
                  }`}
              />
              {errors.message && <span className="text-[10px] text-red-500 mt-1">{errors.message}</span>}
            </div>

            {/* Submit & Status */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">

              {/* Toast Message Display */}
              <div className="flex items-center min-h-[24px]">
                {status === 'loading' && (
                  <span className="text-xs text-secondary flex items-center gap-1.5 animate-pulse">
                    <FiLoader className="animate-spin text-accent" />
                    {toastMsg}
                  </span>
                )}
                {status === 'success' && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <FiCheckCircle />
                    {toastMsg}
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-xs text-red-500 flex items-center gap-1.5">
                    <FiAlertCircle />
                    {toastMsg}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-indigo-500/10 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <FiLoader className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Config Setup Help Alert */}
          <div className="mt-8 pt-6 border-t border-theme-border text-[10px] text-muted">
            💡 <span className="font-semibold font-sans">Developer Tip:</span> Integrate form submissions by copying your Google Web App URL into the <code>GOOGLE_SCRIPT_URL</code> constant at the top of <code>Contact.jsx</code>.
          </div>
        </div>
      </div>
    </section>
  )
}
