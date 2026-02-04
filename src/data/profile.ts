import type { Profile } from '../types';

export const profile: Profile = {
  name: '김민이',
  title: 'UI Engineer',
  subtitle: '디자인 시스템의 확장성과 렌더링 성능을 설계하는 UI 엔지니어',
  email: 'qqazs98@gmail.com', 
  github: 'https://github.com/kimminlee',
  introduction: '디자인의 심미적 의도를 기술적 언어로 해석하고, 유지보수 가능한 View Layer 아키텍처로 구현하는 UI 엔지니어입니다. React와 TypeScript 환경에서 재사용 가능한 컴포넌트 시스템을 구축하며, 웹 접근성(a11y)과 시맨틱 웹 표준을 준수해 모든 사용자에게 일관된 경험을 제공하는 것을 핵심 가치로 삼고 있습니다.',
  strengths: [
    '협업 과정에서 반복적으로 발생하는 문제를 구조와 기준으로 해결',
    'Design Token 시스템과 Atomic Design 패턴을 활용한 UI 아키텍처 설계',
    '렌더링 파이프라인 이해를 기반으로 한 성능 최적화 (60fps 유지)',
    'TypeScript 타입 시스템을 활용한 컴파일 타임 오류 방지'
  ],
  experiences: [
    {
      company: '(주) VASCO ICT',
      position: 'SW팀 연구원 - UI/UX디자인',
      period: '2023.05 ~ 현재',
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