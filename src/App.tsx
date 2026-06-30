import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Technologies from './pages/Technologies'
import Industries from './pages/Industries'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import WhatsAppWidget from './components/WhatsAppWidget'

function App() {
  const location = useLocation()

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-background text-body overflow-x-hidden selection:bg-primary selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area with Page Transitions */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                {/* Fallback to Home */}
                <Route path="*" element={<Home />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Shared Footer */}
        <Footer />
        <WhatsAppWidget />
      </div>
    </SmoothScroll>
  )
}

export default App
