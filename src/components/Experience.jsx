import React from 'react'

const Experience = () => {
  return (
        <section id="experience" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Experience & Education
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My journey so far.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            My academic background and practical development
            experience in Java and full-stack technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Education */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">
              Education
            </h3>

            <div className="space-y-6">

              {/* BE */}
              <div className="rounded-2xl border border-white/10 bg-slate-950 p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-blue-500">
                      2022 – 2025
                    </p>

                    <h4 className="mt-2 text-xl font-bold">
                      Bachelor of Engineering
                    </h4>

                    <p className="mt-1 text-gray-400">
                      Computer Science & Engineering
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                    BE CSE
                  </span>
                </div>

                <p className="mt-5 leading-7 text-gray-400">
                  KLE's College of Engineering and Technology,
                  Chikodi — VTU Belagavi.
                </p>
              </div>

              {/* Diploma */}
              <div className="rounded-2xl border border-white/10 bg-slate-950 p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-blue-500">
                      2019 – 2022
                    </p>

                    <h4 className="mt-2 text-xl font-bold">
                      Diploma
                    </h4>

                    <p className="mt-1 text-gray-400">
                      Computer Science & Engineering
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                    Diploma CSE
                  </span>
                </div>

                <p className="mt-5 leading-7 text-gray-400">
                  KLE's C.B. Kore Polytechnic, Chikodi.
                </p>
              </div>

            </div>
          </div>

          {/* Internship */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">
              Internship
            </h3>

            <div className="rounded-2xl border border-blue-500/20 bg-slate-950 p-7">

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-blue-500">
                    Java Full-Stack Development
                  </p>

                  <h4 className="mt-2 text-xl font-bold">
                    QSpiders
                  </h4>

                  <p className="mt-1 text-gray-400">
                    Wakad, Pune
                  </p>
                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  Internship
                </span>
              </div>

              <p className="mt-6 leading-7 text-gray-400">
                Completed practical training focused on Java,
                object-oriented programming, SQL, Spring Boot and
                web development.
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400">
                  Java
                </span>

                <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400">
                  SQL
                </span>

                <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400">
                  Spring Boot
                </span>

                <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400">
                  OOP
                </span>

                <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400">
                  Web Development
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
   
  )
}

export default Experience
