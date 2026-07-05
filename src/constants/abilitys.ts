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
      "React · Next.js· JavaScript · TypeScript 기반 프로젝트 개발 경험",
      "TanStack Query · React Hook Form 등 다양한 라이브러리 학습 및 적용",
      "공통 컴포넌트와 기능 단위 구조 설계로 재사용성과 유지보수성 향상",
    ],
  },
  {
    id: 2,
    title: "사용자 경험 중심의 UI/UX",
    content: [
      "사용자 관점에서 직관적이고 접근성 높은 UI 구현",
      "UI/UX 트렌드를 꾸준히 학습하고 프로젝트에 반영",
      "사용자 이동 경로를 고려한 인터페이스 설계 경험",
    ],
  },
  {
    id: 3,
    title: "협업과 문제 해결",
    content: [
      "팀 프로젝트에서 적극적인 의견 제안과 원활한 커뮤니케이션",
      "코드 리뷰와 리팩토링을 통해 코드 품질 개선",
      "새로운 기술을 빠르게 학습하고 프로젝트에 적용하며 지속적으로 성장",
    ],
  },
];
