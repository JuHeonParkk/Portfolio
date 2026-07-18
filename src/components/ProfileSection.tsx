import ProfileImage from "@/assets/images/profile.jpg";
import EmailIcon from "@/assets/icons/email-icon.svg";
import PhoneIcon from "@/assets/icons/phone-icon.svg";
import GithubIcon from "@/assets/icons/github-icon.svg";
import VelogIcon from "@/assets/icons/velog-icon.svg";

interface ProfileItem {
  icon: React.ReactElement;
  content: string;
  href?: string;
}

export default function ProfileSection() {
  const profileList: ProfileItem[] = [
    {
      icon: <img src={EmailIcon} alt="이메일 아이콘" />,
      content: "pjh01913@gmail.com",
    },
    {
      icon: <img src={PhoneIcon} alt="전화 아이콘" />,
      content: "010-3588-4239",
    },
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
    <section className="mx-auto max-w-4xl h-full px-8 bg-white py-32">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <img
          src={ProfileImage}
          alt="박주헌 프로필"
          className="w-64 shadow-2xl rounded-xl border border-gray-300"
        />
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            ABOUT ME
          </p>
          <h2 className="text-5xl font-bold">박주헌</h2>
          <p className="text-gray my-5 ml-1 text-xl">Frontend Developer</p>

          <div>
            <ul className="flex flex-col justify-between items-start gap-4 text-gray">
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

      <div className="mt-12 space-y-10">
        <div>
          <p className="font-semibold text-base leading-8 text-gray-700 md:text-lg">
            사용자 경험을 개선하고, 유지보수성을 고려한 코드를 설계 하는 신입
            프론트엔드 개발자 박주헌입니다.
            <br />
            사용자와 팀 모두에게 더 나은 개발 경험을 제공할 수 있도록
            <span className="text-primary">
              {" "}
              끊임없이 배우고 개선하는 개발자
            </span>
            가 되고자 합니다.
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-1 rounded-full bg-primary" />
            <h3 className="font-bold text-foreground">
              사용자 경험과 유지보수성을 고려한 개발
            </h3>
          </div>

          <p className="leading-8 text-gray-600">
            React와 Next.js 기반의 팀 프로젝트를 진행하며 단순한 기능 구현을
            넘어{" "}
            <strong className="text-foreground">
              사용자가 편리하게 이용할 수 있는 서비스와 팀원들이 쉽게 유지보수할
              수 있는 구조
            </strong>
            를 만드는 것을 중요하게 생각합니다. 반복되는 UI와 로직은 공통
            컴포넌트와 Custom Hook으로 추상화하고, 사용자 이동 흐름과 예외
            상황을 고려한 기능 개선을 통해 사용성과 코드 품질을 함께 높이는
            경험을 쌓았습니다. 또한 PR에 설계 의도와 사용 방법을 함께 공유하며
            협업 효율을 높이기 위해 노력했습니다.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-1 rounded-full bg-primary" />
            <h3 className="font-bold text-foreground">
              새로운 기술과 AI를 통한 성장
            </h3>
          </div>

          <p className="leading-8 text-gray-600">
            새로운 기술을 빠르게 학습하고 프로젝트에 적용하는 과정에서 큰
            성취감을 느낍니다. 현재는 Next.js를 비롯한 서버 상태 관리와 폼 관리
            기술을 학습하며 기술 스택을 확장하고 있으며,
            <strong className="text-foreground">
              {" "}
              AI API와 프롬프트 설계 경험
            </strong>
            을 위해 사용자의 키워드를 기반으로 AI 캐릭터를 생성하는 프로젝트를
            진행하고 있습니다. 최근에는 <strong>Claude Code</strong>와 같은 AI
            기반 개발 도구를 활용해 반복 작업을 자동화하고 개발 생산성을 높이는
            방법을 학습하며 실제 프로젝트에 적용해보고자 합니다.
          </p>
        </section>
      </div>
    </section>
  );
}
