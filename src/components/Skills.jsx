import React from 'react'

const Skills = () => {

    const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "REST API",
    ],
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "SQL",
      "Database Design",
      "JPA",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Swagger",
      "Postman",
      "IntelliJ IDEA",
    ],
  },
];
  return (
    <section id="skills" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Skills
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            My technical skills focus on Java backend development,
            REST APIs, databases and modern frontend development.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-slate-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
            >
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-blue-500/40 hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
   
  );
}

export default Skills