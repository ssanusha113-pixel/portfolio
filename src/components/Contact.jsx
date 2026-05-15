function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-cyan-400 text-lg mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Let's Work Together
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-12">
          I'm available for freelance projects,
          DevOps engineering, cloud projects,
          and full stack development work.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">

          <a
            href="mailto:yourmail@gmail.com"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-2xl font-semibold transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/ssanusha113-pixel"
            target="_blank"
            className="px-8 py-4 border border-cyan-400 hover:bg-cyan-400/10 rounded-2xl font-semibold transition"
          >
            GitHub
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact