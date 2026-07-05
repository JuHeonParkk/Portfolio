import Title from "./Title";
import { SkillList } from "@/constants/skills";
import type { SkillCategory } from "@/constants/skills";

export default function SkillsSection() {
  const categories: SkillCategory[] = [
    "Frontend",
    "Styling",
    "State Management",
    "Design",
    "Tools",
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center py-32 px-6 bg-white"
    >
      <div className="w-full max-w-4xl">
        <Title
          subTitle="TECH STACK"
          title="기술 스택"
          description="프로젝트를 개발하며 활용해 본 기술과 도구들입니다."
        />

        <div className="mt-20 flex flex-col gap-12">
          {categories.map((category) => {
            const currentSkills = SkillList.filter(
              (skill) => skill.category === category,
            );
            if (currentSkills.length === 0) return null;

            return (
              <div
                key={category}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 border-b border-gray-100 pb-10 last:border-none last:pb-0"
              >
                <div className="md:col-span-1">
                  <div className="md:sticky md:top-28">
                    <h3 className="text-lg font-bold text-gray-800 tracking-tight">
                      {category}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 font-medium font-mono">
                      {currentSkills.length} SKILLS
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    {currentSkills.map((skill) => (
                      <li key={skill.name} className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50/50 p-2">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="h-full w-full object-contain grayscale-[20%] group-hover:grayscale-0"
                          />
                        </div>

                        <div className="space-y-0.5">
                          <h4 className="text-base font-bold text-gray-900">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
