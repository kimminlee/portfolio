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
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 flex flex-col"
      style={{ height: '580px' }}
    >
      {/* 이미지 */}
      <div className="h-56 bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {isNDA && (
          <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
            <ShieldAlert size={12} />
            NDA
          </div>
        )}
      </div>

      {/* 콘텐츠 */}
      <div className="p-6 flex flex-col flex-1">
        {/* 태그 */}
        <div className="flex gap-1.5 mb-4 flex-wrap" style={{ minHeight: '26px' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 제목 */}
        <h3
          className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors overflow-hidden"
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', minHeight: '56px' }}
        >
          {project.title}
        </h3>

        {/* 설명 */}
        <p
          className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 overflow-hidden"
          style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', minHeight: '63px' }}
        >
          {project.desc}
        </p>

        {/* 링크 */}
        <div className="flex items-center gap-4 pt-5 border-t border-slate-100 dark:border-slate-800 mt-auto">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={15} /> Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-300 dark:text-slate-600 cursor-not-allowed">
              <Github size={15} /> Private
            </span>
          )}

          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={15} /> Live
            </a>
          ) : isNDA ? (
            <span className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-300 dark:text-slate-600 cursor-not-allowed">
              <ExternalLink size={15} /> Confidential
            </span>
          ) : null}

          {project.links.github && (
            <button
              onClick={onReadmeClick}
              className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
            >
              <BookOpen size={15} /> ReadMe
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};
