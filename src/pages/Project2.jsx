function Project2() {
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
          Secure File Sharing with S3 and CloudFront
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-8 mb-10">
          Implemented a secure file-sharing service using AWS S3,
          CloudFront, IAM, and Lambda for protected file access.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 mb-12">

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            S3
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            CloudFront
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            IAM
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Lambda
          </span>

        </div>

        {/* Overview */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-gray-400 leading-8">
            This project provides secure file uploads and downloads
            using Amazon S3 and CloudFront signed URLs.
          </p>

        </div>

        {/* GitHub */}
        <a
          href="https://github.com/ssanusha113-pixel"
          
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
              src="/Secure File Sharing with S3 and CloudFront.pdf"
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

export default Project2