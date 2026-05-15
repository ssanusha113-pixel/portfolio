function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Anusha S
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-cyan-400 cursor-pointer transition">
            <a href="#home">Home</a>
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            <a href="#skills">Skills</a>
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            <a href="#projects">Projects</a>
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar