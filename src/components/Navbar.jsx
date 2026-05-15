function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Anusha S
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          <li className="hover:text-cyan-400 transition">
            <a href="#home">Home</a>
          </li>

          <li className="hover:text-cyan-400 transition">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-cyan-400 transition">
            <a href="#skills">Skills</a>
          </li>

          <li className="hover:text-cyan-400 transition">
            <a href="#projects">Projects</a>
          </li>

          <li className="hover:text-cyan-400 transition">
            <a href="#contact">Contact</a>
          </li>

        </ul>

        {/* Social Buttons */}
        <div className="hidden md:flex items-center gap-4">

          {/* Resume */}
          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition"
>
  Resume
</a>

          {/* GitHub */}
          <a
            href="https://github.com/ssanusha113-pixel"
            target="_blank"
            className="border border-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-400/10 transition"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/anusha-s-4350b340b"
            target="_blank"
            className="border border-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-400/10 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar