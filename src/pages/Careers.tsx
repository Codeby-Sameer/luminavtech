import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Award, TrendingUp, UserPlus, BarChart3, Cpu, Crown, GraduationCap, ArrowRight, Check } from 'lucide-react'

export default function Careers() {
  const navigate = useNavigate()

  const careerPrograms = [
    {
      id: 1,
      title: 'Emerging Talent Program',
      icon: Sparkles,
      tag: 'Graduates & Entry-Level',
      desc: 'For fresh graduates and entry-level professionals seeking hands-on industry experience.',
      benefits: [
        'Structured onboarding',
        'Technical mentorship',
        'Real project exposure',
        'Career coaching'
      ]
    },
    {
      id: 2,
      title: 'Future Leaders Program',
      icon: Award,
      tag: 'High-Potential Talents',
      desc: 'Designed to develop future technology leaders and managers with high strategic value.',
      benefits: [
        'Leadership workshops',
        'Management training',
        'Client engagement experience',
        'Strategic project involvement',
        'Certification Support Program'
      ]
    },
    {
      id: 3,
      title: 'Experienced Professional Growth Program',
      icon: TrendingUp,
      tag: 'Mid-Level Professionals',
      desc: 'For mid-level professionals looking to accelerate their career in IT staffing and technology consulting.',
      benefits: [
        'Advanced skill development',
        'Exposure to complex projects',
        'Performance-based growth opportunities',
        'Cross-functional collaboration'
      ]
    },
    {
      id: 4,
      title: 'IT Recruitment Excellence Program',
      icon: UserPlus,
      tag: 'Recruitment & Sourcing',
      desc: 'Designed for individuals entering or growing in IT recruitment and talent acquisition roles.',
      benefits: [
        'End-to-end recruitment training',
        'Hands-on sourcing practice',
        'Client requirement exposure',
        'ATS and recruitment tools training'
      ]
    },
    {
      id: 5,
      title: 'Sales & Business Development Program',
      icon: BarChart3,
      tag: 'Sales & Client Relations',
      desc: 'For professionals aiming to build careers in IT staffing sales and client acquisition.',
      benefits: [
        'Sales strategy training',
        'Client engagement experience',
        'Market and lead generation exposure',
        'Performance incentive structure'
      ]
    },
    {
      id: 6,
      title: 'Technical Skills Acceleration Program',
      icon: Cpu,
      tag: 'Domain Expertise',
      desc: 'For candidates seeking to strengthen their technical expertise across modern IT domains.',
      benefits: [
        'Training in emerging technologies',
        'Project-based learning',
        'Hands-on technical assignments',
        'Skill enhancement workshops'
      ]
    },
    {
      id: 7,
      title: 'Leadership Development Program',
      icon: Crown,
      tag: 'Operations & Strategy',
      desc: 'A structured program to prepare future leaders in recruitment, operations, and consulting roles.',
      benefits: [
        'Leadership mentoring',
        'Decision-making exposure',
        'Team management training',
        'Strategic business involvement'
      ]
    },
    {
      id: 8,
      title: 'Internship & Industry Readiness Program',
      icon: GraduationCap,
      tag: 'Students & Freshers',
      desc: 'For students and freshers looking to gain real-world industry exposure before entering full-time roles.',
      benefits: [
        'Practical industry training',
        'Live project experience',
        'Communication & workplace skills',
        'Career placement support'
      ]
    }
  ]

  return (
    <div className="relative w-full pt-32 pb-24 bg-blue-50 overflow-hidden text-left">
      {/* Background Gradients */}
      <div className="glow-spot glow-blue w-[700px] h-[700px] -top-20 -left-20" />
      <div className="glow-spot glow-purple w-[600px] h-[600px] top-1/3 right-0" />
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
            <span>Career Pathways</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Accelerate Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Professional Journey
            </span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Discover a culture of learning, collaboration, and continuous advancement. We offer specialized programs tailored to support your career growth at every experience level.
          </p>
        </motion.div>
      </div>

      {/* Programs Showcase Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-32">
        <div className="text-left space-y-2 mb-12">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">Unique Career Programs We Offer</h2>
          <p className="text-slate-500 text-sm font-light max-w-xl">
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
                className="p-8 rounded-2xl glass-panel border-slate-200 shadow-xl flex flex-col justify-between group hover:border-blue-500/30 transition-all relative overflow-hidden"
              >
                {/* Micro glow spot */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/15 transition-all" />

                <div className="space-y-6">
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/25 group-hover:scale-105 transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400/90 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-blue-400 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      {prog.desc}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-display mb-3">Program Benefits:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prog.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                          <Check className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-500 group-hover:text-blue-400 pt-6 mt-6 border-t border-slate-200 hover:underline cursor-pointer"
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
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-slate-100 border border-slate-300 p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-2xl text-slate-900">Ready to take the next step in your career?</h3>
            <p className="text-sm text-slate-500 font-light max-w-xl">
              Apply today for our customized training and leadership pathways, and align yourself with high-impact industry roles.
            </p>
          </div>
          <button
            onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-xs tracking-wider uppercase text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}
