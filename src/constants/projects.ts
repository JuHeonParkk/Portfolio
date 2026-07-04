import GlobalNomad from "@/assets/Projects/globalnomad.png";
import DoingFarm from "@/assets/Projects/doingfarm.svg";
import OpenMind from "@/assets/Projects/openmind.png";
import DubugDubug from "@/assets/Projects/dubugdubug.png";

interface TechStack {
  name: string;
  icon: string;
}

export interface ProjectProps {
  id: number;
  title: string;
  period: string;
  description: string;
  thumbnail: string;
  techStack: TechStack[];
  role: string[];
  github?: string;
  deploy?: string;
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Global Nomad",
    period: "2026.05.26 ~ 2026.06.26",
    description: "체험 상품 등록, 예약 및 관리를 지원하는 액티비티 예약 서비스",
    thumbnail: GlobalNomad,
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss",
      },
      {
        name: "Axios",
        icon: "https://cdn.simpleicons.org/axios/5A29E4",
      },
      {
        name: "TanStack Query",
        icon: "https://tanstack.com/favicon.ico",
      },
      {
        name: "React Hook Form",
        icon: "https://cdn.simpleicons.org/reacthookform/EC5990",
      },
      {
        name: "Swagger",
        icon: "https://cdn.simpleicons.org/swagger",
      },
      {
        name: "Figma",
        icon: "https://skillicons.dev/icons?i=figma",
      },
      {
        name: "Linear",
        icon: "https://cdn.simpleicons.org/linear/5E6AD2",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
    role: [
      "내 체험 관리 페이지 구현",
      "체험 등록 및 수정 폼 구현",
      "공통 컴포넌트 및 layout 구현",
      "폼 이탈 방직 기능 구현",
    ],
    github: "https://github.com/Hanbh97/GlobalNomad",
    deploy: "https://global-nomad-ghn6.vercel.app/",
  },
  {
    id: 2,
    title: "Do!ng Farm",
    period: "2026.04.20 ~ 2026.05.08",
    description:
      "대시보드와 작업 보드로 팀의 할 일을 함께 가꾸는 일정 관리 서비스",
    thumbnail: DoingFarm,
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript",
      },
      {
        name: "CSS Module",
        icon: "https://cdn.simpleicons.org/css",
      },
      {
        name: "Axios",
        icon: "https://cdn.simpleicons.org/axios",
      },
      {
        name: "Swagger",
        icon: "https://cdn.simpleicons.org/swagger",
      },
      {
        name: "Figma",
        icon: "https://skillicons.dev/icons?i=figma",
      },
      {
        name: "Linear",
        icon: "https://cdn.simpleicons.org/linear/5E6AD2",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
    role: [
      "프로젝트 일정 관리 및 협업 조율",
      "사용자 경험 개선을 위한 UI 리디자인",
      "대시보드 수정 및 구성원 관리 기능 구현",
      "해시 기반 색상 매핑 로직 구현",
    ],
    github: "https://github.com/douk9909/DoingFarm",
    deploy: "https://doing-farm.vercel.app/",
  },
  {
    id: 3,
    title: "OpenMind",
    period: "2026.03.04 ~ 2026.03.18",
    description: "익명성을 기반으로 자유롭게 소통할 수 있는 SNS형 웹 서비스",
    thumbnail: OpenMind,
    techStack: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react",
      },
      {
        name: "Vite",
        icon: "https://cdn.simpleicons.org/vite",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript",
      },
      {
        name: "Styled Components",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg",
      },
      {
        name: "Axios",
        icon: "https://cdn.simpleicons.org/axios",
      },
      {
        name: "Swagger",
        icon: "https://cdn.simpleicons.org/swagger",
      },
      {
        name: "Figma",
        icon: "https://skillicons.dev/icons?i=figma",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
    role: [
      "사용자 경험 개선을 위한 UI 리디자인 및 퍼블리싱",
      "피드 페이지 및 질문 CRUD 기능 구현",
      "사용자 인터랙션 및 UX 개선",
      "SNS 공유 기능 구현",
    ],
    github: "https://github.com/pho9902/open-mind-team3",
    deploy: "https://open-mind-team3.vercel.app/",
  },
  {
    id: 4,
    title: "뚜벅뚜벅",
    period: "2024.03.11 ~ 2024.06.12",
    description: "C-ITS를 활용한 스마트 보행자 애플리케이션",
    thumbnail: DubugDubug,
    techStack: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript",
      },
      {
        name: "Styled Components",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg",
      },
      {
        name: "Axios",
        icon: "https://cdn.simpleicons.org/axios",
      },
      {
        name: "Swagger",
        icon: "https://cdn.simpleicons.org/swagger",
      },
      {
        name: "Figma",
        icon: "https://skillicons.dev/icons?i=figma",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
    role: [
      "프로젝트 초기 UI/UX 설계",
      "카카오 OAuth를 활용한 간편 로그인 기능 구현",
      "사용자 정보 조회 및 관리 기능을 하는 마이페이지 구현",
    ],
    github: "https://github.com/Capstone-Walking/Capstone_FE",
    deploy: "https://capstonewalking.netlify.app/",
  },
];
