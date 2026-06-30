import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { BarChart3, ArrowRight, Check, Briefcase, ShieldCheck, UserCheck, Send, Settings, Handshake, Lightbulb } from 'lucide-react'
import careersImg from '../assets/careers.png'

export default function Careers() {
  const navigate = useNavigate()

  const careerPrograms = [

    {
      id: 1,
      title: 'Workforce Solutions Specialist Program',
      icon: Briefcase,
      tag: 'Workforce Strategy',
      desc: 'For professionals interested in workforce planning and staffing services.',
      benefits: [
        'Workforce strategy exposure',
        'Talent planning techniques',
        'Client workforce consulting',
        'Industry best practices'
      ]
    },
    {
      id: 2,
      title: 'Contract Staffing Excellence Program',
      icon: ShieldCheck,
      tag: 'Staffing Operations',
      desc: 'Focused on temporary and contract staffing operations.',
      benefits: [
        'Contractor management',
        'Staffing compliance training',
        'Resource deployment strategies',
        'Client servicing skills'
      ]
    },
    {
      id: 3,
      title: 'Direct Hire Recruitment Program',
      icon: UserCheck,
      tag: 'Permanent Placement',
      desc: 'Designed for permanent placement specialists.',
      benefits: [
        'Full-cycle recruitment',
        'Candidate assessment methods',
        'Offer negotiation exposure',
        'Hiring strategy development'
      ]
    },
    {
      id: 4,
      title: 'Talent Delivery Program',
      icon: Send,
      tag: 'Talent Sourcing',
      desc: 'For professionals responsible for fulfilling hiring requirements.',
      benefits: [
        'Requirement management',
        'Candidate matching techniques',
        'Delivery performance tracking',
        'Client coordination experience'
      ]
    },
    {
      id: 5,
      title: 'Recruitment Analytics Program',
      icon: BarChart3,
      tag: 'HR Analytics',
      desc: 'Focused on recruitment reporting and workforce metrics.',
      benefits: [
        'Hiring analytics',
        'Recruitment dashboards',
        'Performance measurement',
        'Data-driven decision making'
      ]
    },
    {
      id: 6,
      title: 'HR & Staffing Operations Program',
      icon: Settings,
      tag: 'HR Support',
      desc: 'For candidates interested in staffing administration and HR support.',
      benefits: [
        'HR process exposure',
        'Employee lifecycle management',
        'Compliance awareness',
        'Workforce documentation'
      ]
    },
    {
      id: 7,
      title: 'Client Success Program',
      icon: Handshake,
      tag: 'Client Relations',
      desc: 'Designed for professionals managing staffing relationships.',
      benefits: [
        'Client engagement skills',
        'Service excellence practices',
        'Issue resolution techniques',
        'Account retention strategies'
      ]
    },
    {
      id: 8,
      title: 'Strategic Workforce Consulting Program',
      icon: Lightbulb,
      tag: 'Strategic Consulting',
      desc: 'For future workforce advisors and staffing consultants.',
      benefits: [
        'Workforce planning methodologies',
        'Talent market insights',
        'Business consulting exposure',
        'Strategic recommendation skills'
      ]
    }
  ]

  return (
    <div className="relative w-full pt-32 pb-24 bg-background overflow-hidden text-left">
      {/* Background Gradients */}
      <div className="glow-spot glow-blue w-[700px] h-[700px] -top-20 -left-20" />
      <div className="glow-spot glow-purple w-[600px] h-[600px] top-1/3 right-0" />
      <div className="absolute inset-0 animated-grid pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
              <span>Career Pathways</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-heading tracking-tight leading-tight">
              Accelerate Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-600">
                Professional Journey
              </span>
            </h1>
            <p className="text-body text-lg md:text-xl font-light leading-relaxed">
              Discover a culture of learning, collaboration, and continuous advancement. We offer specialized programs tailored to support your career growth at every experience level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full rounded-2xl overflow-hidden border border-default shadow-[0_0_50px_rgba(59,130,246,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-30 z-10" />
              <img
                src={careersImg}
                alt="LuminaVTech Careers"
                className="w-full h-auto max-h-[300px] sm:max-h-[450px] lg:max-h-[500px] object-contain group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Programs Showcase Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-32">
        <div className="text-left space-y-2 mb-12">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-heading">Unique Career Programs We Offer</h2>
          <p className="text-heading  text-sm  max-w-xl">
            Choose the path that matches your ambitions and start building future-proof skills with our structured curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careerPrograms.map((prog, idx) => {
            const IconComp = prog.icon
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 rounded-card bg-surface border border-default shadow-card flex flex-col justify-between group hover:border-accent transition-all relative overflow-hidden"
              >
                {/* Micro glow spot */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/15 transition-all" />

                <div className="space-y-6">
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 group-hover:scale-105 transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent/90 px-3 py-1 rounded-full bg-accent/5 border border-blue-500/10">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-heading group-hover:text-accent transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-heading leading-relaxed ">
                      {prog.desc}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="pt-4 border-t border-default">
                    <h4 className="text-xs font-semibold text-body uppercase tracking-widest font-display mb-3">Program Benefits:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prog.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-body">
                          <Check className="w-4.5 h-4.5 text-accent shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:text-accent pt-6 mt-6 border-t border-default hover:underline cursor-pointer"
                >
                  <span>Apply For Program</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="rounded-card bg-surface border border-default shadow-card p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-2xl text-heading">Ready to take the next step in your career?</h3>
            <p className="text-sm text-body  max-w-xl">
              Apply today for our customized training and leadership pathways, and align yourself with high-impact industry roles.
            </p>
          </div>
          <button
            onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent font-bold text-xs tracking-wider uppercase text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}
