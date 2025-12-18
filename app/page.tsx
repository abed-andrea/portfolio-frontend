import Image from "next/image";
import Link from "next/link"; // for navigating between routes which we are not doing yet
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"

export default function Home() {
  return (
    <div>

        <Hero />
        <About />
        <h1 className="text-4xl font-bold text-center mt-16">{"Andrea's Portfolio"}</h1>


    </div>
  );
}
