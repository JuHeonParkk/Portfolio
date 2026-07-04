import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";

function App() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
