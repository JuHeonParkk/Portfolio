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
        "• React · Next.js · TypeScript\n• TanStack Query · React Hook Form\n• 기능 단위 폴더 구조 설계\n• 공통 컴포넌트 기반 재사용성 향상",
    },
    {
      id: 2,
      title: "🎨 사용자 경험 중심의 UI/UX",
      content:
        "• 직관적이고 접근성 높은 UI 구현\n• 사용자 이동 경로 분석\n• UI/UX 트렌드 학습\n• 사용성을 고려한 인터페이스 설계",
    },
    {
      id: 3,
      title: "🤝 협업과 문제 해결",
      content:
        "• 적극적인 의견 제안\n• 코드 리뷰 및 리팩토링\n• 구조 개선을 통한 품질 향상\n• 원활한 팀 커뮤니케이션",
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
            <p className="text- font-semibold mb-4">{item.title}</p>
            <p className="text-base leading-7 text-gray whitespace-pre-line">
              {item.content}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
