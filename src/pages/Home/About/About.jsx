import React from "react";
import { RiContactsFill } from "react-icons/ri";
import formalPhoto from "../../../assets/formal-photo/coat formal passport size photo.png";
import { IoBookSharp, IoGameController } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";

const About = () => {
  return (
    <div id="about" className="max-w-10/12 mx-auto space-y-12 min-h-[100vh-73px]">
      <div className="flex justify-center items-center gap-2">
        <span className="text-secondary">
          <RiContactsFill size={30} />
        </span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center gap-2">
          About <span className="underline text-secondary">Me</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full bg-gradient-to-t from-primary to-secondary rounded-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-r-12 border-b-12 hover:border-0 border-primary">
          <img
            className="w-full rounded-b-2xl"
            src={formalPhoto}
            alt={formalPhoto}
          />
        </div>
        <div className="space-y-5">
          <p>
            Hello! I'm Parvez Hossain Alif a passionate{" "}
            <strong>Frontend Developer</strong> from{" "}
            <strong>Gazipur, Dhaka.</strong> I have strong foundation in HTML,
            CSS, JavaScript, React.js, MongoDB, Express.js, Node.js. I love
            transforming creative ideas into responsive, user-friendly web
            application and constantly learning new technologies.
          </p>
          <div>
            <p>When I'm not coding, you'll find me:</p>
            <ul>
              <li>
                <strong className="flex items-center gap-2">
                  <IoBookSharp /> Reading
                </strong>{" "}
                – Reading anime manga
              </li>
              <li>
                <strong className="flex items-center gap-2">
                  <IoGameController /> Gaming
                </strong>{" "}
                – Playing Cricket, Free Fire, GTA-5, Racing, etc.
              </li>
              <li>
                <strong className="flex items-center gap-2">
                  <FaMusic /> Music
                </strong>{" "}
                – Listening to bangla, english songs.
              </li>
              <li>
                <strong className="flex items-center gap-2">
                  <FaEarthAmericas /> Travel
                </strong>{" "}
                – Love to travel to my village, Cox's bazar, Rangamati, Sylhet
                etc.
              </li>
              <li>
                <strong className="flex items-center gap-2">
                <BiSolidCameraMovie /> Movie
                </strong>{" "}
                – Watching Movies like Bangla, English, Anime, Cartoon, English Series etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
