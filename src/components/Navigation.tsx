import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Cover', id: 'cover' },
    { label: 'About', id: 'about' },
    { label: 'Overview', id: 'at-a-glance' },
    { label: 'Comparison', id: 'comparison' },
    { label: 'Creator Pkg', id: 'creator' },
    { label: 'Brand Pkg', id: 'brand' },
    { label: 'Terms', id: 'terms' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Fixed Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${isScrolled ? 'bg-rose-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          <button 
            onClick={() => scrollTo('cover')}
            className="text-white font-medium tracking-widest uppercase text-xs sm:text-sm"
          >
            Icreatepixels
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs font-medium tracking-widest text-rose-200 hover:text-white uppercase transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-rose-200 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-rose-950/95 backdrop-blur-lg pt-24 pb-8 px-6 flex flex-col gap-6 overflow-y-auto lg:hidden print:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-lg font-light tracking-widest text-orange-100 hover:text-white uppercase py-2 border-b border-white/10"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollTo('cover')}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-amber-100 text-rose-950 shadow-lg hover:bg-amber-50 transition-colors print:hidden"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
