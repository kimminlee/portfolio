import type { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  {
    name: 'HTML5',
    category: 'Frontend',
    level: 'expert',
    description: '구조를 먼저 생각하며 작성합니다. 시맨틱 태그 선택, 접근성(WCAG 2.1 AA), SEO까지 자연스럽게 고려한 마크업을 작성합니다.',
    icon: 'Code2'
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    level: 'intermediate',
    description: '비동기 처리나 DOM 조작은 익숙하게 다룹니다. 프레임워크 없이도 웬만한 인터랙션은 구현할 수 있습니다.',
    icon: 'FileCode'
  },
  {
    name: 'React',
    category: 'Frontend',
    level: 'beginner',
    description: 'useState, useEffect 같은 기본 훅을 사용해본 정도입니다. 컴포넌트 분리는 할 수 있지만 커스텀 훅을 직접 설계한 경험은 없습니다.',
    icon: 'Component'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 'beginner',
    description: 'interface나 type 정의 정도는 작성할 수 있습니다. 제네릭이나 고급 유틸리티 타입은 아직 낯설며 타입 추론에 많이 의존합니다.',
    icon: 'FileType'
  },

  // Styling
  {
    name: 'CSS3',
    category: 'Styling',
    level: 'expert',
    description: '가장 자신 있는 영역입니다. Flexbox/Grid는 자유자재로 활용하며, CSS Variables로 테마를 구성하거나 JS 없이 상태 기반 스타일링도 구현합니다.',
    icon: 'Palette'
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    level: 'beginner',
    description: '유틸리티 클래스 조합에 익숙하고 커스텀 설정도 해봤습니다. 이 포트폴리오도 Tailwind로 작성했습니다.',
    icon: 'Wind'
  },
  {
    name: 'SCSS',
    category: 'Styling',
    level: 'intermediate',
    description: '변수·믹스인·중첩 규칙을 활용해 유지보수하기 쉬운 스타일 구조를 작성합니다. 컴포넌트 단위 파일 분리와 @use/@forward 기반 모듈화도 경험했습니다.',
    icon: 'Layers'
  },

  // State Management
  {
    name: 'Zustand',
    category: 'State Management',
    level: 'beginner',
    description: '간단한 전역 상태 store를 만들어 본 경험은 있습니다. persist나 devtools 같은 미들웨어는 아직 사용해본 적 없습니다.',
    icon: 'Box'
  },

  // Tools
  {
    name: 'VS Code',
    category: 'Tools',
    level: 'expert',
    description: '하루 종일 사용하는 도구라 손에 완전히 익었습니다. 자주 쓰는 패턴은 스니펫으로 등록해두고, 단축키도 대부분 외워서 마우스 없이 작업합니다.',
    icon: 'Code'
  },
  {
    name: 'Git/GitHub',
    category: 'Tools',
    level: 'beginner',
    description: 'commit, push, 브랜치 생성 같은 기본 작업은 단독으로 처리할 수 있습니다. rebase나 cherry-pick 같은 고급 기능은 아직 익숙하지 않습니다.',
    icon: 'GitBranch'
  },
  {
    name: 'Figma',
    category: 'Tools',
    level: 'expert',
    description: '실무에서 가장 많이 사용하는 도구입니다. Auto Layout으로 확장 가능한 디자인을 구성하고, Dev Mode로 개발자에게 직접 핸드오프합니다.',
    icon: 'Figma'
  },
  {
    name: 'Vite',
    category: 'Tools',
    level: 'intermediate',
    description: 'React 프로젝트 환경 세팅에 주로 사용합니다. 빌드 설정이나 환경변수 관리 정도는 스스로 처리할 수 있습니다.',
    icon: 'Zap'
  },

  // Database
  {
    name: 'Supabase',
    category: 'Database',
    level: 'intermediate',
    description: '프로젝트에서 백엔드 대용으로 사용해봤습니다. 기본 CRUD 쿼리와 Auth 연동은 할 수 있으며, RLS 정책 설정도 경험해봤습니다.',
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
