import GlobalNomad from "@/assets/images/projects/GlobalNomad/thumbnail.png";
import GlobalNomadList from "@/assets/images/projects/GlobalNomad/activityList.gif";
import GlobalNomadLeave from "@/assets/images/projects/GlobalNomad/formLeave.gif";
import GlobalNomadForm from "@/assets/images/projects/GlobalNomad/formCRUD.gif";
import DoingFarm from "@/assets/images/projects/DoingFarm/thumbnail.png";
import DoingFarmTeam from "@/assets/images/projects/DoingFarm/issue.png";
import DoingFarmDesign from "@/assets/images/projects/DoingFarm/design.png";
import DoingFarmDashboard from "@/assets/images/projects/DoingFarm/dashboard.gif";
import DoingFarmLoading from "@/assets/images/projects/DoingFarm/loading.gif";
import OpenMind from "@/assets/images/projects/OpenMind/thumbnail.png";
import OpenMindDesign from "@/assets/images/projects/OpenMind/design.png";
import OpenMindQuestion from "@/assets/images/projects/OpenMind/question.gif";
import OpenMindShare from "@/assets/images/projects/OpenMind/snsshare.gif";
import OpenMindNavigation from "@/assets/images/projects/OpenMind/scroll.gif";
import OpenMindException from "@/assets/images/projects/OpenMind/exception.png";
import DubugDubug from "@/assets/images/projects/DubugDubug/thumbnail.png";
import DubugDubugDesign from "@/assets/images/projects/DubugDubug/design.png";
import DubugDubugLogin from "@/assets/images/projects/DubugDubug/login.png";
import DubugDubugMyPage from "@/assets/images/projects/DubugDubug/mypage.png";
import PortFolio from "@/assets/images/projects/PortFolio/thumbnail.png";

interface DetailRole {
  role: string;
  img?: string;
  description: string[];
}

interface TroubleShooting {
  trouble: string;
  solution: string;
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
}

