import GlobalNomad from "@/assets/images/projects/GlobalNomad/thumbnail.png";
import GlobalNomadList from "@/assets/images/projects/GlobalNomad/activityList.gif";
import GlobalNomadLeave from "@/assets/images/projects/GlobalNomad/formLeave.gif";
import GlobalNomadForm from "@/assets/images/projects/GlobalNomad/formCRUD.gif";
import GlobalNomadFavicon from "@/assets/images/projects/GlobalNomad/favicon.svg";
import DoingFarm from "@/assets/images/projects/DoingFarm/thumbnail.png";
import DoingFarmTeam from "@/assets/images/projects/DoingFarm/issue.png";
import DoingFarmDesign from "@/assets/images/projects/DoingFarm/design.png";
import DoingFarmDashboard from "@/assets/images/projects/DoingFarm/dashboard.gif";
import DoingFarmFavicon from "@/assets/images/projects/DoingFarm/favicon.png";
import DoingFarmTag from "@/assets/images/projects/DoingFarm/tag.png";
import OpenMind from "@/assets/images/projects/OpenMind/thumbnail.png";
import OpenMindDesign from "@/assets/images/projects/OpenMind/design.png";
import OpenMindQuestion from "@/assets/images/projects/OpenMind/question.gif";
import OpenMindShare from "@/assets/images/projects/OpenMind/snsshare.gif";
import OpenMindNavigation from "@/assets/images/projects/OpenMind/scroll.gif";
import OpenMindException from "@/assets/images/projects/OpenMind/exception.png";
import OpenMindFavicon from "@/assets/images/projects/OpenMind/favicon.svg";
import DubugDubug from "@/assets/images/projects/DubugDubug/thumbnail.png";
import DubugDubugDesign from "@/assets/images/projects/DubugDubug/design.png";
import DubugDubugLogin from "@/assets/images/projects/DubugDubug/login.png";
import DubugDubugMyPage from "@/assets/images/projects/DubugDubug/mypage.png";
import DubugDubugFavicon from "@/assets/images/projects/DubugDubug/favicon.png";
import AigoMonFavicon from "@/assets/images/projects/AigoMon/favicon.png";
import AigoMonThumbnail from "@/assets/images/projects/AigoMon/thumbnail.png";
import AigoMonResult from "@/assets/images/projects/AigoMon/result.gif";
import AigoMonWorkFlow from "@/assets/images/projects/AigoMon/workflow.png";

interface DetailRole {
  role: string;
  img?: string;
  description: string[];
}

interface TroubleShooting {
  title: string;
  problem: string;
  solution: string;
  solutionMore: string[];
  result: string;
}

