import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home')

  // Hash-based routing sync so browser history behaves correctly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (['home', 'services', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash)
      } else {
        setCurrentPage('home')
      }
    }

    // Read initial hash
    if (window.location.hash) {
      handleHashChange()
    } else {
      window.location.hash = '#home'
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId)
    window.location.hash = `#${pageId}`
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={handlePageChange} />
      case 'services':
        return <Services setCurrentPage={handlePageChange} />
      case 'about':
        return <About setCurrentPage={handlePageChange} />
      case 'contact':
        return <Contact />
      default:
        return <Home setCurrentPage={handlePageChange} />
    }
  }

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-blue-600 selection:text-white">
        {/* Navigation Bar */}
        <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />

        {/* Main Content Area with Page Transitions */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Shared Footer */}
        <Footer setCurrentPage={handlePageChange} />
      </div>
    </SmoothScroll>
  )
}

export default App
