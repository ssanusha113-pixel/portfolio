function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 text-2xl font-bold mb-4">
            Get in Touch
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 text-lg">
            Have an opportunity, project, or just want to say hello?
            I'm open to cloud, DevOps, and networking roles.
            Feel free to reach out through any channel below.
          </p>

        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-10">

            {/* Email */}
            <div className="mb-10">

              <h3 className="text-2xl font-bold mb-4">
                ✉ Email
              </h3>

              <a
       href="mailto:ssanusha113@gmail.com"
         target="_blank"
  rel="noreferrer"
  className="text-cyan-400 text-lg"
>
  ssanusha113@gmail.com
</a>

            </div>

            {/* GitHub */}
            <div className="mb-10">

              <h3 className="text-2xl font-bold mb-4">
                GitHub
              </h3>

             <a
  href="https://github.com/ssanusha113-pixel"
  target="_blank"
  rel="noreferrer"
  className="text-cyan-400 text-lg"
>
  github.com/ssanusha113-pixel
</a>

            </div>

            {/* LinkedIn */}
            <div className="mb-10">

              <h3 className="text-2xl font-bold mb-4">
                LinkedIn
              </h3>

              <a
  href="https://www.linkedin.com/in/anusha-s-4350b340b/"
  target="_blank"
  rel="noreferrer"
  className="text-cyan-400 text-lg"
>
  linkedin.com/in/anusha-s-4350b340b
</a>
            </div>

            {/* Phone */}
            <div>

              <h3 className="text-2xl font-bold mb-4">
                📞 Phone
              </h3>

              <p className="text-gray-300 text-lg">
                +91 7676128442
              </p>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-10">

            <form className="space-y-6">

              {/* Name */}
              <div>

                <label className="block mb-2 text-lg">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-4 rounded-xl bg-slate-950 border border-white/10 outline-none"
                />

              </div>

              {/* Email */}
              <div>

                <label className="block mb-2 text-lg">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-4 rounded-xl bg-slate-950 border border-white/10 outline-none"
                />

              </div>

              {/* Message */}
              <div>

                <label className="block mb-2 text-lg">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell me about your opportunity or project..."
                  className="w-full p-4 rounded-xl bg-slate-950 border border-white/10 outline-none"
                ></textarea>

              </div>

              {/* Button */}
              <button
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact