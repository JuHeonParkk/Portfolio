import { useEffect } from "react";

import type { ProjectProps } from "@/constants/projects";
import { SkillList } from "@/constants/tech";

import GithubIcon from "@/assets/icons/github-icon.svg";
import LinkIcon from "@/assets/icons/link-icon.svg";

interface ProjectDetailProps {
  selectedProject: ProjectProps;
  setSelectedProject: (project: ProjectProps | null) => void;
}

export default function ProjectDetail({
  selectedProject,
  setSelectedProject,
}: ProjectDetailProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-200 transition-opacity duration-300 ${
          selectedProject
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSelectedProject(null)}
      />
      <aside
        className={`fixed right-0 top-0 h-screen w-full sm:w-[540px] md:w-[820px] bg-white z-210 shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto ${
          selectedProject ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedProject && (
          <div className="space-y-8 relative">
            {/* 닫기 버튼 */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="z-20 absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-gray-50/50 text-gray-900 hover:bg-gray-50 hover:text-gray-500 active:scale-90 transition-colors text-lg"
            >
              ✕
            </button>

            {/* 상단 이미지 및 제목 */}
            <div className="space-y-6">
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                className="w-full h-80 object-cover border border-gray-100 brightness-85"
              />
              <div className="px-8 space-y-5">
                <div>
                  <div className="w-full flex items-center justify-between">
                    <span className="text-xs bg-teal-50 text-primary border border-teal-100/50 px-3 py-1 rounded-full font-semibold font-mono">
                      {selectedProject.period}
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group flex items-center justify-center p-1 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <img src={GithubIcon} alt="깃허브" />
                        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block whitespace-nowrap rounded-md bg-gray-950 px-2.5 py-1.5 text-xs font-semibold text-white shadow-md z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                          깃허브 바로가기
                        </span>
                      </a>
                      <a
                        href={selectedProject.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group flex items-center justify-center p-1 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <img
                          src={LinkIcon}
                          alt="보러가기"
                          className="w-5 h-5"
                        />
                        <span className="absolute top-full right-0 mt-3 hidden group-hover:block whitespace-nowrap rounded-md bg-gray-950 px-2.5 py-1.5 text-xs font-semibold text-white shadow-md z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                          서비스 바로가기
                        </span>
                      </a>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2.5">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    개발 인원
                  </h4>
                  <span className="text-sm">{selectedProject.memberCount}</span>
                </div>
              </div>
            </div>

            <div className="px-8">
              {/* 사용 기술 스택 */}
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-sm font-bold text-gray-900 mb-3">
                  사용 기술
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => {
                    const skillInfo = SkillList.find(
                      (skill) => skill.name === tech,
                    );

                    return (
                      skillInfo && (
                        <span
                          key={tech}
                          className="flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-700 shadow-sm"
                        >
                          <img
                            src={skillInfo.icon}
                            alt={skillInfo.name}
                            className="w-4 h-4 object-contain"
                          />
                          {skillInfo.name}
                        </span>
                      )
                    );
                  })}
                </div>
              </div>

              {/* 내 역할 섹션 */}
              <div className="border-t border-gray-100 pt-6 space-y-3 pb-6">
                <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <span className="h-4 w-1 rounded-full bg-primary" />
                  역할
                </h4>
                <ul className="pl-5 text-sm text-gray-600 flex flex-wrap items-center gap-2">
                  {selectedProject.role.map((item, index) => (
                    <li key={index}>
                      {item}{" "}
                      {index < selectedProject.role.length - 1 && (
                        <span>/</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 상세 역할 내용 */}
              <div className="border-t border-gray-100 pt-6 space-y-6 pb-6">
                <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <span className="h-4 w-1 rounded-full bg-primary" />
                  수행한 상세 역할
                </h4>

                <div className="space-y-8">
                  {selectedProject.detailRole?.map((detail, index) => (
                    <div
                      key={index}
                      className="space-y-4 border-b border-gray-50 pb-6 last:border-b-0 last:pb-0"
                    >
                      <h5 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                          {index + 1}
                        </span>
                        {detail.role}
                      </h5>

                      {detail.img && (
                        <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm max-h-[300px]">
                          <img
                            src={detail.img}
                            alt={detail.role}
                            className="w-full h-full object-contain mx-auto"
                          />
                        </div>
                      )}

                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1.5 leading-relaxed">
                        {detail.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1 w-1 rounded-full bg-primary shrink-0 mt-2" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 핵심 트러블 슈팅 섹션 */}
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <span className="h-4 w-1 rounded-full bg-primary" />
                  트러블 슈팅
                </h4>

                <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 space-y-3">
                  {selectedProject.troubleShooting?.map((trouble, index) => (
                    <div key={index} className="mb-10">
                      <div className="pb-3">
                        <span className="inline-block text-xs bg-red-50 text-red-600 font-bold px-2 py-0.5 rounded mb-3">
                          Problem
                        </span>
                        <p className="text-sm font-bold text-gray-900 leading-snug pl-2">
                          {trouble.trouble}
                        </p>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <span className="inline-block text-sm bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded mb-3">
                          Solution
                        </span>
                        <p className="text-sm leading-relaxed pl-2">
                          {trouble.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 프로젝트를 통해 배운점 */}
                <div className="border-t border-gray-100 pt-6 space-y-3">
                  <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <span className="h-4 w-1 rounded-full bg-primary" />
                    프로젝트를 통해 배운 점
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 leading-relaxed">
                    {selectedProject.learn.map((item) => (
                      <li className="flex items-start gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 아쉬웠던 점 및 개선 방향 */}
                <div className="border-t border-gray-100 pt-6 space-y-3 mb-12">
                  <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <span className="h-4 w-1 rounded-full bg-primary" />
                    아쉬웠던 점 및 개선 방향
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 leading-relaxed">
                    {selectedProject.try.map((item) => (
                      <li className="flex items-start gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
