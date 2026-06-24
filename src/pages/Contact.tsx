import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Contact() {
  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className="relative w-full pt-32  bg-white overflow-hidden text-left">
      {/* Background elements */}
      <div className="glow-spot glow-blue w-[600px] h-[600px] -top-20 -left-20" />
      <div className="glow-spot glow-purple w-[500px] h-[500px] bottom-10 right-0" />
      <div className="absolute inset-0 animated-grid pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <span>Corporate Communications</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Connect With{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Our Specialists
            </span>
          </h1>
          <p className="text-slate-700 text-lg md:text-xl font-light leading-relaxed">
            Whether you want to source elite engineers or need general consultation about tech markets, select the appropriate department below.
          </p>
        </motion.div>
      </div>

      {/* 11. Contact Section */}
      <section className="relative py-16 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <div className="text-blue-500 font-bold text-xs uppercase tracking-widest font-display">Get in Touch</div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900">Let’s Build Together</h2>
              <p className="text-slate-900 font-light text-sm sm:text-base leading-relaxed">
                We welcome the opportunity to learn about your hiring challenges and business goals. Share your requirements with us, and our team will work closely with you to deliver the right IT staffing solutions that support your success.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base text-slate-900 font-semibold font-display">Email Us</div>
                  <div className="text-sm text-slate-700">info@luminavtech.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base text-slate-900 font-semibold font-display">Call Us</div>
                  <div className="text-sm text-slate-700">+1 (800) 555-0199</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base text-slate-900 font-semibold font-display">USA Office Address</div>
                  <div className="text-sm text-slate-700">320 Decker Dr, Suite 131, Irving, TX, 75062.</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base text-slate-900 font-semibold font-display">India Office Address</div>
                  <div className="text-sm text-slate-700">#407, 4th floor, Capital park, Hitech city, Hyderabad 500081</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border-slate-300 shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />

              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900">Consultation Requested</h3>
                  <p className="text-slate-500 font-light text-sm max-w-sm mx-auto">
                    Thank you for reaching out. An enterprise staffing expert from LuminaVTech will contact you within the next 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setFormSubmitted(true)
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-500 font-display">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-blue-500/50 text-slate-900 text-sm focus:outline-none transition-all placeholder:text-slate-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-500 font-display">Corporate Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-blue-500/50 text-slate-900 text-sm focus:outline-none transition-all placeholder:text-slate-400"
                        placeholder="john@enterprise.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-semibold text-slate-500 font-display">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-blue-500/50 text-slate-900 text-sm focus:outline-none transition-all placeholder:text-slate-400"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-semibold text-slate-500 font-display">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-blue-500/50 text-slate-900 text-sm focus:outline-none transition-all placeholder:text-slate-400"
                        placeholder="Enterprise Inc."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-500 font-display">Your Requirements</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-blue-500/50 text-slate-900 text-sm focus:outline-none transition-all placeholder:text-slate-400 resize-none"
                      placeholder="Tell us about the roles or consultation services you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-sm tracking-wider uppercase text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Map Section */}
      <section className="relative px-6 md:px-12  mx-auto z-10 pb-16">
        <div className="w-full h-96 overflow-hidden shadow-xl border border-slate-300">
          <iframe
            title="LuminaVTech Office Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.4156963320115!2d-96.94208722568935!3d32.86071917362873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e82c106359293%3A0x2bf315f050407a0!2s320%20Decker%20Dr%2C%20Irving%2C%20TX%2075062%2C%20USA!5e0!3m2!1sen!2sin!4v1782317341838!5m2!1sen!2sin"></iframe>
        </div>
      </section>
    </div>
  )
}
