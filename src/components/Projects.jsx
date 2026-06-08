import React from "react";

const projects = [
  {
    title: "Physical Design Project",
    description: "RTL-to-layout, timing constraints, digital hardware concepts.",
    link: "https://github.com/aseelsaleh89/project_physical_design",
  },
  {
    title: "MVC Project",
    description: "ASP.NET MVC application with C# and SQL Server.",
    link: "https://github.com/aseelsaleh89/projectdata",
  },
  {
    title: "React Front-End Project",
    description: "React.js front-end using reusable components.",
    link: "https://github.com/aseelsaleh89/react",
  },
  {
    title: "Bootstrap Project",
    description: "Responsive interface with HTML, CSS, Bootstrap.",
    link: "https://github.com/aseelsaleh89/project_bootstrap",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-lightMint px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-monoTech text-sm uppercase tracking-[0.3em] text-primaryTeal">
          Projects
        </p>
        <h2 className="mt-4 font-serifDisplay text-5xl font-bold md:text-6xl">
          Selected Work
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((proj, idx) => (
            <div key={idx} className="rounded-2xl bg-white/70 p-6 shadow-lg hover:shadow-xl transition">
              <h3 className="font-serifDisplay text-2xl font-bold text-secondaryOrange">{proj.title}</h3>
              <p className="mt-2 text-darkGray">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block bg-primaryTeal px-5 py-2 text-white rounded hover:bg-secondaryOrange transition"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;