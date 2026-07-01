import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const LinkedInIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0.5 8h4V24h-4V8zm7.5 0h3.83v2.19h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.81c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.02-2.99 4.11V24h-4V8z" />
  </svg>
);
export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-default pt-14 pb-10 overflow-hidden z-10">


      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10 ">
        {/* Column 1: Brand Info */}
        <div className="space-y-3">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 cursor-pointer group w-fit"
          >
            <img src="/luminavtechlogo.png" alt="Logo" className="h-20 md:h-26 transition-all duration-300 group-hover:scale-110" />
          </Link>
          <p className="text-sm text-slate-600  leading-relaxed">
            LuminaVTech is a specialized IT staffing and consulting organization dedicated to helping businesses access top-tier technology talent.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/luminavtech-llc"
              target='_blank'
              rel='noopener noreferrer'
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-50 border border-default hover:border-blue-300 flex items-center justify-center text-muted hover:text-primary transition-all">
              <LinkedInIcon className="w-4 h-4" />
            </a>

          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-slate-800 font-display">Navigation</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-slate-600 hover:text-primary transition-colors text-left block"
              >
                Home Page
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-slate-600 hover:text-primary transition-colors text-left block"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-slate-600 hover:text-primary transition-colors text-left block"
              >
                About LuminaVTech
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-slate-600 hover:text-primary transition-colors text-left block"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Core Offerings */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-slate-800 font-display">Core Offerings</h4>
          <ul className="space-y-3">
            <li className="text-sm text-slate-600">AI Talent Solutions</li>
            <li className="text-sm text-slate-600">Specialized IT Staffing</li>
            <li className="text-sm text-slate-600">Offshore & Nearshore Solutions</li>
            <li className="text-sm text-slate-600">Digital Transformation</li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-slate-800 font-display">Enterprise Contact</h4>
          <ul className="space-y-4">
            <li>
              <a 
                href="https://maps.google.com/?q=320+Decker+Dr,+Suite+131,+Irving,+TX,+75062" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 group text-left"
              >
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0 transition-colors" />
                <span className="text-sm text-slate-600 group-hover:text-primary transition-colors leading-relaxed">
                  320 Decker Dr, Suite 131, Irving, TX, 75062.
                </span>
              </a>
            </li>
            <li>
              <a 
                href="https://maps.google.com/?q=Capital+park,+Hitech+city,+Hyderabad+500081" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 group text-left"
              >
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0 transition-colors" />
                <span className="text-sm text-slate-600 group-hover:text-primary transition-colors leading-relaxed">
                  #407, 4th floor, Capital park, Hitech city, Hyderabad 500081
                </span>
              </a>
            </li>
            <li>
              <a 
                href="tel:+14697531264" 
                className="flex items-center gap-3 group text-left"
              >
                <Phone className="w-4 h-4 text-primary shrink-0 transition-colors" />
                <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">
                  +1 (469) 753-1264
                </span>
              </a>
            </li>
            <li>
              <a 
                href="mailto:info@luminavtech.com" 
                className="flex items-center gap-3 group text-left"
              >
                <Mail className="w-4 h-4 text-primary shrink-0 transition-colors" />
                <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">
                  info@luminavtech.com
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-7 border-t border-default flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} LuminaVTech. All rights reserved.
        </p>
        <a className="text-xs text-slate-600 hover:text-slate-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/918790008825?text=${encodeURIComponent("Hello! RKS Brainstorm pvt ltd. I am looking for a website for my business.")}`}>
            Developed by RKS Brainstorm pvt ltd
          </a>
        <div className="flex space-x-6">
          <Link to="/privacy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs text-slate-600 hover:text-slate-700 transition-colors">Privacy Policy</Link>
          <Link to="/terms" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs text-slate-600 hover:text-slate-700 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
