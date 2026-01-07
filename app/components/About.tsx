export default function About() {
  return (
    <section id="about" className="min-h-screen py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Section Title */}
        <div className="mb-3 text-center">
          <h2 className="text-5xl font-semibold text-slate-900">About Me</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-300" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* LEFT CARD */}
          <div
            className="rounded-2xl border-2 border-orange-300 p-10 shadow-md"
            style={{ backgroundColor: "oklch(98% 0.016 73.684)" }}
          >
            <h3 className="text-center text-2xl font-semibold text-slate-900">
              Who I Am
            </h3>

            {/* Photo */}
            <div className="mt-8 flex justify-center">
              <div
                className="h-44 w-44 md:h-52 md:w-52 rounded-2xl bg-cover shadow-lg
                           bg-[center_28%]"
                style={{ backgroundImage: "url(/about-me.jpeg)" }}
              />
            </div>

            {/* Text */}
            <div className="mt-8 text-slate-700 leading-relaxed text-sm">
              <p>
                I recently graduated from San Diego State University with a
                Bachelor's degree in Computer Science and am currently seeking
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

          {/* RIGHT CARD */}
          <div
            className="rounded-2xl border-2 border-orange-300 p-10 shadow-md"
            style={{ backgroundColor: "oklch(98% 0.016 73.684)" }}
          >
            <h3 className="text-center text-2xl font-semibold text-slate-900">
              Experience &amp; Leadership
            </h3>

            <div className="mt-10 space-y-5 text-slate-700">
              <div>
                <h4 className="font-semibold text-slate-900">
                  AI/ML Research Assistant
                </h4>
                <p className="mt-2 text-sm leading-relaxed">
                I worked as part of a research group on an ongoing machine learning project, where I contributed to literature reviews and gained hands-on experience working with the code. I helped run and evaluate a ResNet model in PyTorch to compare its performance with other approaches, building familiarity with data preprocessing, training workflows, and evaluating results.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Vice President, Girls Who Code
                </h4>
                <p className="mt-2 text-sm leading-relaxed">
                  Alongside a friend, I helped reinitiate our campus Girls
                  Who Code chapter and grow it into an active, welcoming community.
                  I organized workshops, coordinated industry speakers, and built
                  an inclusive space for women in tech.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Team Manager, Panera Bread
                </h4>
                <p className="mt-2 text-sm leading-relaxed">
                  Managing a team in a fast-paced environment over the past few years has strengthened my communication skills, adaptability, and ability to lead with empathy. I carry that mindset into software engineering by collaborating effectively, responding to feedback, and continuously improving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






