import Navbar from "./components2.0/Navbar"
import Hero from "./components2.0/Hero";
import About from "./components2.0/About"
import Projects from "./components2.0/Projects"
import Contact from "./components2.0/Contact"

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
    </div>
  );
}
