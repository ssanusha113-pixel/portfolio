function Project1() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <a
          href="/"
          className="text-cyan-400 mb-10 inline-block"
        >
          ← Back to Portfolio
        </a>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-8">
          Automated Backup and Recovery System
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-8 mb-10">
          Automate EBS snapshot creation and deletion using Lambda triggered
by CloudWatch Events. Implement snapshot retention policies

        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 mb-12">

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            EC2
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            AWS Lambda
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            CloudWatch Events
          </span>

          
          

        </div>

        {/* Buttons */}
        <div className="flex gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/ssanusha113-pixel"
            target="_blank"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition"
          >
            GitHub Repository
          </a>

          {/* Documentation */}
          <a
            href="YOUR_DOCUMENT_LINK"
            target="_blank"
            className="px-6 py-3 border border-cyan-400 rounded-xl hover:bg-cyan-400/10 transition"
          >
            View Documentation
          </a>

        </div>

      </div>

    </div>
  )
}

export default Project1