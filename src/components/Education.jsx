import React from "react";

const Education = () => {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-monoTech text-sm uppercase tracking-[0.3em] text-primaryTeal">
          Education
        </p>
        <h2 className="mt-4 font-serifDisplay text-5xl font-bold md:text-6xl">
          Academic Background
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/70 p-6 shadow-lg">
            <h3 className="font-serifDisplay text-2xl font-bold text-secondaryOrange">
              Birzeit University
            </h3>
            <p className="mt-2 font-monoTech text-darkGray">
              Bachelor’s in Computer Engineering — Expected 2025
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 p-6 shadow-lg">
            <h3 className="font-serifDisplay text-2xl font-bold text-secondaryOrange">
              General Secondary Education
            </h3>
            <p className="mt-2 font-monoTech text-darkGray">Scientific Stream — Avg 95.3</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-lightMint p-5 shadow-md">
            <h4 className="font-bold text-secondaryOrange">Physical Design Training</h4>
            <p className="mt-2 text-darkGray">
              Orion Company — Practical training in digital IC design flow, timing, constraints, and verification.
            </p>
          </div>

          <div className="rounded-2xl bg-lightMint p-5 shadow-md">
            <h4 className="font-bold text-secondaryOrange">Front-End Development</h4>
            <p className="mt-2 text-darkGray">
              Knowledge Academy — HTML, CSS, JavaScript, responsive design, React.js.
            </p>
          </div>

          <div className="rounded-2xl bg-lightMint p-5 shadow-md">
            <h4 className="font-bold text-secondaryOrange">Back-End Development</h4>
            <p className="mt-2 text-darkGray">
              Currently enrolled — REST APIs, databases, server-side programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;