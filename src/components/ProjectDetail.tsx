import { useEffect } from "react";
import { createPortal } from "react-dom";

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
  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      <button
        type="button"
        aria-label="프로젝트 상세 모달 닫기"
        onClick={closeModal}
        className="absolute inset-0 h-full w-full cursor-default bg-black/40 backdrop-blur-sm"
      />

      <aside
        className="relative z-[210] h-dvh w-full overflow-y-auto bg-white shadow-2xl sm:w-[540px] md:w-[820px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative space-y-8">
          <button
            type="button"
            onClick={closeModal}
            aria-label="닫기"
            className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lg text-gray-900 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-gray-500 active:scale-90"
          >
            ✕
          </button>

          {/* 상단 이미지 및 제목 */}
          <div className="space-y-6">
            <img
              src={selectedProject.thumbnail}
              alt={`${selectedProject.title} 프로젝트`}
              className="h-80 w-full border border-gray-100 object-cover brightness-90"
            />

            <div className="space-y-5 px-8">
              <div>
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="rounded-full border border-teal-100/50 bg-teal-50 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {selectedProject.period}
                  </span>

                  <div className="flex items-center gap-3">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${selectedProject.title} GitHub 바로가기`}
                        className="group relative flex items-center justify-center rounded-lg p-1 transition-colors hover:bg-gray-100"
                      >
                        <img src={GithubIcon} alt="" className="h-5 w-5" />

                        <span className="absolute left-1/2 top-full z-50 mt-3 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-950 px-2.5 py-1.5 text-xs font-semibold text-white shadow-md group-hover:block">
                          GitHub 바로가기
                        </span>
                      </a>
                    )}

                    {selectedProject.deploy && (
                      <a
                        href={selectedProject.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${selectedProject.title} 서비스 바로가기`}
                        className="group relative flex items-center justify-center rounded-lg p-1 transition-colors hover:bg-gray-100"
                      >
                        <img src={LinkIcon} alt="" className="h-5 w-5" />

                        <span className="absolute right-0 top-full z-50 mt-3 hidden whitespace-nowrap rounded-md bg-gray-950 px-2.5 py-1.5 text-xs font-semibold text-white shadow-md group-hover:block">
                          서비스 바로가기
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                <h3
                  id="project-detail-title"
                  className="mt-2.5 text-2xl font-bold text-gray-900"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {selectedProject.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <h4 className="text-sm font-bold text-gray-900">개발 인원</h4>

                <span className="text-sm text-gray-600">
                  {selectedProject.memberCount}
                </span>
              </div>
            </div>
          </div>

          <div className="px-8">
            {/* 사용 기술 */}
            <section className="border-t border-gray-100 py-6">
              <h4 className="mb-3 text-sm font-bold text-gray-900">
                사용 기술
              </h4>

              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => {
                  const skillInfo = SkillList.find(
                    (skill) => skill.name === tech,
                  );

                  if (!skillInfo) {
                    return null;
                  }

                  return (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm"
                    >
                      <img
                        src={skillInfo.icon}
                        alt=""
                        className="h-4 w-4 object-contain"
                      />

                      {skillInfo.name}
                    </span>
                  );
                })}
              </div>
            </section>

            {/* 역할 */}
            <section className="space-y-3 border-t border-gray-100 py-6">
              <SectionTitle>역할</SectionTitle>

              <ul className="flex flex-wrap items-center gap-2 pl-5 text-sm text-gray-600">
                {selectedProject.role.map((item, index) => (
                  <li key={`${item}-${index}`}>
                    {item}

                    {index < selectedProject.role.length - 1 && (
                      <span className="ml-2 text-gray-300">/</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            {/* 수행한 상세 역할 */}
            {selectedProject.detailRole &&
              selectedProject.detailRole.length > 0 && (
                <section className="space-y-6 border-t border-gray-100 py-6">
                  <SectionTitle>수행한 상세 역할</SectionTitle>

                  <div className="space-y-8">
                    {selectedProject.detailRole.map((detail, index) => (
                      <article
                        key={`${detail.role}-${index}`}
                        className="space-y-4 border-b border-gray-100 pb-6 last:border-b-0 last:pb-0"
                      >
                        <h5 className="flex items-center gap-2 text-sm font-bold text-gray-800">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                            {index + 1}
                          </span>

                          {detail.role}
                        </h5>

                        {detail.img && (
                          <div className="max-h-[300px] overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                            <img
                              src={detail.img}
                              alt={detail.role}
                              className="mx-auto h-full w-full object-contain"
                            />
                          </div>
                        )}

                        <ul className="space-y-1.5 text-sm leading-relaxed text-gray-600">
                          {detail.description.map((description, i) => (
                            <li
                              key={`${description}-${i}`}
                              className="flex items-start gap-2"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />

                              <span>{description}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>
              )}

            {/* 트러블 슈팅 */}
            {selectedProject.troubleShooting &&
              selectedProject.troubleShooting.length > 0 && (
                <section className="space-y-4 border-t border-gray-100 py-6">
                  <SectionTitle>트러블 슈팅</SectionTitle>

                  <div className="space-y-8 rounded-xl border border-gray-100 bg-gray-50/50 p-5">
                    {selectedProject.troubleShooting.map((trouble, index) => (
                      <article
                        key={`${trouble.trouble}-${index}`}
                        className="space-y-4"
                      >
                        <div>
                          <span className="mb-3 inline-block rounded bg-red-50 px-2 py-0.5 text-xs font-bold text-red-600">
                            Problem
                          </span>

                          <p className="pl-2 text-sm font-bold leading-relaxed text-gray-900">
                            {trouble.trouble}
                          </p>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                          <span className="mb-3 inline-block rounded bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-600">
                            Solution
                          </span>

                          <p className="pl-2 text-sm leading-relaxed text-gray-600">
                            {trouble.solution}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

            {/* 프로젝트를 통해 배운 점 */}
            {selectedProject.learn.length > 0 && (
              <section className="space-y-3 border-t border-gray-100 py-6">
                <SectionTitle>프로젝트를 통해 배운 점</SectionTitle>

                <BulletList items={selectedProject.learn} />
              </section>
            )}

            {/* 아쉬웠던 점 및 개선 방향 */}
            {selectedProject.try.length > 0 && (
              <section className="mb-12 space-y-3 border-t border-gray-100 py-6">
                <SectionTitle>아쉬웠던 점 및 개선 방향</SectionTitle>

                <BulletList items={selectedProject.try} />
              </section>
            )}
          </div>
        </div>
      </aside>
    </div>,
    document.body,
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h4 className="flex items-center gap-2 text-base font-bold text-gray-900">
      <span className="h-4 w-1 shrink-0 rounded-full bg-primary" />
      {children}
    </h4>
  );
}

interface BulletListProps {
  items: string[];
}

function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-gray-600">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-start gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
