import Title from "./Title";
import { AbilityList } from "@/constants/abilitys";

export default function AbilitySection() {
  return (
    <section className="mx-auto max-w-7xl px-8 pb-24 bg-white">
      <Title
        subTitle="STRENGTH"
        title="핵심 성과"
        description="사용자 경험과 유지보수성을 고려하며 프로젝트를 진행했습니다."
      />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {AbilityList.map((item) => (
          <li
            key={item.id}
            className="flex-1 rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
          >
            <p className="text-lg font-semibold mb-4">{item.title}</p>
            <ul className="space-y-3">
              {item.content.map((content) => (
                <li
                  key={content}
                  className="flex items-start gap-2 text-gray-600"
                >
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                  <span className="text-sm md:text-base">{content}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
