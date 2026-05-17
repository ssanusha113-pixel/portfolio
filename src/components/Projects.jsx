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

    link: "/project1",
  },

  {
    title: "Secure File Sharing With S3 And CloudFront",

    description:
      "Implemented a secure file-sharing service using AWS S3, CloudFront, IAM, and Lambda for protected file access.",

    tech: [
      "S3",
      "CloudFront",
      "IAM",
      "Lambda",
    ],

    link: "/project2",
  },

  {
    title: "Custom VPC Setup with Bastion Host & NAT Gateway",

    description:
      "Built a secure AWS network architecture using custom VPC, public/private subnets, Bastion Host, and NAT Gateway.",

    tech: [
      "AWS",
      "VPC",
      "EC2",
      "NAT Gateway",
      "Security Groups",
    ],

    link: "/project3",
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

          <p className="text-cyan-400 text-4xl font-bold mb-4">
            Projects
          </p>

          <h2 className="text-xl font-bold">
            Hands-on cloud, networking, and security projects demonstrating real-world skills.
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-3 transition duration-300"
            >

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                {/* View Details */}
                <a
                 href={project.link}
                 
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition"
                >
                  View Details
                </a>


              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects