export default function Navbar(){
    return (
        <header className="w-full bg-[#c7d2fe]">
            <div className="flex items-center justify-between px-8 text-[#818cf8]">
                <a className="text-5xl font-semibold">Andrea Abed</a>
                <nav className="flex gap-8 text-3xl">
                    {/* the below hrefs will only work if you render navbar on a page that has id=about, id=projects, etc */}
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div> 
        </header>
    );
};