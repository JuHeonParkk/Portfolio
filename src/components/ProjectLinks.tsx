import GithubIcon from "@/assets/icons/github-icon.svg";
import LinkIcon from "@/assets/icons/link-icon.svg";

interface ProjectLinksProps {
  title: string;
  github?: string;
  deploy?: string;
}

export default function ProjectLinks({
  title,
  github,
  deploy,
}: ProjectLinksProps) {
  return (
    <div className="flex items-center gap-2">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} GitHub 바로가기`}
          className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <img src={GithubIcon} alt="" className="h-4 w-4" />
          GitHub
        </a>
      )}

      {deploy && (
        <a
          href={deploy}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} 서비스 바로가기`}
          className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <img src={LinkIcon} alt="" className="h-4 w-4" />
          Live
        </a>
      )}
    </div>
  );
}
