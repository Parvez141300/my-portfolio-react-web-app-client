import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import bannerRingImage from "../../../assets/banner-images/banner html, css, js, mongodb, express, react, node logo design.png";
import bannerFormalImage from "../../../assets/banner-images/banner coat formal dress.png";
import { motion, scale } from "motion/react";
import { IoMdDownload } from "react-icons/io";

const Banner = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col gap-10 md:gap-0 lg:flex-row lg:justify-center lg:items-center">
      {/* banner text content */}
      <div className="space-y-3 md:space-y-5 flex-1">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Hi, I’m
          <br />
          <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
            Parvez Hossain Alif
          </span>
          <br />
          <Typewriter
            words={[
              "a Professional Developer",
              "a Frontend Developer",
              "a Web App Builder",
              "a React Developer",
            ]}
            cursor={true}
            loop={true}
          ></Typewriter>
        </h1>
        <p>
          I am a Frontend Developer with the expertise of MERN Stack technology.{" "}
          <br />
          Passionate about creating responsive and user friendly web application
          <br />I also make the code clean and easy to understand
        </p>
        <motion.button
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="btn btn-outline btn-secondary rounded-lg"
        >
          <IoMdDownload size={25} />
          Download CV
        </motion.button>

        <div className="space-y-3">
          <h3 className="text-xl font-bold">Follow Me</h3>
          <div className="flex gap-2 items-center">
            <SecondaryButton className="rounded-full py-7">
              <FaLinkedin size={25} color="white" />
            </SecondaryButton>
            <SecondaryButton className="rounded-full py-7">
              <FaGithub size={25} color="white" />
            </SecondaryButton>
            <SecondaryButton className="rounded-full py-7">
              <FaSquareXTwitter size={25} color="white" />
            </SecondaryButton>
          </div>
        </div>
      </div>
      {/* banner image content */}
      <div className="relative flex-1">
        <motion.img
          animate={{
            rotate: 360,
            transition: { duration: 10, ease: "linear", repeat: Infinity },
          }}
          className="w-4/6 md:w-5/6 absolute -z-10 transform translate-x-16 md:translate-x-12"
          src={bannerRingImage}
          alt={bannerRingImage}
        />
        <img
          className="w-5/6 flex m-auto"
          src={bannerFormalImage}
          alt={bannerFormalImage}
        />
      </div>
    </div>
  );
};

export default Banner;
