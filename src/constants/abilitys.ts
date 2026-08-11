interface AbilityItems {
  id: number;
  title: string;
  content: string[];
}

export const AbilityList: AbilityItems[] = [
  {
    id: 1,
    title: "기술 스택 확장 및 유지보수성",
    content: [
      "React · Next.js · JavaScript · TypeScript 기반 프로젝트 개발 경험",
      "TanStack Query · React Hook Form · Zod 등 라이브러리를 활용한 상태·폼 관리 경험",
      "ESLint · Prettier · Husky · GitHub Actions를 활용한 코드 품질 및 CI 자동화 구축",
      "공통 컴포넌트와 기능 단위 구조 설계로 재사용성과 유지보수성 향상",
    ],
  },
  {
    id: 2,
    title: "사용자 경험 중심의 UI/UX 구현",
    content: [
      "Figma를 활용한 UI 설계부터 React 기반 반응형 웹 구현 경험",
      "웹 표준과 접근성을 고려하여 다양한 디바이스 환경에 대응하는 UI 구현",
      "사용자 이동 경로와 인터랙션을 고려하여 직관적인 인터페이스 설계",
    ],
  },
  {
    id: 3,
    title: "협업과 문제 해결을 통한 성장",
    content: [
      "팀 프로젝트에서 적극적인 의견 제안과 원활한 커뮤니케이션 진행",
      "코드 리뷰와 리팩토링을 통해 코드 품질 개선",
      "문제를 분석하고 새로운 기술을 학습·적용하여 개발 과정의 문제를 해결을 통해 성취감을 느낌",
    ],
  },
];
