import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-6"
      >

        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Anusha S
        </h1>

        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
          Cloud & DevOps Enthusiast
        </p>

        <div className="mt-10 flex gap-4 justify-center">

          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition">
            View Projects
          </button>

          <button className="px-8 py-3 border border-cyan-400 hover:bg-cyan-400/10 rounded-xl font-semibold transition">
            Contact Me
          </button>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero