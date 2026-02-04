// ============================================
// 프로젝트 관련 타입
// ============================================

export type ProjectCategory = 
  | 'web-app'          // 웹 애플리케이션
  | 'dashboard'        // 대시보드
  | 'design-system'    // 디자인 시스템
  | 'visualization';   // 데이터 시각화

export type TechStack = 
  | 'React'
  | 'TypeScript'
  | 'JavaScript'
  | 'Tailwind CSS'
  | 'HTML5'
  | 'CSS3'
  | 'Vite'
  | 'Supabase'
  | 'Zustand'
  | 'Recharts'
  | 'Three.js'
  | 'Framer Motion'
  | 'SCSS'
  | 'Bootstrap'
  | 'jQuery'
  | 'Figma';

export type ProjectFeature = 
  | 'responsive'       // 반응형
  | 'real-time'        // 실시간
  | '3d'               // 3D/인터랙티브
  | 'performance'      // 성능 최적화
  | 'accessibility'    // 접근성
  | 'design-tokens';   // 디자인 토큰

export interface Project {
  id: number;
  title: string;
  desc: string;
  category: ProjectCategory;
  tags: TechStack[];
  features: ProjectFeature[];
  image: string;
  links: {
    demo?: string;
    github: string;
  };
  highlights?: string[];
}

// ============================================
// 기술 스택 관련 타입
// ============================================

export type SkillCategory = 
  | 'Frontend'
  | 'Styling'
  | 'State Management'  //추가됨
  | 'Tools'
  | 'Database'
  | 'Other';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 'expert' | 'advanced' | 'intermediate';
  description: string;
  icon: string;  //  필수 속성으로 변경 (? 제거)
}

// ============================================
// 프로필 관련 타입
// ============================================

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  github: string;
  introduction: string;
  strengths: string[];
  experiences: Experience[];
}