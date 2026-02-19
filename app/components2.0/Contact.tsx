"use client";
import React, {useState} from "react";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
   
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault() // Stop browswer from refreshing the page

      // reset feedback on new attempt
      setStatus("idle");
      setErrorMsg("");

      // basic validation
      if (!name.trim() || !email.trim() || !message.trim()) {
        setStatus("error");
        setErrorMsg("Please fill out your name, email, and message.");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        setStatus("error");
        setErrorMsg("Please enter a valid email address.");
        return;
      }  

      // Build the JSON object we want to send to the backend
      const payload = {
        name: name,
        email: email,
        message: message
      };

      try{
        setStatus("loading");

        // Send POST request to backend, Store reply in "res"
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(payload) // Convert JS object into JSON
        });

        console.log("status: ", res.status);

        if (!res.ok) {
          setStatus("error");
          setErrorMsg("Something went wrong. Please try again.");
          return;
        }

        const data = await res.json(); // Convert JSON object back into JS object
        console.log("response:", data);

        setStatus("success");

        // Clear Input States
        setName("");
        setEmail("");
        setMessage("");

      } catch(error) {
        console.error("Failed to submit contact form: ", error);
        setStatus("error");
        setErrorMsg("Network error. Please try again.");
      }
    }

    return (
        <section id="contact" className="scroll-mt-16 min-h-screen bg-stone-300 text-stone-900 px-12 py-10 flex flex-col gap-8">

        {/* Title */}
        <h2 className="text-4xl text-red-900 font-semibold text-center">Contact</h2>

          {/* Two cards */}
          <div className="flex flex-col md:flex-row gap-8 text-stone-600 mb-10 max-w-4xl mx-auto w-full">
            {/* Contact Info */}
            <div className="bg-stone-200 w-full md:w-1/2 p-6 md:p-10">
            <h3 className="text-3xl text-center text-stone-900">Get in Touch</h3>



              <div className="mt-10 space-y-7 text-stone-800">
              <div>
                <p className="text-xl uppercase tracking-wide text-stone-500">Email</p>
                <a href="mailto:andrea.abed03@gmail.com" className="mt-1 block font-medium hover:text-sky-900">
                  andrea.abed03@gmail.com
                </a>
              </div>
  
              <div>
                <p className="text-xl uppercase tracking-wide text-stone-500">Phone</p>
                <p className="mt-1 block font-medium">
                  {"(858) 705 - 9766"}
                </p>
              </div>
  
                <div>
                  <p className="text-xl uppercase tracking-wide text-stone-500">Location</p>
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
            <div className="bg-stone-200 w-full md:w-1/2 p-6 md:p-10">
            <h3 className="text-3xl text-center text-stone-900">Send a Message</h3>
  
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input 
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-100 px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300"
                  required
                />
  
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-100 px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300"
                  required
                />
  
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-stone-100 px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300"
                  required
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex cursor-pointer items-center gap-2 bg-stone-900 px-4 py-2 text-sm font-medium text-stone-100 hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-green-700">Message sent! Thanks for reaching out.</p>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-700">
                    {errorMsg || "Something went wrong. Please try again."}
                    </p>
                    )}

              </form>

              
            </div>
          </div>

      </section>
    );
  }