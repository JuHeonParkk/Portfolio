import { useState } from "react";

import { projects } from "@/constants/projects";
import type { ProjectProps } from "@/constants/projects";
import { SkillList } from "@/constants/tech";

import Title from "./Title";
import ProjectDetail from "./ProjectDetail";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null,
  );

  return (
    <section id="project" className="mx-auto max-w-7xl px-8 py-32">
      <Title
        subTitle="PROJECTS"
        title="프로젝트"
        description="협업을 통해 서비스를 구현하고 문제를 해결한 프로젝트를 소개합니다."
      />
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelectedProject(project)}
            className="group overflow-hidden border border-gray-200 rounded-2xl transition relative hover:-translate-y-2 hover:shadow-lg hover:shadow-teal-100 bg-white text-start isolate"
          >
            <div className="w-full h-60 overflow-hidden relative rounded-t-2xl will-change-transform">
              <img
                src={project.thumbnail}
                alt="이미지 썸네일"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col items-start justify-center">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-gray-500">
                  {project.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 text-start">
                {project.description}
              </p>
              <div className="flex items-center gap-2 mt-5">
                {project.techStack.map((tech) => {
                  const skillInfo = SkillList.find(
                    (skill) => skill.name === tech,
                  );
                  return (
                    skillInfo && (
                      <img
                        key={tech}
                        src={skillInfo.icon}
                        alt={skillInfo.name}
                        className="h-6 w-6 object-contain"
                      />
                    )
                  );
                })}
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100 z-10 rounded-2xl">
              <div className="text-center text-white">
                <p className="text-lg font-semibold">자세히 보기</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </section>
  );
}
