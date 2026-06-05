import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full z-10">

       <div className="flex flex-col items-center justify-center text-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="text-cyan-400 text-lg mb-4">
              Hello, I'm
            </p>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Anusha S
            </h1>

            <p className="text-gray-400 text-xl md:text-2xl max-w-2xl">
              Cloud & DevOps Engineer
            </p>

            {/* Buttons */}
            <div className="mt-10 flex gap-9">

              <a
                href="#projects"
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-3 border border-cyan-400 hover:bg-cyan-400/10 rounded-xl font-semibold transition"
              >
                Contact Me
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE IMAGE */}
         <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex flex-col items-center"
>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Hero