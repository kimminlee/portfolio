import { motion } from 'framer-motion';
import { useState, memo, type FC } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode, 
  Component, 
  FileType, 
  Zap, 
  Wind, 
  Database, 
  Box, 
  Code, 
  GitBranch, 
  Figma,
  Package,      // 👈 CSS Modules
  Braces,       // 👈 SCSS
  Paintbrush,   // 👈 Styled-components
  HelpCircle,
  type LucideIcon 
} from 'lucide-react';
import type { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

// 아이콘 매핑 (O(1) 조회)
const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Palette,
  FileCode,
  Component,
  FileType,
  Zap,
  Wind,
  Database,
  Box,
  Code,
  GitBranch,
  Figma,
  Package,      // 👈 추가
  Braces,       // 👈 추가
  Paintbrush    // 👈 추가
} as const;

// 레벨별 색상 (Tailwind 클래스명 - 변경 불가능한 상수)
const LEVEL_COLORS = {
  expert: 'bg-emerald-500',
  advanced: 'bg-blue-500',
  intermediate: 'bg-amber-500'
} as const;

const LEVEL_LABELS = {
  expert: '전문가',
  advanced: '숙련',
  intermediate: '중급'
} as const;

const SkillCardComponent: FC<SkillCardProps> = ({ skill, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // 아이콘이 매핑에 없으면 fallback 사용 (방어적 프로그래밍)
  const Icon = ICON_MAP[skill.icon] ?? HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.05,
        duration: 0.3,
        ease: 'easeOut'
      }}
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="group px-4 py-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <div className="flex items-center gap-3">
          {/* 아이콘 */}
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors">
            <Icon 
              className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" 
              strokeWidth={2}
            />
          </div>
          
          {/* 스킬명 & 레벨 */}
          <div className="flex-1 min-w-0">
            <span className="block font-semibold text-slate-800 truncate">
              {skill.name}
            </span>
          </div>
          
          {/* 레벨 인디케이터 */}
          <span 
            className={`flex-shrink-0 w-2.5 h-2.5 rounded-full ${LEVEL_COLORS[skill.level]} ring-2 ring-white shadow-sm`}
            aria-label={LEVEL_LABELS[skill.level]}
          />
        </div>
      </div>

      {/* Tooltip (Portal 사용 시 더 안정적이지만 기본 구현) */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 left-0 right-0 top-full mt-3 p-4 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700"
        >
          {/* 말풍선 화살표 */}
          <div className="absolute -top-2 left-6 w-4 h-4 bg-slate-900 border-l border-t border-slate-700 transform rotate-45" />
          
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 ${LEVEL_COLORS[skill.level]} text-xs font-bold rounded-full`}>
                {LEVEL_LABELS[skill.level]}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-200">
              {skill.description}
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

// memo로 불필요한 리렌더 방지
export const SkillCard = memo(SkillCardComponent);