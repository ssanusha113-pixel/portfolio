function Project9() {
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
          Cloud Infrastructure Automation using Terraform & AWS
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-8 mb-10">
          Automated AWS infrastructure provisioning using Terraform,
          including VPC, EC2, Application Load Balancer, Security Groups,
          and RDS for scalable cloud deployments.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 mb-12">

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Terraform
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            AWS
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            VPC
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            EC2
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            ALB
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            RDS
          </span>

        </div>

        {/* Overview */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-gray-400 leading-8">
            This project demonstrates Infrastructure as Code (IaC)
            using Terraform to automate AWS resource creation.
            The architecture includes a VPC, public subnets,
            Application Load Balancer, EC2 web server, and RDS database,
            providing a scalable and highly available cloud environment.
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
              src="/public/Cloud Infrastructure Automation using Terraform and AWS (1).pdf"
              width="100%"
              height="900px"
              className="rounded-3xl"
              title="Terraform AWS Documentation"
            ></iframe>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Project9