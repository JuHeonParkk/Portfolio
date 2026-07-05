import EmailIcon from "@/assets/icons/email-icon.svg";
import GithubIcon from "@/assets/icons/github-icon.svg";
import VelogIcon from "@/assets/icons/velog-icon.svg";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12">
        <div className="w-full flex items-center justify-end gap-4">
          <a
            href="https://github.com/JuHeonParkk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary"
          >
            <img src={GithubIcon} alt="깃허브 아이콘" className="w-6 h-6" />
          </a>

          <a
            href="https://velog.io/@pjh01913/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary"
          >
            <img src={VelogIcon} alt="벨로그 아이콘" className="w-5 h-5" />
          </a>

          <a
            href="mailto:pjh01913@gmail.com"
            className="transition hover:text-primary"
          >
            <img src={EmailIcon} alt="이메일 아이콘" className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 ParkJuHeon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
