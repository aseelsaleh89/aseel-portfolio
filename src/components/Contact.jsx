import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-primaryTeal px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-monoTech text-sm uppercase tracking-[0.3em] text-lightGray">
          Contact
        </p>
        <h2 className="mt-4 font-serifDisplay text-5xl font-bold md:text-6xl">
          Let's Connect
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:aseelsaleh140@gmail.com"
            className="rounded-full bg-secondaryOrange px-7 py-3 font-semibold hover:bg-white hover:text-primaryTeal transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/aseelsaleh89"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white px-7 py-3 font-semibold hover:bg-white hover:text-primaryTeal transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aseel-saleh-2aa966330"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white px-7 py-3 font-semibold hover:bg-white hover:text-primaryTeal transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;