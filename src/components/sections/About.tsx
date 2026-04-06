import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { profile } from '../../data/profile';
import { Briefcase, Target, TrendingUp } from 'lucide-react';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">About Me</h2>
          <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
            {profile.introduction}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Core Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-7 border border-blue-100 dark:border-blue-900/50"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Core Strengths</h3>
            </div>
            <ul className="space-y-3">
              {profile.strengths.map((strength, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{strength}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-7 border border-slate-100 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-slate-700 dark:bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-white" size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Experience</h3>
            </div>
            {profile.experiences.map((exp, index) => (
              <div key={index} className="mb-5 last:mb-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{exp.company}</h4>
                    <p className="text-[13px] text-blue-500 font-medium mt-0.5">{exp.position}</p>
                  </div>
                  <span className="text-[13px] text-slate-400 whitespace-nowrap ml-3">{exp.period}</span>
                </div>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-2">{exp.description}</p>
                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-slate-500 dark:text-slate-400">
                      <TrendingUp size={13} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
