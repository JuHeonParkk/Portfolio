import AbilitySection from "./AbilitySection";
import ProfileSection from "./ProfileSection";
import ConceptSection from "./ConceptSection";

export default function AboutSection() {
  return (
    <section id="about" className="w-full relative">
      <div className="sticky top-0 w-full h-screen overflow-hidden z-10">
        <ConceptSection />
      </div>

      <div className="relative bg-white w-full min-h-screen z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <ProfileSection />
        <AbilitySection />
      </div>
    </section>
  );
}
