import { motion } from 'framer-motion';
import { Github, ExternalLink, BookOpen, ShieldAlert } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onReadmeClick: () => void;
}

export const ProjectCard = ({ project, onReadmeClick }: ProjectCardProps) => {
  const isNDA = !project.links.github && !project.links.demo;

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col"
      style={{ height: '600px' }}
    >
      {/* 이미지 영역 - 고정 높이 */}
      <div className="h-64 bg-slate-100 relative flex items-center justify-center overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {isNDA && (
          <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
            <ShieldAlert size={14} />
            NDA Protected
          </div>
        )}
      </div>

      {/* 콘텐츠 영역 */}
      <div className="p-8 flex flex-col flex-1">
        {/* 태그 영역 */}
        <div className="flex gap-2 mb-4 flex-wrap" style={{ minHeight: '28px' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 제목 - 최대 2줄 */}
        <h3 
          className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: '64px'
          }}
        >
          {project.title}
        </h3>

        {/* 설명 - 최대 3줄, mb-8 → mb-4로 변경 */}
        <p 
          className="text-slate-500 leading-relaxed mb-4 overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            minHeight: '72px'
          }}
        >
          {project.desc}
        </p>

        {/* 버튼 영역 - 하단 고정 */}
        <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Github size={18} /> Code
            </a>
          ) : (
            <span className="flex items-center gap-2 text-sm font-bold text-slate-400 cursor-not-allowed">
              <Github size={18} /> Private
            </span>
          )}

          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={18} /> Live
            </a>
          ) : isNDA ? (
            <span className="flex items-center gap-2 text-sm font-bold text-slate-400 cursor-not-allowed">
              <ExternalLink size={18} /> Confidential
            </span>
          ) : null}

          {project.links.github && (
            <button
              onClick={onReadmeClick}
              className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors ml-auto"
            >
              <BookOpen size={18} /> ReadMe
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};