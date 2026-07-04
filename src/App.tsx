import "./App.css";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
