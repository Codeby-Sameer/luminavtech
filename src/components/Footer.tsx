import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
interface FooterProps {
  setCurrentPage: (page: string) => void
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-20 pb-10 overflow-hidden z-10">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand Info */}
        <div className="space-y-6">
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 cursor-pointer group w-fit"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center font-display font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              L
              <span className="absolute -bottom-1 -right-1 text-[8px] bg-sky-400 text-slate-950 font-bold px-0.5 rounded">V</span>
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Lumina<span className="text-blue-500">V</span>Tech
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            LuminaVTech is a specialized IT staffing and consulting organization dedicated to helping businesses access top-tier technology talent.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-600/25 border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <Menu className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-600/25 border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <X className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-600/25 border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-display">Navigation</h4>
          <ul className="space-y-3">
            <li>
              <button onClick={() => handleNavClick('home')} className="text-sm text-slate-400 hover:text-blue-400 transition-colors text-left">
                Home Page
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="text-sm text-slate-400 hover:text-blue-400 transition-colors text-left">
                Our Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className="text-sm text-slate-400 hover:text-blue-400 transition-colors text-left">
                About LuminaVTech
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className="text-sm text-slate-400 hover:text-blue-400 transition-colors text-left">
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Core Services */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-display">Core Offerings</h4>
          <ul className="space-y-3">
            <li className="text-sm text-slate-400">AI Talent Solutions</li>
            <li className="text-sm text-slate-400">Specialized IT Staffing</li>
            <li className="text-sm text-slate-400">Offshore & Nearshore Solutions</li>
            <li className="text-sm text-slate-400">Digital Transformation</li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-display">Enterprise Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-400 leading-relaxed">
                Global Staffing HQ, Enterprise Park, USA & India Centers
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="text-sm text-slate-400">+1 (800) 555-0199</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="text-sm text-slate-400">contact@luminavtech.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} LuminaVTech. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-xs text-slate-500 hover:text-slate-350 transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-slate-500 hover:text-slate-350 transition-colors">Terms of Service</a>
          <a href="#" className="text-xs text-slate-500 hover:text-slate-350 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
