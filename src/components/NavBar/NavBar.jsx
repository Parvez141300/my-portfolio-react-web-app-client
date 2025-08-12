import React, { useEffect } from "react";
import logo from "../../assets/logo/PHA Logo Design.png";
import { RiMenu2Line, RiMenu3Fill } from "react-icons/ri";
import DarkToggleButton from "./shared/DarkToggleButton";

const NavBar = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-between items-center">
      {/* menu icon & logo */}
      <div className="flex gap-2 items-center">
        <div className="md:hidden">
          <RiMenu2Line size={25} />
        </div>
        <img src={logo} alt={logo} className="w-12" />
      </div>
      {/* navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#header">About</a>
          </li>
          <li>
            <a href="#features-block">Skills</a>
          </li>
          <li>
            <details>
              <summary>More</summary>
              <ul className="text-black">
                <li>
                  <a href="assets/cv/parvez cv.pdf">Download CV</a>
                </li>
                <li>
                  <a href="#education-block">Education</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* dark mode button and menu icon */}
      <div className="flex gap-5 items-center">
        <DarkToggleButton></DarkToggleButton>
        <div className="hidden md:block">
          <RiMenu3Fill size={25} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
