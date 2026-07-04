import AbilitySection from "./AbilitySection";
import ProfileSection from "./ProfileSection";
import SkillsSection from "./SkillSection";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center"
    >
      <ProfileSection />
      <AbilitySection />
      <SkillsSection />
    </section>
  );
}
