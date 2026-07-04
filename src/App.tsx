import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
