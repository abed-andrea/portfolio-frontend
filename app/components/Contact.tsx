"use client";
import React, {useState} from "react";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault() // Stop browswer from refreshing the page

      // Build the JSON object we want to send to the backend
      const payload = {
        name: name,
        email: email,
        message: message
      };

      try{
        // Send POST request to backend, Store reply in "res"
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(payload) // Convert JS object into JSON
        });

        console.log("status: ", res.status);

        const data = await res.json(); // Convert JSON object back into JS object
        console.log("response:", data);


        // Clear Input States
        setName("");
        setEmail("");
        setMessage("");

      } catch(error) {
        console.error("Failed to submit contact form: ", error);
      }
    }

    return (
      <section id="contact" className="min-h-screen flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          {
          /* Heading */}
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-semibold text-slate-900">
                Contact
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-300" />
            </div>
  

          {/* Two cards */}


          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="rounded-2xl border-2 border-orange-300 p-18 shadow-md"  style={{ backgroundColor: "oklch(98% 0.016 73.684)" }}>
              <h3 className="text-center text-4xl font-semibold text-orange-300">Get In Touch</h3>


              <div className="mt-10 space-y-7 text-slate-800">
              <div>
                <p className="text-xl uppercase tracking-wide text-slate-500">Email</p>
                <a href="mailto:andrea.abed03@gmail.com" className="mt-1 block font-medium hover:text-sky-600">
                  andrea.abed03@gmail.com
                </a>
              </div>
  
              <div>
                <p className="text-xl uppercase tracking-wide text-slate-500">Phone</p>
                <p className="mt-1 block font-medium">
                  {"(858) 705-9766"}
                </p>
              </div>
  
                <div>
                  <p className="text-xl uppercase tracking-wide text-slate-500">Location</p>
                  <p className="mt-1 block font-medium">San Diego, CA</p>
                </div>

              {/* Icons */}
        <div className="mt-10 flex gap-6">
          <a
            href="https://linkedin.com/in/andrea-abed"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <img
              src="/linkedin.jpeg"
              alt="LinkedIn"
              className="h-12 w-12"
            />
          </a>

          <a
            href="https://github.com/abed-andrea"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <img
              src="/github.jpeg"
              alt="GitHub"
              className="h-12 w-12"
            />
          </a>
        </div>

              </div>
            </div>
  

            {/* Message Form*/}
            <div className="rounded-2xl border-2 border-orange-300 p-18 shadow-md"  style={{ backgroundColor: "oklch(98% 0.016 73.684)" }}>
              <h3 className="text-center text-4xl font-semibold text-orange-300">Send a Message</h3>
  
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input 
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-orange-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
  
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-orange-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
  
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-orange-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                >
                  Send Message
                </button>
              </form>

              
            </div>
          </div>
        </div>
      </section>
    );
  }