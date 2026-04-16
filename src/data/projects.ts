import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "LUMIA SPA (프리미엄 스파 웹사이트)",
    desc: "Urban Serenity 디자인 시스템 기반의 프리미엄 스파 브랜드 웹사이트. 홈·서비스·예약·FAQ 5개 페이지로 구성된 정적 멀티페이지 사이트",
    category: 'web-app',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['design-tokens', 'responsive', 'accessibility'],
    image: "/images/project6.png",
    links: {
      demo: "https://lumiaspa.vercel.app/",
      github: "https://github.com/kimminlee/lumiaspa"
    },
    highlights: [
      "CSS Custom Properties 기반 라이트/다크 테마 전환 및 localStorage 상태 유지",
      "No-Line Rule·앰비언트 그림자·Glass 네비게이션 등 에디토리얼 디자인 시스템 구현",
      "인터랙티브 달력·시간 슬롯 예약 UI, 서비스 필터 탭, FAQ 어코디언 등 순수 JS 컴포넌트 구성"
    ]
  },
  {
    id: 2,
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
    id: 3,
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
