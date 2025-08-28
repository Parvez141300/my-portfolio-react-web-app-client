import React from "react";
import popupImage from "../../assets/popup-menu-image/popupimage.png";
import { FaHome } from "react-icons/fa";
import { RiContactsBook3Fill, RiContactsFill } from "react-icons/ri";
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { IoMdDownload } from "react-icons/io";

const MenuCard = ({ className, onLinkClick }) => {
  return (
    <div
      className={`backdrop-blur-2xl absolute z-20 max-w-xs mx-auto bg-base-100/90 shadow-xl rounded-xl overflow-hidden ${className}`}
    >
      {/* Image */}
      <div>
        <img
          src={popupImage}
          alt={popupImage}
          className="w-full h-24 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Heading */}
        {/* <h2 className="text-lg font-bold">
          What I do to design and develop a website?
        </h2> */}

        {/* Description */}
        {/* <p className="text-sm text-primary leading-relaxed">
          Passionate Frontend and Mern-stack developer creating innovative web
          solutions. Specialized in modern technologies and responsive design.
        </p> */}

        {/* Quick Links */}
        <div className="space-y-4">
          <p className="font-bold">Quick Links</p>
          <ul className="space-y-3">
            <li>
              <a
                className="cursor-pointer flex items-center gap-1 hover:underline"
                onClick={(e) => onLinkClick(e, "banner")}
              >
                <FaHome />
                Home
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer flex items-center gap-1 hover:underline"
                onClick={(e) => onLinkClick(e, "about")}
              >
                <RiContactsFill />
                About
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer flex items-center gap-1 hover:underline"
                onClick={(e) => onLinkClick(e, "skills")}
              >
                <FaUserGear />
                Skills
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1YVYxoqM-QVyon3WwKbDjougLbVNGMwqT/view?usp=sharing"
                target="_blank"
                className="flex gap-1 hover:underline items-center"
              >
                <IoMdDownload />
                Download CV
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer  flex items-center gap-1 hover:underline"
                onClick={(e) => onLinkClick(e, "educations")}
              >
                <MdOutlineMenuBook />
                Educations
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer flex items-center gap-1 hover:underline"
                onClick={(e) => onLinkClick(e, "projects")}
              >
                <GrProjects />
                Projects
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer  flex items-center gap-1 hover:underline"
                onClick={(e) => onLinkClick(e, "contact")}
              >
                <RiContactsBook3Fill />
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            📞 <a href="tel:+8801872243808">+880 1872243808</a>
            📞 <a href="tel:+8801743063201">+880 1743063201</a>
          </p>
          <p className="flex items-center gap-2">
            📧{" "}
            <a
              href="mailto:parvez.alif.dev@gmail.com"
              className="hover:underline"
            >
              parvez.alif.dev@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            📍 <span>Tongi, Gazipur, Dhaka</span>
          </p>
        </div>

        {/* social links */}
        <SocialMediaIcons></SocialMediaIcons>
      </div>
    </div>
  );
};

export default MenuCard;
