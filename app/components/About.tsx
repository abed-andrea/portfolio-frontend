export default function About(){
    return(
        <section id="about" className="min-h-screen flex items-center" style={{ backgroundColor: "oklch(97.1% 0.013 17.38)" }}>
            <div className="mx-auto w-full max-w-6xl px-6">

                {/* heading */}
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-slate-900">About Me</h2>
                    <div className="mx-auto mt-3 h-1 w-20" style={{ backgroundColor: "oklch(83.7% 0.128 66.29)"}} />
                </div>

                <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
                    {/* Image */}
                    <div className="h-130 w-100 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url(/my-photo.jpeg)" }}/>

                    {/* TODO: Description About ME */}
                    <div className="text-lg leading-relaxed text-slate-700">
                        <p>{"[Insert content]"}</p>
                        <p className="mt-4">{"[Insert content]"}</p>
                        <p className="mt-4">{"[Insert content]"}</p>
                    </div>
                </div>
            </div>
        </section>


    );
}