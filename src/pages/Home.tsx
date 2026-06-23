import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Bot, Cpu, Network, Shield, Database, Cloud, Terminal as TerminalIcon, CheckCircle2, UserCheck, Zap, Globe as GlobeIcon, Users, Calendar, Mail, Phone, MapPin, Building2 } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Particles from '../components/Particles'
import Globe from '../components/Globe'
import { Terminal, AnimatedSpan, TypingAnimation } from '../components/Terminal'

gsap.registerPlugin(ScrollTrigger)

// Resolve ESM/CJS interop mismatch for react-countup in some bundlers
const CountUpComponent = (CountUp as any).default || CountUp

const techDetails: Record<string, { desc: string; skills: string[]; metrics: string }> = {
  'Generative AI': {
    desc: 'Empowering enterprises with custom LLMs, RAG architectures, and AI agent orchestration.',
    skills: ['LLM Fine-tuning', 'Prompt Engineering', 'LangChain', 'LlamaIndex', 'Vector Databases'],
    metrics: '120+ active engineers available for hire'
  },
  'Artificial Intelligence': {
    desc: 'Deploying neural networks, cognitive computing engines, and natural language interfaces.',
    skills: ['NLP', 'Computer Vision', 'PyTorch', 'TensorFlow', 'Deep Learning'],
    metrics: '150+ pre-vetted AI experts in network'
  },
  'Machine Learning': {
    desc: 'Building predictive pipelines, anomaly detection, and recommendation algorithms.',
    skills: ['Scikit-Learn', 'Pandas/NumPy', 'Feature Engineering', 'MLOps', 'AWS SageMaker'],
    metrics: '95%+ match accuracy on candidate sourcing'
  },
  'Python Full Stack': {
    desc: 'Rapid web application development paired with high-performance backends and data pipelines.',
    skills: ['Django', 'FastAPI', 'Flask', 'PostgreSQL', 'React/Vue integrations'],
    metrics: 'Average turnaround: 72 hours to source'
  },
  'React Development': {
    desc: 'Crafting responsive, visually stunning web interfaces with modern state management.',
    skills: ['React 19', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux / Zustand'],
    metrics: 'Top 3% of front-end developers'
  },
  'Java Full Stack': {
    desc: 'Robust, enterprise-grade architecture with microservices and cloud deployments.',
    skills: ['Spring Boot', 'Hibernate', 'Microservices', 'Docker', 'Kubernetes'],
    metrics: 'Trusted by Fortune 500 BFSI clients'
  },
  'DevOps': {
    desc: 'Streamlining CI/CD pipelines, containerization, and infrastructure-as-code automation.',
    skills: ['Terraform', 'Ansible', 'GitHub Actions', 'Docker', 'AWS/Azure/GCP'],
    metrics: 'Zero-downtime deployment pipelines'
  },
  'Data Science': {
    desc: 'Turning raw organizational data into actionable business intelligence and reports.',
    skills: ['Statistical Modeling', 'A/B Testing', 'Tableau', 'PowerBI', 'SQL/Python'],
    metrics: 'Data-driven business acceleration'
  },
  'Data Engineering': {
    desc: 'Constructing robust data pipelines, data lakes, and scalable ETL processes.',
    skills: ['Apache Spark', 'Kafka', 'Snowflake', 'Hadoop', 'Databricks'],
    metrics: 'Terabyte-scale processing architectures'
  },
  'Cybersecurity': {
    desc: 'Protecting cloud infrastructure, threat modeling, and implementing zero-trust systems.',
    skills: ['Penetration Testing', 'IAM', 'SOC Monitoring', 'SIEM', 'OWASP Standards'],
    metrics: 'Certified CISSP/CEH security experts'
  },
  'QA Automation': {
    desc: 'Ensuring software quality and stability through rigorous automated testing suites.',
    skills: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'CI pipeline integration'],
    metrics: '99.8% post-release bug reduction'
  },
  'Salesforce': {
    desc: 'Customizing and integrating Salesforce CRM platforms to drive sales performance.',
    skills: ['Apex', 'Lightning Web Components', 'Sales/Service Cloud', 'MuleSoft integrations'],
    metrics: 'Certified Salesforce Developers & Admins'
  },
  'SAP': {
    desc: 'Enterprise resource planning integrations across supply chain, finance, and operations.',
    skills: ['ABAP', 'SAP S/4HANA', 'Fiori', 'SAP Cloud Platform', 'SuccessFactors'],
    metrics: 'Over 10+ years average consultant tenure'
  },
  'ServiceNow': {
    desc: 'Automating IT workflows, employee experiences, and customer service management.',
    skills: ['ITSM', 'ITOM', 'Service Portal', 'JavaScript', 'IntegrationHub'],
    metrics: 'Gold-standard workflow implementation'
  },
  'Business Analysis': {
    desc: 'Bridging technical capabilities with business goals through detailed requirement mapping.',
    skills: ['Agile/Scrum', 'Requirement Gathering', 'UML Modeling', 'Jira/Confluence', 'User Stories'],
    metrics: 'Flawless alignment between tech & business'
  }
}

