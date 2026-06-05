function About() {
  return (
    <section
      id="about"
      className="py-12 px-6"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-cyan-400 text-lg mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate Developer &
            DevOps Engineer
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            I build modern web applications and cloud
            infrastructure using React, Docker, AWS,
            Jenkins, and Kubernetes. I enjoy creating
            beautiful user interfaces and scalable systems.
          </p>

        </div>

        {/* Right Side */}
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-10">

          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Frontend
              </h3>

              <p className="text-gray-400">
                React, Tailwind CSS, JavaScript
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Backend
              </h3>

              <p className="text-gray-400">
                Node.js, Express, MongoDB
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                DevOps
              </h3>

              <p className="text-gray-400">
                Docker, Jenkins, AWS, Kubernetes
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About