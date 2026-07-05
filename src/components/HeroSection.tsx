export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center text-center"
    >
      <span className="origin-[70%_70%] animate-wave mb-5 text-5xl">👋</span>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
        안녕하세요 <br /> 신입 프론트엔드 개발자
        <br />
        <strong className="text-primary">박주헌</strong>입니다.
      </h1>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <svg
          className="h-6 w-6 text-primary/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
