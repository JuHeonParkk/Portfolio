import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";

function App() {
  return (
    <div>
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