const industryDetails: Record<string, { desc: string; projects: string[]; demand: string }> = {
  'Aviation': {
    desc: 'Digital modernization of airline operations, flight scheduling, and reservation systems.',
    projects: ['Crew dispatch management systems', 'Passenger check-in portal design', 'IoT maintenance alerts'],
    demand: 'High demand for C++ and Real-Time Systems engineers'
  },
  'BFSI': {
    desc: 'Secure digital banking portals, real-time transaction processing, and automated fraud checks.',
    projects: ['Cross-border payment gateways', 'Automated credit score analysis', 'Cloud ledger migrations'],
    demand: 'Strong need for Core Java and Cybersecurity specialists'
  },
  'Healthcare': {
    desc: 'HIPAA-compliant platforms, virtual clinic scheduling, and real-time medical diagnostics integrations.',
    projects: ['EHR cloud integrations', 'Telehealth video consultations', 'AI diagnostic image analysis'],
    demand: 'High demand for Node.js, Python, and Compliance experts'
  },
  'Retail': {
    desc: 'Next-gen e-commerce engines, customer recommendation algorithms, and inventory pipelines.',
    projects: ['Headless commerce store development', 'AI pricing optimization models', 'Omnichannel inventory sync'],
    demand: 'Focus on React, Next.js, and Node.js developers'
  },
  'Manufacturing': {
    desc: 'Industrial IoT implementations, smart factory analytics, and supply chain tracking.',
    projects: ['Predictive assembly line monitoring', 'RFID inventory scan networks', 'Warehouse robotics control'],
    demand: 'Demand for IoT, Embedded Rust, and Python/Django'
  },
  'Telecom': {
    desc: 'High-availability routing systems, billing platforms, and next-gen 5G integrations.',
    projects: ['Automated usage billing software', 'Network load monitoring APIs', '5G edge computing wrappers'],
    demand: 'High demand for Go, Scala, and Network Engineers'
  },
  'IT & Software': {
    desc: 'Delivering full-lifecycle product development, cloud migrations, and platform scale.',
    projects: ['SaaS application bootstrap', 'Legacy monolith to microservice migration', 'DevOps audit'],
    demand: 'Continuous demand for React, Java, Python, and AWS/Azure'
  },
  'Logistics': {
    desc: 'Real-time fleet tracking, route optimization engines, and supply chain transparency.',
    projects: ['GPS-guided vehicle dispatcher', 'Last-mile delivery route mapping', 'IoT cargo temperature checks'],
    demand: 'Needs Python, GIS Mapping APIs, and React Native'
  },
  'Government': {
    desc: 'Highly secure municipal systems, public portals, and secure cloud storage solutions.',
    projects: ['Citizen document portals', 'Secure identity authentication APIs', 'Public records database design'],
    demand: 'Requires Security Clearances, CISSP, and secure JVM stacks'
  },
  'Energy': {
    desc: 'Sustainability analytics, smart grid integrations, and environmental impact reporting tools.',
    projects: ['Smart meter telemetry ingest', 'Carbon emission calculation dashboards', 'Solar grid management panels'],
    demand: 'Python, Time-series databases (InfluxDB), React'
  },
  'Pharma': {
    desc: 'Managing drug trial data, secure clinical research storage, and laboratory integrations.',
    projects: ['Clinical trial dashboard', 'Regulatory file submission systems', 'Bio-analytics data pipelines'],
    demand: 'Python, R, and GxP compliance consultants'
  },
  'Hospitality': {
    desc: 'Dynamic booking systems, digital customer care chats, and custom loyalty portals.',
    projects: ['Multi-currency hotel booker', 'AI guest communication bot', 'Reward point ledger system'],
    demand: 'React, Node.js, and third-party API integration expertise'
  },
  'Automotive': {
    desc: 'Connected vehicle software, autonomous driving simulation pipelines, and customer portals.',
    projects: ['In-car infotainment applications', 'Sensor data ingestion tools', 'Dealership management systems'],
    demand: 'C/C++, Python, Qt/QML, and cloud streaming experts'
  },
  'Media': {
    desc: 'High-speed media streaming, digital rights management, and user behavior analytics.',
    projects: ['Custom video encoder pipelines', 'Subscription management engine', 'Real-time stream telemetry'],
    demand: 'AWS Elementals, FFmpeg, React, Python'
  },
  'Real Estate': {
    desc: 'PropTech platforms, virtual property tour integrations, and secure transaction workflows.',
    projects: ['Tenant portal & billing app', 'VR interactive listings engine', 'Property valuation database'],
    demand: 'Node.js, Postgres, React Native'
  }
}

