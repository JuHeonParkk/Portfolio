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
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <>
      {/* 전체 화면 배경 */}
      <div
        className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
        onClick={() => setSelectedProject(null)}
      />

      {/* 오른쪽 상세 패널 */}
      <aside className="fixed right-0 top-0 z-[210] h-dvh w-full overflow-y-auto bg-white shadow-2xl sm:w-[540px] md:w-[820px]">
        {/* 기존 aside 내부 내용 */}
      </aside>
    </>,
    document.body,
  );
}
