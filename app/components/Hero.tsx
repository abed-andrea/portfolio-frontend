import Link from "next/link";

const buttonClass = "group flex items-center gap-4 px-8 py-4 rounded-xl bg-white text-slate-800 font-medium shadow-sm transition hover:shadow-md";


export default function Hero(){
    return(
        <section className="relative min-h-screen">
            {/* Background image */}
            <div
                className="absolute inset-0 h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url(/hero-bg-final.jpeg)" }}
            />

            {/* Translucent Layer */}
            <div className="absolute inset-0 bg-white/75" />


            {/* Centered content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center gap-10">


                {/* Title Pill */}
                <div
                    className="rounded-full border px-10 py-3 text-center sm:text-lg font-medium"
                    style={{
                        color: "oklch(72% 0.14 66.29)",
                        borderColor: "oklch(72% 0.14 66.29)",
                        backgroundColor: "oklch(96% 0.05 66.29)",
                      }}
                >
                Software Developer / Engineer
                </div>

                {/* My Name is Andrea */}
                <h1 className="font-light tracking-tight leading-[1.05] text-5xl sm:text-7xl md:text-8xl lg:text-9xl lg:whitespace-nowrap">
                <span className="text-slate-900">{"Hi, I'm"}</span>
                <span style={{ color: "oklch(83.7% 0.128 66.29)" }}> Andrea Abed</span>
                </h1>

                {/* Buttons */}
                <div className="mt-12 flex gap-5">
                    <Link href="#about" className={buttonClass}>
                        <span>About Me</span>
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                    <Link href="#projects" className={buttonClass}>
                        <span>Projects</span>
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                    <Link href="#contact" className={buttonClass}>   
                        <span>Contact</span>
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>




            </div>
        </section>
  );

};