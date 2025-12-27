export default function About() {
    return (
        <section id="about" className="min-h-screen py-24">
          <div className="mx-auto max-w-6xl px-6">
            
            {/* Section Title */}
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-semibold text-slate-900">
                About Me
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-300" />
            </div>
      
            {/* Two-column layout */}
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-start">
              
              {/* LEFT COLUMN */}
              <div className="flex flex-col items-center">
                
                {/* Photo */}
                <div
                  className="w-full max-w-sm h-90 rounded-3xl bg-cover bg-center shadow-lg"
                  style={{ backgroundImage: "url(/my-photo.jpeg)" }}
                />
      
                {/* About paragraph */}
                <div className="mt-8 max-w-md text-slate-700 leading-relaxed">
                  <p>
                    I recently graduated from San Diego State University with a
                    Bachelor’s degree in Computer Science and am currently seeking
                    entry-level software engineering opportunities.
                  </p>
      
                  <p className="mt-4">
                    I value clear communication, collaboration, and continuous
                    improvement. I take feedback seriously, care about producing
                    quality work, and enjoy being part of teams where people support
                    and learn from one another.
                  </p>
      
                  <p className="mt-4">
                    Outside of tech, I enjoy spending time at the beach, playing
                    tennis, hiking, and exploring new coffee shops.
                  </p>
                </div>
              </div>
      
              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-10">
                
                {/* Skills */}
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "C / C++",
                      "Java",
                      "SQL",
                      "React",
                      "Next.js",
                      "FastAPI",
                      "Docker",
                      "Git/GitHub",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
      
                {/* Experience */}
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">
                    Experience & Leadership
                  </h3>
      
                  <ul className="space-y-4 text-slate-700">
                    <li>
                      <span className="font-medium">
                        AI/ML Research Assistant
                      </span>{" "}
                      — Worked with PyTorch and ResNet models on large-scale image
                      datasets.
                    </li>
      
                    <li>
                      <span className="font-medium">
                        Vice President, Girls Who Code
                      </span>{" "}
                      — Led workshops and coordinated industry engagement events.
                    </li>
      
                    <li>
                      <span className="font-medium">
                        Team Manager
                      </span>{" "}
                      — Managed operations and mentored new hires in a fast-paced
                      environment.
                    </li>
                  </ul>
                </div>



                <div
                  className="w-full max-w-sm h-60 rounded-3xl bg-cover bg-center shadow-lg"
                  style={{ backgroundImage: "url(/gwc-photo.jpeg)" }}
                />
      
              </div>
            </div>
          </div>
        </section>
      );
  }