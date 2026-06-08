import React from "react";

const experiences = [
  {
    role: "Technical Trainer — HTML & CSS",
    company: "Knowledge Academy",
    points: [
      "Trained students on web development fundamentals.",
      "Improved communication, mentoring, and leadership.",
    ],
  },
  {
    role: "Trainee — Physical Design",
    company: "Orion Company",
    points: [
      "Practical training in digital IC design flow.",
      "Learned timing concepts and design constraints.",
      "Improved analytical thinking and attention to detail.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-monoTech text-sm uppercase tracking-[0.3em] text-primaryTeal">
          Experience
        </p>
        <h2 className="mt-4 font-serifDisplay text-5xl font-bold md:text-6xl">
          Professional & Training Experience
        </h2>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="rounded-2xl bg-white/70 p-6 shadow-lg hover:shadow-xl transition">
              <h3 className="font-serifDisplay text-2xl font-bold text-secondaryOrange">{exp.role}</h3>
              <p className="mt-1 font-monoTech text-sm text-darkGray">{exp.company}</p>
              <ul className="mt-4 list-disc list-inside text-darkGray">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;