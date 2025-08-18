import React from "react";
import { FaArrowCircleUp, FaBusinessTime, FaHome } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import logo from "../../assets/logo/PHA Logo Design.png";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { TbAddressBook } from "react-icons/tb";
import { RiContactsBook3Fill, RiContactsFill } from "react-icons/ri";
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";
import { Fade, Slide } from "react-awesome-reveal";

const Footer = () => {
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
    <footer>
      {/* Main Footer Section */}
      <Slide direction="up" duration={1000} triggerOnce>
        <section className="relative z-20 max-w-10/12 mx-auto bg-primary rounded-xl p-8 space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-accent">
          {/* logo, description and social media icons */}
          <div className="space-y-4">
            <img className="w-12" src={logo} alt={logo} />
            <p>
              Passionate Frontend and Mern-stack developer creating innovative
              web solutions. Specialized in modern technologies and responsive
              design.
            </p>
            <SocialMediaIcons></SocialMediaIcons>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <p className="font-bold">Quick Links</p>
            <ul className="space-y-1">
              <li>
                <a
                  className="cursor-pointer flex items-center gap-1"
                  onClick={(e) => handleSmoothScroll(e, "banner")}
                >
                  <FaHome />
                  Home
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer flex items-center gap-1"
                  onClick={(e) => handleSmoothScroll(e, "about")}
                >
                  <RiContactsFill />
                  About
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer flex items-center gap-1"
                  onClick={(e) => handleSmoothScroll(e, "skills")}
                >
                  <FaUserGear />
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer  flex items-center gap-1"
                  onClick={(e) => handleSmoothScroll(e, "educations")}
                >
                  <MdOutlineMenuBook />
                  Educations
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer flex items-center gap-1"
                  onClick={(e) => handleSmoothScroll(e, "projects")}
                >
                  <GrProjects />
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer  flex items-center gap-1"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                >
                  <RiContactsBook3Fill />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & other link */}
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="font-bold">Other Links</p>
              <ul>
                <li>
                  <a
                    className="cursor-pointer flex items-center gap-1"
                    href="https://parvez-hossain-alif.netlify.app/assets/cv/parvez%20cv.pdf"
                    target="_blank"
                  >
                    <IoMdDownload />
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Address</p>
              <p className="flex items-center gap-1">
                <TbAddressBook size={20} />
                Tongi, Gazipur, Dhaka
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-bold">Contact Info</p>
            <div className="space-y-4">
              <p className="flex items-center gap-1">
                <HiOutlineDevicePhoneMobile size={20} />
                <a href="tel:+8801743063201">+880 1743063201</a>
              </p>
              <p className="flex items-center gap-1">
                <HiOutlineDevicePhoneMobile size={20} />
                <a href="tel:+8801872243808">+880 1872243808</a>
              </p>
              <p className="flex items-center gap-1">
                <FaBusinessTime size={20} />
                Available for work
              </p>
            </div>
          </div>
        </section>
      </Slide>

      {/* Footer Bottom Section */}
      <section className="bg-secondary z-10 -mt-64 pt-72 pb-7 mx-auto text-accent">
        <div className="z-20 w-11/12 md:w-10/12 mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-center">
              © 2025 Developed by Parvez Hossain Alif
            </p>
            <Fade>
              <a
                onClick={(e) => handleSmoothScroll(e, "banner")}
                className="btn btn-primary rounded-lg"
              >
                <FaArrowCircleUp size={20} />
              </a>
            </Fade>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
