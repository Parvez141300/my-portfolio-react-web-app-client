import React from "react";
import { FaCode, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui, SiJavascript } from "react-icons/si";

const Skills = () => {
  return (
    <div className="max-w-10/12 mx-auto space-y-5 min-h-[100vh-73px]">
      <div className="flex justify-center items-center gap-2">
        <span className="text-secondary">
          <FaUserGear size={30} />
        </span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center gap-2">
          Technical <span className="underline text-secondary">Skills</span>
        </h2>
      </div>
      {/* skill cards container */}
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg text-white">
            <FaCode size={30} />
          </div>
          <span className="text-xl font-bold">Frontend Development</span>
        </div>

        {/* progress bar card html 95% */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaHtml5 size={20} />
              HTML
            </div>
            <p>95%</p>
          </div>
          <div className="bg-primary h-5 p-1 rounded-full relative">
            <div className="bg-accent h-3 rounded-full absolute top-1 z-20 w-11/12"></div>
          </div>
        </div>
        {/* progress bar card css 85% */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaCss3Alt size={20} />
              CSS
            </div>
            <p>85%</p>
          </div>
          <div className="bg-primary h-5 p-1 rounded-full relative">
            <div className="bg-accent h-3 rounded-full absolute top-1 z-20 w-10/12"></div>
          </div>
        </div>
        {/* progress bar card tailwind 95% */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <RiTailwindCssFill size={20} />
              Tailwind
            </div>
            <p>95%</p>
          </div>
          <div className="bg-primary h-5 p-1 rounded-full relative">
            <div className="bg-accent h-3 rounded-full absolute top-1 z-20 w-11/12"></div>
          </div>
        </div>
        {/* progress bar card daisyui 85% */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <SiDaisyui size={20} />
              Tailwind
            </div>
            <p>85%</p>
          </div>
          <div className="bg-primary h-5 p-1 rounded-full relative">
            <div className="bg-accent h-3 rounded-full absolute top-1 z-20 w-10/12"></div>
          </div>
        </div>
        {/* progress bar card js 75% */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <SiJavascript size={20} />
              JavaScript
            </div>
            <p>70%</p>
          </div>
          <div className="bg-primary h-5 p-1 rounded-full relative">
            <div className="bg-accent h-3 rounded-full absolute top-1 z-20 w-7/12"></div>
          </div>
        </div>
        {/* progress bar card React.js 85% */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaReact size={20} />
              React.js
            </div>
            <p>85%</p>
          </div>
          <div className="bg-primary h-5 p-1 rounded-full relative">
            <div className="bg-accent h-3 rounded-full absolute top-1 z-20 w-10/12"></div>
          </div>
        </div>
        {/* progress bar card React.js */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <RiNextjsFill size={20} />
              Next.js
            </div>
            <p>70%</p>
          </div>
          <div className="bg-primary h-5 p-1 rounded-full relative">
            <div className="bg-accent h-3 rounded-full absolute top-1 z-20 w-7/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
