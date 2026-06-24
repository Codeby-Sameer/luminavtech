import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Bot, Cpu, Users, UserCheck, Zap, Globe, Network, Database, Terminal, Cloud, Search, ArrowRight, Lightbulb, Compass, Award, Building } from 'lucide-react'

export default function Services() {
  const navigate = useNavigate()
  // Full Services from content.md (Lines 38 - 69)
  const servicesList = [
    {
      id: 1,
      title: 'AI Talent Solutions',
      icon: Bot,
      desc: 'Build high-performing AI teams with access to specialized professionals including AI Engineers, Machine Learning Engineers, Data Scientists, Prompt Engineers, AI Architects, and Generative AI Specialists. We help organizations source and hire talent capable of delivering advanced AI initiatives.',
      profiles: ['Generative AI Specialist', 'ML Platform Engineer', 'Prompt Engineer', 'AI Research Scientist']
    },
    {
      id: 2,
      title: 'Specialized IT Talent Acquisition',
      icon: Cpu,
      desc: 'Address challenging hiring needs with targeted recruitment solutions for hard-to-fill IT positions. We leverage extensive talent networks, industry expertise, and a rigorous screening process to identify professionals with the skills and experience required for critical roles.',
      profiles: ['Principal Software Architect', 'Database Administrator', 'Enterprise IT Director', 'Systems Engineer']
    },
    {
      id: 3,
      title: 'Campus & Early Career Recruitment',
      icon: Users,
      desc: 'Develop a strong future workforce by connecting with emerging technology talent. Our campus recruitment solutions help organizations identify, engage, and hire qualified graduates and early-career professionals who can contribute to long-term growth.',
      profiles: ['Associate Software Developer', 'Junior Data Analyst', 'QA Intern', 'Graduate Engineer Trainee']
    },
    {
      id: 4,
      title: 'Diversity Hiring Solutions',
      icon: UserCheck,
      desc: 'Build inclusive and high-performing teams through strategic diversity hiring initiatives. We help organizations attract and engage talent from diverse backgrounds, fostering innovation, collaboration, and long-term business success.',
      profiles: ['Inclusive Leadership Search', 'Underrepresented Tech Pools', 'DEI Sourcing Strategy']
    },
    {
      id: 5,
      title: 'Technology Talent Consulting',
      icon: Zap,
      desc: 'Make informed hiring decisions with expert talent insights and workforce guidance. We help organizations identify hiring challenges, evaluate talent needs, and develop effective staffing strategies that align with business goals and market demands.',
      profiles: ['Skills Gap Assessment', 'Compensation Benchmarking', 'Workforce Scalability Planning']
    },
    {
      id: 6,
      title: 'Offshore & Nearshore Talent Solutions',
      icon: Globe,
      desc: 'Expand your talent pool with access to qualified technology professionals across global markets. We help businesses build cost-effective teams while maintaining quality, productivity, and seamless collaboration.',
      profiles: ['Global Remote Developers', 'Nearshore Tech Center Sourcing', 'Cross-Border Payroll Setup']
    },
    {
      id: 7,
      title: 'Managed Staffing Services (MSP Support)',
      icon: Network,
      desc: 'Simplify workforce management through centralized staffing solutions. We help organizations streamline vendor coordination, improve hiring efficiency, enhance workforce visibility, and optimize contingent labor programs.',
      profiles: ['Vendor Management Support', 'Contingent Labor Compliance', 'Staffing Analytics']
    },
    {
      id: 8,
      title: 'Talent Mapping & Market Intelligence',
      icon: Database,
      desc: 'Gain valuable insights into talent availability, hiring trends, compensation benchmarks, and competitive workforce data. Our talent mapping services help organizations make informed hiring decisions and stay ahead in competitive talent markets.',
      profiles: ['Competitor Talent Mapping', 'Skills Availablity Reports', 'Geographic Talent Sourcing']
    },
    {
      id: 9,
      title: 'Project-Based IT Staffing',
      icon: Terminal,
      desc: 'Build dedicated teams for technology projects with access to developers, architects, QA engineers, DevOps specialists, business analysts, and project managers. Our project-based staffing solutions provide the expertise needed to deliver critical initiatives successfully.',
      profiles: ['React Developers', 'Java Full Stack Engineers', 'DevOps Specialists', 'QA Automation Leads']
    },
    {
      id: 10,
      title: 'AI & Emerging Technology Staffing',
      icon: Bot,
      desc: 'Access highly skilled professionals in Artificial Intelligence, Generative AI, Machine Learning, Data Science, Cloud Computing, and Cybersecurity. We help organizations quickly hire specialized talent to support innovation and digital transformation initiatives.',
      profiles: ['Generative AI Engineer', 'Cybersecurity Analyst', 'Cloud Architect', 'MLOps Engineer']
    },
    {
      id: 11,
      title: 'Digital Transformation Consulting',
      icon: Cloud,
      desc: 'Drive business growth through modern technology solutions and strategic digital initiatives. We help organizations assess current systems, optimize processes, and implement technology strategies that improve efficiency, innovation, and customer experience.',
      profiles: ['Transformation Consultant', 'Cloud Migration Architect', 'Agile Agile Scrum Master']
    },
    {
      id: 12,
      title: 'Global Capability Center (GCC) Talent Support',
      icon: Building,
      desc: 'Support organizations establishing or expanding Global Capability Centers with specialized talent acquisition and workforce scaling solutions. We help businesses build high-performing technology teams that drive innovation, operational excellence, and business continuity.',
      profiles: ['GCC Leadership Executive', 'Regional Ops Director', 'Core Tech Center Staffing']
    },
    {
      id: 13,
      title: 'AI-Powered Recruitment Intelligence',
      icon: Search,
      desc: 'Leverage advanced recruitment technologies and market intelligence to improve hiring outcomes. Our approach combines industry expertise with AI-driven candidate sourcing, talent mapping, skills assessment, and workforce analytics to identify top talent faster and more efficiently.',
      profiles: ['AI-Driven Sourcing', 'Candidate Skills Analytics', 'Predictive Hiring Success Models']
    }
  ]

  // Our Commitment from content.md (Lines 70 - 76)
  const commitments = [
    'We focus on understanding evolving business needs and aligning the right professionals to each opportunity, and we are committed to our work to deliver exceptional talent.',
    'We continuously strive to improve hiring efficiency and strengthen workforce quality through a thoughtful and strategic approach, and we are committed to our work to deliver exceptional talent.',
    'We prioritize building meaningful connections between employers and skilled professionals by ensuring accuracy, speed, and reliability in every engagement, and we are committed to our work to deliver exceptional talent.',
    'We work closely with clients to understand their goals and deliver staffing solutions that support both immediate needs and long-term growth, and we are committed to our work to deliver exceptional talent.',
    'We emphasize consistency, accountability, and quality in every hiring process to ensure the right fit for every role, and we are committed to our work to deliver exceptional talent.',
    'We take a proactive approach to identifying and delivering talent that aligns with both technical requirements and organizational culture, and we are committed to our work to deliver exceptional talent.'
  ]

  // Our Vision from content.md (Lines 77 - 81)
  const visions = [
    {
      title: 'Strategic Talent Partner',
      text: 'To become a leading IT staffing partner that transforms the way organizations hire talent by delivering agile, dependable, and future-ready workforce solutions that support long-term success.',
      icon: Compass
    },
    {
      title: 'Frictionless Scaling',
      text: 'To create a world where every organization has instant access to the right talent, enabling faster growth, stronger teams, and continuous innovation in a dynamic digital economy.',
      icon: Zap
    },
    {
      title: 'Meaningful Connections',
      text: 'To redefine IT staffing by building meaningful connections between skilled professionals and growing businesses through smart, efficient, and people-focused hiring solutions.',
      icon: Lightbulb
    },
    {
      title: 'Operational Excellence',
      text: 'To empower organizations with high-quality talent solutions that simplify hiring, strengthen workforce capabilities, and drive excellence across every stage of business growth.',
      icon: Award
    }
  ]

  return (
    <div className="relative w-full pt-32 pb-24 bg-yellow-100 overflow-hidden text-left">
      {/* Background Gradients */}
      <div className="glow-spot glow-blue w-[700px] h-[700px] -top-20 -left-20" />
      <div className="glow-spot glow-purple w-[600px] h-[600px] top-1/3 right-0" />
      <div className="absolute inset-0 animated-grid pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <span>Specialized Offerings</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            IT Staffing &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              AI Talent Solutions
            </span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            We deliver reliable IT staffing and consulting services that support your evolving business needs and help you stay efficient, agile, and competitive.
          </p>
        </motion.div>
      </div>

      {/* Services Showcase */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((svc, idx) => {
            const IconComp = svc.icon
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 rounded-2xl glass-panel border-slate-200 shadow-xl flex flex-col justify-between group hover:border-blue-500/30 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Micro glow spot */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/15 transition-all" />

                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/25 group-hover:scale-105 transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-blue-400 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Sample profiles */}
                  <div className="pt-2">
                    <div className="text-xs text-slate-500 font-semibold mb-2 font-display uppercase tracking-wider">Example Roles</div>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.profiles.map((role, rIdx) => (
                        <span
                          key={rIdx}
                          className="px-2.5 py-1 rounded bg-slate-100 text-[10px] font-semibold text-slate-500 border border-slate-200"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                  className="flex items-center gap-1 text-xs font-semibold text-blue-500 group-hover:text-blue-400 pt-6 mt-4 border-t border-slate-200 hover:underline"
                >
                  <span>Request Staffing</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="bg-slate-50 border-y border-slate-200 py-28 relative z-10 mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl text-left space-y-4 mb-16">
            <div className="text-blue-500 font-bold text-xs uppercase tracking-widest font-display">Quality Assured</div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900">Our Commitments</h2>
            <p className="text-slate-500 text-sm sm:text-base font-light">
              We stand by our processes and partners, aiming to deliver high-quality, pre-screened IT professionals who make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((cmt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl glass-panel border-slate-200 text-left flex gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-400 flex items-center justify-center font-display font-extrabold text-sm shrink-0">
                  {idx + 1}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-light mt-0.5">
                  {cmt}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-20">
        <div className="text-center space-y-4 mb-16">
          <div className="text-blue-500 font-bold text-xs uppercase tracking-widest font-display">Looking Ahead</div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900">Our Future-Ready Vision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visions.map((vision, idx) => {
            const Icon = vision.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl glass-panel border-slate-200 text-left space-y-4 shadow-xl hover:border-blue-500/25 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-400 transition-colors">
                  {vision.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {vision.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-slate-100 border border-slate-300 p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-2xl text-slate-900">Need custom tech recruitment solutions?</h3>
            <p className="text-sm text-slate-500 font-light max-w-xl">
              We help corporations construct agile technical divisions through custom contract, contract-to-hire, nearshore, or executive search campaigns.
            </p>
          </div>
          <button
            onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-xs tracking-wider uppercase text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer"
          >
            Connect With Advisors
          </button>
        </div>
      </div>
    </div>
  )
}
