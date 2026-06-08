import React from "react";
import aseelPic from "../assets/1fa9b6a4-92f5-4307-a0df-bc756dfab62b.png";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white text-center py-24">
      <img
        src={aseelPic}
        alt="Aseel Saleh"
        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
      />
      <h1 className="text-4xl font-bold">Aseel Saleh</h1>
      <p className="text-xl mt-2">Computer Engineering Student</p>
    </header>
  );
};

export default Header;