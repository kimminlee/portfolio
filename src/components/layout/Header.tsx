import { motion } from 'framer-motion';
import { Github, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm shadow-slate-200/50 dark:shadow-slate-900/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold text-slate-900 dark:text-white tracking-tight"
        >
          KM<span className="text-blue-500">.</span>
        </button>

        <div className="flex items-center gap-7">
          {(['about', 'capabilities', 'projects', 'contact'] as const).map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium transition-colors capitalize"
            >
              {id === 'capabilities' ? 'Skills' : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}

          <a
            href="https://github.com/kimminlee"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>

          {/* 다크모드 토글 */}
          <button
            onClick={toggle}
            aria-label="다크모드 토글"
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};
