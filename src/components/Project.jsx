import { projects } from "../data/projects.js";

const Project = () => {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Projects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Projects I've built.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A selection of backend and full-stack projects that
            demonstrate my experience with Java, Spring Boot,
            databases and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-white/10 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl"
            >

              {/* Project Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-500">
                  PROJECT {String(project.id).padStart(2, "0")}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-400 transition hover:text-blue-400"
                >
                  GitHub ↗
                </a>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Features */}
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Key Features
                </p>

                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-gray-300"
                    >
                      <span className="mr-2 text-blue-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <div className="mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  View on GitHub →
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Project;