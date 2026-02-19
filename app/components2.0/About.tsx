export default function About() {
    return (
      <section id="about" className="scroll-mt-16 min-h-screen bg-stone-300 text-stone-900 px-12 py-10 flex flex-col gap-8">
        
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-red-900">About Me</h2>
  
        {/* Two Column Cards */}
        <div className="flex flex-col md:flex-row gap-8 text-stone-600 mb-10 max-w-4xl mx-auto w-full">
  
          {/* Left Card */}
          <div className="flex-1 bg-stone-200 p-10 flex flex-col gap-4">
            <p className="text-sm leading-relaxed">
              {"I recently graduated from San Diego State University with a B.S. in Computer Science and am currently seeking entry-level software engineering opportunities."}
            </p>

            <p className="text-sm leading-relaxed">
                {"I value clear communication, collaboration, and continuous improvement. I take feedback seriously, care about producing quality work, and enjoy being part of teams where people support and learn from one another."}
            </p>
            <p className="text-sm leading-relaxed mb-4">
              {"Outside of tech, I enjoy spending time at the beach, playing tennis, hiking, and exploring new coffee shops."}
            </p>
  
            {/* Picture */}
            <div className="overflow-hidden">
              <img
                src="/gwc.jpeg"
                alt="Girls Who Code"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
  
          {/* Right Card */}
          <div className="flex-1 bg-stone-200 p-8 flex flex-col gap-3">
  
            <div className="flex flex-col gap-2">
              <h4 className="text-base font-semibold text-stone-900">AI/ML Research Assistant</h4>
              <p className="text-sm leading-relaxed">
                {"I worked as part of a research group on an ongoing machine learning project, contributing to literature reviews and gaining hands-on experience with the codebase. I helped run and evaluate ResNet models using PyTorch, building familiarity with data preprocessing, training workflows, and evaluating results."}
              </p>
            </div>
  
            <hr className="border-stone-300" />
  
            <div className="flex flex-col gap-2">
              <h4 className="text-base font-semibold text-stone-900">Vice President of Girls Who Code</h4>
              <p className="text-sm leading-relaxed">
                {"Alongside a friend, I helped reinitiate our campus Girls Who Code chapter and grow it into an active, welcoming community. I organized workshops, coordinated industry speakers, and built an inclusive space for women in tech."}
              </p>
            </div>
  
            <hr className="border-stone-300" />
  
            <div className="flex flex-col gap-2">
              <h4 className="text-base font-semibold text-stone-900">Team Manager at Panera Bread</h4>
              <p className="text-sm leading-relaxed">
                {"Managing a team in a fast-paced environment strengthened my communication skills, adaptability, and ability to lead with empathy. I carry those skills into software engineering by collaborating effectively, responding to feedback, and continuously improving."}
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }