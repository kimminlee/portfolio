import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { ReadmeModal } from '../ui/ReadmeModal';
import type { Project, ProjectCategory, TechStack } from '../../types';

export const Projects = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedTech, setSelectedTech] = useState<TechStack | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const techMatch = selectedTech === 'all' || project.tags.includes(selectedTech);
    const searchMatch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && techMatch && searchMatch;
  });

  const allCategories: ProjectCategory[] = ['web-app', 'dashboard', 'design-system', 'visualization'];
  const allTechs = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const popularTechs = allTechs.slice(0, 8);
  const hasActiveFilters = selectedCategory !== 'all' || selectedTech !== 'all' || searchQuery !== '';

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedTech('all');
    setSearchQuery('');
  };

  const categoryLabels: Record<ProjectCategory, string> = {
    'web-app': '웹 앱',
    'dashboard': '대시보드',
    'design-system': '디자인 시스템',
    'visualization': '데이터 시각화',
  };

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="py-24 bg-white dark:bg-slate-950"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">Projects</h2>
            <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
              디자인부터 개발까지, 문제를 해결한 프로젝트를 소개합니다
            </p>
          </motion.div>

          {/* 필터 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-10"
          >
            {/* 검색 */}
            <div className="mb-6">
              <div className="relative max-w-sm">
                <input
                  type="text"
                  placeholder="프로젝트 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* 카테고리 탭 */}
            <div className="flex flex-wrap gap-2 mb-5">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700'
                }`}
              >
                전체
              </button>
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>

            {/* 기술 칩 */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedTech('all')}
                className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-all ${
                  selectedTech === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                전체
              </button>
              {popularTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-all ${
                    selectedTech === tech
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* 결과 & 리셋 */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-slate-100">{filteredProjects.length}</span>개의 프로젝트
              </span>
              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={resetFilters}
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-[13px] font-medium transition-colors"
                >
                  필터 초기화
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* 그리드 */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="h-full"
                  >
                    <ProjectCard project={project} onReadmeClick={() => setSelectedProject(project)} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-slate-400 dark:text-slate-600 text-base mb-2">검색 결과가 없습니다</p>
                <p className="text-slate-400 dark:text-slate-600 text-sm mb-6">다른 키워드로 검색해보세요</p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition-colors font-medium"
                >
                  필터 초기화
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
