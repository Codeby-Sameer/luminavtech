import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Contact() {
  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className="relative w-full pt-32 bg-background overflow-hidden text-left">
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
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
            <span>Corporate Communications</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-heading tracking-tight leading-tight">
            Connect With{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-600">
              Our Specialists
            </span>
          </h1>
          <p className="text-body text-lg md:text-xl font-light leading-relaxed">
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
              <div className="text-accent font-bold text-xs uppercase tracking-widest font-display">Get in Touch</div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-heading">Let’s Build Together</h2>
              <p className="text-heading font-light text-sm sm:text-base leading-relaxed">
                We welcome the opportunity to learn about your hiring challenges and business goals. Share your requirements with us, and our team will work closely with you to deliver the right IT staffing solutions that support your success.
              </p>
            </div>

            <div className="space-y-8">
              <a 
                href="mailto:info@luminavtech.com"
                className="flex items-center gap-4 group cursor-pointer w-fit text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base text-heading font-semibold font-display group-hover:text-accent transition-colors duration-300">Email Us</div>
                  <div className="text-sm text-body group-hover:text-accent/80 transition-colors duration-300">info@luminavtech.com</div>
                </div>
              </a>

              <a 
                href="tel:+14697531264"
                className="flex items-center gap-4 group cursor-pointer w-fit text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base text-heading font-semibold font-display group-hover:text-accent transition-colors duration-300">Call Us</div>
                  <div className="text-sm text-body group-hover:text-accent/80 transition-colors duration-300">+1 (469) 753-1264</div>
                </div>
              </a>

              <a 
                href="https://maps.google.com/?q=320+Decker+Dr,+Suite+131,+Irving,+TX,+75062"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer w-fit text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base text-heading font-semibold font-display group-hover:text-accent transition-colors duration-300">USA Office Address</div>
                  <div className="text-sm text-body group-hover:text-accent/80 transition-colors duration-300">320 Decker Dr, Suite 131, Irving, TX, 75062.</div>
                </div>
              </a>

              <a 
                href="https://maps.google.com/?q=Capital+park,+Hitech+city,+Hyderabad+500081"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer w-fit text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base text-heading font-semibold font-display group-hover:text-accent transition-colors duration-300">India Office Address</div>
                  <div className="text-sm text-body group-hover:text-accent/80 transition-colors duration-300">#407, 4th floor, Capital park, Hitech city, Hyderabad 500081</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-card bg-surface border border-default shadow-card relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />

              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-accent mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-heading">Consultation Requested</h3>
                  <p className="text-muted font-light text-sm max-w-sm mx-auto">
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
                      <label htmlFor="name" className="text-sm font-semibold text-heading font-display">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-surface border border-default focus:border-accent text-heading text-sm focus:outline-none transition-all placeholder:text-muted focus:ring-1 focus:ring-accent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-heading font-display">Corporate Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-surface border border-default focus:border-accent text-heading text-sm focus:outline-none transition-all placeholder:text-muted focus:ring-1 focus:ring-accent"
                        placeholder="john@enterprise.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-heading font-display">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3.5 rounded-xl bg-surface border border-default focus:border-accent text-heading text-sm focus:outline-none transition-all placeholder:text-muted focus:ring-1 focus:ring-accent"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-heading font-display">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-surface border border-default focus:border-accent text-heading text-sm focus:outline-none transition-all placeholder:text-muted focus:ring-1 focus:ring-accent"
                        placeholder="Enterprise Inc."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-heading font-display">Your Requirements</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-surface border border-default focus:border-accent text-heading text-sm focus:outline-none transition-all placeholder:text-muted focus:ring-1 focus:ring-accent resize-none"
                      placeholder="Tell us about the roles or consultation services you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-yellow-600 font-semibold text-sm tracking-wider uppercase text-white  hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
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
        <div className="w-full h-96 overflow-hidden shadow-card border border-default">
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
