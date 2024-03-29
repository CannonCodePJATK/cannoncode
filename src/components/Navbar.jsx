import React from "react";
import CannonIcon from "../assets/images/cannon.svg";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="flex flex-col border-b-1 border-white fixed w-[100vw] z-50">
      {/* CANNON ICON */}
      <div className="bg-black">
        <img src={CannonIcon} className="w-[50px] mx-auto py-2" />
      </div>

      <div className="flex bg-black p-3 text-lg w-full">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
