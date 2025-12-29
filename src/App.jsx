import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* GLOBAL BACKGROUND */}
      <ParticlesBackground />

      {/* PAGE CONTENT */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
