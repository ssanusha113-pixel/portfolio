function Project10() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <a
          href="/"
          className="text-cyan-400 mb-10 inline-block"
        >
          ← Back to Portfolio
        </a>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-8">
          Multi-Stage CI/CD Pipeline
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-8 mb-10">
          Built an automated CI/CD pipeline using GitHub, Jenkins,
          Docker, DockerHub, and AWS EC2 to streamline application
          build, packaging, and deployment processes.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 mb-12">

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            GitHub
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Jenkins
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Docker
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            DockerHub
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            AWS EC2
          </span>

        </div>

        {/* Overview */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-gray-400 leading-8">
            This project automates software delivery using a Jenkins
            Declarative Pipeline. Whenever code is pushed to GitHub,
            Jenkins automatically builds a Docker image, pushes it to
            DockerHub, and deploys the latest version on an AWS EC2
            instance, enabling faster and more reliable releases.
          </p>

        </div>

        {/* GitHub */}
        <a
          href="https://github.com/ssanusha113-pixel"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition"
        >
          GitHub Repository
        </a>

        {/* Documentation Preview */}
        <div className="mt-16 w-full">

          <h2 className="text-3xl font-bold mb-6">
            Project Documentation
          </h2>

          <div className="border border-white/10 rounded-3xl overflow-hidden">

            <iframe
              src="/CD Pipeline.pdf"
              width="100%"
              height="900px"
              className="rounded-3xl"
              title="CI CD Pipeline Documentation"
            ></iframe>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Project10