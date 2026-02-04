import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skillsByCategory } from '../../data/skills';
import { SkillCard } from '../ui/SkillCard';

export const Capabilities = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const categories = Object.keys(skillsByCategory);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
          <p className="text-xl text-slate-600">
            디자인의 의도를 공학적으로 구현합니다.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full" />
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillsByCategory[category].map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Main Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {['React', 'TypeScript', 'Tailwind CSS', 'Figma'].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-bold text-lg"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};