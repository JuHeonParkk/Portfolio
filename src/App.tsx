import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";
import Reveal from "./components/Reveal";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <section
          id="home"
          className="sticky top-0 h-screen w-full overflow-hidden"
        >
          <Reveal className="h-full">
            <HeroSection />
          </Reveal>
        </section>
        <div className="relative w-full bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <Reveal>
            <AboutSection />
          </Reveal>

          <Reveal>
            <SkillsSection />
          </Reveal>

          <Reveal>
            <ProjectSection />
          </Reveal>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
