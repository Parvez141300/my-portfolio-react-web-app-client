import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/PHA Logo Design.png";
import { RiMenu2Line, RiMenu3Fill } from "react-icons/ri";
import DarkToggleButton from "./shared/DarkToggleButton";
import MenuCard from "../MenuCard/MenuCard";

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

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
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
        <button className="md:hidden btn btn-ghost px-0">
          <RiMenu2Line size={25} />
        </button>
        <a onClick={(e) => handleSmoothScroll(e, 'banner')} className="cursor-pointer">
          <img src={logo} alt={logo} className="w-12" />
        </a>
      </div>
      {/* navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={(e) => handleSmoothScroll(e, "banner")}>Home</a>
          </li>
          <li>
            <a onClick={(e) => handleSmoothScroll(e, "about")}>About</a>
          </li>
          <li>
            <a onClick={(e) => handleSmoothScroll(e, "skills")}>Skills</a>
          </li>
          <li>
            <details>
              <summary>More</summary>
              <ul className="text-black">
                <li>
                  <a
                    href="https://parvez-hossain-alif.netlify.app/assets/cv/parvez%20cv.pdf"
                    target="_blank"
                  >
                    Download CV
                  </a>
                </li>
                <li>
                  <a onClick={(e) => handleSmoothScroll(e, "educations")}>
                    Educations
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a onClick={(e) => handleSmoothScroll(e, "projects")}>Projects</a>
          </li>
          <li>
            <a onClick={(e) => handleSmoothScroll(e, "contact")}>Contact</a>
          </li>
        </ul>
      </div>
      {/* dark mode button and menu icon */}
      <div className="flex gap-5 items-center" ref={menuRef}>
        {/* <DarkToggleButton></DarkToggleButton> */}
        <button
          onClick={() => setShow(!show)}
          className="hidden md:block btn btn-ghost px-0"
        >
          <RiMenu3Fill size={25} />
        </button>
        {show && (
          <MenuCard
            className="mt-[440px] right-0"
            onLinkClick={handleSmoothScroll}
          ></MenuCard>
        )}
      </div>
    </div>
  );
};

export default NavBar;
