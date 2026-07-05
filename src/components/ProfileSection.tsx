import ProfileImage from "@/assets/profile.jpg";
import EmailIcon from "@/assets/email-icon.svg";
import PhoneIcon from "@/assets/phone-icon.svg";
import GithubIcon from "@/assets/github-icon.svg";
import VelogIcon from "@/assets/velog-icon.svg";

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
    <section className="mx-auto max-w-7xl px-8 bg-white py-24">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <img
          src={ProfileImage}
          alt="박주헌 프로필"
          className="w-72 shadow-2xl rounded-xl border border-gray-300"
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
                    className="flex items-center gap-2 underline"
                  >
                    {item.icon}
                    <span>{item.content}</span>
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

      <div className="mt-12">
        <p className="leading-8 text-base md:text-lg">
          <strong>
            사용자 경험을 중심으로 배우고 성장하는 신입 프론트엔드 개발자
            박주헌입니다.
          </strong>
          <br /> 대학에서 처음 웹 페이지를 구현하며 작성한 코드대로 화면이
          바뀌는 것 에 매력을 느껴 프론트엔드 개발자의 길을 선택하게 되었습니다.
          <br />
          React와TypeScript를 기반으로 다양한 프로젝트를 진행하며 유지보수성과
          확장성을 고려한 개발을 경험했고, 현재는 Next.js와 서버 연동 기술 까지
          학습하며 기술 스택을 넓혀가고 있습니다. 사용자에게 더 나은 경험을
          제공하는 것이 좋은 서비스의 시작이라고 생각하며, 새로운 기술을
          적극적으로 배우고 프로젝트에 적용하면서 꾸준히 성장하는 개발자를
          목표로 하고 있습니다.
        </p>
      </div>
    </section>
  );
}
