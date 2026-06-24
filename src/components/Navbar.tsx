import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
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

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.services-dropdown-container')) {
        setIsServicesDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  // Close dropdown when changing pages (in case of browser history updates or other routes)
  useEffect(() => {
    setIsServicesDropdownOpen(false)
    setIsMobileServicesOpen(false)
  }, [location.pathname])

  const handleNavClick = () => {
    setIsOpen(false)
    setIsServicesDropdownOpen(false)
    setIsMobileServicesOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentPage = location.pathname

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      isDropdown: true,
      dropdownItems: [
        { name: 'Our Services', path: '/services' },
        { name: 'Industries We Serve', path: '/industries' }
      ]
    },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Careers', path: '/careers' },
    { name: 'About Us', path: '/about' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-white backdrop-blur-md border-b border-slate-200 py-2 shadow-sm'
        : 'bg-transparent py-2'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <img
            src="../../../src/assets/luminologo1.png"
            alt="Logo"
            className="h-20 md:h-20 transition-all duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            if (item.isDropdown) {
              const isActive = currentPage === '/services' || currentPage === '/industries'
              return (
                <div key={item.name} className="relative services-dropdown-container">
                  <button
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-all rounded-full cursor-pointer focus:outline-none ${
                      isActive
                        ? 'bg-[#f8e000] text-slate-900 font-semibold'
                        : 'text-slate-600 hover:bg-[#f8e000] hover:text-slate-900'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isServicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-white border border-slate-200 shadow-xl p-2 flex flex-col space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          onClick={() => {
                            setIsServicesDropdownOpen(false)
                            handleNavClick()
                          }}
                          className={`text-xs px-3 py-2 rounded-lg transition-colors text-left ${
                            currentPage === dropItem.path
                              ? 'bg-[#f8e000] text-slate-900 font-bold'
                              : 'text-slate-600 hover:bg-[#f8e000] hover:text-slate-900'
                          }`}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            const isActive = currentPage === item.path
            return (
              <Link
                key={item.name}
                to={item.path!}
                onClick={handleNavClick}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-all rounded-full cursor-pointer ${
                  isActive
                    ? 'bg-[#f8e000] text-slate-900 font-semibold'
                    : 'text-slate-600 hover:bg-[#f8e000] hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="group relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider overflow-hidden btn-yellow flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Talk To Experts
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 hover:text-blue-600 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[73px] bottom-0 bg-white border-t border-slate-200 z-40 md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          }`}
      >
        <div className="flex flex-col p-8 space-y-2 overflow-y-auto max-h-[calc(100vh-100px)]">
          {navItems.map((item) => {
            if (item.isDropdown) {
              const isActive = currentPage === '/services' || currentPage === '/industries'
              return (
                <div key={item.name} className="flex flex-col">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`flex items-center justify-between text-lg font-medium text-left transition-colors py-2 px-4 rounded-xl focus:outline-none ${
                      isActive ? 'bg-[#f8e000] text-slate-900 font-bold' : 'text-slate-600 hover:bg-[#f8e000] hover:text-slate-900'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isMobileServicesOpen && (
                    <div className="flex flex-col pl-6 mt-2 space-y-2 border-l-2 border-slate-100 ml-4">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          onClick={handleNavClick}
                          className={`text-base text-left transition-colors py-2 px-4 rounded-xl ${
                            currentPage === dropItem.path ? 'bg-[#f8e000] text-slate-900 font-medium' : 'text-slate-500 hover:bg-[#f8e000] hover:text-slate-900'
                          }`}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            const isActive = currentPage === item.path
            return (
              <Link
                key={item.name}
                to={item.path!}
                onClick={handleNavClick}
                className={`text-lg font-medium text-left transition-colors py-2 px-4 rounded-xl ${
                  isActive ? 'bg-[#f8e000] text-slate-900 font-bold' : 'text-slate-600 hover:bg-[#f8e000] hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            )
          })}

          {/* Talk to Experts */}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="w-full mt-4 flex items-center justify-center gap-2 py-3 btn-yellow text-sm font-semibold transition-all rounded-xl"
          >
            Talk To Experts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}
