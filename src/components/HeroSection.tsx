import ProfileCharacter from "@/assets/profileCharacter.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <div className="relative flex items-center">
        <span className="absolute -left-5 top-16 origin-[70%_70%] animate-wave mr-1 text-5xl">
          👋
        </span>
        <img src={ProfileCharacter} alt="프로필 아이콘" className="w-36 h-36" />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
        안녕하세요 <br /> 프론트엔드 개발자
        <br />
        <strong className="text-primary">박주헌</strong>입니다.
      </h1>

      {/* <p className="mt-10 max-w-xl text-base md:text-lg leading-8 text-gray">
        사용자 경험을 중심으로
        <span className="text-primary ml-1">직관적인 UI</span>를 고민하고,
        <br />
        <span className="text-primary">유지보수하기 쉬운 구조</span>를 만드는
        프론트엔드 개발자입니다.
      </p> */}
      {/* <div className="relative mt-16 overflow-hidden">
        <ul className="flex w-max animate-marquee gap-4">
          {[...keywords, ...keywords].map((keyword, index) => (
            <li
              key={`${keyword}-${index}`}
              className="shrink-0 rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-primary"
            >
              {keyword}
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  );
}
