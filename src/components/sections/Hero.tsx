import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const FULL_TEXT = '디자인의 의도를 코드로 구현합니다.';

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= FULL_TEXT.length) {
          setDisplayedText(FULL_TEXT.slice(0, i++));
        } else {
          clearInterval(timer);
        }
      }, 65);
      return () => clearInterval(timer);
    }, 500);
    return () => clearTimeout(delay);
  }, []);

  // 커서 스포트라이트 — React state 없이 직접 DOM
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      const dark = document.documentElement.classList.contains('dark');
      spotlightRef.current.style.background =
        `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(59,130,246,${dark ? 0.13 : 0.08}), transparent 50%)`;
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* dot grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* ambient orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 560, height: 560,
          top: '-12%', left: '-8%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        animate={{ x: [0, 55, -25, 0], y: [0, -45, 65, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 460, height: 460,
          bottom: '-8%', right: '-6%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        animate={{ x: [0, -45, 35, 0], y: [0, 55, -35, 0] }}
        transition={{ duration: 44, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 커서 스포트라이트 */}
      <div ref={spotlightRef} className="pointer-events-none absolute inset-0" />

      {/* 노이즈 그레인 */}
      <div className="absolute inset-0 hero-noise pointer-events-none" />

      {/* 페이드 마스크 */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white dark:from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none" />

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* 상태 뱃지 */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 tracking-widest uppercase">
              UI Developer · Publisher
            </span>
          </div>

          {/* 메인 헤딩 — 56px 기준, 무너지지 않는 크기 */}
          <h1 className="text-[2.8rem] md:text-[3.5rem] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            유틸리티 기반{' '}
            <span className="text-blue-500">퍼블리셔</span>
          </h1>

          {/* 타이핑 서브라인 — 18px */}
          <p className="text-[18px] text-slate-400 dark:text-slate-500 font-light h-7 tracking-tight">
            {displayedText}
            <span className="inline-block w-px h-[18px] bg-blue-400 ml-0.5 align-middle animate-pulse" />
          </p>

          {/* 설명 본문 — 15px, 가독성 확보 */}
          <p className="text-[15px] leading-[1.75] text-slate-500 dark:text-slate-400 max-w-[440px]">
            디자인 시스템의 논리를 공학적으로 풀어내고,
            협업에서 생기는 문제를 구조로 해결합니다.
          </p>

          {/* 버튼 — 14px */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 pt-2"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-[14px] font-semibold rounded-lg transition-all shadow-md shadow-blue-600/25"
            >
              View Projects
            </button>
            <a
              href="https://github.com/kimminlee"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 bg-white dark:bg-slate-900 text-[14px] font-semibold text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 active:scale-95 transition-all"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 하단 주력 기술 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap"
      >
        <span className="text-[13px] text-slate-300 dark:text-slate-700">주력 기술</span>
        <div className="w-px h-3 bg-slate-200 dark:bg-slate-800" />
        {['HTML5', 'CSS3', 'JavaScript', 'Figma'].map((tech) => (
          <span
            key={tech}
            className="text-[13px] font-medium text-slate-400 dark:text-slate-600"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* 스크롤 유도 */}
      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-300 dark:text-slate-700 hover:text-blue-500 transition-colors"
      >
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
};
