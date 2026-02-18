// bg-slate-50 light mode
// bg-slate-600 dark mode
// items-center -- centers vertically
// justify-center -- centers horizontally
// justify-between spaces the divs apart (in navbar section)

export default function Hero(){
    return(
    
    <section id="hero" className="min-h-screen flex flex-col items-center gap-10 bg-stone-200 text-stone-600 px-6 md:flex-row md:gap-20 md:px-22">
        {/* Left side - Image */}
        <div className="mb-10 w-3/5 md:w-2/5 md: pt-5">
          <img 
            src="/andrea.jpeg" 
            alt="Andrea Abed" 
            className="h-full w-full object-cover"
          />
        </div>
  
        {/* Right side - Text content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-3/5">
          <h1 className="text-4xl mb-6 md:text-5xl">
            {"Hello! I'm "}<span className="font-semibold text-red-900">{"Andrea Abed."}</span>
          </h1>
          <p className="text-xl mb-8">
            {"I am a Computer Science graduate from San Diego State University."}
          </p>
        </div>
    </section>

  );

};