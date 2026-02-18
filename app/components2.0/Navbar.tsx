import Link from 'next/link';

const linkStyle = "hover:opacity-80 hover:scale-105 transition-opacity"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full p-5 bg-stone-300 text-stone-900">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Your Name */}
        <Link href="#hero" className="text-2xl text-red-900 font-semibold transition-opacity hover:opacity-80 md:text-3xl">
          Andrea Abed
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden gap-6 text-base font-medium md:flex md:gap-10 md:text-xl">
          <a href="#about" className={linkStyle}>About Me</a>
          <a href="#projects" className={linkStyle}>Projects</a>
          <a href="#contact" className={linkStyle}>Contact</a>
        </nav>

{/* Right: Social Icons */}
        <div className="flex gap-4 md:gap-6 pl-22">
          <a href="https://linkedin.com/in/andrea-abed" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <img src="/linkedin.jpeg" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="https://github.com/abed-andrea" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <img src="/github.jpeg" alt="GitHub" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </header>
  );
}