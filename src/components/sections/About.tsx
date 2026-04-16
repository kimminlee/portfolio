import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { profile } from '../../data/profile';
import { Briefcase, Target, TrendingUp, MapPin, Mail } from 'lucide-react';

// ✅ 사진 추가 시 이 경로만 변경하면 됩니다
// 예: '/images/profile.jpg'
const PROFILE_IMAGE_SRC = '/images/profile.png';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-bg-base"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* 프로필 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16 pb-16 border-b border-slate-100 dark:border-slate-800"
        >
          {/* 사진 영역 */}
          <div className="flex-shrink-0">
            {PROFILE_IMAGE_SRC ? (
              <img
                src={PROFILE_IMAGE_SRC}
                alt="프로필 사진"
                className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover ring-1 ring-slate-200 dark:ring-slate-700 shadow-md shadow-slate-200/60 dark:shadow-slate-900/60"
              />
            ) : (
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-slate-300 dark:text-slate-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
            )}
          </div>

          {/* 텍스트 영역 */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-1">
              <span className="text-[13px] font-medium text-blue-500 tracking-widest uppercase">
                UI Developer · Publisher
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-3">
              김민이
            </h2>
            <p className="text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mb-5">
              {profile.introduction}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[13px] text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} />
                Seoul, Korea
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={13} />
                {profile.email}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                채용 가능
              </span>
            </div>
          </div>
        </motion.div>

        {/* Core Strengths + Experience */}
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
