import Image from "next/image";
import Link from "next/link"; // for navigating between routes which we are not doing yet
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Projects />
        <Contact />
    </div>
  );
}
