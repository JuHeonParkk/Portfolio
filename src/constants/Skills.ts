export type SkillCategory =
  | "Frontend"
  | "Styling"
  | "State Management"
  | "Design"
  | "Tools";

interface SkillItem {
  name: string;
  description: string;
  category: SkillCategory;
  icon: string;
}

export const SkillList: SkillItem[] = [
  {
    name: "HTML5",
    description: "웹 표준 및 시멘틱 마크업 준수",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    description: "반응형 UI 및 레이아웃 구현",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    description: "ES6+ 문법 및 DOM 제어",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    description: "타입 정의 및 props 타입 관리",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    description: "컴포넌트 설계 및 상태 관리",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    description: "App Router 기반의 SSR 구조 이해 및 최적화 구현",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    description: "유틸리티 클래스 기반 스타일링",
    category: "Styling",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Styled Components",
    description: "컴포넌트 단위 스타일링 경험",
    category: "Styling",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg",
  },
  {
    name: "TanStack Query",
    description: "서버 상태 캐싱 및 동기화",
    category: "State Management",
    icon: "https://tanstack.com/favicon.ico",
  },
  {
    name: "React Hook Form",
    description: "폼 상태 및 유효성 검증 관리 적용",
    category: "State Management",
    icon: "https://cdn.simpleicons.org/reacthookform/EC5990",
  },
  {
    name: "Axios",
    description: "API 요청 및 인터셉터 구성",
    category: "State Management",
    icon: "https://cdn.simpleicons.org/axios/5A29E4",
  },
  {
    name: "Figma",
    description: "UI 시안 분석 및 디자인 작업",
    category: "Design",
    icon: "https://skillicons.dev/icons?i=figma",
  },
  {
    name: "Photoshop",
    description: "이미지 편집 및 리소스 제작",
    category: "Design",
    icon: "https://skillicons.dev/icons?i=ps",
  },
  {
    name: "Illustrator",
    description: "웹 벡터 아이콘 및 로고 제작",
    category: "Design",
    icon: "https://skillicons.dev/icons?i=ai",
  },
  {
    name: "Git",
    description: "브랜치 관리 및 버전 관리",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    description: "PR 기반 협업 및 코드 리뷰",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Notion",
    description: "문서화 및 프로젝트 기록 관리",
    category: "Tools",
    icon: "https://cdn.simpleicons.org/notion/000000",
  },
  {
    name: "Linear",
    description: "이슈 관리 및 스프린트 태스크 관리",
    category: "Tools",
    icon: "https://cdn.simpleicons.org/linear/5E6AD2",
  },
  {
    name: "Vercel",
    description: "프로젝트 배포 및 환경 설정",
    category: "Tools",
    icon: "https://skillicons.dev/icons?i=vercel",
  },
];
