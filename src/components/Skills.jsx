import React from "react";

const skillGroups = [
  {
    title: "Hardware & Verification",
    skills: ["Digital Design", "RTL Concepts", "FSM Basics", "Physical Design Flow", "Timing Concepts"],
  },
  {
    title: "Programming",
    skills: ["C++", "C#", "Java", "JavaScript", "Python"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "Bootstrap", "React.js", "ASP.NET MVC", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases & Tools",
    skills: ["SQL Server", "MongoDB", "Git", "GitHub", "VS Code", "Visual Studio"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-softBlue px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-monoTech text-sm uppercase tracking-[0.3em] text-primaryTeal">
          Skills
        </p>
        <h2 className="mt-4 font-serifDisplay text-5xl font-bold md:text-6xl">
          Technical Stack
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/70 p-6 shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="font-serifDisplay text-2xl font-bold text-secondaryOrange">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-primaryTeal/10 px-3 py-1 text-sm text-darkGray"
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
};

export default Skills;