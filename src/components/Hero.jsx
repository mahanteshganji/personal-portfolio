import React from 'react'

const Hero = () => {
  return (
    
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-lg font-medium text-blue-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Mahantesh
            <span className="text-blue-500"> Ganjagol</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 md:text-3xl">
            Java Backend & React Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Computer Science graduate passionate about building
            secure REST APIs and modern web applications using
            Java, Spring Boot, React.js and PostgreSQL.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-700"
            >
              View Projects
            </a>

            <a
              href="/Mahantesh_Ganjagol_Java_Backend_Developer_Resume.pdf"
              download=""
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          {/* Technologies */}
          <div className="mt-10">
            <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
              Technologies I work with
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                Java
              </span>

              <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
                Spring Boot
              </span>

              <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                React.js
              </span>

              <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>

        {/* Right Developer Card */}
        <div className="hidden justify-center md:flex">
          <div className="relative">

            {/* Main Card */}
            <div className="flex h-80 w-80 items-center justify-center rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
              <div className="text-center">

                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-600/20 text-6xl">
                  👨‍💻
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Java Developer
                </h3>

                <p className="mt-2 text-gray-400">
                  Building Backend & Web Applications
                </p>

              </div>
            </div>

            {/* Backend Card */}
            <div className="absolute -bottom-6 -left-10 rounded-xl border border-white/10 bg-slate-900 px-5 py-4 shadow-xl">
              <p className="text-sm text-gray-400">
                Backend
              </p>

              <p className="font-semibold text-blue-400">
                Spring Boot + REST API
              </p>
            </div>

            {/* Frontend Card */}
            <div className="absolute -right-10 -top-6 rounded-xl border border-white/10 bg-slate-900 px-5 py-4 shadow-xl">
              <p className="text-sm text-gray-400">
                Frontend
              </p>

              <p className="font-semibold text-cyan-400">
                React.js
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
    
  


