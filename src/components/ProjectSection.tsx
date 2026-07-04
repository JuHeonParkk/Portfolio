import { useState } from "react";
import Title from "./Title";
import { projects } from "@/constants/projects";
import type { ProjectProps } from "@/constants/projects";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null,
  );

  return (
    <section id="project" className="w-full min-h-screen py-24 px-6">
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
            className="overflow-hidden border border-gray-200 rounded-2xl transition relative hover:-translate-y-2 hover:shadow-xl hover:border-primary"
          >
            <img
              src={project.thumbnail}
              alt="이미지 썸네일"
              className="h-60 w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="p-6 flex flex-col items-start justify-center">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm text-gray text-start">
                {project.description}
              </p>
              <div className="flex items-center gap-2 mt-3">
                {project.techStack.map((tech) => (
                  <img
                    key={tech.name}
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className="h-6 w-6"
                  />
                ))}
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition duration-300 hover:opacity-100">
              <div className="text-center text-white">
                <p className="text-lg font-semibold">View Project</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
