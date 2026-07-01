import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Plane,
  Landmark,
  HeartPulse,
  ShoppingBag,
  Factory,
  PhoneCall,
  Code,
  Truck,
  Shield,
  Zap,
  Pill,
  Palmtree,
  Car,
  Film,
  Building,
  ArrowRight
} from 'lucide-react'

export default function Industries() {
  const navigate = useNavigate()

  const industriesList = [
    {
      id: 1,
      title: 'Aviation Industry',
      icon: Plane,
      desc: 'LuminaVTech supports aviation organizations with skilled technology professionals who help optimize flight operations, passenger management systems, maintenance platforms, and digital infrastructure. We provide talent across software development, cloud technologies, cybersecurity, and data analytics to help aviation companies improve efficiency, safety, and customer experience. AI-powered predictive maintenance and intelligent flight analytics are increasingly transforming the aviation sector, helping organizations reduce downtime and enhance operational performance.'
    },
    {
      id: 2,
      title: 'Banking, Financial Services & Insurance (BFSI)',
      icon: Landmark,
      desc: 'We provide technology staffing solutions that help financial institutions strengthen digital banking platforms, payment systems, risk management applications, and cybersecurity initiatives. Our professionals support organizations in building secure, scalable, and compliant technology environments. AI is revolutionizing BFSI through fraud detection, risk assessment, automated customer support, and personalized financial services.'
    },
    {
      id: 3,
      title: 'Healthcare & Life Sciences',
      icon: HeartPulse,
      desc: 'LuminaVTech delivers technology talent that supports healthcare providers, pharmaceutical companies, and life sciences organizations in advancing digital healthcare solutions. Our expertise spans healthcare applications, cloud infrastructure, cybersecurity, and healthcare data management. AI-driven diagnostics, predictive healthcare analytics, and intelligent patient care systems are reshaping the future of healthcare delivery.'
    },
    {
      id: 4,
      title: 'Retail & E-Commerce',
      icon: ShoppingBag,
      desc: 'We help retail and e-commerce businesses strengthen their digital platforms through skilled professionals specializing in application development, cloud technologies, data analytics, and customer experience solutions. Our workforce solutions enable businesses to adapt to changing consumer expectations and market demands. AI-powered recommendation engines, customer behavior analysis, and intelligent inventory management are driving innovation across the retail sector.'
    },
    {
      id: 5,
      title: 'Manufacturing & Industrial',
      icon: Factory,
      desc: 'Our staffing solutions support manufacturing organizations with talent experienced in industrial automation, enterprise systems, IoT technologies, and digital transformation initiatives. We help businesses improve productivity, efficiency, and operational visibility. AI is playing a key role in predictive maintenance, quality control automation, and smart factory operations.'
    },
    {
      id: 6,
      title: 'Telecommunications',
      icon: PhoneCall,
      desc: 'LuminaVTech provides technology professionals who support network management, cloud infrastructure, enterprise applications, cybersecurity, and next-generation connectivity solutions. We help telecommunications providers deliver reliable and scalable services in an increasingly connected world. AI-powered network optimization and predictive analytics are helping telecom companies improve performance and customer satisfaction.'
    },
    {
      id: 7,
      title: 'Information Technology & Software',
      icon: Code,
      desc: 'We connect IT and software companies with highly skilled professionals across software development, DevOps, cloud engineering, cybersecurity, QA automation, and emerging technologies. Our talent solutions help organizations accelerate innovation and digital transformation. AI technologies are enabling intelligent automation, advanced software development, and enhanced business decision-making.'
    },
    {
      id: 8,
      title: 'Logistics & Supply Chain',
      icon: Truck,
      desc: 'We support logistics and supply chain organizations with technology talent focused on transportation systems, warehouse management platforms, cloud solutions, and enterprise applications. Our professionals help businesses improve visibility, efficiency, and operational performance. AI is transforming logistics through route optimization, demand forecasting, and real-time supply chain intelligence.'
    },
    {
      id: 9,
      title: 'Government & Public Sector',
      icon: Shield,
      desc: 'LuminaVTech provides technology staffing solutions that support digital government initiatives, cloud modernization, cybersecurity programs, and citizen service platforms. We help public sector organizations strengthen their technology capabilities while maintaining compliance and security. AI is increasingly being used to improve public services, automate administrative processes, and enhance data-driven decision-making.'
    },
    {
      id: 10,
      title: 'Energy & Utilities',
      icon: Zap,
      desc: 'Our technology professionals support energy and utility organizations through digital transformation, smart grid technologies, cloud solutions, and cybersecurity initiatives. We help businesses improve reliability, efficiency, and sustainability across operations. AI-driven predictive maintenance and energy consumption analytics are helping organizations optimize resource utilization and reduce operational costs.'
    },
    {
      id: 11,
      title: 'Pharmaceutical & Biotechnology',
      icon: Pill,
      desc: 'LuminaVTech provides specialized technology talent for pharmaceutical and biotechnology organizations focused on research, data management, cloud computing, and regulatory compliance systems. Our workforce solutions help accelerate innovation and operational excellence. AI is enabling faster drug discovery, clinical research optimization, and advanced healthcare analytics.'
    },
    {
      id: 12,
      title: 'Hospitality & Travel',
      icon: Palmtree,
      desc: 'We support hospitality and travel organizations with technology professionals experienced in booking systems, customer experience platforms, mobile applications, and digital transformation projects. Our solutions help businesses deliver seamless guest experiences and improve operational efficiency. AI-powered personalization and intelligent customer service solutions are redefining guest engagement across the industry.'
    },
    {
      id: 13,
      title: 'Automotive & Transportation',
      icon: Car,
      desc: 'We provide technology talent that supports connected vehicle platforms, transportation management systems, enterprise applications, and digital innovation initiatives. Our professionals help organizations improve efficiency, connectivity, and customer experiences. AI is driving advancements in autonomous vehicles, predictive maintenance, and intelligent transportation systems.'
    },
    {
      id: 14,
      title: 'Media & Entertainment',
      icon: Film,
      desc: 'LuminaVTech helps media and entertainment companies build technology teams that support digital content platforms, streaming services, data analytics, and cloud-based applications. Our staffing solutions enable organizations to deliver engaging digital experiences. AI is transforming content creation, audience insights, and personalized content recommendations.'
    },
    {
      id: 15,
      title: 'Real Estate & Property Management',
      icon: Building,
      desc: 'We provide technology staffing solutions that support property management systems, CRM platforms, cloud technologies, and business intelligence initiatives. Our professionals help organizations streamline operations and improve customer experiences. AI-powered property analytics and predictive market insights are helping organizations make smarter investment decisions.'
    }
  ]

  return (
    <div className="relative w-full pt-32 pb-24 bg-background overflow-hidden text-left">
      {/* Background Gradients */}
      <div className="absolute inset-0 animated-grid pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
            <span>Market Focus</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-heading tracking-tight leading-tight">
            Industries We{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-600">
              Serve & Transform
            </span>
          </h1>
          <p className="text-body text-lg md:text-xl font-light leading-relaxed">
            Delivering specialized tech staffing and consulting solutions customized to the unique compliance, operational, and digital challenges of each sector.
          </p>
        </motion.div>
      </div>

      {/* Industries Showcase */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((ind, idx) => {
            const IconComp = ind.icon
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 rounded-card bg-surface border border-default shadow-card flex flex-col justify-between group hover:border-accent transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Micro glow spot */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/15 transition-all" />

                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 group-hover:scale-105 transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl text-heading group-hover:text-accent transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed font-light">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:text-yellow-600 pt-6 mt-6 border-t border-default hover:underline cursor-pointer"
                >
                  <span>Request Staffing Solutions</span>
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
            <h3 className="font-display font-bold text-2xl text-heading">Need industry-specific talent or consulting?</h3>
            <p className="text-sm text-muted font-light max-w-xl">
              Connect with our account management team to discuss domain-expert developers, engineers, or custom transformation projects.
            </p>
          </div>
          <button
            onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent font-bold text-xs tracking-wider uppercase text-white hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer"
          >
            Connect With Experts
          </button>
        </div>
      </div>
    </div>
  )
}
