function Project5() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <a
          href="/"
          className="text-cyan-400 mb-10 inline-block"
        >
          ← Back to Portfolio
        </a>

        <h1 className="text-5xl font-bold mb-8">
          Scalable Microservices Architecture with ECS and Fargate
        </h1>

        <p className="text-gray-400 text-lg leading-8 mb-10">
          Built a scalable microservices architecture using Docker,
          ECS Fargate, ECR, ALB, and Amazon RDS.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 mb-12">

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            ECS
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Fargate
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Docker
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            RDS
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            ALB
          </span>

        </div>

        {/* Overview */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-gray-400 leading-8">
            This project demonstrates deployment of containerized
            microservices using Amazon ECS with Fargate,
            Application Load Balancer, and Amazon RDS backend.
          </p>

        </div>

        {/* GitHub */}
        <a
          href="https://github.com/ssanusha113-pixel"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition"
        >
          GitHub Repository
        </a>

        {/* PDF Preview */}
        <div className="mt-16 w-full">

          <h2 className="text-3xl font-bold mb-6">
            Project Documentation
          </h2>

          <div className="border border-white/10 rounded-3xl overflow-hidden">

            <iframe
              src="/Scalable Microservices Architecture with ECS and Fargate.pdf"
              width="100%"
              height="900px"
              className="rounded-3xl"
              title="Project Documentation"
            ></iframe>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Project5