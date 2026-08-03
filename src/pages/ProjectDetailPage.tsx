import { projects } from "@/constants/projects";
import { useNavigate, useParams } from "react-router-dom";

import { SkillList } from "@/constants/tech";

import ProjectLinks from "@/components/ProjectLinks";
import Callout from "@/components/Callout";
import DocumentSection from "@/components/DocumentSection";
import BulletList from "@/components/BulletList";

export default function ProjectDetailPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const selectedProject = projects.find(
    (project) => project.id === Number(projectId),
  );

  if (!selectedProject) {
    return <div>프로젝트가 업습니다.</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="h-52 w-full overflow-hidden bg-gray-100 sm:h-72 lg:h-80">
          <img
            src={selectedProject.thumbnail}
            alt={`${selectedProject.title} 프로젝트`}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <main className="mx-auto w-full max-w-[820px] px-5 pb-32 sm:px-8">
          <header className="-mt-7 mb-16 sm:-mt-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl sm:h-20 sm:w-20">
              <img
                src={selectedProject.favicon}
                alt={`${selectedProject.title} 아이콘`}
                className="w-full h-auto"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-md bg-primary/5 px-2.5 py-1 font-mono text-xs font-medium text-primary">
                {selectedProject.period}
              </span>

              <ProjectLinks
                title={selectedProject.title}
                github={selectedProject.github}
                deploy={selectedProject.deploy}
              />
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              {selectedProject.title}
            </h1>

            <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
              {selectedProject.description}
            </p>

            <dl className="mt-8 grid gap-3 border-y border-gray-200 py-5 text-sm sm:grid-cols-2">
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 text-gray-400">개발 인원</dt>
                <dd className="font-medium text-gray-700">
                  {selectedProject.memberCount}
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="w-20 shrink-0 text-gray-400">담당 역할</dt>
                <dd className="font-medium text-gray-700">
                  {selectedProject.role.join(", ")}
                </dd>
              </div>
            </dl>
          </header>

          {/* 사용 기술 */}
          <DocumentSection title="🛠️ 사용 기술">
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
                    className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1.5 text-sm text-gray-700"
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
          </DocumentSection>

          {/* 수행한 상세 역할 */}
          {!!selectedProject.detailRole?.length && (
            <DocumentSection title="👩‍💻 수행한 상세 역할">
              <div className="space-y-14">
                {selectedProject.detailRole.map((detail, index) => (
                  <article key={`${detail.role}-${index}`}>
                    <h3 className="flex items-start gap-3 text-xl font-semibold text-gray-900">
                      <span className="mt-0.5 font-mono text-sm font-medium text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {detail.role}
                    </h3>

                    {detail.img && (
                      <figure className="my-6 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                        <img
                          src={detail.img}
                          alt={detail.role}
                          className="h-auto w-[754px] object-contain"
                        />
                      </figure>
                    )}

                    <BulletList items={detail.description} />
                  </article>
                ))}
              </div>
            </DocumentSection>
          )}

          {/* 트러블 슈팅 */}
          {!!selectedProject.troubleShooting?.length && (
            <DocumentSection title="🚀 트러블 슈팅">
              <div className="space-y-16">
                {selectedProject.troubleShooting.map((trouble, index) => (
                  <article key={`${trouble.title}-${index}`}>
                    <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-gray-400">
                      Troubleshooting {index + 1}
                    </p>

                    <h3 className="mb-7 text-2xl font-bold tracking-tight text-gray-950">
                      {trouble.title}
                    </h3>

                    <div className="space-y-4">
                      <Callout
                        label="Problem"
                        variant="problem"
                        content={trouble.problem}
                      />

                      <Callout
                        label="Solution"
                        variant="solution"
                        content={trouble.solution}
                        items={trouble.solutionMore}
                      />

                      <Callout
                        label="Result"
                        variant="result"
                        content={trouble.result}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </DocumentSection>
          )}

          {!!selectedProject.learn.length && (
            <DocumentSection title="프로젝트를 통해 배운 점">
              <BulletList items={selectedProject.learn} />
            </DocumentSection>
          )}

          {!!selectedProject.try.length && (
            <DocumentSection title="아쉬웠던 점 및 개선 방향">
              <BulletList items={selectedProject.try} />
            </DocumentSection>
          )}
        </main>
      </div>

      <button
        onClick={() => navigate(-1)}
        aria-label="프로젝트 목록으로 돌아가기"
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-xl text-gray-600 shadow-lg backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <span aria-hidden="true">←</span>
      </button>
    </>
  );
}