export const projects: ProjectProps[] = [
  {
    id: 1,
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
          "TanStack Query의 Infinite Query와 Intersection Observer를 활용하여 무한 스크롤 기반의 체험 리스트 구현하였습니다.",
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
    ],
    troubleShooting: [
      {
        trouble:
          "체험을 새로 등록하거나 수정•삭제한 후, 화면이 자동으로 동기화되지 않아 유저가 직접 페이지를 새로고침해야만 리스트가 갱신되는 UX 불편 발생",
        solution:
          "TanStack Query의 `invalidateQueries`를 활용하여 생성/수정/삭제 뮤테이션 성공 시점에 관련 체험 리스트의 특정 `queryKey`만 무효화하도록 구조 개선. 불필요한 전체 페이지 새로고침 없이 변경된 데이터만 실시간 화면 동기화 구현",
      },
      {
        trouble:
          "체험 수정 페이지에 들어갔을 때, 기존에 등록해 둔 이미지가 화면에 전혀 표시되지 않는 문제 발견",
        solution:
          "원인을 분석해보니 서버에서 받아온 기존 이미지는 '텍스트 주소(URL)' 형태이고, 새로 추가할 이미지는 '파일(File) 객체' 형태라 데이터 타입이 서로 달라 발생한 문제. 이미지 컴포넌트가 이 두 가지 형태를 모두 인식할 수 있도록 예외 처리를 추가하고, 새 파일은 `URL.createObjectURL`로 임시 주소를 만들어 띄워줌으로써 기존 이미지와 새 이미지가 모두 화면에 잘 보이도록 해결",
      },
    ],
    learn: [
      "TanStack Query를 활용한 서버 상태 관리",
      "React Hook Form 기반 복잡한 폼을 간단하게 구현하여 관리할 수 있었습니다.",
      "Next.js App Router 구조",
      "Server Component와 Client Component의 역할",
      "Feature 기반 폴더 구조 설계",
      "성능 최적화와 Lighthouse 분석",
    ],
    try: [
      "공통 컴포넌트에 대한 사전 논의가 부족해 비슷한 기능의 컴포넌트를 각각 구현하는 일이 발생했습니다. 이후 리팩토링을 통해 공통 컴포넌트로 통합했지만, 초기 설계와 소통의 중요성을 다시 한번 느낄 수 있었습니다. 다음 프로젝트에서는 구현 전에 역할과 재사용 범위를 충분히 논의하여 중복 개발을 줄이고 협업 효율을 높이고자 합니다.",
    ],
    github: "https://github.com/Hanbh97/GlobalNomad",
    deploy: "https://global-nomad-ghn6.vercel.app/",
    memberCount: "Frontend 6명",
  },
  {
    id: 2,
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
          "애자일 기반의 매일 데일리 스크럼을 주도하여 팀원 간 병목 현상 및 진행 상황 실시간 공유",
          "협업 툴 Linear를 프로젝트에 전격 도입하여 스프린트 이슈 관리 및 마일스톤 일정 내 구현 완수",
          "팀원들의 태스크 분배 및 기획/개발 간의 커뮤니케이션 싱크를 맞추는 역할 수행",
        ],
      },
      {
        role: "사용자 경험 개선을 위한 UI 리디자인 및 브랜딩",
        img: DoingFarmDesign,
        description: [
          "할 일을 심고 수확한다는 '농장(Farm)' 콘셉트를 기획하여 기존 대시보드 UI를 유니크하고 직관적으로 전면 리디자인",
          "AI를 활용하여 프로젝트 아이덴티티를 나타내는 고유한 대표 캐릭터 제작 및 배치",
          "유저 플로우 분석을 통해 불필요한 동선을 줄이고 사용자 흐름에 최적화된 화면 설계",
        ],
      },
      {
        role: "대시보드 관리 및 팀 구성원 제어 기능 구현",
        img: DoingFarmDashboard,
        description: [
          "사용자가 워크스페이스를 유연하게 관리할 수 있도록 대시보드 생성, 수정 및 삭제 CRUD 기능 구현",
          "팀 단위 협업 환경 조성을 위한 구성원 초대 링크 발송 및 권한 기반의 구성원 삭제 기능 구축",
        ],
      },
      {
        role: "해시 기반 색상 매핑 및 공통 UI 컴포넌트 설계",
        description: [
          "문자열(이름/태그)을 특정 해시값으로 변환하여 동일한 데이터에는 항상 일관된 색상이 자동 부여되는 유틸 함수 구현",
          "대시보드 테마 및 색상 선택 기능을 재사용 가능한 공통 컴포넌트로 분리하여 중복 코드 감소 및 유지보수성 향상",
        ],
      },
      {
        role: "체감 성능 개선을 위한 스켈레톤 UI 및 로딩 시스템 구축",
        img: DoingFarmLoading,
        description: [
          "데이터 패칭 중 화면 깜빡임을 방지하기 위해 페이지 맞춤형 Skeleton UI 디자인",
          "인터랙션 피드백을 즉각적으로 전달하는 Loading Spinner 컴포넌트 구현 및 배치",
          "로딩 대기 시간을 시각적으로 채워 유저가 느끼는 체감 대기 시간을 줄이고 전반적인 UX 완성도 개선",
        ],
      },
    ],
    troubleShooting: [
      {
        trouble:
          "사용자가 초대를 이미 수락했음에도 초대 목록에 해당 내역이 계속 남아있어, 동일한 초대에 중복으로 수락/거절 응답을 보낼 수 있는 데이터 싱크 결함 발생",
        solution:
          "이를 해결하기 위해 중복 데이터를 허용하지 않는 자바스크립트 내장 자료구조인 `Set` 객체를 도입하여 대시보드 ID 기준의 실시간 초대 목록 필터링 로직 구현. 또한 유저가 특정 초대를 수락하는 즉시 화면 상의 초대 목록 배열에서 해당 항목을 즉각 제외시켜 유저가 물리적으로 중복 응답을 할 수 없도록 원천 차단",
      },
    ],
    learn: [
      "프로젝트 리더 역할을 수행하며 일정 관리, 업무 분배, 의사소통의 중요성을 경험하였습니다.",
      "공통 컴포넌트 설계와 코드 재사용성을 고려하는 개발 습관을 익혔습니다.",
      "Next.js App Router 구조를 이해할 수 있었습니다.",
      "팀 프로젝트 과정에서 Git Flow, Pull Request, 코드 리뷰 기반 협업 경험을 쌓았습니다.",
    ],
    try: [
      "UI 설계와 기능 구현에 집중하여 성능 최적화 및 코드 리팩토링에 시간을 많이 투자하지 못한 것이 아쉬움으로 남습니다. TanStack Query를 학습하여 서버 상태 관리와 캐싱 전략을 통해 리팩토링을 진행해보면 좋을 것 같습니다.",
      "컴포넌트 설계 경험이 부족하여 일부 UI 로직이 분산되었던 점이 아쉬웠으며, 이후 공통 컴포넌트와 커스텀 훅 설계를 적극 활용하여 개선해보겠습니다.",
    ],
    github: "https://github.com/douk9909/DoingFarm",
    deploy: "https://doing-farm.vercel.app/",
    memberCount: "Frontend 4명",
  },
  {
    id: 3,
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
        role: "사용자 경험 개선을 위한 UI 리디자인 및 퍼블리싱",
        img: OpenMindDesign,
        description: [
          "사용자가 서비스를 이용하는 전체 과정을 분석하여, 기존 디자인에서 놓쳤던 비어있는 화면이나 컴포넌트를 찾아내어 개선",
          "이용 흐름이 중간에 끊기지 않고 자연스럽게 이어지도록 화면을 새로 디자인하고 퍼블리싱 진행",
        ],
      },
      {
        role: "사용자별 피드 페이지 조회 및 질문 등록 기능 구현",
        img: OpenMindQuestion,
        description: [
          "Axios와 REST API를 사용하여 각 사용자 고유의 피드 데이터를 받아오고(GET), 화면 전체 새로고침 없이 리스트 상태만 실시간으로 즉시 갱신해주는 익명 질문 등록(POST) 폼 구현",
          "유저가 버튼을 누르는 즉시 화면 숫자가 바로 올라가는 '낙관적 업데이트' 방식을 도입하여 서버 응답 대기 없는 쾌적한 좋아요 기능 구축",
          "API가 유저의 기존 클릭 상태를 저장해주지 않는 한계를 브라우저 로결스토리지를 활용한 방어 코드로 우회하여 싫어요 중복 클릭 방지 처리 구현",
          "좋아요 연타 시 화면이 끊기지 않도록 useState 대신 useRef 변수와 타이머를 활용해 2초 내 10회 클릭 시 콤보 이펙트가 터지는 인터랙션 완성",
        ],
      },
      {
        role: "SNS 공유 및 카카오톡 API 연동",
        img: OpenMindShare,
        description: [
          "유저들이 자신의 질문 페이지를 쉽게 소문낼 수 있도록 주소 링크 복사 및 다양한 SNS 공유 기능 구현",
          "카카오 공식 개발자 도구(SDK)와 메시지 템플릿을 활용하여 예쁜 카드로 공유되는 카카오톡 공유 기능 구축",
        ],
      },
      {
        role: "사용자 이탈 방지를 위한 예외 화면 및 체감 로딩 최적화",
        img: OpenMindException,
        description: [
          "데이터를 불러오는 동안 화면이 깜빡거리거나 끊겨 보이지 않도록 뼈대 모양의 스켈레톤 UI를 넣어 사용자 경험을 개선",
          "주소를 잘못 입력해 들어온 유저들이 사이트를 나가지 않고 메인으로 돌아올 수 있도록 안내해 주는 404 페이지 제작",
        ],
      },
      {
        role: "긴 피드 리스트 내비게이션 및 편리한 스크롤 인터랙션 구현",
        img: OpenMindNavigation,
        description: [
          "피드 글이 길어져서 스크롤을 많이 내렸을 때도 상단에 고정되어 편리한 이동을 돕는 헤더 UI 설계",
          "고정 헤더의 유저 이름을 클릭하면 화면 맨 위로 부드럽게 이동하는 스크롤 업 기능을 만들어 긴 콘텐츠 탐색 편의성 극대화",
        ],
      },
      {
        role: "브라우저 내장 API를 활용한 상대 시간 포맷팅 유틸 함수 구현",
        description: [
          "브라우저 내장 API인 `Intl.RelativeTimeFormat`을 도입하여 번들 크기 최적화",
          "`{ numeric: 'auto' }` 옵션을 통해 복잡한 분기문 없이도 '오늘', '어제', 'n일 전' 등 언어권에 맞는 미세한 상대 시간 예외 처리 구현",
          "어떤 컴포넌트에서든 생성일(createdAt) 데이터만 넘겨주면 정밀한 값을 반환하도록 독립적인 공통 유틸 함수로 분리하여 재사용성 극대화",
        ],
      },
    ],
    troubleShooting: [
      {
        trouble:
          "제공된 백엔드 API가 전체 리액션(좋아요/싫어요)의 누적 개수만 보내줄 뿐, '현재 유저의 클릭 여부'를 저장해 주지 않아 새로고침 시 이력이 사라지고 무한 클릭이 가능한 UX 결함 발생",
        solution:
          "서버 API를 수정할 수 없는 상황에서 클라이언트 단의 아이디어로 극복. '싫어요'는 중복 방지를 위해 클릭 즉시 브라우저의 `localStorage`에 질문 ID를 저장하고, 새로고침 후에도 이 상태를 읽어와 추가 클릭을 원천 차단함. '좋아요'는 유저가 응답을 기다리지 않도록 클릭 즉시 화면 숫자를 먼저 올리는 '낙관적 업데이트'를 적용하고, 요청 실패 시에만 데이터를 되돌리는(Rollback) 예외 처리를 구축해 자연스러운 인터랙션 완성",
      },
      {
        trouble:
          "좋아요 버튼을 연타할 때마다 매번 화면이 리렌더링되면서 연타 횟수 카운트와 타이머가 꼬이고 애니메이션 이펙트가 부자연스럽게 끊기는 현상 발생",
        solution:
          "클릭 횟수와 타이머 ID를 화면을 새로 그리는 `useState` 대신, 값이 바뀌어도 리렌더링을 유발하지 않는 `useRef`에 저장하여 성능 저하를 방지. 유저가 2초 이내에 10회 이상 연속으로 클릭할 때만 콤보 이펙트 애니메이션이 실행되도록 수동으로 제어하고, 2초간 입력이 없으면 카운트를 초기화하는 정밀한 타이머 매커니즘을 구현해 성능과 재미 요소를 모두 확보",
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
    title: "포트폴리오",
    period: "26.03.15 - 24.07.05",
    description: "웹 포트폴리오 작업",
    thumbnail: PortFolio,
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "GitHub",
      "Vercel",
    ],
    role: ["UI 디자인", "페이지 퍼블리싱 및 기능 구현"],
    learn: [
      "다양한 레퍼런스 탐색을 통해 사용자가 읽기 편한 화면 구조를 배울 수 있었습니다.",
    ],
    try: [
      "초기 설계 단계에서 기존에 준비하던 React 환경을 선택해 빠르게 구축했으나, SEO와 초기 로딩 속도 측면에서 SSR의 필요성을 느꼈습니다. 향후 Next.js 프레임워크로의 마이그레이션을 계획하고 있습니다.",
      "마이그레이션과 더불어 Next.js의 내장 최적화 기능을 활용하여 다크/라이트 모드 등의 글로벌 테마 시스템을 구축하고, 다국어 지원 기능을 확장하여 보다 고도화된 사용자 경험을 제공하고자 합니다.",
    ],
    github: "https://github.com/JuHeonParkk/Portfolio",
    deploy: "https://capstonewalking.netlify.app/",
    memberCount: "Frontend 1명",
  },
];
