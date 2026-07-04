import Title from "./Title";

interface AbilityItems {
  id: number;
  title: string;
  content: string;
}

export default function AbilitySection() {
  const AbilityList: AbilityItems[] = [
    {
      id: 1,
      title: "💻 기술 스택 확장 및 유지보수성",
      content:
        "React, Next.js, TypeScript를 기반으로 다양한 팀 프로젝트를 수행하며 기술 스택을 꾸준히 확장해왔습니다. \nTanStack Query를 활용한 서버 상태 관리, React Hook Form 기반의 폼 관리, 기능 단위 폴더 구조 설계와 공통 컴포넌트 개발을 경험하며 재사용성과 유지보수성을 고려한 개발을 지향하고 있습니다.",
    },
    {
      id: 2,
      title: "🎨 사용자 경험 중심의 UI/UX",
      content:
        "작은 디테일이 더 나은 사용자 경험을 만든다고 믿습니다. 사용자 관점에서 직관적이고 접근성 높은 UI를 고민하며, 최신 UI/UX 트렌드와 사용자 이동 경로를 분석해 사용자가 쉽고 편리하게 이용할 수 있는 인터페이스를 설계하기 위해 노력하고 있습니다.",
    },
    {
      id: 3,
      title: "🤝 협업과 문제 해결 경험",
      content:
        "기능 구현에 그치지 않고 사용자와 팀원의 관점에서 개선점을 제안하며 서비스 품질 향상에 기여했습니다. 코드 리뷰와 협업 과정에서는 리팩토링과 구조 개선 의견을 적극적으로 공유하며 더 나은 결과를 만들기 위해 노력했습니다.",
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Title
        subTitle="STRENGTH"
        title="핵심 성과"
        description="사용자 경험과 유지보수성을 고려하며 프로젝트를 진행했습니다."
      />
      <ul className="flex flex-col justify-center lg:grid lg:grid-cols-3 gap-5">
        {AbilityList.map((item) => (
          <li
            key={item.id}
            className="flex-1 rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
          >
            <p className="text-xl font-semibold mb-4">{item.title}</p>
            <p className="text-base leading-7 text-gray">{item.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
