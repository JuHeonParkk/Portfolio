import { useState } from "react";
import Title from "./Title";
import { SkillList } from "@/constants/skills";
import type { SkillCategory } from "@/constants/skills";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategory>("Frontend");

  const categories: SkillCategory[] = [
    "Frontend",
    "Styling",
    "State Management",
    "Design",
    "Tools",
  ];

  const filteredSkills = SkillList.filter(
    (skill) => skill.category === selectedCategory,
  );

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-24 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <Title
          subTitle="TECH STACK"
          title="기술 스택"
          description="프로젝트에서 사용해 본 기술과 도구입니다."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "border-primary bg-primary text-white shadow-md shadow-teal-100"
                  : "border-gray-200 bg-white text-gray-500 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <li
              key={skill.name}
              className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-teal-100"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 p-2.5 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {skill.name}
                </h3>
                <p className="mt-0.5 text-sm text-gray-500">
                  {skill.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
