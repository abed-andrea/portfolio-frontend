import Image from "next/image";
import Link from "next/link"; // for navigating between routes which we are not doing yet
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
        <Navbar />
        <h1 className="text-4xl font-bold text-center mt-16">Andrea's Portfolio</h1>
    </div>
  );
}
