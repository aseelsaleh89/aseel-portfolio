import React from "react";
import aseelImage from "../assets/aseel.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-softBlue to-lightMint px-6 pb-20 pt-32 md:pt-40"
    >
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-primaryTeal/20 blur-2xl"></div>
      <div className="absolute bottom-0 right-[-100px] h-80 w-80 rounded-full bg-secondaryOrange/20 blur-2xl"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <div className="mb-8 inline-flex rounded-full border border-primaryTeal/40 bg-white/50 px-5 py-2 font-monoTech text-xs font-bold uppercase tracking-[0.25em] text-primaryTeal shadow-sm">
            Open to junior & training opportunities
          </div>

          <h1 className="font-serifDisplay text-6xl font-bold leading-[0.95] md:text-8xl">
            Hi, I'm <br />
            <span className="italic text-secondaryOrange">Aseel Saleh</span>
          </h1>

          <div className="mt-8 flex items-center gap-5">
            <div className="h-[1px] w-16 bg-primaryTeal"></div>
            <p className="font-monoTech text-sm uppercase tracking-[0.25em] text-darkGray">
              Computer Engineering
            </p>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-darkGray">
            Computer Engineering student interested in{" "}
            <span className="font-semibold text-primaryTeal">
              Hardware Design Verification
            </span>
            , digital design, physical design flow, and building clean software
            solutions with strong problem-solving skills.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:aseelsaleh140@gmail.com"
              className="rounded-full bg-primaryTeal px-7 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-secondaryOrange"
            >
              Contact Me
            </a>

            <a
              href="/aseel_saleh_CV_.pdf"
              download
              className="rounded-full bg-secondaryOrange px-7 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-primaryTeal"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/aseel-saleh-2aa966330"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#0A66C2] px-7 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/aseelsaleh89"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primaryTeal/40 bg-white/60 px-7 py-3 font-semibold text-primaryTeal shadow-sm transition hover:-translate-y-1 hover:border-secondaryOrange hover:text-secondaryOrange"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-md rounded-[2rem] border border-white/50 bg-white/60 p-4 shadow-2xl backdrop-blur">
            <img
              src={aseelImage}
              alt="Aseel Saleh"
              className="h-[500px] w-full rounded-[1.5rem] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;