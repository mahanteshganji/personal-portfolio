import React from 'react'

const About = () => {

  return (
   
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Building practical solutions with code.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          {/* About Content */}
          <div>
            <p className="text-lg leading-8 text-gray-300">
              I'm a Computer Science graduate with a strong interest in
              Java backend development and modern web technologies.
              I enjoy designing REST APIs, working with databases and
              building applications that solve real-world problems.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              My primary backend stack includes Java, Spring Boot,
              Spring Security, Hibernate, JPA and PostgreSQL. I also
              use React.js to build responsive and interactive user
              interfaces.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I'm currently looking for an opportunity where I can
              contribute to a development team, strengthen my
              engineering skills and grow as a software developer.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">

            {/* Stat 1 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-4xl font-bold text-blue-500">
                2+
              </p>

              <p className="mt-2 text-gray-400">
                Projects Built
              </p>
            </div>

            {/* Stat 2 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-4xl font-bold text-blue-500">
                20+
              </p>

              <p className="mt-2 text-gray-400">
                REST API Endpoints
              </p>
            </div>

            {/* Stat 3 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-4xl font-bold text-blue-500">
                5+
              </p>

              <p className="mt-2 text-gray-400">
                Core Technologies
              </p>
            </div>

            {/* Stat 4 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-4xl font-bold text-blue-500">
                2025
              </p>

              <p className="mt-2 text-gray-400">
                Engineering Graduate
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}



export default About;