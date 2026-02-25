import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Energy Management System",
    desc: "B2B 에너지 관리 플랫폼의 실시간 대시보드 UI 구현. 복잡한 데이터 구조를 직관적인 시각화로 변환하고, 사용자 중심의 인터페이스를 설계했습니다.",
    category: 'dashboard',
    tags: ['React', 'TypeScript', 'Figma', 'HTML5', 'CSS3'],
    features: ['real-time', 'performance', 'design-tokens'],
    image: "./images/project1.png",
    links: { 
      github: "" // NDA로 인해 비공개
    },
    highlights: [
      "실시간 에너지 데이터 시각화 대시보드 구현",
      "디자인 토큰 시스템 도입으로 일관된 UI/UX 확보",
      "State-Driven Styling으로 데이터 상태 기반 UI 표현",
      "브라우저 렌더링 최적화로 60fps 인터랙션 유지"
    ]
  },
  {
    id: 2,
    title: "리액터 코어 시각화 컴포넌트",
    desc: "시스템 상태와 에너지 출력을 직관적으로 표현하는 인터랙티브 3D 시각화 컴포넌트",
    category: 'visualization',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: ['3d', 'real-time', 'responsive'],
    image: "/images/project2.png",
    links: { 
      demo: "https://3-dstudy-hoag.vercel.app/", 
      github: "https://github.com/kimminlee/3Dstudy" 
    },
    highlights: [
      "Three.js 기반 3D 렌더링 최적화",
      "실시간 데이터 시각화",
      "인터랙티브 UI/UX 설계"
    ]
  },
  {
    id: 3,
    title: "NEXUS MONITOR: High-Performance BEMS Dashboard",
    desc: "초당 100건 이상의 실시간 데이터 유입 환경에서 커스텀 가상화 기술로 60FPS 성능을 방어한 고성능 BEMS 대시보드",
    category: 'dashboard',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Recharts'],
    features: ['real-time', 'performance', 'responsive'],
    image: "/images/project3.png",
    links: { 
      demo: "https://performance-dashboard-x6lq.vercel.app/", 
      github: "https://github.com/kimminlee/performance-dashboard" 
    },
    highlights: [
      "가상 스크롤링으로 대량 데이터 렌더링 최적화",
      "Zustand 기반 전역 상태 관리",
      "Recharts 커스터마이징 차트 구현"
    ]
  },
  {
    id: 4,
    title: "아토믹 디자인 패턴 기반의 UI 시스템",
    desc: "디자인 토큰을 SSOT로 활용해 시스템 일관성을 확보하고, 아토믹 디자인 패턴으로 재사용성을 극대화했습니다.",
    category: 'design-system',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    features: ['design-tokens', 'accessibility', 'responsive'],
    image: "/images/project4.png",
    links: { 
      demo: "https://ads-vert-six.vercel.app/", 
      github: "https://github.com/kimminlee/ADS" 
    },
    highlights: [
      "CSS Variables 기반 Design Token 시스템",
      "Atomic Design 패턴 적용",
      "컴포넌트 문서화 및 Storybook 구축"
    ]
  },
   {
    id: 5,
    title: "Code Dictionary (UI 컴포넌트/개념 사전)",
    desc: "HTML·CSS·JavaScript 항목을 카드/사이드바 기반으로 빠르게 탐색하는 개인 문서형 웹",
    category: 'design-system',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['design-tokens', 'accessibility', 'responsive'],
    image: "/images/project5.png",
    links: {
      demo: "https://code-dictionary.vercel.app/",
      github: "https://github.com/kimminlee/code-dictionary"
    },
    highlights: [
      "카테고리 카드 + 사이드바 네비게이션으로 항목 구조화",
      "페이지별 TOC 자동 생성(섹션 앵커)으로 빠른 이동 지원",
      "코드 블록 Copy 버튼 제공 및 문서형 레이아웃 최적화"
    ]
  }
];

// 필터링을 위한 유니크한 값들 추출
export const allCategories = Array.from(new Set(projects.map(p => p.category)));
export const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
export const allFeatures = Array.from(new Set(projects.flatMap(p => p.features)));