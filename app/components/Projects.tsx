export default function Projects() {
    return (
      <section id="projects" className="min-h-screen flex items-center" style={{ backgroundColor: "oklch(98% 0.016 73.684)" }}
>
        <div className="mx-auto w-full max-w-6xl px-6">
          
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-slate-900">
              Featured Projects
            </h2>
  
            <div
              className="mx-auto mt-3 h-1 w-20"
              style={{ backgroundColor: "oklch(83.7% 0.128 66.29)" }}
            />
  
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              A small selection of projects I’ve worked on recently.
            </p>
          </div>

          {/* Project cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="mb-4 h-40 rounded-lg bg-slate-200" />
                    <h3 className="text-xl font-semibold text-slate-900">Project One</h3>
                    <p className="mt-2 text-slate-600">A short description of what this project does and what it is about.</p>
                </div>

                {/* Card 2 */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="mb-4 h-40 rounded-lg bg-slate-200" />
                    <h3 className="text-xl font-semibold text-slate-900">Project Two</h3>
                    <p className="mt-2 text-slate-600">A short description of what this project does and what it is about.</p>
                </div>

                {/* Card 3 */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="mb-4 h-40 rounded-lg bg-slate-200" />
                    <h3 className="text-xl font-semibold text-slate-900">Project Three</h3>
                    <p className="mt-2 text-slate-600">A short description of what this project does and what it is about.</p>
                </div>                


            </div>


        </div>
      </section>
    );
  }