import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/PHA Logo Design.png";
import {
  RiContactsBook3Fill,
  RiContactsFill,
  RiMenu2Line,
  RiMenu3Fill,
} from "react-icons/ri";
import DarkToggleButton from "./shared/DarkToggleButton";
import MenuCard from "../MenuCard/MenuCard";
import { FaHome } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";
import { CgMoreVerticalO } from "react-icons/cg";

const NavBar = () => {
  const menuRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const toggleShow = () => {
    setShow(!show)
  }

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    setShow(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  return (
    <div className="w-10/12 mx-auto flex justify-between items-center relative">
      {/* menu icon & logo */}
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setShow(!show)}
          className="md:hidden btn btn-ghost px-0"
        >
          <RiMenu2Line size={25} />
        </button>
        <a
          onClick={(e) => handleSmoothScroll(e, "banner")}
          className="cursor-pointer"
        >
          <img src={logo} alt={logo} className="w-12" />
        </a>
      </div>
      {/* navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={(e) => handleSmoothScroll(e, "banner")}>
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a onClick={(e) => handleSmoothScroll(e, "about")}>
              <RiContactsFill />
              About
            </a>
          </li>
          <li>
            <a onClick={(e) => handleSmoothScroll(e, "skills")}>
              <FaUserGear />
              Skills
            </a>
          </li>
          <li>
            <details>
              <summary> <CgMoreVerticalO /> More</summary>
              <ul className="text-accent">
                <li>
                  <a
                    href="https://drive.google.com/file/d/1YVYxoqM-QVyon3WwKbDjougLbVNGMwqT/view?usp=sharing"
                    target="_blank"
                  >
                    <IoMdDownload />
                    Download CV
                  </a>
                </li>
                <li>
                  <a onClick={(e) => handleSmoothScroll(e, "educations")}>
                    <MdOutlineMenuBook />
                    Educations
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a onClick={(e) => handleSmoothScroll(e, "projects")}>
              <GrProjects />
              Projects
            </a>
          </li>
          <li>
            <a onClick={(e) => handleSmoothScroll(e, "contact")}>
              <RiContactsBook3Fill />
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* dark mode button and menu icon */}
      <div className="flex gap-5 items-center" ref={menuRef}>
        <DarkToggleButton></DarkToggleButton>
        <button
          onClick={toggleShow}
          className="hidden md:block btn btn-ghost px-0"
        >
          <RiMenu3Fill size={25} />
        </button>
        {show && (
          <MenuCard
            className="mt-[450px] h-[400px] overflow-y-auto -left-7 md:h-[400px] md:mt-[460px] md:left-auto md:right-0"
            onLinkClick={handleSmoothScroll}
          ></MenuCard>
        )}
      </div>
    </div>
  );
};

export default NavBar;
