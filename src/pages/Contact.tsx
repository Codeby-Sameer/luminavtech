import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Building, HelpCircle, Briefcase } from 'lucide-react'

export default function Contact() {
  const [form1Submitted, setForm1Submitted] = useState(false)
  const [form2Submitted, setForm2Submitted] = useState(false)

  return (
    <div className="relative w-full pt-32 pb-24 bg-[#020617] overflow-hidden text-left">
      {/* Background elements */}
      <div className="glow-spot glow-blue w-[600px] h-[600px] -top-20 -left-20" />
      <div className="glow-spot glow-purple w-[500px] h-[500px] bottom-10 right-0" />
      <div className="absolute inset-0 animated-grid pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <span>Corporate Communications</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Connect With{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Our Specialists
            </span>
          </h1>
          <p className="text-slate-350 text-lg md:text-xl font-light leading-relaxed">
            Whether you want to source elite engineers or need general consultation about tech markets, select the appropriate department below.
          </p>
        </motion.div>
      </div>

      {/* Forms Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Info Column */}
        <div className="lg:col-span-4 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-white">Global Headquarters</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Our sourcing and partnership advisors are located in key talent hubs across North America, Europe, and India, coordinating 24/7 delivery pipelines.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold font-display">Advisory Inbox</div>
                  <div className="text-sm text-slate-300">contact@luminavtech.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold font-display">Client Line</div>
                  <div className="text-sm text-slate-300">+1 (800) 555-0199</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold font-display">Corporate Locations</div>
                  <div className="text-sm text-slate-300">USA & India Delivery Offices</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border-white/5 space-y-3">
            <h4 className="font-display font-semibold text-sm text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-400" />
              Sourcing Speed
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Sourcing inquiries receive a dedicated shortlist of pre-screened resumes within 72 hours of detailed requirement sign-off.
            </p>
          </div>
        </div>

        {/* Form 1: General Inquiry */}
        <div className="lg:col-span-4">
          <div className="h-full p-8 rounded-3xl glass-panel border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-blue-400" />
                <h3 className="font-display font-bold text-xl text-white">General Inquiries</h3>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We welcome the opportunity to learn about your hiring challenges and business goals. Share your requirements, and our team will work closely with you.
              </p>

              {form1Submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">Message Logged</h4>
                  <p className="text-xs text-slate-400 font-light max-w-[200px] mx-auto">
                    An advisor will reach out to connect shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setForm1Submitted(true)
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-1.5">
                    <label htmlFor="gen-name" className="text-[10px] font-semibold text-slate-400 font-display">Full Name</label>
                    <input
                      type="text"
                      id="gen-name"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-xs focus:outline-none transition-all placeholder:text-slate-700"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="gen-email" className="text-[10px] font-semibold text-slate-400 font-display">Email Address</label>
                    <input
                      type="email"
                      id="gen-email"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-xs focus:outline-none transition-all placeholder:text-slate-700"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="gen-phone" className="text-[10px] font-semibold text-slate-400 font-display">Phone Number</label>
                    <input
                      type="tel"
                      id="gen-phone"
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-xs focus:outline-none transition-all placeholder:text-slate-700"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="gen-message" className="text-[10px] font-semibold text-slate-400 font-display">Message</label>
                    <textarea
                      id="gen-message"
                      rows={3}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-xs focus:outline-none transition-all placeholder:text-slate-700 resize-none"
                      placeholder="Enter inquiry details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-xs tracking-wider uppercase text-white shadow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Send Inquiry
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Form 2: Sourcing Request */}
        <div className="lg:col-span-4">
          <div className="h-full p-8 rounded-3xl glass-panel border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-indigo-400" />
                <h3 className="font-display font-bold text-xl text-white">Staffing Requests</h3>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Whether you plan to scale, fill critical roles, or explore long-term staffing partnerships, share your details and we will ensure the right team member reaches out.
              </p>

              {form2Submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">Request Logged</h4>
                  <p className="text-xs text-slate-400 font-light max-w-[200px] mx-auto">
                    Our technical account directors will contact you with profiles.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setForm2Submitted(true)
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="staff-first" className="text-[10px] font-semibold text-slate-400 font-display">First Name</label>
                      <input
                        type="text"
                        id="staff-first"
                        required
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-xs focus:outline-none transition-all placeholder:text-slate-700"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="staff-last" className="text-[10px] font-semibold text-slate-400 font-display">Last Name</label>
                      <input
                        type="text"
                        id="staff-last"
                        required
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-xs focus:outline-none transition-all placeholder:text-slate-700"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="staff-email" className="text-[10px] font-semibold text-slate-400 font-display">Corporate Email</label>
                    <input
                      type="email"
                      id="staff-email"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-xs focus:outline-none transition-all placeholder:text-slate-700"
                      placeholder="john@enterprise.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="staff-phone" className="text-[10px] font-semibold text-slate-400 font-display">Phone</label>
                    <input
                      type="tel"
                      id="staff-phone"
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-xs focus:outline-none transition-all placeholder:text-slate-700"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="staff-message" className="text-[10px] font-semibold text-slate-400 font-display">Requirements</label>
                    <textarea
                      id="staff-message"
                      rows={2}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-xs focus:outline-none transition-all placeholder:text-slate-700 resize-none"
                      placeholder="Describe the skills and timeline needed..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-650 to-blue-600 font-semibold text-xs tracking-wider uppercase text-white shadow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Initiate Request
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
