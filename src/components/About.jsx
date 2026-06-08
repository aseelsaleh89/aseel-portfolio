import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-monoTech text-sm uppercase tracking-[0.3em] text-primaryTeal">
          About Me
        </p>
        <h2 className="mt-4 font-serifDisplay text-5xl font-bold md:text-6xl">
          Bridging Hardware & Software
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-primaryTeal/40 bg-white/60 p-8 shadow-lg">
            <p className="text-lg leading-8 text-darkGray">
              I am a motivated Computer Engineering student at Birzeit University,
              expected to graduate in 2025. I specialize in Hardware Design
              Verification, digital design, and physical design workflow.
            </p>

            <p className="mt-6 text-lg leading-8 text-darkGray">
              My technical foundation includes OOP, data structures, algorithms,
              Python scripting, web development, and databases. I enjoy
              problem-solving and working on projects combining logical thinking
              with practical implementation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-primaryTeal/40 bg-white/60 p-8 shadow-lg">
            <h3 className="font-serifDisplay text-3xl font-bold text-secondaryOrange">
              Quick Facts
            </h3>
            <ul className="mt-6 space-y-3 text-darkGray">
              <li>🎓 Expected Graduation: 2025</li>
              <li>💻 Technical Projects: 4+</li>
              <li>📚 Scientific Stream Avg: 95.3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;