export interface ProjectProps {
  id: number;
  title: string;
  period: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  role: string[];
  detailRole?: DetailRole[];
  troubleShooting?: TroubleShooting[];
  learn: string[];
  try: string[];
  github?: string;
  deploy?: string;
  memberCount?: string;
  favicon?: string;
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "뚜벅뚜벅",
    period: "24.03.11 - 24.06.12",
    description: "C-ITS를 활용한 스마트 보행자 애플리케이션",
    thumbnail: DubugDubug,
    techStack: [
      "React",
      "JavaScript",
      "Styled Components",
      "Axios",
      "Swagger",
      "Figma",
      "GitHub",
    ],
    role: ["프로젝트 UI/UX 디자인", "카카오 로그인", "마이페이지 기능 구현"],
    detailRole: [
      {
        role: "프로젝트 초기 UI/UX 설계",
        img: DubugDubugDesign,
        description: [
          "팀원들과의 초기 기획 회의 내용을 바탕으로 전체 서비스의 유저 플로우와 화면 구조를 체계적으로 설계",
        ],
      },
      {
        role: "카카오 OAuth 기반 소셜 간편 로그인 구현",
        img: DubugDubugLogin,
        description: [
          "카카오 소셜 로그인 API를 연동하여 복잡한 가입 절차를 생략하고 유저가 원클릭으로 진입할 수 있는 간편 인증 흐름 구축",
          "인증 토큰(Token)의 안전한 관리 및 예외 처리를 통해 로그인 세션을 안정적으로 유지하는 사용자 환경 제공",
        ],
      },
      {
        role: "개인화 맞춤 서비스를 위한 마이페이지 및 즐겨찾기 구현",
        img: DubugDubugMyPage,
        description: [
          "사용자 고유 정보 데이터를 조회하고 유연하게 변경·관리할 수 있는 마이페이지 화면 개발 및 비동기 통신 연동",
          "유저별 관심 데이터를 한눈에 모아볼 수 있는 즐겨찾기 리스트를 구성하여 개인 맞춤형 서비스 이용 편의성 극대화",
        ],
      },
    ],
    learn: [
      "첫 프로젝트를 진행하며 기획, 디자인, 프론트엔드 개발이 하나의 서비스로 완성되는 과정을 경험",
      "프론트엔드와 백엔드가 함께 협업하는 과정에서 API 설계와 데이터 구조 중요성을 경험",
      "Figma를 활용하여 직접 UI를 설계하며 사용자 관점에서 화면을 구성하는 방법을 학습",
      "OAuth 로그인 기능을 구현하며 인증 및 사용자 정보 관리에 대한 기초적인 이해",
    ],
    try: [
      "당시 깃 플로우에 대한 이해도가 부족하여 잘 활용하지 못한 것이 아쉬움으로 남습니다. 이후 팀 프로젝트에서는 Git Flow와 Pull Request 기반 협업 방식을 학습하고 적용하며 협업 역량을 개선하였습니다.",
      "React를 처음 사용한 프로젝트였기 때문에 컴포넌트 설계 경험이 부족하여 코드 재사용성이 떨어지는 구조로 구현한 부분이 아쉬움으로 남습니다. 이후 공통 컴포넌트와 커스텀 훅을 적극적으로 활용하며 재사용성과 유지보수성을 고려한 설계 역량을 키웠습니다.",
      "카카오 로그인 인증 기능 구현 과정에서 OAuth 인증 흐름에 대한 이해가 부족하여 예상보다 많은 개발 시간을 사용한 것 같습니다. 하지만 해당 과정을 통해 OAuth 인증 방식과 토큰 기반 로그인 구조를 학습할 수 있었으며, 이후 소셜 로그인 및 인증 기능 구현에 대한 이해도를 높일 수 있었습니다.",
    ],
    github: "https://github.com/Capstone-Walking/Capstone_FE",
    deploy: "https://capstonewalking.netlify.app/",
    memberCount: "Frontend 3명 Backend 3명",
    favicon: DubugDubugFavicon,
  },
  {
    id: 2,
    title: "OpenMind",
    period: "26.03.04 - 26.03.18",
    description: "익명성을 기반으로 자유롭게 소통할 수 있는 SNS형 웹 서비스",
    thumbnail: OpenMind,
    techStack: [
      "React",
      "Vite",
      "JavaScript",
      "Styled Components",
      "Axios",
      "Swagger",
      "Figma",
      "GitHub",
    ],
    role: [
      "UI리디자인",
      "피드페이지(질문CRUD) ",
      "SNS공유기능",
      "404 페이지 디자인 및 퍼블리싱",
      "스켈레톤 UI 제작",
      "스크롤업 로직 구현",
      "날짜 포맷팅 함수 구현",
    ],
    detailRole: [
      {
        role: "사용자 경험 개선을 위한 UI 리디자인",
        img: OpenMindDesign,
        description: [
          "유저 플로우를 분석하여 피드 페이지에서 메인 페이지로 돌아갈 수 없어 이용 흐름이 단절되는 문제를 발견하고, 화면 구조와 사용 맥락에 맞게 이전 페이지로 이동하는 UI 요소를 추가하여 자연스러운 페이지 이동 흐름 구현",
          "프로젝트 디자인 컨셉에 맞춰 새로운 UI 요소를 리디자인하여 서비스 일관성을 강화시킴 ",
        ],
      },
      {
        role: "사용자 피드 페이지 조회, 삭제 및 질문 등록 기능 구현",
        img: OpenMindQuestion,
        description: [
          "Axios를 활용한 RESTful API 연동으로 사용자 피드 조회 및 질문 등록 기능 구현",
          "질문 등록 시 성공 콜백을 활용하여 새로고침 없이 목록이 자동 갱신하여 사용자 경험 개선",
          "리액션 기능 및 사용자 인터랙션 구현",
          "낙관적 업데이트를 적용해 서버 응답을 기다리지 않는 좋아요 인터랙션 구현",
        ],
      },
      {
        role: "SNS 공유 기능 구현",
        img: OpenMindShare,
        description: [
          "Clipboard API와 Kakao SDK를 활용하여 URL 복사 및 Kakao•Facebook SNS 공유 기능 구현",
          "답변자 전용 경로인 /answer를 제거를 통해 공유 경로를 정규화하여 사용자에게 올바른 피드 URL이 공유되도록 처리",
          "Kakao Custom Template을 활용하여 사용자 정보를 포함한 공유 카드 구현",
          "Open Graph 메타 태그를 적용하여 SNS 공유 시 title•description•image 등이 포함된 미리보기 제공",
        ],
      },
      {
        role: "사용자 이탈 방지를 위한 예외 화면 및 로딩 UI 구현 ",
        img: OpenMindException,
        description: [
          "존재하지 않는 경로 접근 시 404 페이지를 제공하여 사용자가 서비스 흐름을 이어갈 수 있도록 안내",
          "Skeleton UI를 적용해 데이터 로딩 중 레이아웃 변화를 최소화하고 체감 성능 향상",
        ],
      },
      {
        role: "긴 피드 탐색 경험 개선",
        img: OpenMindNavigation,
        description: [
          "긴 피드 목록을 탐색하는 과정에서 현재 피드의 사용자 정보를 다시 확인하기 위해 상단으로 이동해야 하는 불편을 발견",
          "스크롤 시 사용자 정보가 보이지 않는 시점에 맞춰 사용자 정보가 표시되는 고정 헤더를 구현하여 스크롤 중에도 사용자 정보를 확인할 수 있도록 개선",
          "사용자 이름 클릭 시 화면 최상단으로 이동하는 인터랙션을 추가하여 반복적인 스크롤을 줄이고 탐색 편의성을 개선",
        ],
      },
      {
        role: "브라우저 내장 API를 활용한 공통 유틸 함수 구현",
        description: [
          "Intl.RelativeTimeFormat을 활용해 라이브러리 없이 '오늘', '어제', 'n일 전' 등 상대 시간 포맷팅 유틸 함수 구현",
          "생성일만 전달하면 사용할 수 있도록 공통 유틸 함수로 분리하여 재사용성 향상",
        ],
      },
    ],
    troubleShooting: [
      {
        title: "API 제약을 고려한 리액션 정책 구현",
        problem:
          "조회 API가 사용자별 리액션 상태를 제공하지 않아 동일 사용자의 리액션을 제어할 수 없었습니다.",
        solution:
          "좋아요와 싫어요의 성격을 구분하여 리액션 정책을 설계하였습니다.",
        solutionMore: [
          "부정적인 의미의 싫어요는 LocalStorage에 questionId를 저장하여 동일 질문에는 한 번만 입력할 수 있도록 구현",
          "긍정적인 의미의 좋아요는 연속 입력을 허용하여 10번 연속 클릭 시 콤보 이펙트가 실행되는 인터랙션을 구현",
        ],
        result:
          "API 제약을 보완하여 서비스 정책에 맞는 리액션 기능을 구현하며 사용자가 시각적으로 확인할 수 있을 뿐 아니라 재미 요소를 더하며 사용자 경험을 향상 시켰습니다.",
      },
      {
        title: "연속 클릭 인터렉션 상태 관리",
        problem:
          "좋아요 콤보 이펙트를 boolean 상태로 관리하여, 이펙트 실행 중 다시 이벤트가 발생하면 기존 타이머와 충돌하여 이펙트가 누락되거나 조기에 종료되는 문제가 있었습니다.",
        solution:
          "연속으로 발생하는 좋아요 콤보 이펙트가 서로 영향을 주지 않도록 상태 관리 방식을 개선하였습니다.",
        solutionMore: [
          "각 콤보에 고유 ID를 부여하여 배열 상태로 관리하여 여러 이펙트를 동시에 관리할 수 있또록 구현",
          "개별 타이머를 적용하여 이펙트 별로 독립적으로 생성되고 제거될 수 있도록 개선",
        ],
        result:
          "짧은 시간에 콤보가 연속으로 발생하더라도 각 이펙트가 누락되지 않고 안정적으로 표시되도록 하여 연속 클릭 상황에서도 일관되게 출력되도록 하였습니다.",
      },
      {
        title: "피드 공유 시 접근 오류 해결",
        problem:
          "답변자 페이지에서 피드를 공유하면 URL에 /answer 경로가 포함되어, 일반 사용자가 피드에 접근하지 못하는 문제가 있었습니다.",
        solution:
          "권한에 따른 페이지 경로 차이를 고려하여 공유 리링크 경로를 정규화하였습니다. ",
        solutionMore: [
          "공유 URL 생성 시 /answer 경로를 제거하여 일반 사용자가 접근 가능한 피드 URL로 변환",
          "URL 복사, Kakao, Facebook 공유에 동일한 변환 로직을 적용하여 일관된 공유 링크 제공",
        ],
        result:
          "답변자 페이지에서 공유하더라도 모든 사용자가 해당 피드에 정상적으로 접근할 수 있도록 개선하였습니다.",
      },
    ],
    learn: [
      "React 상태 관리(useState, props)를 이해하고 활용하는 방법을 익힐 수 있었습니다.",
      "비동기 데이터 처리와 API 연동에 대한 이해를 높일 수 있었습니다.",
      "예외 처리의 중요성을 느끼고, 기획을 하며 예외 처리를 해야 할 부분에 대한 고민도 함께 해야 함을 배웠습니다.",
      "브랜치 전략과 커밋 전략을 직접 사용해보며 이해할 수 있었습니다.",
      "프로젝트를 하며 직접 깃을 다뤄보니 깃 플로우에 대한 이해도를 높였습니다.",
    ],
    try: [
      "첫 프로젝트였기 때문에 모르는 것이 많아 적극적으로 의견을 제시하지 못했던 점이 아쉬웠습니다. 다음 프로젝트에서는 다양한 의견을 적극적으로 제안하며 프로젝트의 완성도와 사용자 경험 향상에 기여하고자 했습니다.",
      "컴포넌트 분리에 대한 아쉬움이 남습니다. 재사용이 가능하고 유지보수하기 좋은 컴포넌트로 구조를 만들고자 필요없는 부분까지 컴포넌트를 분리하여 파일 구조가 다른 사람들이 파악하기 어려웠던 것 같았습니다. 그래서 향후 멘토님께서 제공해주신 패턴 내용을 학습 후 개선 된 컴포넌트 구조를 사용하여 유지보수하기 좋은 구조로 개선해볼 것 입니다.",
      "팀원들과 해결하기 보다 AI를 이용하여 해결하려고 했던 점이 좋지 않았던 것 같습니다. 향후 프로젝트 진행 시 팀원들과 문제 상황을 활발히 공유하며 함께 해결하며 AI 사용을 줄이고 기술에 대한 이해도를 높일 수 있도록 개선해볼 것 입니다.",
    ],
    github: "https://github.com/pho9902/open-mind-team3",
    deploy: "https://open-mind-team3.vercel.app/",
    memberCount: "Frontend 4명",
    favicon: OpenMindFavicon,
  },
  {
    id: 3,
    title: "Do!ng Farm",
    period: "26.04.20 - 26.05.08",
    description:
      "대시보드와 작업 보드로 팀의 할 일을 함께 가꾸는 일정 관리 서비스",
    thumbnail: DoingFarm,
    techStack: [
      "Next.js",
      "TypeScript",
      "CSS Module",
      "Axios",
      "Swagger",
      "Figma",
      "Linear",
      "GitHub",
    ],
    role: [
      "팀장",
      "UI리디자인",
      "대시보드 관리 페이지",
      "구성원 초대 및 삭제 기능",
      "공통 컴포넌트 제작",
      "스켈레톤 UI 제작",
    ],
    detailRole: [
      {
        role: "팀장 역할 수행",
        img: DoingFarmTeam,
        description: [
          "데일리 스크럼을 주도하여 작업 현황과 이슈를 공유하고 일정 및 우선순위를 조율",
          "Linear 기반 백로그와 Sprint Cycle을 운영하여 작업 우선순위와 담당 범위를 명확히 하고, 진행 상황을 공유하며 팀원들의 중복 작업을 방지",
        ],
      },
      {
        role: "사용자 경험 개선을 위한 UI 리디자인 및 브랜딩",
        img: DoingFarmDesign,
        description: [
          "'할 일을 심고 수확하는 농장' 콘셉트에 맞춰 서비스 UI를 리디자인하고, 일관된 디자인 가이드를 적용",
          "AI를 활용하여 프로젝트 아이덴티디를 나타내는 대표 캐릭터 제작",
        ],
      },
      {
        role: "공통 컴포넌트 설계 및 개발",
        description: [
          "Figma를 분석하여 반복되는 UI를 식별하고 공통 컴포넌트 설계",
          "Input, Card, Avatar, Dropdown, Pagination 등 재 사용 가능한 컴포넌트로 구현",
          "Pros와 TypeScript 타입을 설계하여 다양한 화면에서 재사용 가능하도록 구현",
        ],
      },
      {
        role: "대시보드 관리 페이지 구현",
        img: DoingFarmDashboard,
        description: [
          "대시보드 수정·삭제·초대 등 관리자 기능을 컴포넌트 단위로 분리하여 유지보수성을 고려한 구조 설계",
          "대시보드 수정 완료 후 변경된 제목과 색상을 화면에 즉시 반영",
          "Generic Delete Hook을 구현하여 구성원 삭제와 초대 취소 기능에 재사용하여 에러와 성공 처리를 일관된 방식으로 관리",
        ],
      },
      {
        role: "사용자 권한에 따른 Navbar UI 제어",
        description: [
          "대시보드 생성자만 관리 기능을 사용할 수 있다는 요구사항에 맞춰 사용자 권한에 맞게 UI가 노출되도록 설계",
          "대시보드 생성자만 대시보드 관리 버튼 및 구성원 초대 버튼이 보이도록 처리",
          "일반 구성원은 대시보드 멤버만 확인할 수 있도록 대시보드 관리 버튼 숨김 처리",
        ],
      },
      {
        role: "해시 기반 색상 매핑 시스템 설계",
        img: DoingFarmTag,
        description: [
          "문자열을 해시값으로 변환하여 동일한 사용자 이름과 태그에는 항상 같은 색상이 적용되도록 공통 유틸 함수 구현",
          "Avatar와 태그 컴포넌트에서 동일한 색상 매핑 로직을 재사용하여 중복 코드를 줄이고 일관된 UI 제공",
          "Avatar의 경우 이름이 변경될 때만 이니셜과 색상을 다시 계산하도록 useMemo를 적용",
          "별도의 색상 데이터를 저장하지 않고도 사용자와 태그를 직관적으로 구분할 수 있도록 개선",
        ],
      },
    ],
    troubleShooting: [
      {
        title: "중복 초대로 인한 중복 응답 방지",
        problem:
          "동일한 대시보드에 사용자를 여러 번 초대할 수 있었고, 사용자의 초대 목록에도 동일한 대시보드 초대가 중복으로 표시되었습니다. 이로 인해 사용자가 같은 대시보드에 대해 여러 번 수락할 수 있었으며, 동일한 대시보드가 중복 생성되는 문제가 발생했습니다.",
        solution:
          "동일한 대시보드에 대한 중복 응답을 방지하도록 초대 목록 관리 로직을 개선하였습니다.",
        solutionMore: [
          "현재 참여 중인 대시보드 ID를 Set으로 구성하고, 대시보드 ID를 기준으로 이미 참여한 대시보드의 초대를 목록에서 필터링",
          "초대를 수락하면 동일한 dashboardId를 가진 모든 초대 항목을 제거하여 같은 대시보드에 대한 중복 수락 방지",
          "초대를 거절하면 해당 invitationId의 항목만 제거하여 동일 대시보드의 다른 초대에는 별도로 응답할 수 있도록 처리",
        ],
        result:
          "이미 참여한 대시보드의 초대와 수락한 대시보드의 중복 초대가 다시 노출되지 않도록 개선하여, 동일 대시보드가 중복 생성되는 문제를 방지했습니다.",
      },
      {
        title: "구성원 삭제 후 빈 페이지 노출 문제 해결",
        problem:
          "구성원 또는 초대 내역의 마지막 항목을 삭제하면 페이지에 데이터가 없어 빈 목록이 표시되어 사용자가 전체 데이터가 모두 삭제된 것으로 오해할 수 있었습니다.",
        solution:
          "삭제 이후 페이지 상태를 고려한 페이지네이션 로직을 구현하였습니다.",
        solutionMore: [
          "현재 페이지의 데이터 개수를 확인하여 마지막 항목을 삭제한 경우 이전 페이지로 이동하도록 분기 처리",
          "데이터가 남아있는 경우 현재 페이지를 유지한 채 목록만 재조회하여 불필요한 페이지 이동 방지",
        ],
        result:
          "삭제 후 빈 페이지가 노출되지 않도록 개선하여 사용자가 항상 유효한 목록을 확인할 수 있도록 했으며, 페이지 이동 흐름을 자연스럽게 개선하였습니다.",
      },
    ],
    learn: [
      "프로젝트 리더 역할을 수행하며 일정 관리, 업무 분배, 데일리 스크럼 운영 등 협업 리딩 경험을 쌓았습니다.",
      "반복되는 UI와 로직을 공통 컴포넌트 및 커스텀 Hook으로 설계하며 재사용성과 유지보수성을 고려하는 개발 방식을 익혔습니다.",
      "Next.js App Router 기반의 프로젝트 구조와 라우팅 방식을 이해하고 실제 서비스에 적용해보았습니다.",
      "Git Flow, Pull Request, 코드 리뷰를 기반으로 협업하며 팀 개발 프로세스를 경험했습니다.",
    ],
    try: [
      "기능 구현에 집중하다 보니 대부분의 화면을 Client Component 중심으로 개발하여 Next.js App Router의 Server Component를 충분히 활용하지 못했습니다. 앞으로는 데이터 조회와 정적 UI는 Server Component에서 처리하고, 상호작용이 필요한 부분만 Client Component로 분리하여 성능과 번들 크기를 최적화하는 구조를 적용해보고 싶습니다.",
      "컴포넌트 설계 경험이 부족해 일부 UI와 비즈니스 로직이 함께 작성된 부분이 있었습니다. 이후에는 공통 컴포넌트와 Custom Hook을 적극 활용하여 역할과 책임을 명확히 분리하는 구조를 설계해보고 싶습니다.",
      "프로젝트 기간의 제약으로 성능 최적화와 코드 리팩토링에 충분한 시간을 투자하지 못했습니다. 앞으로는 Lighthouse 등의 도구를 활용해 병목 지점을 분석하고, 렌더링 최적화와 리팩토링을 통해 서비스 품질을 높여보고 싶습니다.",
    ],
    github: "https://github.com/douk9909/DoingFarm",
    deploy: "https://doing-farm.vercel.app/",
    memberCount: "Frontend 4명",
    favicon: DoingFarmFavicon,
  },
  {
    id: 4,
    title: "Global Nomad",
    period: "26.05.26 - 26.06.26",
    description: "체험 상품 등록, 예약 및 관리를 지원하는 액티비티 예약 서비스",
    thumbnail: GlobalNomad,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "TanStack Query",
      "React Hook Form",
      "Swagger",
      "Figma",
      "Linear",
      "GitHub",
    ],
    role: [
      "UI 리디자인",
      "내 체험 조회 페이지 퍼블리싱 및 기능 구현",
      "체험 등록 / 수정 / 삭제 페이지 퍼블리싱 및 기능 구현",
      "FAQ 및 개인정보처리방침 페이지 퍼블리싱",
      "공통 Layout 및 SideMenu 설계",
      "SVG 아이콘 커스터마이징을 위한 SVGR 환경 구축",
      "Toast 컴포넌트 구현",
      "무한 스크롤 및 폼 이탈 방직 기능 구현",
      "Lighthouse 기반 성능 개선",
    ],
    detailRole: [
      {
        role: "내 체험 관리 페이지 구현",
        img: GlobalNomadList,
        description: [
          "TanStack Query의 Infinite Query와 Intersection Observer를 활용하여 무한 스크롤 기반의 체험 리스트 구현",
          "프로젝트 내 재사용성을 고려하여 스크롤 감지 로직인 useInfiniteScroll을 공통 커스텀 훅으로 추상화",
          "데이터의 불변성을 보장하는 순수 함수 형태의 정렬 유틸리티 함수를 구축하여 가격순·리뷰순·최신순 정렬 기능 구현",
        ],
      },
      {
        role: "체험 등록 및 수정 폼 구현",
        img: GlobalNomadForm,
        description: [
          "React Hook Form을 도입하여 제목, 일정, 이미지, 주소 등 다양한 입력값을 통합 관리하여 복잡한 폼 상태 효율적으로 관리",
          "Daum 우편번호 API를 서비스 내 모달 아키텍처와 연동하여 안정적인 주소 검색 및 좌표 데이터 매핑 구현",
          "동적으로 추가되는 스케줄(날짜/시간) 리스트의 유효성 검증 규칙을 수립하고, 타임스탬프 중복 입력을 사전에 차단하는 예외 처리 구현",
        ],
      },
      {
        role: "폼 이탈 방직 기능 구현",
        img: GlobalNomadLeave,
        description: [
          "beforeunload 이벤트를 통한 브라우저 새로고침 및 창 닫기 방어와 pushState·popstate 기반의 뒤로가기 가로채기 구현",
          "DOM 클릭 이벤트를 캡처링 단계에서 감지하여 내부 링크(Anchor) 이동을 조건부 전면 제어하는 최적화 로직 구축",
          "사용자가 폼 수정을 취소하거나 뒤로가기를 실행할 때 이탈 경고 커스텀 모달과 연동하여 작성 중인 데이터 유실을 방지하는 안정적인 UX 완성",
        ],
      },
      {
        role: "SVG 아이콘 관리 체계 구축",
        description: [
          "SVG마다 팀원들이 크기와 색상을 직접 수정해야 해 재사용이 어려웠던 문제를 SVGR/Webpack으로 개선하여 아이콘 사용 방식을 표준화",
          "Webpack과 SVGR을 설정하여 SVG을 React 컴포넌트로 사용할 수 있도록 환경을 구축하고, props를 통해 아이콘을 쉽게 커스터마이징할 수 있도록 사용 방식 표준화 진행",
        ],
      },
    ],
    troubleShooting: [
      {
        title: "TanStack Query를 활용한 서버 상태 동기화",
        problem:
          "체험을 새로 등록하거나 수정·삭제 후 변경 사항이 화면에 즉시 반영되지 않아, 변경된 데이터를 확인하기 위해서는 페이지를 직접 새로고침해야 했습니다.",
        solution:
          "invalidateQueries를 활용한 캐시 무효화를 활용하여 새로고침 없이 변경된 사항만 화면에 반영되도록 하였습니다.",
        solutionMore: [
          "TanStack Query의 invalidateQueries를 활용하여 관련 queryKey만 선택적으로 무효화하는 캐시 갱신 전략 적용",
          "Mutation 성공 시 최신 데이터를 자동으로 재조회하여 서버 상태와 UI를 동기화",
        ],
        result:
          "불필요하게 전체 페이지 새로고침 없이 변경된 데이터만 효율적으로 갱신하여 데이터 일관성을 유지하고 사용자 경험을 개선하였습니다.",
      },
      {
        title: "공통 ImageInput의 이미지 데이터 타입 불일치 문제 해결",
        problem:
          "체험 수정 페이지와 프로필 수정 페이지에서 기존에 등록한 이미지(preview Image)가 표시되지 않는 문제가 있었습니다. 기존 ImageInput은 새로 선택한 File 객체의 미리보기만 처리하도록 구현되어 있어 서버로부터 전달 받은 이미지 URL을 초기 값으로 표시할 수 없었고, 이미지 변경 후 변환된 파일을 부모 폼에 전달하는 구조도 마련되어 있지 않았습니다.",
        solution:
          "ImageInput 컴포넌트가 서버로부터 전달받은 URL과 새로 등록하는 이미지 File을 모두 처리하도록 인터페이스를 확장하고, 이미지 변경 상태를 부모 폼에서 관리할 수 있도록 콜백 인스턴스를 추가하여 개선하였습니다.",
        solutionMore: [
          "ImageInput에 defaultImage를 추가하여 서버에서 받은 이미지 URL을 미리보기로 주입하여 화면에 표시",
          "기존 이미지는 서버 URL 그대로 사용하고, 신규 이미지의 경우 URL.createObjectURL()로 임시 미리보기 URL을 사용 (다중 이미지의 경우 isExisting 값을 추가하여 기존 이미지와 신규 이미지 구분)",
          "이미지 변경 결과를 부모에게 전달하기 위해 다중 이미지의 경우 신규 File 배열과 유지 중인 기존 URL string 배열을 분리해 onChange로 전달 (프로필 이미지의 경우 변경된 파일만 전달하여 연결)",
          "이미지 교체·삭제 또는 컴포넌트 언마운트 시 생성한 Object URL만 해제하여 메모리 누수를 방지",
        ],
        result:
          "기존 이미지 URL과 새로 추가한 File 이미지를 하나의 공통 컴포넌트에서 함께 표시하고 관리할 수 있게 되었습니다. 이를 통해 체험 등록·수정에서 동일한 컴포넌트를 재사용할 수 있었으며, 이미지 유지·추가·삭제 상태를 폼에서 명확하게 구분할 수 있는 구조로 개선했습니다.",
      },
      {
        title: "폼 모델과 API 모델 분리를 통한 데이터 불일치 해결",
        problem:
          "체험 수정 페이지를 구현하면서 조회 API 데이터를 그대로 폼 초기값으로 사용했지만 일정과 이미지가 화면에 정상적으로 표시되지 않았습니다. API 구조를 다시 분석해 본 결과 조회 API, 폼 상태, 수정 API가 서로 다른 데이터 구조를 사용하고 있어 정상적으로 렌더링이 되지 않았습니다. 또한 수정 시에도 서버가 요구하는 데이터 형식이랑 폼 데이터 형식이랑 맞지 않아 하나의 데이터 모델로는 모든 요구사항을 처리할 수 없었습니다.",
        solution:
          "조회 API, 폼 상태, 수정 API의 데이터 모델을 분리하고, 각 단계에서 필요한 형태로 변환하는 데이터 변환 로직을 구성했습니다.",
        solutionMore: [
          "조회 API에서 받아온 응답을 폼 전용 데이터 형식으로 변환(subImage 객체 배열에서 imageUrl만 추출하여 File | string 형태로 변환)",
          "폼에서는 기존 이미지 URL과 새로 등록할 이미지 File을 함께 관리하도록 타입 설계 (제출 시 File만 업로드하여 서버 URL로 변환)",
          "기존 데이터와 현재 폼 상태를 Set과 일정 고유 Key로 비교해 추가·삭제된 이미지와 일정만 추출",
          "변경된 데이터를 수정 API가 요구하는 UpdateActivityRequest 형태로 변환하여 요청하도록 구성",
        ],
        result:
          "조회 API, 폼 상태, 수정 API 간의 데이터 모델 불일치를 해결하여 기존 이미지와 일정이 수정 화면에 정상적으로 표시되도록 개선했습니다. 또한 실제 변경된 이미지와 일정만 수정 요청에 포함하도록 구현하여 불필요한 데이터 전송을 줄였으며, 데이터 변환과 UI 로직의 책임을 분리해 유지보수성을 향상시켰습니다.",
      },
    ],
    learn: [
      "TanStack Query를 활용해 서버 상태를 조회·캐싱·동기화하고, Mutation 이후 관련 Query를 무효화하여 최신 데이터를 반영하는 방법을 익혔습니다.",
      "React Hook Form과 Zod를 활용해 복잡한 폼의 입력 상태와 검증 로직을 분리하고 일관되게 관리하는 방법을 배웠습니다.",
      "Next.js App Router의 라우팅 구조와 데이터 흐름을 이해하고, Server Component와 Client Component를 역할에 맞게 분리하는 기준을 익혔습니다.",
      "기능 단위로 관심사를 분리하는 Feature 기반 폴더 구조를 적용하며 유지보수성과 확장성을 고려한 프로젝트 구조를 경험했습니다.",
      "Lighthouse를 활용해 성능과 접근성 문제를 분석하고, 렌더링 구조와 리소스 로딩 방식을 개선하는 과정을 경험했습니다.",
    ],
    try: [
      "공통 컴포넌트에 대한 사전 논의가 부족해 비슷한 기능의 컴포넌트를 팀원별로 각각 구현하는 일이 발생했습니다. 이후 리팩토링 과정에서 공통 컴포넌트로 통합했지만, 초기 설계와 소통의 중요성을 다시 확인했습니다. 다음 프로젝트에서는 구현 전에 공통으로 사용될 UI와 로직, 컴포넌트의 책임과 재사용 범위를 충분히 논의하여 중복 개발을 줄이고 협업 효율을 높이고자 합니다.",
    ],
    github: "https://github.com/Hanbh97/GlobalNomad",
    deploy: "https://global-nomad-ghn6.vercel.app/",
    memberCount: "Frontend 6명",
    favicon: GlobalNomadFavicon,
  },
  {
    id: 5,
    title: "Aigo-mon",
    period: "26.07.09 - 진행중",
    description:
      "사용자가 입력한 스트레스 상황을 기반으로 캐릭터 카드를 생성하는 AI 서비스",
    thumbnail: AigoMonThumbnail,
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "@google/genai",
      "Pollinations API",
      "Route Handlers",
      "Figma",
    ],
    role: [
      "프로젝트 기획",
      "UI/UX 디자인",
      "Gemini API 연동 및 Pollinations API 연동",
    ],
    detailRole: [
      {
        role: "프로젝트 기획 (AI Workflow 설계)",
        img: AigoMonWorkFlow,
        description: [
          "AI 서비스의 전체 Workflow를 설계하여 사용자 입력 → 텍스트 생성(Gemini) → 이미지 생성(Pollinations) → 카드 조합 → 결과 출력의 처리 흐름을 정의",
          "정상 응답과 예외 상황(입력 검증, Timeout, 생성 실패)을 모두 고려한 AI 처리 플로우를 설계",
        ],
      },
      {
        role: "AI 콘텐츠 생성 기능 구현",
        img: AigoMonResult,
        description: [
          "Gemini AI SDK와 Pollinations API를 연동하여 스트레스 상황 기반 캐릭터 이미지 및 텍스트 생성 기능 구현",
          "Route Handler를 활용하여 AI API 호출을 분리하고, 입력 검증 및 예외 처리를 구현",
          "Prompt Engineering을 통해 캐릭터 말투, 분위기, 이미지 생성 규칙을 설계하여 일관된 AI 결과 생성",
        ],
      },
      {
        role: "AI 응답 구조화 및 타입 안정성 확보",
        description: [
          "Gemini Structured Output(responseSchema)을 적용하여 AI 응답을 TypeScript 타입과 일치하는 JSON 형태로 정형화",
          "프롬프트와 응답 스키마를 함께 설계하여 응답 파싱 오류를 최소화하고 안정적인 데이터 처리 구조 구축",
        ],
      },
      {
        role: "개발 환경 자동화",
        description: [
          "GitHub Actions 기반 CI를 구축하여 ESLint, Type Check, Test, Build 자동화",
          "Husky를 활용하여 Commit 전 코드 품질을 검증하는 개발 환경 구축",
          "AI 코드 리뷰(CodeRabbit)를 도입하여 Pull Request마다 코드 리뷰와 개선 사항을 자동으로 확인하고, 코드 품질과 리뷰 효율 향상",
        ],
      },
    ],
    troubleShooting: [
      {
        title: "이미지 생성 결과 일관성 개선",
        problem:
          "AI 이미지 생성 시 동일한 캐릭터라도 프롬프트에 따라 외형과 스타일이 계속 달라지는 문제가 있었습니다.",
        solution:
          "대표 캐릭터의 외형 스타일에 맞춰 prompt 설계를 진행하였습니다.",
        solutionMore: [
          "Prompt Engineering을 통해 캐릭터의 외형, 표정, 색상, 구도 등의 조건을 명시적으로 설계",
          "이미지 생성 Prompt를 텍스트 생성 Prompt와 분리하여 역할을 명확히 구성",
          "캐릭터 외형만 prompt로 설정하고, 사용자 입력 값에 따른 행동 값은 따로 처리해주도록 하여 상황에 맞는 캐릭터가 출력되도록 함",
        ],
        result:
          "생성되는 이미지의 캐릭터 일관성을 높이고 원하는 스타일을 안정적으로 생성할 수 있었습니다.",
      },
      {
        title: "AI 응답 구조화 및 타입 안정성 확보",
        problem:
          "Gemini AI 응답이 자연어 형태로 반환되어 응답 형식이 일정하지 않았습니다. 프롬프트에 따라 필드가 누락되거나 구조가 달라져 TypeScript 타입과 맞지 않는 문제가 발생했습니다.",
        solution:
          "responseSchema을 적용하여 AI가 항상 동일한 JSON 구조를 반환하도록 설계하였습니다.",
        solutionMore: [
          "Gemini Structured Output(responseSchema)을 적용",
          "Prompt와 Schema를 함께 설계하여 필드 누락 및 응답 형식 변경을 방지",
          "TypeScript 타입과 동일한 구조로 응답을 받아 별도의 파싱 로직 없이 사용할 수 있도록 개선",
        ],
        result:
          "AI 응답의 일관성과 타입 안정성을 확보하여 파싱 오류를 줄이고 유지보수성을 향상했습니다.",
      },
    ],
    learn: [
      "Gemini AI SDK와 Pollinations API를 연동하며 AI API 호출 방식과 Prompt Engineering을 경험했습니다.",
      "Structured Output(responseSchema)을 활용하여 AI 응답을 TypeScript 타입과 일치하는 JSON 형태로 정형화하는 방법을 익혔습니다.",
      "Next.js Route Handler를 활용해 AI API 호출, 입력 검증, 예외 처리를 서버에서 관리하는 구조를 학습했습니다.",
      "Vitest와 React Testing Library를 활용하여 공통 컴포넌트 테스트를 작성하고 UI 안정성을 검증하는 방법을 익혔습니다.",
      "GitHub Actions와 Husky를 활용하여 코드 검사, 테스트, 빌드를 자동화하는 CI 환경을 구축했습니다.",
    ],
    try: [
      "무료 AI 이미지 생성 API의 한계로 응답 속도와 결과 품질이 일정하지 않았습니다. 앞으로는 이미지 생성 모델별 특성과 비용을 비교하여 서비스 목적에 맞는 AI 모델을 선택하고, 프롬프트 최적화와 캐싱 전략도 함께 적용해보고 싶습니다.",
      "AI 기능 구현에 집중하면서 Prompt를 반복적으로 수정하는 방식으로 품질을 개선했습니다. 앞으로는 Prompt를 체계적으로 관리하고 평가 지표를 마련하여 더욱 일관된 AI 결과를 생성하는 구조를 설계해보고 싶습니다.",
    ],
    github: "https://github.com/JuHeonParkk/Aigo-mon",
    deploy: "https://aigo-mon.vercel.app/",
    memberCount: "Frontend 1명",
    favicon: AigoMonFavicon,
  },
];
