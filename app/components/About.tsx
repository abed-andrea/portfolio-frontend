// export default function About(){
//     return(
//         <section id="about" className="min-h-screen flex items-center" style={{ backgroundColor: "oklch(97.1% 0.013 17.38)" }}>
//             <div className="mx-auto w-full max-w-6xl px-6">

//                 {/* heading */}
//                 <div className="text-center">
//                     <h2 className="text-4xl font-semibold text-slate-900">About Me</h2>
//                     <div className="mx-auto mt-3 h-1 w-20" style={{ backgroundColor: "oklch(83.7% 0.128 66.29)"}} />
//                 </div>

//                 <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
//                     {/* Image */}
//                     <div className="h-130 w-100 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url(/my-photo.jpeg)" }}/>

//                     {/* TODO: Description About ME */}
//                     <div className="text-lg leading-relaxed text-slate-700">
//                         <p>{"[Insert content]"}</p>
//                         <p className="mt-4">{"[Insert content]"}</p>
//                         <p className="mt-4">{"[Insert content]"}</p>
//                     </div>
//                 </div>
//             </div>
//         </section>


//     );
// }


// export default function About(){
//     return(
//     <section id="about" className="min-h-screen px-6 py-20">
//       <div className="mx-auto max-w-6xl">
        
//         {/* Title */}
//         <div className="mb-14 text-center">
//           <h2 className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900">
//             About Me
//           </h2>

//           <div
//             className="mx-auto mt-5 h-1.5 w-24 rounded-full"
//             style={{ backgroundColor: "oklch(86% 0.013 236.62)" }}
//           />
//         </div>

//         {/* Content (fills remaining height) */}
//         <div className="grid min-h-[calc(100vh-220px)] grid-cols-1 gap-12 lg:grid-cols-2">
//           {/* LEFT COLUMN */}
//           <div className="flex items-center justify-center">
//             <div className="w-full max-w-lg">
//               {/* Photo */}
//               <div
//                 className="mx-auto aspect-[14/15] w-full rounded-3xl bg-cover bg-center shadow-lg"
//                 style={{ backgroundImage: "url(/my-photo.jpeg)" }}
//               />

//               {/* Paragraphs */}
//               <div className="mt-8 space-y-4 text-left text-base leading-relaxed text-slate-600">
//                 <p>
//                   I recently graduated from San Diego State University with a Bachelor’s
//                   degree in Computer Science and am currently seeking entry-level software
//                   engineering opportunities. I enjoy working through problems methodically
//                   and taking the time to understand how things work.
//                 </p>

//                 <p>
//                   I value clear communication, collaboration, and continuous learning. I
//                   take feedback seriously, care about producing quality work, and aim to be
//                   someone teammates can rely on. Outside of tech, I enjoy spending time at
//                   the beach, playing tennis, hiking, and exploring new coffee shops.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN (placeholder for now) */}
//           <div className="flex items-center justify-center">
//             <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white/70 p-8">
//               Right side content goes here (skills/experience).
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>


//     );
// }



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
                  className="w-full max-w-md h-110 rounded-3xl bg-cover bg-center shadow-lg"
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
                  className="w-full max-w-md h-72 rounded-3xl bg-cover bg-center shadow-lg"
                  style={{ backgroundImage: "url(/gwc-photo.jpeg)" }}
                />
      
              </div>
            </div>
          </div>
        </section>
      );
  }