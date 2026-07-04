import { useState } from "react";
import Title from "./Title";

type SkillCategory =
  | "Frontend"
  | "Styling"
  | "State Management"
  | "Design"
  | "Tools";

interface SkillItem {
  id: number;
  name: string;
  description: string;
  category: SkillCategory;
  icon: string;
}

const skillList: SkillItem[] = [
  {
    id: 1,
    name: "HTML5",
    description: "Semantic Markup",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS3",
    description: "Responsive UI",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    description: "ES6+",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "TypeScript",
    description: "Type Safety",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 5,
    name: "React",
    description: "Component-based UI",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 6,
    name: "Next.js",
    description: "App Router · SSR",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    description: "Utility-first CSS",
    category: "Styling",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 8,
    name: "Styled Components",
    description: "CSS-in-JS",
    category: "Styling",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg",
  },
  {
    id: 9,
    name: "TanStack Query",
    description: "Server State",
    category: "State Management",
    icon: "https://tanstack.com/favicon.ico",
  },
  {
    id: 10,
    name: "React Hook Form",
    description: "Form Management",
    category: "State Management",
    icon: "https://cdn.simpleicons.org/reacthookform/EC5990",
  },
  {
    id: 11,
    name: "Axios",
    description: "HTTP Client",
    category: "State Management",
    icon: "https://cdn.simpleicons.org/axios/5A29E4",
  },
  {
    id: 12,
    name: "Figma",
    description: "UI/UX Design",
    category: "Design",
    icon: "https://skillicons.dev/icons?i=figma",
  },
  {
    id: 13,
    name: "Photoshop",
    description: "Image Editing",
    category: "Design",
    icon: "https://skillicons.dev/icons?i=ps",
  },
  {
    id: 14,
    name: "Illustrator",
    description: "Vector Design",
    category: "Design",
    icon: "https://skillicons.dev/icons?i=ai",
  },
  {
    id: 15,
    name: "Git",
    description: "Version Control",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 16,
    name: "GitHub",
    description: "Collaboration",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    id: 17,
    name: "Notion",
    description: "Documentation",
    category: "Tools",
    icon: "https://cdn.simpleicons.org/notion/000000",
  },
  {
    id: 18,
    name: "Linear",
    description: "Issue",
    category: "Tools",
    icon: "https://cdn.simpleicons.org/linear/5E6AD2",
  },
  {
    id: 19,
    name: "Vercel",
    description: "Deployment",
    category: "Tools",
    icon: "https://skillicons.dev/icons?i=vercel",
  },
];

const categories: SkillCategory[] = [
  "Frontend",
  "Styling",
  "State Management",
  "Design",
  "Tools",
];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategory>("Frontend");

  const filteredSkills = skillList.filter(
    (skill) => skill.category === selectedCategory,
  );

  return (
    <section className="w-full min-h-screen">
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
              key={skill.id}
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
