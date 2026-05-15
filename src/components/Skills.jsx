const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Docker",
  "AWS",
  "Jenkins",
  "GitHub",
  "Kubernetes",
  "MongoDB",
]

function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 text-lg mb-4">
            Skills
          </p>

          <h2 className="text-5xl font-bold">
            Technologies I Use
          </h2>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-xl font-semibold">
                {skill}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills