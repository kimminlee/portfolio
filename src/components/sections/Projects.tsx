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

  // 필터링 로직
  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const techMatch = selectedTech === 'all' || project.tags.includes(selectedTech);
    const searchMatch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && techMatch && searchMatch;
  });

  // 모든 카테고리와 기술 스택 추출
  const allCategories: ProjectCategory[] = ['web-app', 'dashboard', 'design-system', 'visualization'];
  const allTechs = Array.from(new Set(projects.flatMap(p => p.tags)));
  const popularTechs = allTechs.slice(0, 8); // 인기있는 8개만

  const hasActiveFilters = selectedCategory !== 'all' || selectedTech !== 'all' || searchQuery !== '';

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedTech('all');
    setSearchQuery('');
  };

  // 카테고리 한글 레이블
  const categoryLabels: Record<ProjectCategory, string> = {
    'web-app': '웹 앱',
    'dashboard': '대시보드',
    'design-system': '디자인 시스템',
    'visualization': '데이터 시각화'
  };

  // 카테고리 아이콘
  const categoryIcons: Record<ProjectCategory, string> = {
    'web-app': '🌐',
    'dashboard': '📊',
    'design-system': '🎨',
    'visualization': '📈'
  };

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="py-24 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              프로젝트
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              디자인부터 개발까지, 문제를 해결한 프로젝트를 소개합니다
            </p>
          </motion.div>

          {/* 필터 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            {/* 검색창 */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="프로젝트 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 pl-12 text-slate-900 bg-white border-2 border-slate-200 rounded-full focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                />
                <svg 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* 카테고리 필터 - 큰 탭 형태 */}
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <div className="inline-flex bg-slate-100 rounded-full p-1.5 gap-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`
                    relative px-6 py-2.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap
                    ${selectedCategory === 'all' 
                      ? 'bg-white text-blue-600 shadow-md' 
                      : 'text-slate-600 hover:text-slate-900'
                    }
                  `}
                >
                  <span className="mr-2">📁</span>
                  전체
                </button>
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      relative px-6 py-2.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap
                      ${selectedCategory === category 
                        ? 'bg-white text-blue-600 shadow-md' 
                        : 'text-slate-600 hover:text-slate-900'
                      }
                    `}
                  >
                    <span className="mr-2">{categoryIcons[category]}</span>
                    {categoryLabels[category]}
                  </button>
                ))}
              </div>
            </div>

            {/* 기술 스택 필터 - 칩 형태 */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <button
                onClick={() => setSelectedTech('all')}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${selectedTech === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                  }
                `}
              >
                모든 기술
              </button>
              {popularTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${selectedTech === tech
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                    }
                  `}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* 결과 정보 & 리셋 */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">
                <span className="font-bold text-slate-900 text-lg">{filteredProjects.length}</span>
                <span className="mx-1">개의 프로젝트</span>
              </span>
              
              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={resetFilters}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  필터 초기화
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* 프로젝트 그리드 - 2개씩 표시, 고정 높이 */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="h-full" // 부모에 h-full 추가
                  >
                    <ProjectCard
                      project={project}
                      onReadmeClick={() => setSelectedProject(project)}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-slate-400 text-lg mb-2">
                  검색 결과가 없습니다
                </p>
                <p className="text-slate-400 text-sm mb-6">
                  다른 키워드로 검색해보세요
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
                >
                  필터 초기화
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* README 모달 */}
      <ReadmeModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        repoUrl={selectedProject?.links.github || ''}
      />
    </>
  );
};