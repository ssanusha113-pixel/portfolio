const projects = [
  {
    title: "Automated Backup & Recovery System",

    description:
      "Built an AWS serverless backup automation system using Lambda, EventBridge, EC2, and EBS snapshots with automated retention policy management.",

    tech: [
      "AWS",
      "Lambda",
      "EventBridge",
      "EC2",
      "EBS",
    ],
  },

  {
    title: "Dockerized Web App",

    description:
      "Containerized React application using Docker with production deployment.",

    tech: [
      "React",
      "Docker",
      "Nginx",
    ],
  },

  {
    title: "AWS Cloud Deployment",

    description:
      "Hosted scalable applications on AWS with EC2, S3, and Load Balancer.",

    tech: [
      "AWS",
      "EC2",
      "S3",
    ],
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 text-lg mb-4">
            Projects
          </p>

          <h2 className="text-5xl font-bold">
            Featured Work
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-3 transition duration-300"
            >

              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3">

                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects