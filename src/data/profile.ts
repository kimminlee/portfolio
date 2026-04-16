import type { Profile } from '../types';

export const profile: Profile = {
  name: '김민이',
  title: 'UI Developer · Publisher',
  subtitle: 'Figma 시안을 시맨틱 마크업과 CSS 시스템으로 구현하는 퍼블리셔',
  tagline: '디자인의 구조를 코드로 정확히 옮기고,\n협업에서 생기는 문제를 기준으로 해결합니다.',
  email: 'qqazs98@gmail.com', 
  github: 'https://github.com/kimminlee',
  introduction: '디자인의 의도를 HTML/CSS로 정확하게 옮기는 것에 강점을 가진 퍼블리셔입니다. Figma 시안을 시맨틱 마크업과 CSS 시스템으로 구현하며, Design Token 기반의 일관된 UI 구조 설계와 웹 접근성(a11y) 준수를 핵심 가치로 삼고 있습니다.',
  strengths: [
    '협업 과정에서 반복적으로 발생하는 문제를 구조와 기준으로 해결',
    'Design Token 시스템과 Atomic Design 패턴을 활용한 UI 아키텍처 설계',
    'Figma에서 코드까지 — 디자인 핸드오프 전 과정을 단독으로 처리',
    'CSS 클래스 기반 상태 관리로 JS 의존 없이 UI 인터랙션 구현'
  ],
  experiences: [
    {
      company: '(주) VASCO ICT',
      position: 'SW팀 연구원 - UI/UX디자인',
      period: '2023.05 ~ 2026.05',
      description: 'B2B 에너지 관리 시스템(BEMS) UI/UX 디자인 및 퍼블리싱 전담. 디자인 시안 제작부터 실제 화면 구현까지 전 과정을 담당하며, 데이터 시각화와 대시보드 인터페이스 설계에 집중하고 있습니다.',
      achievements: [
        'Figma 기반 화면 설계 및 디자인 시스템 구축 (40+ 화면)',
        'HTML5/CSS3/JavaScript로 TV 사이즈 원페이지 노스크롤 대시보드 UI 퍼블리싱',
        'Design Token 시스템 도입으로 테마 확장 시 전역 스타일 충돌 방지',
        'State-Driven Styling 구조화: 데이터 상태별 클래스 맵핑으로 UI 제어 간소화',
        'CSS 클래스 기반 상태 관리로 DOM 조작 최소화 및 유지보수성 향상',
        '개발자와의 협업 과정에서 기술적 제약사항을 반영한 실현 가능한 UI 설계'
      ]
    }
  ]
};