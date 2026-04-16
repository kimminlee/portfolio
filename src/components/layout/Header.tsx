import { motion, AnimatePresence } from 'framer-motion';
import { Github, Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';

const NAV_ITEMS = [
  { id: 'about',        label: 'About'    },
  { id: 'capabilities', label: 'Skills'   },
  { id: 'projects',     label: 'Projects' },
  { id: 'contact',      label: 'Contact'  },
] as const;

export const Header = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { isDark, toggle }        = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 메뉴 열릴 때 바디 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, menuOpen ? 300 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm shadow-slate-200/50 dark:shadow-slate-900/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-section mx-auto px-6 py-4 flex items-center justify-between">
          {/* 로고 */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-slate-900 dark:text-white tracking-tight"
          >
            KM<span className="text-blue-500">.</span>
          </button>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium transition-colors"
              >
                {label}
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
            <button
              onClick={toggle}
              aria-label="다크모드 토글"
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* 모바일 우측 아이콘 */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              aria-label="다크모드 토글"
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="메뉴 열기"
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* 모바일 드로어 */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* 딤 배경 */}
            <motion.div
              key="dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* 메뉴 패널 */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-16 left-4 right-4 z-40 md:hidden bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              <div className="p-2">
                {NAV_ITEMS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    {label}
                  </button>
                ))}
                <div className="my-2 border-t border-slate-100 dark:border-slate-800" />
                <a
                  href="https://github.com/kimminlee"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                >
                  <Github size={15} /> GitHub
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
