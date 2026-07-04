import "./App.css";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full max-w-6xl mx-auto px-8">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
