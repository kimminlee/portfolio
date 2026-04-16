import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { ReadmeModal } from '../ui/ReadmeModal';
import type { Project } from '../../types';

export const Projects = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useScrollAnimation(sectionRef);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="py-24 bg-bg-base"
      >
        <div className="max-w-section mx-auto px-6">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">Projects</h2>
            <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
              디자인부터 구현까지, 직접 설계하고 완성한 프로젝트입니다
            </p>
          </motion.div>

          {/* 그리드 */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="h-full"
              >
                <ProjectCard project={project} onReadmeClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReadmeModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        repoUrl={selectedProject?.links.github || ''}
      />
    </>
  );
};
