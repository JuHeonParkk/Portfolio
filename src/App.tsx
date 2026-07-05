import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <div id="home" className="sticky top-0 w-full h-screen overflow-hidden">
          <HeroSection />
        </div>
        <div className="relative w-full bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
