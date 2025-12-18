export default function Contact() {
    return (
      <section id="contact" className="min-h-screen flex items-center" style={{ backgroundColor: "oklch(97.7% 0.013 236.62)" }}>
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          {
          /* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900">Get In Touch</h2>
            <div className="mx-auto mt-3 h-1 w-20" style={{ backgroundColor: "oklch(83.7% 0.128 66.29)" }}/>
          </div>
  

          {/* Two cards */}


          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">Contact Information</h3>
  
              <div className="mt-8 space-y-6 text-slate-700">
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-lg">andrea.abed03@gmail.com</p>
                </div>
  
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="text-lg">{"(858) 705-9766"}</p>
                </div>
  
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-lg">San Diego, CA</p>
                </div>
              </div>
            </div>
  

            {/* Message Form (UI only) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">Send a Message</h3>
  
              <div className="mt-8 space-y-5">
                <input type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
  
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
  
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
  
                <button
                  type="button"
                  className="w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }