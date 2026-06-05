function Project8() {
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
          Serverless Web Application with AWS Lambda & API Gateway
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-8 mb-10">
          Designed and implemented a fully serverless file management
          application using AWS Lambda, API Gateway, S3, DynamoDB,
          and Cognito. Authenticated users can securely upload files,
          while metadata is stored and managed through DynamoDB.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 mb-12">

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            AWS
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Lambda
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            API Gateway
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            S3
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            DynamoDB
          </span>

          <span className="px-4 py-2 border border-cyan-400 rounded-xl">
            Cognito
          </span>

        </div>

        {/* Overview */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-gray-400 leading-8">
            This project demonstrates a modern cloud-native serverless
            architecture where users authenticate using Amazon Cognito,
            upload files through API Gateway, and trigger AWS Lambda
            functions that store files in S3 and metadata in DynamoDB.
            The solution offers scalability, security, high availability,
            and cost optimization without managing servers.
          </p>

        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com/ssanusha113-pixel"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition inline-block"
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
              src="/Serverless Web Application with AWS Lambda and API Gateway.pdf"
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

export default Project8