interface HomeProps {
  setCurrentPage: (page: string) => void
}

export default function Home({ setCurrentPage }: HomeProps) {
  const [selectedDomain, setSelectedDomain] = useState<{
    type: 'tech' | 'industry'
    name: string
  } | null>(null)
  const [activeTab, setActiveTab] = useState<'tech' | 'industry'>('tech')
  const [terminalKey, setTerminalKey] = useState(0)

  const containerRef = useRef<HTMLDivElement | null>(null)
  
  // Section Refs for GSAP animations
  const scrollTextSectionRef = useRef<HTMLDivElement | null>(null)
  const scrollTextRef = useRef<HTMLHeadingElement | null>(null)
  const splitAboutSectionRef = useRef<HTMLDivElement | null>(null)
  const aboutLeftRef = useRef<HTMLDivElement | null>(null)
  const aboutRightRef = useRef<HTMLDivElement | null>(null)
  const scrollStorySectionRef = useRef<HTMLDivElement | null>(null)
  
  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false)

  // InView hooks for triggering entry animations
  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    // 1. GSAP: Large Scroll Typography Section (Scale & Opacity Zoom)
    const textEl = scrollTextRef.current
    const sectionTextEl = scrollTextSectionRef.current
    if (textEl && sectionTextEl) {
      gsap.fromTo(
        textEl,
        { scale: 0.4, opacity: 0 },
        {
          scale: 1.2,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionTextEl,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      )
    }

    // 2. GSAP: Split About Section (Left/Right enter and meet in center)
    const aboutSec = splitAboutSectionRef.current
    const leftEl = aboutLeftRef.current
    const rightEl = aboutRightRef.current
    if (aboutSec && leftEl && rightEl) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSec,
          start: 'top 80%',
          end: 'center 40%',
          scrub: true,
        },
      })
      tl.fromTo(leftEl, { x: -200, opacity: 0 }, { x: 0, opacity: 1 }, 0)
      tl.fromTo(rightEl, { x: 200, opacity: 0 }, { x: 0, opacity: 1 }, 0)
    }

    // 3. GSAP: Scroll Story Section (Cards merge in center)
    const storySec = scrollStorySectionRef.current
    if (storySec) {
      const cards = storySec.querySelectorAll('.story-card')
      const mergedText = storySec.querySelector('.merged-text')
      const storyTitle = storySec.querySelector('.story-title')
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: storySec,
          start: 'top top',
          end: 'bottom+=1200 bottom',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Animate card 1 from left, card 2 from right, card 3 from left, card 4 from right
      tl.fromTo(cards[0], { x: '-150vw', y: '-50vh', rotation: -30 }, { x: '-60px', y: '-60px', rotation: -10, duration: 2 }, 0)
      tl.fromTo(cards[1], { x: '150vw', y: '-50vh', rotation: 30 }, { x: '60px', y: '-60px', rotation: 10, duration: 2 }, 0)
      tl.fromTo(cards[2], { x: '-150vw', y: '50vh', rotation: -15 }, { x: '-60px', y: '60px', rotation: -5, duration: 2 }, 0)
      tl.fromTo(cards[3], { x: '150vw', y: '50vh', rotation: 15 }, { x: '60px', y: '60px', rotation: 5, duration: 2 }, 0)
      
      // Merge all in center
      tl.to(cards, { x: 0, y: 0, rotation: 0, scale: 0.9, duration: 1.5, opacity: 0.15 }, 'merge')
      tl.to(storyTitle, { opacity: 0, duration: 0.5 }, 'merge')
      
      // Reveal the merged message
      tl.fromTo(mergedText, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5 }, 'merge+=0.5')
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Floating technology icons configuration for Hero Section
  const techIcons = [
    { component: Bot, label: 'AI', color: 'text-blue-400', top: '15%', left: '10%' },
    { component: Cpu, label: 'ML', color: 'text-indigo-400', top: '65%', left: '15%' },
    { component: Network, label: 'Data', color: 'text-cyan-400', top: '25%', left: '75%' },
    { component: Shield, label: 'Cyber', color: 'text-blue-500', top: '70%', left: '80%' },
  ]

  // Services list
  const services = [
    { title: 'AI Talent Solutions', icon: Bot, desc: 'Build high-performing AI teams with specialized professionals including ML Engineers, Prompt Engineers, and Generative AI Specialists.' },
    { title: 'Specialized IT Talent Acquisition', icon: Cpu, desc: 'Address challenging hiring needs with targeted recruitment solutions for hard-to-fill IT and software roles.' },
    { title: 'Campus Recruitment', icon: Users, desc: 'Develop a strong future workforce by connecting with qualified graduates and early-career tech professionals.' },
    { title: 'Diversity Hiring', icon: UserCheck, desc: 'Build inclusive, high-performing technology teams through strategic diversity hiring initiatives.' },
    { title: 'Technology Talent Consulting', icon: Zap, desc: 'Make informed hiring decisions with expert talent insights and workforce planning strategies.' },
    { title: 'Offshore & Nearshore Staffing', icon: GlobeIcon, desc: 'Expand your talent pool with access to qualified technology professionals across cost-effective global markets.' },
    { title: 'Managed Staffing Services', icon: Network, desc: 'Simplify workforce management, vendor coordination, and optimize contingent labor programs.' },
    { title: 'Talent Mapping', icon: Database, desc: 'Gain valuable insights into talent availability, hiring trends, compensation benchmarks, and competitors.' },
    { title: 'Project-Based Staffing', icon: TerminalIcon, desc: 'Access developers, architects, and project managers to deliver critical technology projects on time.' },
    { title: 'Digital Transformation Consulting', icon: Cloud, desc: 'Assess systems, optimize legacy processes, and implement modern cloud strategies to drive growth.' },
  ]

  // Technologies (horizontal scroll marquee)
  const technologies = [
    'Generative AI', 'Artificial Intelligence', 'Machine Learning', 'Python Full Stack', 
    'React Development', 'Java Full Stack', 'DevOps', 'Data Science', 'Data Engineering', 
    'Cybersecurity', 'QA Automation', 'Salesforce', 'SAP', 'ServiceNow', 'Business Analysis'
  ]

  // Industries (opposite direction marquee)
  const industries = [
    { name: 'Aviation', desc: 'Flight ops, digital infrastructure' },
    { name: 'BFSI', desc: 'Secure digital banking & payments' },
    { name: 'Healthcare', desc: 'Diagnostics & cloud data systems' },
    { name: 'Retail', desc: 'AI engines & e-commerce' },
    { name: 'Manufacturing', desc: 'IoT, industrial automation' },
    { name: 'Telecom', desc: 'Network ops & next-gen connectivity' },
    { name: 'IT & Software', desc: 'DevOps, cloud & dev staffing' },
    { name: 'Logistics', desc: 'Supply chain & route optimization' },
    { name: 'Government', desc: 'Public modernization & security' },
    { name: 'Energy', desc: 'Sustainability & smart grid tech' },
    { name: 'Pharma', desc: 'Drug discovery & clinical research' },
    { name: 'Hospitality', desc: 'Booking & digital customer care' },
    { name: 'Automotive', desc: 'Autonomous driving & vehicles' },
    { name: 'Media', desc: 'Streaming, content analytics' },
    { name: 'Real Estate', desc: 'Smart management & analytics' },
  ]

  // Bento grid items for "Why Choose Us"
  const bentoGrid = [
    { title: 'Faster Hiring', desc: 'Proactive sourcing and global talent pools reduce time-to-hire dramatically, ensuring you get talent when you need it.', icon: Zap, size: 'col-span-1 lg:col-span-2' },
    { title: 'Pre-Vetted Talent', desc: 'Rigorous vetting processes ensure candidates possess strong technical and professional competencies.', icon: CheckCircle2, size: 'col-span-1' },
    { title: 'AI Talent Matching', desc: 'Our advanced matchmaking insights align technical capabilities with your company culture with surgical precision.', icon: Bot, size: 'col-span-1' },
    { title: 'Global Talent Access', desc: 'Leverage our robust nearshore and offshore talent pipeline to scale your engineering team globally.', icon: GlobeIcon, size: 'col-span-1 lg:col-span-2' },
    { title: 'Workforce Consulting', desc: 'Strategic workforce planning and data-driven market intelligence help you navigate shifting technology landscapes.', icon: Users, size: 'col-span-1' },
    { title: 'Long-Term Partnership', desc: 'We build lasting relationships with client enterprises, focusing on value creation and sustainable scale.', icon: UserCheck, size: 'col-span-1 lg:col-span-2' },
  ]

  // Metrics Data
  const metrics = [
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 72, suffix: 'h', label: 'Average Talent Delivery' },
    { value: 500, suffix: '+', label: 'Talent Network Size' },
    { value: 15, suffix: '+', label: 'Technology Domains' },
  ]

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#020617]">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
        {/* Glow Spheres */}
        <div className="glow-spot glow-blue w-[600px] h-[600px] -top-10 -left-10" />
        <div className="glow-spot glow-cyan w-[500px] h-[500px] bottom-10 right-10" />
        <div className="absolute inset-0 animated-grid pointer-events-none" />
        
        {/* Particles Network */}
        <Particles />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <Bot className="w-4 h-4 animate-pulse" />
              <span>Next-Gen Talent Acquisition</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Powering Business Growth Through{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                People & Technology
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Delivering IT Staffing, AI Talent Solutions, Workforce Consulting and Specialized Technology Recruitment for modern enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-sm tracking-wide text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Talk To Experts
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 font-semibold text-sm tracking-wide text-white hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Hero Globe Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glass Box Container for Globe */}
            <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-3xl glass-panel relative flex items-center justify-center overflow-hidden shadow-2xl border-white/10">
              <Globe />
            </div>

            {/* Floating Tech Icons on Globe Side */}
            {techIcons.map((icon, idx) => {
              const IconComp = icon.component
              return (
                <motion.div
                  key={idx}
                  className="absolute p-3 rounded-2xl glass-panel border-white/10 flex items-center gap-2 shadow-lg cursor-pointer"
                  style={{ top: icon.top, left: icon.left }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: idx * 1.2,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.1, borderColor: 'rgba(96,165,250,0.4)' }}
                >
                  <IconComp className={`w-5 h-5 ${icon.color}`} />
                  <span className="text-xs font-semibold text-slate-300 font-display">{icon.label}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2. Large Scroll Typography Section */}
      <section
        ref={scrollTextSectionRef}
        className="relative h-screen bg-[#020617] flex items-center justify-center z-10 overflow-hidden"
      >
        <div className="absolute inset-0 animated-grid opacity-30 pointer-events-none" />
        <div className="glow-spot glow-blue w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        <h2
          ref={scrollTextRef}
          className="font-display font-black text-5xl md:text-8xl tracking-wider text-center leading-none text-white select-none whitespace-pre-line uppercase"
        >
          THE FUTURE{'\n'}OF TALENT{'\n'}IS HERE
        </h2>
      </section>

      {/* 3. About LuminaVTech (Timeline / Split Entrance) */}
      <section
        ref={splitAboutSectionRef}
        className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto z-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column heading */}
          <div ref={aboutLeftRef} className="lg:col-span-5 space-y-6 text-left">
            <div className="text-blue-500 font-bold text-xs uppercase tracking-widest font-display">Who We Are</div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white leading-tight">
              Delivering Premium IT Staffing & AI Talent Solutions
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded" />
          </div>

          {/* Right Column content */}
          <div ref={aboutRightRef} className="lg:col-span-7 text-left space-y-6 text-slate-350 leading-relaxed text-base font-light">
            <p>
              At LuminaVTech, we believe that great businesses are built by great people. As a trusted IT staffing and workforce solutions partner, we specialize in connecting organizations with highly skilled technology professionals who help drive innovation, efficiency, and growth.
            </p>
            <p>
              Our expertise lies in understanding the unique talent needs of modern businesses and delivering customized staffing solutions that support both short-term projects and long-term strategic goals. With a strong network of qualified IT professionals and a commitment to excellence, we help companies build agile, high-performing teams that can thrive in today's rapidly evolving digital landscape.
            </p>
            <p>
              We also leverage AI-driven talent insights to better align candidate skills with evolving job requirements, enabling more precise and efficient hiring decisions. Additionally, we use intelligent sourcing methods to identify niche technology professionals faster across competitive talent markets.
            </p>
            <button
              onClick={() => setCurrentPage('about')}
              className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors mt-2"
            >
              Read Company Story
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="relative py-28 bg-[#090f20]/60 border-y border-white/5 z-10">
        <div className="absolute inset-0 animated-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="text-blue-500 font-bold text-xs uppercase tracking-widest font-display">Specialized Capabilities</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">Our Staffing & AI Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              We deliver reliable IT staffing and consulting services that support your evolving business needs and help you stay efficient, agile, and competitive.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => {
              const Icon = svc.icon
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col text-left space-y-4 shadow-xl border-white/5 relative group overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Glowing background spot for hover */}
                  <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all" />
                  
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600/25 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                    {svc.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed font-light flex-grow">
                    {svc.desc}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-500 group-hover:text-blue-400 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setCurrentPage('services')}
              className="px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-semibold tracking-wide text-white transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Scroll Story Section (Pinned side merge) */}
      <section
        ref={scrollStorySectionRef}
        className="relative h-screen bg-[#020617] flex items-center justify-center z-10 overflow-hidden"
      >
        <div className="absolute inset-0 animated-grid opacity-30 pointer-events-none" />
        <div className="glow-spot glow-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative h-full">
          
          <h2 className="story-title absolute top-20 font-display font-bold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            Our Core Pillars
          </h2>

          {/* Cards to merge */}
          <div className="relative w-full h-[400px] flex items-center justify-center">
            {/* Card 1: Talent */}
            <div className="story-card absolute w-[260px] h-[180px] rounded-2xl glass-panel border-white/10 p-6 flex flex-col justify-between shadow-2xl">
              <Users className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="font-display font-bold text-xl text-white">Talent</h3>
                <p className="text-xs text-slate-400 mt-1">Connecting organizations with top skilled tech experts.</p>
              </div>
            </div>

            {/* Card 2: Technology */}
            <div className="story-card absolute w-[260px] h-[180px] rounded-2xl glass-panel border-white/10 p-6 flex flex-col justify-between shadow-2xl">
              <Cpu className="w-8 h-8 text-indigo-400" />
              <div>
                <h3 className="font-display font-bold text-xl text-white">Technology</h3>
                <p className="text-xs text-slate-400 mt-1">Harnessing tech tools and expert engineering pools.</p>
              </div>
            </div>

            {/* Card 3: Innovation */}
            <div className="story-card absolute w-[260px] h-[180px] rounded-2xl glass-panel border-white/10 p-6 flex flex-col justify-between shadow-2xl">
              <Bot className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="font-display font-bold text-xl text-white">Innovation</h3>
                <p className="text-xs text-slate-400 mt-1">Leveraging AI insights for intelligent matchmaking.</p>
              </div>
            </div>

            {/* Card 4: Growth */}
            <div className="story-card absolute w-[260px] h-[180px] rounded-2xl glass-panel border-white/10 p-6 flex flex-col justify-between shadow-2xl">
              <Zap className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="font-display font-bold text-xl text-white">Growth</h3>
                <p className="text-xs text-slate-400 mt-1">Scaling business operations and project delivery.</p>
              </div>
            </div>

            {/* Merged Text Overlay */}
            <div className="merged-text absolute text-center pointer-events-none opacity-0 select-none">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-6 uppercase tracking-widest font-display">
                Mission Achieved
              </div>
              <h3 className="font-display font-black text-4xl sm:text-7xl text-white leading-none tracking-tight">
                Building Future-Ready Teams
              </h3>
              <p className="text-slate-400 mt-6 text-sm sm:text-lg font-light max-w-xl mx-auto">
                By uniting talent, technology, innovation, and growth, we forge high-performing workforce models for enterprises globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 & 7. Interactive Domain & Industry Expertise Section */}
      <section className="relative py-28 bg-[#090f20]/40 border-y border-white/5 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617] opacity-60 pointer-events-none" />
        <div className="absolute inset-0 animated-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left space-y-4 mb-16">
            <div className="text-blue-500 font-bold text-xs uppercase tracking-widest font-display">Interactive Directory</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-2">Explore Our Domain Expertise</h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              LuminaVTech covers a vast array of cutting-edge technologies and industry verticals. Select a pill below to run simulated database query diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Terminal */}
            <div className="lg:col-span-6 w-full lg:sticky lg:top-24">
              {selectedDomain === null ? (
                <Terminal key={terminalKey}>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <span>$</span>
                    <TypingAnimation delay={0}>systeminfo --guest</TypingAnimation>
                  </div>
                  <AnimatedSpan delay={400} className="text-blue-400 font-bold">
                    LuminaVTech Enterprise Talent Registry v1.0.0
                  </AnimatedSpan>
                  <AnimatedSpan delay={700} className="text-slate-500">
                    =============================================
                  </AnimatedSpan>
                  <AnimatedSpan delay={1000} className="text-slate-300">
                    Ready to query database. Select any Industry Vertical or Technology Domain on the right to inspect talent metrics.
                  </AnimatedSpan>
                  <AnimatedSpan delay={1500} className="text-indigo-400 font-semibold">
                    💡 Click on any expertise pill to run a real-time diagnostics profile!
                  </AnimatedSpan>
                  <AnimatedSpan delay={2000} className="text-slate-500 border-t border-white/5 pt-2 mt-4 text-xs">
                    Need instant consultation? Feel free to contact our support team at contact@luminavtech.com.
                  </AnimatedSpan>
                </Terminal>
              ) : selectedDomain.type === 'tech' ? (
                (() => {
                  const details = techDetails[selectedDomain.name] || { desc: '', skills: [], metrics: '' }
                  return (
                    <Terminal key={terminalKey}>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                        <span>$</span>
                        <TypingAnimation delay={0} speed={15}>{`resolve-domain --tech "${selectedDomain.name}"`}</TypingAnimation>
                      </div>
                      <AnimatedSpan delay={400} className="text-cyan-400">
                        [RESOLVING] Querying LuminaVTech active engineering records...
                      </AnimatedSpan>
                      <AnimatedSpan delay={800} className="text-emerald-400">
                        [SUCCESS] Retrieved technology profile for "{selectedDomain.name}"
                      </AnimatedSpan>
                      <AnimatedSpan delay={1200} className="text-slate-300">
                        <span className="text-slate-500">Scope:</span> {details.desc}
                      </AnimatedSpan>
                      <AnimatedSpan delay={1600} className="text-slate-300 space-y-1">
                        <span className="text-slate-500">Key Sub-Skills:</span>
                        <div className="pl-4 flex flex-wrap gap-2 pt-1">
                          {details.skills.map((skill, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-mono">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </AnimatedSpan>
                      <AnimatedSpan delay={2000} className="text-blue-400 font-semibold">
                        📈 Talent Metric: {details.metrics}
                      </AnimatedSpan>
                      <AnimatedSpan delay={2400} className="text-slate-400 border-t border-white/5 pt-3 mt-4 text-xs flex flex-col gap-1.5">
                        <span className="text-slate-350 font-bold text-sm">✉️ Feel free to contact us!</span>
                        <span>Need experts in {selectedDomain.name}? Reach out to our staffing team at contact@luminavtech.com or click "Talk To Experts"!</span>
                      </AnimatedSpan>
                    </Terminal>
                  )
                })()
              ) : (
                (() => {
                  const details = industryDetails[selectedDomain.name] || { desc: '', projects: [], demand: '' }
                  return (
                    <Terminal key={terminalKey}>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                        <span>$</span>
                        <TypingAnimation delay={0} speed={15}>{`resolve-domain --industry "${selectedDomain.name}"`}</TypingAnimation>
                      </div>
                      <AnimatedSpan delay={400} className="text-cyan-400">
                        [RESOLVING] Indexing industry capability matrix...
                      </AnimatedSpan>
                      <AnimatedSpan delay={800} className="text-emerald-400">
                        [SUCCESS] Retrieved vertical profile for "{selectedDomain.name}"
                      </AnimatedSpan>
                      <AnimatedSpan delay={1200} className="text-slate-300">
                        <span className="text-slate-500">Focus Area:</span> {details.desc}
                      </AnimatedSpan>
                      <AnimatedSpan delay={1600} className="text-slate-300 space-y-1.5">
                        <span className="text-slate-500">Key Project Capabilities:</span>
                        <div className="space-y-1">
                          {details.projects.map((proj, idx) => (
                            <div key={idx} className="pl-4 text-slate-300 text-xs flex items-center gap-1">
                              <span className="text-blue-500">↳</span> {proj}
                            </div>
                          ))}
                        </div>
                      </AnimatedSpan>
                      <AnimatedSpan delay={2000} className="text-blue-400 font-semibold">
                        📈 Industry Demand: {details.demand}
                      </AnimatedSpan>
                      <AnimatedSpan delay={2400} className="text-slate-400 border-t border-white/5 pt-3 mt-4 text-xs flex flex-col gap-1.5">
                        <span className="text-slate-350 font-bold text-sm">✉️ Feel free to contact us!</span>
                        <span>Partner with LuminaVTech to build custom development or QA squads. Email us at contact@luminavtech.com!</span>
                      </AnimatedSpan>
                    </Terminal>
                  )
                })()
              )}
            </div>

            {/* Right Column: Interactive Selectors */}
            <div className="lg:col-span-6 space-y-6">
              {/* Tab Toggles */}
              <div className="flex space-x-3 bg-slate-950/40 p-1.5 rounded-2xl border border-white/5">
                <button
                  onClick={() => setActiveTab('tech')}
                  className={`flex-1 py-3 px-4 rounded-xl font-display font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer ${
                    activeTab === 'tech'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-transparent text-slate-450 hover:text-slate-200'
                  }`}
                >
                  Tech Expertise
                </button>
                <button
                  onClick={() => setActiveTab('industry')}
                  className={`flex-1 py-3 px-4 rounded-xl font-display font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer ${
                    activeTab === 'industry'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-transparent text-slate-450 hover:text-slate-200'
                  }`}
                >
                  Industry Verticals
                </button>
              </div>

              {/* Items Grid */}
              <div>
                {activeTab === 'tech' ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                    {technologies.map((tech) => {
                      const isSelected = selectedDomain?.type === 'tech' && selectedDomain.name === tech
                      return (
                        <button
                          key={tech}
                          onClick={() => {
                            setSelectedDomain({ type: 'tech', name: tech })
                            setTerminalKey((prev) => prev + 1)
                          }}
                          className={`px-4 py-3 rounded-xl text-xs font-semibold border transition-all text-center justify-center items-center flex cursor-pointer ${
                            isSelected
                              ? 'bg-blue-500/20 border-blue-500 text-blue-450 shadow-lg shadow-blue-500/5 font-bold scale-[1.02]'
                              : 'bg-slate-900/40 border-white/5 text-slate-300 hover:border-blue-500/30 hover:bg-blue-500/5'
                          }`}
                        >
                          {tech}
                        </button>
                      )
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                    {industries.map((ind) => {
                      const isSelected = selectedDomain?.type === 'industry' && selectedDomain.name === ind.name
                      return (
                        <button
                          key={ind.name}
                          onClick={() => {
                            setSelectedDomain({ type: 'industry', name: ind.name })
                            setTerminalKey((prev) => prev + 1)
                          }}
                          className={`px-4 py-3 rounded-xl text-xs font-semibold border transition-all text-left flex flex-col items-start justify-center cursor-pointer ${
                            isSelected
                              ? 'bg-blue-500/20 border-blue-500 text-blue-455 shadow-lg shadow-blue-500/5 font-bold scale-[1.02]'
                              : 'bg-slate-900/40 border-white/5 text-slate-300 hover:border-blue-500/30 hover:bg-blue-500/5'
                          }`}
                        >
                          <span className={isSelected ? 'text-blue-400 font-bold' : 'text-white'}>{ind.name}</span>
                          <span className="text-[10px] text-slate-500 mt-1 font-light font-display leading-tight">{ind.desc}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us (Bento Grid) */}
      <section className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="text-blue-500 font-bold text-xs uppercase tracking-widest font-display">Our Advantage</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">Why Modern Enterprises Partner With Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bentoGrid.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                className={`p-8 rounded-2xl glass-panel flex flex-col justify-between border-white/5 shadow-xl hover:border-blue-500/25 transition-all text-left relative overflow-hidden group cursor-pointer ${item.size}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-all" />
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 9. Metrics Section */}
      <section
        ref={metricsRef}
        className="relative py-24 bg-[#090f20]/60 border-y border-white/5 z-10 overflow-hidden"
      >
        <div className="absolute inset-0 animated-grid opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.25)]">
                {metricsInView ? (
                  <CountUpComponent start={0} end={metric.value} duration={3} delay={0.2} />
                ) : (
                  <span>0</span>
                )}
                <span className="text-blue-400">{metric.suffix}</span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-light uppercase tracking-wider font-display">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Enterprise CTA Section */}
      <section className="relative py-28 px-6 md:px-12 z-10">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-950 via-[#0f172a] to-blue-900/60 border border-white/10 p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Animated node grid background */}
          <div className="absolute inset-0 opacity-15 animated-grid pointer-events-none" />
          <div className="glow-spot glow-blue w-[400px] h-[400px] -bottom-20 -right-20" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white leading-tight">
              Let's Build High-Performing Teams Together
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Partner with LuminaVTech to access enterprise-grade AI experts, specialized IT talent, and smart workforce consulting strategies tailored for your business.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-sm tracking-wider uppercase text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all inline-flex items-center gap-3 cursor-pointer"
              >
                Schedule Consultation
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Contact Section */}
      <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <div className="text-blue-500 font-bold text-xs uppercase tracking-widest font-display">Get in Touch</div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">Let’s Build Together</h2>
              <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                We welcome the opportunity to learn about your hiring challenges and business goals. Share your requirements with us, and our team will work closely with you to deliver the right IT staffing solutions that support your success.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold font-display">Email Us</div>
                  <div className="text-sm text-slate-300">contact@luminavtech.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold font-display">Call Us</div>
                  <div className="text-sm text-slate-300">+1 (800) 555-0199</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold font-display">Global Centers</div>
                  <div className="text-sm text-slate-300">USA Operations & India Offshore Centers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border-white/10 shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
              
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">Consultation Requested</h3>
                  <p className="text-slate-400 font-light text-sm max-w-sm mx-auto">
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
                      <label htmlFor="name" className="text-xs font-semibold text-slate-400 font-display">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-sm focus:outline-none transition-all placeholder:text-slate-600"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-400 font-display">Corporate Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-sm focus:outline-none transition-all placeholder:text-slate-600"
                        placeholder="john@enterprise.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-semibold text-slate-400 font-display">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-sm focus:outline-none transition-all placeholder:text-slate-600"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-semibold text-slate-400 font-display">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-sm focus:outline-none transition-all placeholder:text-slate-600"
                        placeholder="Enterprise Inc."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-400 font-display">Your Requirements</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/50 border border-white/10 focus:border-blue-500/50 text-white text-sm focus:outline-none transition-all placeholder:text-slate-600 resize-none"
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
    </div>
  )
}
