import Image from "next/image";
import Link from "next/link"; // for navigating between routes which we are not doing yet
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>

        <Hero />
        <h1 className="text-4xl font-bold text-center mt-16">{"Andrea's Portfolio"}</h1>

        {/* Temporary About Section */}
        <section id="about" className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-4 text-slate-600">
            Short intro will go here.</p>
        </section>

        {/* Temporary Project Section */}
        <section id="projects" className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="mt-4 text-slate-600">
            Project cards will go here.</p>
        </section>


        {/* Temporary Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-4 text-slate-600">
            Contact form will go here.</p>
        </section>



    </div>
  );
}
