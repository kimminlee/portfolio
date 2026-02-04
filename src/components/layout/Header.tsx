import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold text-slate-900"
        >
          KM<span className="text-blue-600">.</span>
        </button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('capabilities')}
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
          >
            Contact
          </button>

          
          <a
            href="https://github.com/kimminlee"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
};