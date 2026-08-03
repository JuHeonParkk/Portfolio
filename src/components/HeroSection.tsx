export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center text-center"
    >
      <span className="origin-[70%_70%] animate-wave mb-5 text-5xl">👋</span>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
        안녕하세요 <br /> 신입 프론트엔드 개발자
        <br />
        <strong className="text-primary">박주헌</strong>입니다.
      </h1>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="https://drive.google.com/file/d/15YbH098TXgxj2FVdjLUoqEhdLZ1jpdmO/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 min-w-40 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(59,130,246,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_12px_30px_rgba(59,130,246,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
        >
          이력서 바로가기
        </a>
        <a
          href="#project"
          className="inline-flex h-12 min-w-40 items-center justify-center rounded-xl border border-blue-100 bg-blue-50/70 px-6 text-sm font-semibold text-blue-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-100"
        >
          프로젝트 바로가기
        </a>
      </div>

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
