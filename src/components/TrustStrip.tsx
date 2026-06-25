import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SmoothScroll from './SmoothScroll';

// Import client logos
import walmartLogo from '../assets/clientlogo/Walmart_Canada-Logo.wine.svg';
import edwardsLogo from '../assets/clientlogo/edwards.jpeg';
import admLogo from '../assets/clientlogo/Archer_Daniels_Midland-Logo.wine.svg';
import centificLogo from '../assets/clientlogo/centific_logo.jpg';
import uniedHealthLogo from '../assets/clientlogo/UnitedHealth_Group-Logo.wine.svg';
import wiproLogo from '../assets/clientlogo/Wipro-Logo-2.svg';
import cvsHealthLogo from '../assets/clientlogo/CVS_Health-Logo.wine.svg';
import ubsLogo from '../assets/clientlogo/UBS-Logo.wine.svg';
// import tchLogo from '../assets/clientlogo/TCH_logos.png';
import toyotaLogo from '../assets/clientlogo/Toyota_Canada_Inc.-Logo.wine.svg';
import virtusaLogo from '../assets/clientlogo/Virtusa_logos.png';
import jpmcLogo from '../assets/clientlogo/jpmorgan.jpeg';
import disneyLogo from '../assets/clientlogo/disney.jpeg';
import dartLogo from '../assets/clientlogo/Dartlogo.wine.svg';
import tcsLogo from '../assets/clientlogo/tcs.jpg';
import techMLogo from '../assets/clientlogo/Tech_Mahindra-Logo.wine.svg';
import accentureLogo from '../assets/clientlogo/Accenture-Logo.wine.svg';
import creditOneLogo from '../assets/clientlogo/Capital_One_logo.svg.png';
// import bcbsLogo from '../assets/clientlogo/BCBS_logo.jpeg';
import ctsLogo from '../assets/clientlogo/cts.jpeg';
import ibmLogo from '../assets/clientlogo/IBM-Logo.wine.svg';
import oncorLogo from '../assets/clientlogo/oncore.jpeg';
import fidelityLogo from '../assets/clientlogo/fidelity.jpeg';
import hondaLogo from '../assets/clientlogo/Honda-Logo.wine.svg';
import capitalOneLogo from '../assets/clientlogo/Capital_One_logo.svg.png';
import fiservLogo from '../assets/clientlogo/Fiserv-Logo.wine.svg';

const clients = [
  { name: 'Walmart', logo: walmartLogo },
  { name: 'Edwards LifeSciences', logo: edwardsLogo },
  { name: 'ADM ( Archer Daniels Midland)', logo: admLogo },
  { name: 'Centific', logo: centificLogo },
  { name: 'Unied Health Group', logo: uniedHealthLogo },
  { name: 'Wipro', logo: wiproLogo },
  { name: 'CVS Health', logo: cvsHealthLogo },
  { name: 'UBS', logo: ubsLogo },
  // { name: 'TCH', logo: tchLogo },
  { name: 'Toyota', logo: toyotaLogo },
  { name: 'Virtusa', logo: virtusaLogo },
  { name: 'JPMC', logo: jpmcLogo },
  { name: 'Disney', logo: disneyLogo },
  { name: 'DART', logo: dartLogo },
  { name: 'TCS', logo: tcsLogo },
  { name: 'Tech M', logo: techMLogo },
  { name: 'Accenture', logo: accentureLogo },
  { name: 'CreditOne', logo: creditOneLogo },
  // { name: 'BCBS', logo: bcbsLogo },
  { name: 'CTS', logo: ctsLogo },
  { name: 'IBM', logo: ibmLogo },
  { name: 'Oncor', logo: oncorLogo },
  { name: 'Fedility', logo: fidelityLogo },
  { name: 'Honda', logo: hondaLogo },
  { name: 'Capital One', logo: capitalOneLogo },
  { name: 'Fiserv', logo: fiservLogo }
];

// Helper to chunk clients into groups of 5, padding the last slide if necessary
const chunkClients = (arr: typeof clients, size: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    if (chunk.length < size) {
      // Pad with the first few items to make it exactly 5
      chunk = [...chunk, ...arr.slice(0, size - chunk.length)];
    }
    chunks.push(chunk);
  }
  return chunks;
};

export default function TrustStrip() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [chunkSize, setChunkSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 3 : 5;
    }
    return 5;
  });

  useEffect(() => {
    const handleResize = () => {
      setChunkSize(window.innerWidth < 768 ? 3 : 5);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = chunkClients(clients, chunkSize);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, slides.length - 1));
  }, [slides.length]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  return (
    <section className="w-full border-y border-white/5 overflow-hidden relative">
      <div className=" mx-auto px-6 mb-6 relative z-20">
        <SmoothScroll >
          <p className="text-center  text-xs md:text-sm font-semibold text-slate-900 uppercase tracking-widest">
            Trust Credentials & Client Portfolio
          </p>
        </SmoothScroll>
      </div>

      <div
        className=" mx-auto relative z-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden w-full relative">

          {/* Slider Row */}
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 1000ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="flex justify-between items-center w-full shrink-0 gap-3 md:gap-6 px-4 md:px-6"
              >
                {slide.map((item, itemIndex) => (
                  <motion.div
                    key={`${item.name}-${slideIndex}-${itemIndex}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 aspect-[3/2] bg-white p-1 md:p-4 flex items-center justify-center  hover:border-brand-blue/30 transition-all duration-300 cursor-pointer min-w-24 md:min-w-32"
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2.5 mt-5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${currentSlide === index
                ? 'bg-blue-400 w-7 shadow-md shadow-blue-400/30'
                : 'bg-slate-700 hover:bg-slate-500 w-2.5'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

