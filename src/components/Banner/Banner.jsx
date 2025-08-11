import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="w-10/12 mx-auto">
      {/* banner text content */}
      <div className="space-y-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Hi, I’m
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
        <button className="btn btn-outline btn-primary">Download CV</button>
      </div>
    </div>
  );
};

export default Banner;
