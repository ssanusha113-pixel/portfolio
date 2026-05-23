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
          Serverless Image-Video Processing

        </h1>

        <p className="text-gray-400 text-lg leading-8 mb-10">
          This project implements a fully automated serverless 
            image processing system that detects image labels and 
            sends notifications whenever a new image is uploaded.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 mb-12">

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            S3
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Lambda
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Step Functions
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Rekognition
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            SNS
          </span>

        </div>

        {/* Overview */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-gray-400 leading-8">
           This project automates image processing, 
           AI-based label detection, workflow orchestration, 
           and notifications with a scalable serverless architecture
            and future support for advanced integrations.


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
              src="/Serverless Image-Video Processing.pdf"
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