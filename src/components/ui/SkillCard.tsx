import { motion } from 'framer-motion';
import { useState, memo, type FC } from 'react';
import {
  Code2, Palette, FileCode, Component, FileType, Zap,
  Wind, Database, Box, Code, GitBranch, Figma,
  Package, Braces, Paintbrush, HelpCircle,
  type LucideIcon
} from 'lucide-react';
import type { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Code2, Palette, FileCode, Component, FileType, Zap,
  Wind, Database, Box, Code, GitBranch, Figma,
  Package, Braces, Paintbrush,
} as const;

const LEVEL_CONFIG = {
  expert:       { border: 'border-l-emerald-400', label: '전문가', labelColor: 'text-emerald-600 dark:text-emerald-500' },
  advanced:     { border: 'border-l-blue-400',    label: '숙련',   labelColor: 'text-blue-500 dark:text-blue-400'       },
  intermediate: { border: 'border-l-amber-400',   label: '중급',   labelColor: 'text-amber-500 dark:text-amber-400'     },
  beginner:     { border: 'border-l-slate-300 dark:border-l-slate-600', label: '입문', labelColor: 'text-slate-400 dark:text-slate-500' },
} as const;

const SkillCardComponent: FC<SkillCardProps> = ({ skill, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const Icon = ICON_MAP[skill.icon] ?? HelpCircle;
  const cfg = LEVEL_CONFIG[skill.level];
  const isBeginner = skill.level === 'beginner';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.25, ease: 'easeOut' }}
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className={`
          group flex items-center gap-3 px-4 py-3
          bg-white dark:bg-slate-900
          border border-slate-100 dark:border-slate-800
          border-l-2 ${cfg.border}
          rounded-lg cursor-pointer
          hover:bg-slate-50 dark:hover:bg-slate-800/70
          transition-all duration-200
          ${isBeginner ? 'opacity-60 hover:opacity-80' : ''}
        `}
      >
        <Icon
          className="w-4 h-4 flex-shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors"
          strokeWidth={1.8}
        />
        <span className={`flex-1 text-sm font-medium truncate ${isBeginner ? 'text-slate-500 dark:text-slate-500' : 'text-slate-700 dark:text-slate-300'}`}>
          {skill.name}
        </span>
        <span className={`text-[13px] flex-shrink-0 ${cfg.labelColor}`}>
          {cfg.label}
        </span>
      </div>

      {/* 툴팁 */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.12 }}
          className="absolute z-50 left-0 right-0 top-full mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 rounded-xl shadow-xl border border-slate-700/50"
        >
          <div className="absolute -top-1.5 left-5 w-3 h-3 bg-slate-900 dark:bg-slate-800 rotate-45 border-l border-t border-slate-700/50" />
          <p className="relative text-[13px] leading-relaxed text-slate-300">{skill.description}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export const SkillCard = memo(SkillCardComponent);
