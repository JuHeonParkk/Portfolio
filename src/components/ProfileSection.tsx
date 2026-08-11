import ProfileImage from "@/assets/images/profile.jpg";
import GithubIcon from "@/assets/icons/github-icon.svg";
import VelogIcon from "@/assets/icons/velog-icon.svg";
import Title from "./Title";

interface ProfileItem {
  icon: React.ReactElement;
  content: string;
  href?: string;
}

export default function ProfileSection() {
  const profileList: ProfileItem[] = [
    {
      icon: <img src={GithubIcon} alt="깃허브 아이콘" />,
      content: "JuHeonParkk",
      href: "https://github.com/JuHeonParkk",
    },
    {
      icon: <img src={VelogIcon} alt="벨로그 아이콘" />,
      content: "velog.io/@pjh01913",
      href: "https://velog.io/@pjh01913/posts",
    },
  ] as const;

  return (
    <section className="mx-auto max-w-7xl px-8 bg-white pt-32 mb-20">
      <Title
        subTitle="ABOUT ME"
        title="박주헌"
        description="Frontend Developer"
      />
      <div className="flex flex-col md:flex-row items-center gap-20">
        <img
          src={ProfileImage}
          alt="박주헌 프로필"
          className="w-64 shadow-2xl rounded-xl border border-gray-300"
        />
        <div className="my-10 text-base md:text-xl leading-8 tracking-[-0.02em] text-gray-600">
          <p className="font-medium leading-8 text-gray-900">
            사용자 경험과 유지보수성을 함께 고민하며 더 나은 구조를 만들어가는{" "}
            <strong className="font-bold">프론트엔드 개발자 박주헌</strong>
            입니다.
          </p>

          <p className="mt-7">
            <strong className="font-semibold text-gray-900">React</strong>와{" "}
            <strong className="font-semibold text-gray-900">TypeScript</strong>
            를 기반으로 재사용 가능한 UI 구조를 설계하고,
            <br />
            <strong className="font-semibold text-gray-900">Lighthouse</strong>
            를 활용한 성능·접근성 개선과 Gemini API 를 활용한{" "}
            <strong className="font-semibold text-gray-900">
              AI 기능 개발
            </strong>
            까지 새로운 기술을 빠르게 학습하고 프로젝트에 직접 적용하며, 사용자
            경험 개선에 주도적으로 기여해왔습니다.
          </p>

          <p className="mt-7">
            현재는 <strong className="font-semibold text-gray-900">AWS</strong>
            를 학습하며 프론트엔드에서 서버와 인프라까지 기술 범위를 확장하고
            있습니다.
            <br />
            앞으로도 문제를 주도적으로 해결하고 더 나은 사용자 경험을 만드는
            개발자로 성장하고자 합니다.
          </p>

          <div className="max-w-xl mt-8">
            <ul className="flex justify-between items-start gap-4 text-gray">
              {profileList.map((item) =>
                item.href ? (
                  <a
                    key={item.content}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    {item.icon}
                    <span className="underline">{item.content}</span>
                    <span className="transform group-hover:-translate-y-1 -ml-2">
                      ↗
                    </span>
                  </a>
                ) : (
                  <div key={item.content} className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.content}</span>
                  </div>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
