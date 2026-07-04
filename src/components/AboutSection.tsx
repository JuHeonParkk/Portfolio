import AbilitySection from "./AbilitySection";
import ProfileSection from "./ProfileSection";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-24 px-6"
    >
      <ProfileSection />
      <AbilitySection />
    </section>
  );
}
