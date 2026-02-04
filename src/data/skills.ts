import type { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  {
    name: 'HTML5',
    category: 'Frontend',
    level: 'expert',
    description: '시맨틱 마크업, 웹 접근성(WCAG 2.1 AA), SEO 최적화, 구조화된 데이터',
    icon: 'Code2'
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    level: 'intermediate',
    description: 'ES2023 문법, 비동기 처리(Promise/async-await), 클로저, 프로토타입 체인',
    icon: 'FileCode'
  },
  {
    name: 'React',
    category: 'Frontend',
    level: 'intermediate',
    description: 'Hooks 활용, 성능 최적화(memo/useCallback), Custom Hook 패턴, Context API',
    icon: 'Component'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 'intermediate',
    description: '타입 추론, 제네릭 기초, Utility Types, 인터페이스 설계 입문',
    icon: 'FileType'
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 'intermediate',
    description: 'App Router 기초, 서버/클라이언트 컴포넌트 구분, 동적 라우팅, 기본 최적화',
    icon: 'Zap'
  },

  // Styling
  {
    name: 'CSS3',
    category: 'Styling',
    level: 'expert',
    description: 'CSS Variables, Flexbox/Grid 마스터, 복잡한 애니메이션, 상태 기반 클래스, 반응형 디자인',
    icon: 'Palette'
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    level: 'intermediate',
    description: 'Utility 클래스 활용, 커스텀 설정(theme.extend), 반응형 디자인, @apply 지시어',
    icon: 'Wind'
  },
  {
    name: 'CSS Modules',
    category: 'Styling',
    level: 'intermediate',
    description: '스코프 격리, 네이밍 컨벤션(BEM), composes 활용, TypeScript 타입 생성',
    icon: 'Package'
  },
  {
    name: 'SCSS',
    category: 'Styling',
    level: 'intermediate',
    description: '변수/믹스인, 중첩 구조, @extend, 조건문/반복문, 7-1 패턴 아키텍처',
    icon: 'Braces'
  },
  {
    name: 'Styled-components',
    category: 'Styling',
    level: 'intermediate',
    description: 'CSS-in-JS, Props 기반 동적 스타일링, ThemeProvider, GlobalStyle, 트랜지언트 Props',
    icon: 'Paintbrush'
  },

  // State Management
  {
    name: 'React Query',
    category: 'State Management',
    level: 'intermediate',
    description: '서버 상태 관리, 캐싱 전략(staleTime/cacheTime), Optimistic Updates 기초',
    icon: 'Database'
  },
  {
    name: 'Zustand',
    category: 'State Management',
    level: 'intermediate',
    description: '전역 상태 관리, 미들웨어(persist/devtools), 슬라이스 패턴 기초',
    icon: 'Box'
  },

  // Tools
  {
    name: 'VS Code',
    category: 'Tools',
    level: 'expert',
    description: '단축키 마스터, 스니펫 제작, 디버깅, 익스텐션 최적화, 워크스페이스 설정',
    icon: 'Code'
  },
  {
    name: 'Git/GitHub',
    category: 'Tools',
    level: 'intermediate',
    description: 'Branch 전략, Rebase/Cherry-pick, Pull Request, Conflict 해결, 기본 Actions',
    icon: 'GitBranch'
  },
  {
    name: 'Figma',
    category: 'Tools',
    level: 'expert',
    description: 'UI/UX 디자인, 프로토타이핑, 컴포넌트 시스템, Auto Layout, Dev Mode 핸드오프',
    icon: 'Figma'
  },
  {
    name: 'Vite',
    category: 'Tools',
    level: 'intermediate',
    description: 'HMR 활용, 프로덕션 빌드 최적화, 환경변수 관리, 플러그인 설정',
    icon: 'Zap'
  },

  // Database
  {
    name: 'Supabase',
    category: 'Database',
    level: 'intermediate',
    description: 'PostgreSQL 쿼리, RLS 정책 설정, 실시간 구독, Storage/Auth 통합',
    icon: 'Database'
  }
];

// 카테고리별 분류 (불변성 보장)
export const skillsByCategory = skills.reduce<Record<string, Skill[]>>(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  },
  {}
);