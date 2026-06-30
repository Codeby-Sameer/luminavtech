import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Bot, Cpu, CheckCircle2, UserCheck, Zap, Globe as GlobeIcon, Users, Calendar } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Particles from '../components/Particles'
import TrustStrip from '@/components/TrustStrip'



gsap.registerPlugin(ScrollTrigger)

// Resolve ESM/CJS interop mismatch for react-countup in some bundlers
const CountUpComponent = (CountUp as any).default || CountUp



export default function Home() {
  const navigate = useNavigate()


  const containerRef = useRef<HTMLDivElement | null>(null)

  // Section Refs for GSAP animations
  const heroSectionRef = useRef<HTMLDivElement | null>(null)
  const heroTypographyRef = useRef<HTMLHeadingElement | null>(null)
  const mergedHeroContentRef = useRef<HTMLDivElement | null>(null)
  const splitAboutSectionRef = useRef<HTMLDivElement | null>(null)
  const aboutLeftRef = useRef<HTMLDivElement | null>(null)
  const aboutRightRef = useRef<HTMLDivElement | null>(null)




  // InView hooks for triggering entry animations
  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    // 1. GSAP: Combined Scroll Story Hero Section (Pin & Timeline)
    const heroSec = heroSectionRef.current
    const textEl = heroTypographyRef.current
    const mergedContent = mergedHeroContentRef.current
    if (heroSec && textEl && mergedContent) {
      const cards = heroSec.querySelectorAll('.story-card')
      const isMobile = window.innerWidth < 768
      const xOffset = isMobile ? '80px' : '240px'
      const yOffset = isMobile ? '70px' : '100px'

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSec,
          start: 'top top',
          end: 'bottom+=2000 bottom',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Step 1: Zoom and fade the large typography text
      tl.to(textEl, { scale: 3.5, opacity: 0, duration: 1.5 }, 0)

      // Step 2: Slide cards from corners to visual display positions
      tl.fromTo(cards[0], { x: '-70vw', y: '-70vh', rotation: -30, scale: 0.4, opacity: 0 }, { x: `-${xOffset}`, y: `-${yOffset}`, rotation: -10, scale: 1, opacity: 1, duration: 1.5 }, 0.5)
      tl.fromTo(cards[1], { x: '70vw', y: '-70vh', rotation: 30, scale: 0.4, opacity: 0 }, { x: xOffset, y: `-${yOffset}`, rotation: 10, scale: 1, opacity: 1, duration: 1.5 }, 0.5)
      tl.fromTo(cards[2], { x: '-70vw', y: '70vh', rotation: -15, scale: 0.4, opacity: 0 }, { x: `-${xOffset}`, y: yOffset, rotation: -5, scale: 1, opacity: 1, duration: 1.5 }, 0.5)
      tl.fromTo(cards[3], { x: '70vw', y: '70vh', rotation: 15, scale: 0.4, opacity: 0 }, { x: xOffset, y: yOffset, rotation: 5, scale: 1, opacity: 1, duration: 1.5 }, 0.5)

      // Step 3: Merge in the center
      tl.to(cards, { x: 0, y: 0, rotation: 0, scale: 0.85, opacity: 0.05, duration: 1.2 }, '+=0.2')

      // Step 4: Reveal the actual hero content
      tl.fromTo(
        mergedContent,
        { opacity: 0, scale: 0.85, y: 30, pointerEvents: 'none' },
        { opacity: 1, scale: 1, y: 0, pointerEvents: 'auto', duration: 1.2, ease: 'power2.out' },
        '-=0.8'
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])



  // Services list
  const services = [
    { title: 'AI Talent Solutions', icon: Bot, desc: 'Build high-performing AI teams with specialized professionals including ML Engineers, Prompt Engineers, and Generative AI Specialists.' },
    { title: 'Specialized IT Talent Acquisition', icon: Cpu, desc: 'Address challenging hiring needs with targeted recruitment solutions for hard-to-fill IT and software roles.' },
    { title: 'Campus Recruitment', icon: Users, desc: 'Develop a strong future workforce by connecting with qualified graduates and early-career tech professionals.' },
    { title: 'Diversity Hiring', icon: UserCheck, desc: 'Build inclusive, high-performing technology teams through strategic diversity hiring initiatives.' },
    { title: 'Technology Talent Consulting', icon: Zap, desc: 'Make informed hiring decisions with expert talent insights and workforce planning strategies.' },
    { title: 'Offshore & Nearshore Staffing', icon: GlobeIcon, desc: 'Expand your talent pool with access to qualified technology professionals across cost-effective global markets.' },
    // { title: 'Managed Staffing Services', icon: Network, desc: 'Simplify workforce management, vendor coordination, and optimize contingent labor programs.' },
    // { title: 'Talent Mapping', icon: Database, desc: 'Gain valuable insights into talent availability, hiring trends, compensation benchmarks, and competitors.' },
    // { title: 'Project-Based Staffing', icon: TerminalIcon, desc: 'Access developers, architects, and project managers to deliver critical technology projects on time.' },
    // { title: 'Digital Transformation Consulting', icon: Cloud, desc: 'Assess systems, optimize legacy processes, and implement modern cloud strategies to drive growth.' },
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
    <div ref={containerRef} className="relative w-full  pt-10 overflow-hidden ">
      {/* Dynamic Keyframe Animations for Hero Icons */}
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes heroPulseGlow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.4)); }
          50% { filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.8)); }
        }
        @keyframes heroSpinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-hero-float {
          animation: heroFloat 5s ease-in-out infinite;
        }
        .animate-hero-pulse-glow {
          animation: heroPulseGlow 3s ease-in-out infinite;
        }
        .animate-hero-spin-slow {
          animation: heroSpinSlow 16s linear infinite;
        }
      `}</style>

      {/* 1. Combined Scroll Story & Typography Hero Section */}
      <section
        ref={heroSectionRef}
        className="relative h-screen  bg-background
        flex items-center justify-center overflow-hidden z-20"
      >
        {/* Background Grids and Particles */}
        <div className="absolute inset-0 animated-grid opacity-25 pointer-events-none" />
        <div className="glow-spot glow-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
        <Particles />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative h-full">

          {/* Large Scroll Typography (Scale & Opacity Zoom) */}
          <h2
            ref={heroTypographyRef}
            className="hero-typography font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-center leading-none text-heading select-none whitespace-pre-line uppercase absolute z-20"
          >
            THE FUTURE{'\n'}OF TALENT{'\n'}IS HERE
          </h2>

          {/* Cards to merge */}
          <div className="relative w-full h-[400px] flex items-center justify-center z-10">
            {/* Card 1: Talent */}
            <div className="story-card absolute w-[260px] h-[160px] rounded-2xl shadow-card">
              <div className="w-full h-full glass-panel border-default p-6 flex flex-col justify-between rounded-2xl animate-hero-float">
                <Users className="w-8 h-8 text-accent animate-hero-pulse-glow" />
                <div>
                  <h3 className="font-display font-bold text-lg text-heading">Talent</h3>
                  <p className="text-xs text-muted mt-1">Connecting organizations with top skilled tech experts.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Technology */}
            <div className="story-card absolute w-[260px] h-[160px] rounded-2xl shadow-card">
              <div className="w-full h-full glass-panel border-default p-6 flex flex-col justify-between rounded-2xl animate-hero-float" style={{ animationDelay: '-1.5s' }}>
                <Cpu className="w-8 h-8 text-accent animate-hero-pulse-glow" style={{ animationDelay: '-1s' }} />
                <div>
                  <h3 className="font-display font-bold text-lg text-heading">Technology</h3>
                  <p className="text-xs text-muted mt-1">Harnessing tech tools and expert engineering pools.</p>
                </div>
              </div>
            </div>

            {/* Card 3: Innovation */}
            <div className="story-card absolute w-[260px] h-[160px] rounded-2xl shadow-card">
              <div className="w-full h-full glass-panel border-default p-6 flex flex-col justify-between rounded-2xl animate-hero-float" style={{ animationDelay: '-3s' }}>
                <Bot className="w-8 h-8 text-accent animate-hero-pulse-glow" style={{ animationDelay: '-2s' }} />
                <div>
                  <h3 className="font-display font-bold text-lg text-heading">Innovation</h3>
                  <p className="text-xs text-muted mt-1">Leveraging AI insights for intelligent matchmaking.</p>
                </div>
              </div>
            </div>

            {/* Card 4: Growth */}
            <div className="story-card absolute w-[260px] h-[160px] rounded-2xl shadow-card">
              <div className="w-full h-full glass-panel border-default p-6 flex flex-col justify-between rounded-2xl animate-hero-float" style={{ animationDelay: '-4.2s' }}>
                <Zap className="w-8 h-8 text-accent animate-hero-pulse-glow" style={{ animationDelay: '-3s' }} />
                <div>
                  <h3 className="font-display font-bold text-lg text-heading">Growth</h3>
                  <p className="text-xs text-muted mt-1">Scaling business operations and project delivery.</p>
                </div>
              </div>
            </div>

            {/* Merged Hero Content (Revealed inside scrub timeline) */}
            <div
              ref={mergedHeroContentRef}
              className="merged-hero-content absolute text-center pointer-events-none opacity-0 select-none max-w-4xl px-4 z-30"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent mb-6 uppercase tracking-widest font-display">
                <Bot className="w-4 h-4 animate-pulse" />
                <span>Next-Gen Talent Acquisition</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-heading leading-tight">
                Powering Business Growth Through{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  People & Technology
                </span>
              </h1>

              <p className="text-body text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mt-6">
                Delivering IT Staffing, AI Talent Solutions, Workforce Consulting and Specialized Technology Recruitment for modern enterprises.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center pointer-events-auto">
                <button
                  onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                  className="px-8 py-4 rounded-xl btn-yellow flex items-center justify-center gap-2 cursor-pointer"
                >
                  Talk To Experts
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  className="px-8 py-4 rounded-xl btn-yellow bg-white text-accent border border-blue-200 hover:bg-slate-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About LuminaVTech (Timeline / Split Entrance) */}
      <section
        ref={splitAboutSectionRef}
        className="relative  bg-surface border-y border-default py-12 px-6 md:px-12  mx-auto z-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column heading */}
          <div ref={aboutLeftRef} className="lg:col-span-5 space-y-6 text-left">
            <div className="text-accent font-bold text-xs uppercase tracking-widest font-display">Who We Are</div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-heading leading-tight">
              Delivering Premium IT Staffing & AI Talent Solutions
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-700 to-accent rounded" />
          </div>

          {/* Right Column content */}
          <div ref={aboutRightRef} className="lg:col-span-7 text-left space-y-6 text-body leading-relaxed text-base font-light">
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
              onClick={() => { navigate('/about'); window.scrollTo(0, 0); }}
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-blue-900 transition-colors mt-2"
            >
              Read Company Story
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      <section className=''>
        <TrustStrip />
      </section>

      {/* 4. Services Section */}
      <section className="relative py-14 bg-background border-y border-default z-10">
        <div className="absolute inset-0 animated-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="text-white font-bold text-xs uppercase tracking-widest font-display">Specialized Capabilities</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-heading">Our Staffing & AI Services</h2>
            <p className="text-white max-w-2xl mx-auto text-sm sm:text-base">
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
                  className="p-8 rounded-2xl bg-white glass-panel-hover flex flex-col text-left space-y-4 border-default relative group overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Glowing background spot for hover */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-yellow-600/25 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-semibold text-lg text-slate-900 group-hover:text-accent transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed  group-hover:text-slate-400 font-light flex-grow">
                    {svc.desc}
                  </p>

                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-yellow-600 text-white inline-flex items-center gap-2 cursor-pointer"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>




      {/* 8. Why Choose Us (Bento Grid) */}
      <section className="relative bg-surface border-y border-default py-28 px-6 md:px-12  mx-auto z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="text-white font-bold text-xs uppercase tracking-widest font-display">Our Advantage</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-heading">Why Modern Enterprises Partner With Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bentoGrid.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                className={`p-8 rounded-2xl  bg-white flex flex-col justify-between border-default shadow-card hover:border-blue-500/25 transition-all text-left relative overflow-hidden group cursor-pointer ${item.size}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-yellow-500/10 transition-all" />
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-800 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
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
        className="relative py-16 bg-surface border-y border-default z-10 overflow-hidden"
      >
        <div className="absolute inset-0 animated-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="font-display font-black text-4xl sm:text-6xl text-heading tracking-tight ">
                {metricsInView ? (
                  <CountUpComponent start={0} end={metric.value} duration={3} delay={0.2} />
                ) : (
                  <span>0</span>
                )}
                <span className="text-yellow-600">{metric.suffix}</span>
              </div>
              <p className="text-muted text-xs sm:text-sm font-light uppercase tracking-wider font-display">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Enterprise CTA Section */}
      <section className="relative  z-10">
        <div className=" mx-auto bg-accent py-12 text-center relative overflow-hidden shadow-card">
          {/* Animated node grid background */}
          <div className="absolute inset-0 opacity-15 animated-grid pointer-events-none" />
          <div className="glow-spot glow-blue w-[400px] h-[400px] -bottom-20 -right-20" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-5xl text-heading leading-tight">
              Let's Build High-Performing Teams Together
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed">
              Partner with LuminaVTech to access enterprise-grade AI experts, specialized IT talent, and smart workforce consulting strategies tailored for your business.
            </p>
            <div className="pt-4">
              <button
                onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-sm tracking-wider uppercase inline-flex items-center gap-3 cursor-pointer"
              >
                Schedule Consultation
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
