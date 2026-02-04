import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '디자인 시스템의 논리를 코드로 설계하는';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
            SYSTEMATIC UI DEVELOPER
          </p>
          
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            {displayedText}
            <span className="inline-block w-1 h-16 bg-blue-600 ml-2 animate-pulse" />
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-blue-600">유틸리티 기반 퍼블리셔</span>
          </h2>

          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            시각적 화려함보다 정교한 설계, 비즈니스 로직과 UI의 관심사를 명확히 분리하며
            <br />
            협업 과정에서 발생하는 문제를 구조화된 솔루션으로 해결합니다.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center"
          >
            <button
              onClick={() => scrollToId('projects')}
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            >
              View Projects
            </button>
            <a
              href="https://github.com/kimminlee"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-50 transition-colors shadow-lg border border-slate-200"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-600 transition-colors"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};