export default function Projects() {
    return (
      <section id="projects" className="scroll-mt-16 min-h-screen bg-stone-200 text-stone-900 px-12 py-10 flex flex-col gap-8 justify-center">
  
        {/* Title */}
        <h2 className="text-4xl text-red-900 font-semibold text-center">Projects</h2>
  
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto w-full">
  
          {/* Card 1 */}
          <div className="flex-1 bg-stone-300 p-8 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">PC Builder Web App</h3>
            <p className="text-sm leading-relaxed text-stone-600">
              Full-stack web app for browsing PC parts and creating compatible builds. Built with a
              FastAPI backend and PostgreSQL database, with a modern frontend.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["FastAPI", "PostgreSQL", "Docker", "Next.js"].map(tag => (
                <span key={tag} className="text-xs bg-stone-200 text-stone-700 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <a href="https://github.com/SDSU-CompE-561-Spring-2025/custom-pc-parts-ecom" className="text-sm font-medium text-stone-900 hover:opacity-70 transition-opacity mt-2">
              {"GitHub →"}
            </a>
          </div>
  
          {/* Card 2 */}
          <div className="flex-1 bg-stone-300 p-8 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Process Creation / Destruction</h3>
            <p className="text-sm leading-relaxed text-stone-600">
              C program to model process creation, management, and destruction in an operating system.
              Focused on efficient data structures to represent parent–child process relationships.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["C", "Operating Systems", "Data Structures"].map(tag => (
                <span key={tag} className="text-xs bg-stone-200 text-stone-700 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <a href="/reports/process-report.pdf" className="text-sm font-medium text-stone-900 hover:opacity-70 transition-opacity mt-2">
              {"Report →"}
            </a>
          </div>
  
          {/* Card 3 */}
          <div className="flex-1 bg-stone-300 p-8 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">CPU Scheduling Algorithms</h3>
            <p className="text-sm leading-relaxed text-stone-600">
              C program that simulates common CPU scheduling algorithms including FCFS, SRTF, Priority,
              and Round Robin, with performance metrics and execution order visualization.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["C", "Scheduling", "Operating Systems"].map(tag => (
                <span key={tag} className="text-xs bg-stone-200 text-stone-700 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <a href="/reports/cpu-alg-report.pdf" className="text-sm font-medium text-stone-900 hover:opacity-70 transition-opacity mt-2">
              {"Report →"}
            </a>
          </div>
  
        </div>
      </section>
    );
  }