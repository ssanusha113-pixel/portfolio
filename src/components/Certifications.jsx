function Certifications() {

  const certifications = [

     {
      icon: "🐧",
      title: "Linux Administration",
      org: "Besant Technologies, Jayanagar",
    },


    {
      icon: "☁️",
      title: "AWS Cloud Computing",
      org: "Besant Technologies, Jayanagar",
    },

{
      icon: "🌐",
      title: "CCNA – Cisco Certified Network Associate",
      org: "Besant Technologies, Jayanagar",
    },


   {
      icon: "⚙️",
      title: "DevOps",
      org: "Besant Technologies, Jayanagar",
    },

    {
      icon: "🐍",
      title: "Python Programming",
      org: "Besant Technologies, Jayanagar",
    },

  ]

  return (
    <section
      id="certifications"
      className="py-32 px-6"
    >

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 text-3xl font-bold mb-4">
            Credentials
          </p>

          <h2 className="text-4xl font-bold">
            Certifications
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {certifications.map((cert) => (

            <div
              key={cert.title}
              className="bg-slate-900 border border-white/10 rounded-5xl p-8 hover:border-cyan-300 transition duration-400"
            >

              <div className="text-2xl mb-6">
                {cert.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {cert.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {cert.org}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Certifications