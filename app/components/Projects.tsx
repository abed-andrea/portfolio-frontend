export default function Projects() {
    return (
      <section id="projects" className="min-h-screen flex items-center" style={{ backgroundColor: "oklch(98% 0.016 73.684)" }}
>
        <div className="mx-auto w-full max-w-6xl px-6">
          
          {/* Section Title */}
          <div className="mb-16 text-center">
              <h2 className="text-5xl font-semibold text-slate-900">
                Projects
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-300" />
            </div>

          {/* Project cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                
                {/* Card 1 */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-900">PC Builder Web App</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Full-stack web app for browsing PC parts and creating compatible
                      builds. Built with a FastAPI backend and PostgreSQL database, with a modern
                      frontend.
                    </p>


                    <div className="mt-5 flex flex-wrap gap-2">
                    {["FastAPI", "PostgreSQL", "Docker", "Next.js"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href="https://github.com/SDSU-CompE-561-Spring-2025/custom-pc-parts-ecom"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                      GitHub <span className="text-lg leading-none">→</span>
                    </a>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">

                    <h3 className="text-xl font-semibold text-slate-900">Process Creation and Destruction</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">C program to model process creation, management, and destruction in an operating system. Focused on efficient data structures to represent parent–child process relationships.</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["C", "Operating Systems", "Data Structures"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href="/reports/process-report.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                      >
                        Report →
                      </a>
                    </div>

                </div>

                

                {/* Card 3 */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">

                    <h3 className="text-xl font-semibold text-slate-900">CPU Scheduling Algorithms</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">C program that simulates common CPU scheduling algorithms including FCFS, SRTF, Priority, and Round Robin, with performance metrics and execution order visualization.</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["C", "Scheduling", "Operating Systems"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href="/reports/cpu-alg-report.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                      >
                        Report →
                      </a>
                    </div>

                </div>                


            </div>


        </div>
      </section>
    );
  }