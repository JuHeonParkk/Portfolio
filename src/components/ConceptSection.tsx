import Title from "./Title";
import PaintIcon from "@/assets/paint-icon.png";
import HeartIcon from "@/assets/heart-icon.png";
import TargetIcon from "@/assets/target-icon.png";

const conceptItems = [
  { type: "keyword", text: "협업형 개발자", active: false },
  { type: "keyword", text: "UI/UX 감각", active: true },
  { type: "icon", src: PaintIcon },
  { type: "keyword", text: "성실함", active: false },
  { type: "keyword", text: "문제 해결 능력", active: false },
  { type: "keyword", text: "서포트형 리더", active: false },
  { type: "keyword", text: "공통 컴포넌트", active: true },
  { type: "icon", src: TargetIcon },
  { type: "keyword", text: "성장 가능성", active: true },
  { type: "icon", src: HeartIcon },
  { type: "keyword", text: "긍정적인", active: false },
  { type: "keyword", text: "피드백 수용", active: false },
];

export default function ConceptSection() {
  return (
    <section
      id="about"
      className="w-full h-full bg-gray-50 flex items-center justify-center"
    >
      <div className="w-full max-w-4xl px-4">
        <Title
          subTitle="KEYWORD"
          title="박주헌 "
          description={`프로젝트를 함께 진행한 팀원들이 남겨준 피어리뷰를 바탕으로, \n 가장 많이 언급된 키워드를 담았습니다.`}
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="flex flex-wrap justify-center gap-5">
            {conceptItems.map((item, index) =>
              item.type === "icon" ? (
                <img
                  key={index}
                  src={item.src}
                  alt="키워드 아이콘"
                  className="w-16 h-16 object-contain self-center"
                />
              ) : (
                <span
                  key={index}
                  className={
                    item.active
                      ? "rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-md"
                      : "rounded-full border border-primary/40 bg-white px-8 py-4 text-lg font-bold text-primary"
                  }
                >
                  {item.text}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
