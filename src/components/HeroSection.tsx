export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <p className="mb-4 text-2xl text-gray">
        <span className="inline-block origin-[70%_70%] animate-wave mr-1 text-3xl">
          👋
        </span>
        안녕하세요.
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
        프론트엔드 개발자
        <br />
        <strong className="text-primary">박주헌</strong>입니다.
      </h1>

      <p className="mt-10 max-w-xl text-base md:text-lg leading-8 text-gray">
        사용자 경험을 중심으로
        <span className="text-primary ml-1">직관적인 UI</span>를 고민하고,
        <br />
        <span className="text-primary">유지보수하기 쉬운 구조</span>를 만드는
        프론트엔드 개발자입니다.
      </p>
    </section>
  );
}
