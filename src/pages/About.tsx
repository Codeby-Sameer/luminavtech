import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, Shield, Rocket, Target, Heart, Award, Sparkles, Handshake, Users } from 'lucide-react'
import aboutusImg from '../assets/aboutus.png'

export default function About() {
  const navigate = useNavigate()
  // Why Choose Us Lists from content.md (Lines 82 - 105)
  const resultsOrientedList = [
    { title: 'Experienced Recruitment Team', desc: 'Our recruiters bring strong domain knowledge and hiring expertise.' },
    { title: 'Faster Access to Talent', desc: 'We minimize time-to-hire through proactive sourcing and engagement strategies.' },
    { title: 'Tailored Workforce Solutions', desc: 'We customize staffing strategies based on client needs and industry demands.' },
    { title: 'Long-Term Value Creation', desc: 'We aim to build lasting partnerships that support continuous business growth.' }
  ]

  const talentUnderstandingList = [
    { title: 'Pre-Vetted Professionals', desc: 'All candidates undergo thorough screening to ensure strong technical and professional capability.' },
    { title: 'Efficient Hiring Process', desc: 'We reduce hiring delays through optimized sourcing, evaluation, and onboarding practices.' },
    { title: 'Flexible Staffing Options', desc: 'We offer multiple engagement models tailored to business size and project complexity.' },
    { title: 'Commitment to Quality', desc: 'Every placement is focused on long-term performance and client satisfaction.' }
  ]

  // Story sections from content.md About Us portion (Lines 12 - 34)
  const stories = [
    {
      label: '01',
      title: 'Who We Are',
      text: 'At LuminaVTech,  As a trusted IT staffing and workforce solutions partner, we specialize in connecting organizations with highly skilled technology professionals who help drive innovation, efficiency, and growth. With a strong network of qualified IT professionals and a commitment to excellence, we help companies build agile, high-performing teams that can thrive in today\'s rapidly evolving digital landscape. We also leverage AI-driven talent insights to better align candidate skills with evolving job requirements, enabling more precise and efficient hiring decisions.',
      icon: Users,
    },
    {
      label: '02',
      title: 'Partnership & Business Success',
      text: 'LuminaVTech is more than a staffing provider we are a workforce partner committed to helping organizations achieve their goals through exceptional talent. We work closely with businesses to understand their unique challenges and deliver professionals who contribute value from day one. By combining recruitment expertise with a people-centric approach, we create meaningful connections between employers and technology professionals. We also utilize AI-based talent matching insights to improve alignment between role requirements and candidate capabilities, helping reduce hiring gaps and improve placement accuracy.',
      icon: Handshake,
    },
    {
      label: '03',
      title: 'Technology & Growth',
      text: 'At LuminaVTech, we help organizations turn business challenges into opportunities by delivering the right talent and workforce solutions at the right time. We understand that technology drives modern business success, but people are the force behind every innovation. Our mission is to support companies with skilled professionals, strategic hiring solutions, and industry expertise that enable growth, accelerate project delivery, and strengthen competitive advantage. We also incorporate AI-enabled insights to better interpret evolving skill demands and market trends.',
      icon: Target,
    },
    {
      label: '04',
      title: 'Innovation & Future-Ready Focus',
      text: 'In today\'s fast-moving digital world, organizations need access to talent that can adapt, innovate, and lead change. LuminaVTech was founded to help businesses meet these demands by providing workforce solutions designed for the future. We connect companies with experienced technology professionals who bring the expertise, creativity, and problem-solving skills required to drive business transformation. We also incorporate AI-assisted screening techniques to better evaluate candidate profiles against evolving role requirements.',
      icon: Rocket,
    },
    {
      label: '05',
      title: 'People-Centric & Value-Driven',
      text: 'At LuminaVTech, we believe every successful project begins with the right people. Our company was built on a simple idea: creating meaningful connections between talented professionals and organizations seeking to grow, innovate, and succeed. We take pride in understanding both client needs and candidate aspirations, ensuring every placement creates value for everyone involved. We also leverage AI-supported skill analysis to better understand candidate strengths and align them with role expectations more effectively, improving overall match quality.',
      icon: Heart,
    },
    {
      label: '06',
      title: 'Specialized Consulting Methodology',
      text: 'LuminaVTech is a specialized IT staffing and consulting organization dedicated to helping businesses access top-tier technology talent. We partner with companies across diverse industries to deliver workforce solutions that enhance operational performance, support strategic initiatives, and drive sustainable growth. With a commitment to excellence and a deep understanding of evolving technology demands, we provide scalable staffing solutions tailored to each client\'s objectives. Our approach combines market expertise, quality-driven recruitment processes, and a strong focus on building long-term business partnerships.',
      icon: Award,
    }
  ]

  return (
    <div className="relative w-full pt-32 pb-24 bg-background overflow-hidden text-left">
      {/* Background radial glows */}
      <div className="glow-spot glow-blue w-[700px] h-[700px] -top-20 -left-20" />
      <div className="glow-spot glow-cyan w-[600px] h-[600px] bottom-10 right-0" />
      <div className="absolute inset-0 animated-grid pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
              <span>About LuminaVTech</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-heading tracking-tight leading-tight">
              Powering Innovation Through{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-600">
                People & Strategy
              </span>
            </h1>
            <p className="text-body text-lg md:text-xl font-light leading-relaxed">
              A premier specialized IT staffing, AI talent consulting, and workforce optimization firm engineered to scale modern software development, artificial intelligence, and cloud operations.
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
                src={aboutusImg}
                alt="LuminaVTech Team"
                className="w-full h-auto max-h-[300px] sm:max-h-[450px] lg:max-h-[500px] object-contain group-hover:scale-108 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Narrative Story Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-36">
        <div className="space-y-16">
          {stories.map((story, idx) => {
            const Icon = story.icon
            const isEven = idx % 2 === 0
            return (
              <motion.div
                key={story.label}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Visual Block Column */}
                <div
                  className={`lg:col-span-4 flex items-center gap-6 ${isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-accent font-display font-black text-xl tracking-wider leading-none">
                      {story.label}
                    </div>
                    <h3 className="font-display font-bold text-xl text-accent mt-1">
                      {story.title}
                    </h3>
                  </div>
                </div>

                {/* Text Block Column */}
                <div
                  className={`lg:col-span-8 p-8 rounded-card bg-surface border border-default text-body leading-relaxed font-light text-sm sm:text-base ${isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                >
                  {story.text}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Why Partner with Us (Dual Columns from content.md lines 82-105) */}
      <div className="bg-surface border-y border-default py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-4 mb-20">
            <div className="text-accent font-bold text-xs uppercase tracking-widest font-display">Deep Partnership</div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-heading">Why Partner with Us</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Column 1: Results-Oriented Staffing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-default">
                <Sparkles className="w-6 h-6 text-accent" />
                <h3 className="font-display font-bold text-2xl text-heading">Results-Oriented Staffing</h3>
              </div>

              <div className="space-y-6">
                {resultsOrientedList.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-base text-heading">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-body font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Deep Talent Understanding */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-default">
                <Shield className="w-6 h-6 text-accent" />
                <h3 className="font-display font-bold text-2xl text-heading">Deep Talent Understanding</h3>
              </div>

              <div className="space-y-6">
                {talentUnderstandingList.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-base text-heading">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-body font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 pt-28 text-center space-y-6">
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-heading">Ready to consult with our staffing directors?</h3>
        <p className="text-heading text-sm max-w-xl mx-auto font-light leading-relaxed">
          Request a specialized talent consultation or explore candidate profiles suited for your open mandates.
        </p>
        <button
          onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent font-bold text-xs tracking-wider uppercase text-white hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5 transition-all cursor-pointer inline-block"
        >
          Initiate Sourcing
        </button>
      </div>
    </div>
  )
}
