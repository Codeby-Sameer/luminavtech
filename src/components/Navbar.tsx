import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: '/', label: 'Home' },
    { id: '/services', label: 'Services' },
    { id: '/about', label: 'About Us' },
    { id: '/contact', label: 'Contact Us' },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentPage = location.pathname

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-black backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center font-display font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all">
            L
            <span className="absolute -bottom-1 -right-1 text-[8px] bg-sky-400 text-slate-950 font-bold px-0.5 rounded">V</span>
          </div>
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Lumina<span className="text-blue-500">V</span>Tech
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              onClick={handleNavClick}
              className={`text-sm font-medium tracking-wide transition-all relative py-1 cursor-pointer ${currentPage === link.id
                  ? 'text-blue-400 font-semibold'
                  : 'text-slate-400 hover:text-white'
                }`}
            >
              {link.label}
              {currentPage === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="group relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white overflow-hidden bg-transparent border border-blue-500/30 hover:border-blue-400 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Talk To Experts
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-500 ease-out -z-0" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[73px] bg-[#020617] border-t border-white/5 z-40 md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              onClick={handleNavClick}
              className={`text-lg font-medium text-left transition-colors py-2 ${currentPage === link.id ? 'text-blue-400 font-bold border-l-2 border-blue-500 pl-3' : 'text-slate-300 hover:text-white pl-0'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
          >
            Talk To Experts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}
