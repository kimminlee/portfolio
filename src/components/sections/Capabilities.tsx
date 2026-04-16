import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skillsByCategory } from '../../data/skills';
import { SkillCard } from '../ui/SkillCard';

const LEGEND = [
  { label: '전문가', color: 'bg-emerald-400' },
  { label: '중급',   color: 'bg-amber-400'   },
  { label: '입문',   color: 'bg-slate-300 dark:bg-slate-600' },
] as const;

export const Capabilities = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useScrollAnimation(sectionRef);
  const categories = Object.keys(skillsByCategory);

  return (
    <section id="capabilities" ref={sectionRef} className="py-24 bg-bg-subtle">
      <div className="max-w-section mx-auto px-6">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">Core Capabilities</h2>
          <p className="mt-2 text-base text-slate-500 dark:text-slate-400">디자인의 의도를 공학적으로 구현합니다.</p>

          {/* 레전드 */}
          <div className="flex items-center gap-4 mt-4">
            {LEGEND.map(({ label, color }) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${color}`} />
                <span className="text-[13px] text-slate-400 dark:text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 카테고리별 그룹 */}
        <div className="space-y-10">
          {categories.map((category, ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 + ci * 0.07 }}
            >
              <p className="text-[13px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                {category}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {skillsByCategory[category].map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 주력 스택 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="text-[13px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">주력 스택</p>
          <div className="flex flex-wrap gap-2">
            {['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Figma'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
