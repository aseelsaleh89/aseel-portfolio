import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-primaryTeal/10 bg-white/80 text-darkGray shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-serifDisplay text-2xl font-bold tracking-tight"
        >
          Aseel<span className="text-secondaryOrange">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#about" className="transition hover:text-primaryTeal">
            About
          </a>

          <a href="#skills" className="transition hover:text-primaryTeal">
            Skills
          </a>

          <a href="#experience" className="transition hover:text-primaryTeal">
            Experience
          </a>

          <a href="#projects" className="transition hover:text-primaryTeal">
            Projects
          </a>

          <a href="#education" className="transition hover:text-primaryTeal">
            Education
          </a>

          <a
            href="#contact"
            className="rounded-full bg-secondaryOrange px-6 py-2 text-white shadow-md transition hover:bg-primaryTeal"
          >
            Contact
          </a>
        </div>

        <a
          href="/aseel_saleh_CV_.pdf"
          download
          className="rounded-full bg-primaryTeal px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-secondaryOrange md:hidden"
        >
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;