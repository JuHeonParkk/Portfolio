import ProfileImage from "@/assets/profile.jpg";

export default function ProfileSection() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="flex items-center gap-20">
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
          <p className="text-gray mt-2 mb-4 ml-1">Frontend Developer</p>
          <div>
            <p className="leading-8 text-base">
              사용자 경험을 중심으로 배우고 성장하는 신입 프론트엔드 개발자
              박주헌입니다.
              <br /> 대학교에서 처음 웹 페이지를 구현하며 작성한 코드대로 화면이
              바뀌는 것에 매력을 느껴 프론트엔드 개발자의 길을 선택하게
              되었습니다. 단순한 기능 구현을 넘어 사용자에게 가치 있는 서비스를
              만드는 것을 목표로 하여, 다양한 기술을 학습하고 프로젝트에
              적용하며 성취감을 느끼고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
