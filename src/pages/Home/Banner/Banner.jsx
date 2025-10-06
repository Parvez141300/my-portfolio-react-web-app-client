import React from "react";
import { Typewriter } from "react-simple-typewriter";
import bannerRingImage from "../../../assets/banner-images/banner html, css, js, mongodb, express, react, node logo design.png";
import bannerFormalImage from "../../../assets/banner-images/my coat formal suit 1.png";
import { motion, scale } from "motion/react";
import { IoMdDownload } from "react-icons/io";
import SocialMediaIcons from "../../../components/SocialMediaIcons/SocialMediaIcons";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Fade duration={1500}>
      <div
        id="banner"
        className="w-10/12 mx-auto flex flex-col gap-10 md:gap-0 lg:flex-row lg:justify-center lg:items-center min-h-[calc(100vh-73px)]"
      >
        {/* banner left text content */}
        <Fade delay={100} cascade damping={0.5}>
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
                  "a Frontend Developer",
                  "a React Developer",
                  "a Web App Builder",
                  "a Mern Stack Developer",
                ]}
                cursor={true}
                loop={true}
              ></Typewriter>
            </h1>
            <p>
              I am a Frontend Developer with the expertise of MERN Stack
              technology. <br />
              Passionate about creating responsive and user friendly web
              application
              <br />I also make the code clean and easy to understand
            </p>
            <motion.a
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="btn btn-outline btn-secondary rounded-lg"
              href="https://drive.google.com/file/d/1lNPuIHWjlT4pyw17ShbEjRAmxUhJXUfM/view?usp=sharing"
              target="_blank"
            >
              <IoMdDownload size={25} />
              Resume
            </motion.a>

            <SocialMediaIcons></SocialMediaIcons>
          </div>
        </Fade>
        {/* banner right image content */}
        <div className="relative flex-1">
          <motion.img
            animate={{
              rotate: 360,
              transition: { duration: 10, ease: "linear", repeat: Infinity },
            }}
            className="w-4/6 md:w-5/6 absolute -z-10 transform translate-x-16 md:translate-x-12"
            src={bannerRingImage}
            alt={'bannerRingImage'}
          />
          <img
            className="w-5/6 flex m-auto"
            src={bannerFormalImage}
            alt={'bannerFormalImage'}
          />
        </div>
      </div>
    </Fade>
  );
};

export default Banner;
