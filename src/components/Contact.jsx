
function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's build something together.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            I'm currently looking for opportunities as a Java Backend,
            Java Full-Stack or React Developer. Feel free to reach out
            if you have an opportunity or would like to connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">

            <h3 className="text-2xl font-bold">
              Get in touch
            </h3>

            <div className="mt-8 space-y-6">

              {/* Email */}
              <a
                href="mailto:mahanteshg510@gmail.com"
                className="flex items-center gap-4 transition hover:text-blue-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="font-medium text-gray-200">
                    mahanteshg510@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+916364061693"
                className="flex items-center gap-4 transition hover:text-blue-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                  ☎
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>

                  <p className="font-medium text-gray-200">
                    +91 63640 61693
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/mahanteshganji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 transition hover:text-blue-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                  ◉
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    GitHub
                  </p>

                  <p className="font-medium text-gray-200">
                    github.com/mahanteshganji
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 transition hover:text-blue-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                  in
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    LinkedIn
                  </p>

                  <p className="font-medium text-gray-200">
                    LinkedIn Profile
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-slate-900 p-8">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                Available for opportunities
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Have a role that matches my skills?
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                I'm interested in Java backend, Spring Boot,
                full-stack and React development opportunities.
                Let's connect and discuss how I can contribute.
              </p>
            </div>

            {/* Contact Button */}
            <div className="mt-8">
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mahanteshg510@gmail.com&su=Job%20Opportunity%20for%20Mahantesh%20Ganjagol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Contact Me →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
