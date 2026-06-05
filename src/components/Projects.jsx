import { Link } from "react-router-dom";

const projects = [
  {
    title: "Automated Backup & Recovery System",
    description:
      "Built an AWS serverless backup automation system using Lambda, EventBridge, EC2, and EBS snapshots with automated retention policy management.",
    tech: ["AWS", "Lambda", "EventBridge", "EC2", "EBS"],
    link: "/project1",
  },

  {
    title: "Secure File Sharing With S3 And CloudFront",
    description:
      "Implemented a secure file-sharing service using AWS S3, CloudFront, IAM, and Lambda for protected file access.",
    tech: ["S3", "CloudFront", "IAM", "Lambda"],
    link: "/project2",
  },

  {
    title: "Custom VPC Setup with Bastion Host & NAT Gateway",
    description:
      "Built a secure AWS network architecture using custom VPC, public/private subnets, Bastion Host, and NAT Gateway.",
    tech: ["AWS", "VPC", "EC2", "NAT Gateway", "Security Groups"],
    link: "/project3",
  },

  {
    title: "Multi-Region Disaster Recovery Architecture",
    description:
      "Designed a disaster recovery architecture using CloudFormation and Route 53 for automated failover and business continuity.",
    tech: ["AWS", "CloudFormation", "Route53", "EC2"],
    link: "/project4",
  },

  {
    title: "Scalable Microservices Architecture with ECS and Fargate",
    description:
      "Containerized microservices deployed using ECS Fargate, Docker, ALB, ECR, and Amazon RDS.",
    tech: ["ECS", "Fargate", "Docker", "RDS", "ALB"],
    link: "/project5",
  },

  {
    title: "AWS Cost Monitoring & Budget Alerts",
    description:
      "Implemented an AWS-based cost monitoring system that tracks cloud spending and sends automated budget alert notifications.",
    tech: ["AWS Budgets", "Cost Explorer", "Lambda", "SES"],
    link: "/project6",
  },

  {
    title: "Serverless Image-Video Processing",
    description:
      "Implemented a serverless AWS-based image processing system for automated image analysis and notifications.",
    tech: ["S3", "Lambda", "Step Functions", "Rekognition", "SNS"],
    link: "/project7",
  },

  {
    title: "Serverless Web Application",
    description:
      "Built a fully serverless file management application using AWS Lambda, API Gateway, S3, DynamoDB and Cognito.",
    tech: ["Lambda", "API Gateway", "S3", "DynamoDB", "Cognito"],
    link: "/project8",
  },

  {
    title: "Cloud Infrastructure Automation using Terraform & AWS",
    description:
      "Automated AWS infrastructure provisioning using Terraform, VPC, ALB, EC2 and RDS.",
    tech: ["Terraform", "VPC", "EC2", "ALB", "RDS"],
    link: "/project9",
  },

  {
    title: "CI/CD Pipeline",
    description:
      "Automated application build and deployment using GitHub, Jenkins, Docker, DockerHub and AWS EC2.",
    tech: ["GitHub", "Jenkins", "Docker", "DockerHub", "EC2"],
    link: "/project10",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-4xl font-bold mb-4">
            Projects
          </p>

          <h2 className="text-xl font-bold text-white">
            Hands-on cloud, networking, and security projects demonstrating real-world skills.
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-sm text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                to={project.link}
                className="inline-block px-5 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition"
              >
                View Details
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;