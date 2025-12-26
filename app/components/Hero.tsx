export default function Hero(){
    return(
        <section className="min-h-screen">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/hero-bg-final.jpeg)" }}
            />

            {/* Light translucency*/}
            <div className="absolute inset-0 bg-white/60" />

            {/* Content */}

            <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center text-slate-900">
                
                {/* Pill */}
                <div className="inline-flex rounded-full border border-slate-300 bg-white/80 px-6 py-2 text-sm text-slate-700">
                    Welcome to my portfolio
                </div>

                {/* Main heading */}
                <h1 className="mt-8 text-8xl font-semibold tracking-tight sm:text-5xl md:text-6xl">{"Hi, I'm"}<span style={{ color: "oklch(83.7% 0.128 66.29)" }}> Andrea</span></h1>

                {/* Subheading */}
                <p className="mt-5 max-w-2xl text-base text-slate-700 sm:text-lg">
                    Computer Science Graduate and Aspiring Software Engineer
                </p>


                {/* Buttons */}
                <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                    <a href="#about" className="rounded-full border border-slate-400 bg-white/70 px-7 py-3 text-sm font-medium">
                    About me
                    </a>

                    <a href="#projects" className="rounded-full border border-slate-400 bg-white/70 px-7 py-3 text-sm font-medium">
                    View my work
                    </a>

                    <a href="#contact" className="rounded-full border border-slate-400 bg-white/70 px-7 py-3 text-sm font-medium">
                    Get in touch
                    </a>
                </div>


        </div>

        </section>
  );

};