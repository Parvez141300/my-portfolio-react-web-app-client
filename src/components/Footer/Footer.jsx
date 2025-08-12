import React from "react";
import { FaArrowCircleUp, FaBusinessTime } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import logo from "../../assets/logo/PHA Logo Design.png";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

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
      <section className="relative z-20 max-w-10/12 mx-auto bg-primary rounded-3xl p-8 space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* logo, description and social media icons */}
        <div className="space-y-4">
          <img className="w-12" src={logo} alt={logo} />
          <p>
            Passionate full-stack developer creating innovative web solutions.
            Specialized in modern technologies and responsive design.
          </p>
          <SocialMediaIcons></SocialMediaIcons>
        </div>
        {/* Quick Links */}
        <div className="space-y-4">
          <p className="font-bold">Quick Links</p>
          <ul>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#resume-block">About</a>
            </li>
            <li>
              <a href="#education-block">Skills</a>
            </li>
            <li>
              <a href="#features-block">Education</a>
            </li>
            <li>
              <a href="#experience-block">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="space-y-4">
          <p className="font-bold">Location</p>
          <div className="">
            <iframe
              className="w-1/2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7294.337413850228!2d90.4003733!3d23.91907935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4efb52c6e19%3A0x62c5fd45a44c2f6!2sErshadnagar%2C%20Tongi!5e0!3m2!1sen!2sbd!4v1741415259946!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
          <div className="space-y-2">
            <p className="font-bold">Address</p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Ershad Nagar, Tongi,
              Gazipur
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <p className="font-bold">Contact Info</p>
          <div className="space-y-4">
            <p className="flex items-center gap-1">
              <HiOutlineDevicePhoneMobile size={20} />
              +880 1743063201
            </p>
            <p className="flex items-center gap-1">
              <HiOutlineDevicePhoneMobile size={20} />
              +880 1872243808
            </p>
            <p className="flex items-center gap-1">
              <FaBusinessTime size={20} />
              Available for work
            </p>
          </div>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <section className="bg-secondary z-10 -mt-64 pt-72 pb-7 mx-auto">
        <div className="z-20 w-11/12 md:w-10/12 mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-center text-white">
              © 2025 Developed by Parvez Hossain Alif
            </p>
            <a
              onClick={(e) => handleSmoothScroll(e, "banner")}
              className="btn btn-primary rounded-lg"
            >
              <FaArrowCircleUp size={20} />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
