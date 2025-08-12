import React from "react";
import CountUp from "react-countup";
import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaElementor,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaTools,
  FaWordpress,
} from "react-icons/fa";
import { FaCirclePlus, FaUserGear } from "react-icons/fa6";
import {
  RiNextjsFill,
  RiSendBackward,
  RiTailwindCssFill,
  RiUserSearchFill,
} from "react-icons/ri";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCloudinary,
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMaterialdesignicons,
  SiMongodb,
  SiNetlify,
  SiPixlr,
} from "react-icons/si";
import ProgressBar from "@ramonak/react-progress-bar";
import { AiTwotoneApi } from "react-icons/ai";
import { IoCloudDoneSharp } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-10/12 mx-auto space-y-8 md:space-y-12 min-h-[100vh-73px]"
    >
      <div className="flex justify-center items-center gap-2">
        <span className="text-secondary">
          <FaUserGear size={30} />
        </span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center gap-2">
          Technical <span className="underline text-secondary">Skills</span>
        </h2>
      </div>
      {/* skill cards container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* front end & deploy & design skills */}
        <Slide direction="left" duration={1000}>
          <div className="space-y-8">
            {/* front end */}
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
                  <p>
                    <CountUp
                      start={0}
                      end={95}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={95}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card css 85% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaCss3Alt size={20} />
                    CSS
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={85}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={85}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card tailwind 95% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <RiTailwindCssFill size={20} />
                    Tailwind
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={95}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={85}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card daisyui 75% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiDaisyui size={20} />
                    Daisyui
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={75}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={75}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card js 75% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiJavascript size={20} />
                    JavaScript
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={70}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={75}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card React.js 85% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaReact size={20} />
                    React.js
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={85}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={85}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card next.js 70% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <RiNextjsFill size={20} />
                    Next.js
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={70}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={70}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
            </div>
            {/* deploy */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <IoCloudDoneSharp size={30} />
                </div>
                <span className="text-xl font-bold">Deploy and upload</span>
              </div>

              {/* progress bar card firebase 80% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiFirebase size={20} />
                    Firebase
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={80}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={80}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card netlify 95% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiNetlify size={20} />
                    Netlify
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={95}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={95}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card cloudinary 75% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiCloudinary size={20} />
                    Cloudinary
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={75}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={75}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
            </div>
            {/* design */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <SiMaterialdesignicons size={30} />
                </div>
                <span className="text-xl font-bold">Web app design</span>
              </div>

              {/* progress bar card figma 80% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaFigma size={20} />
                    Firebase
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={80}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={80}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card pixso 75% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiPixlr size={20} />
                    Firebase
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={75}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={75}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* back end & database & authentication & deploy skills & additional skills */}
        <Slide direction="right" duration={1000}>
          <div className="space-y-7">
            {/* back end */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <RiSendBackward size={30} />
                </div>
                <span className="text-xl font-bold">Back Development</span>
              </div>

              {/* progress bar card Node.js 60% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaNodeJs size={20} />
                    Node.js
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={60}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={60}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card express 70% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiExpress size={20} />
                    Express.js
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={70}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={70}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card api 80% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <AiTwotoneApi size={20} />
                    API
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={80}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={80}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
            </div>
            {/* database */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <FaDatabase size={30} />
                </div>
                <span className="text-xl font-bold">Database & storage</span>
              </div>

              {/* progress bar card MongoDB 80% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiMongodb size={20} />
                    MongoDB
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={80}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={80}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
            </div>
            {/* authentication */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <RiUserSearchFill size={30} />
                </div>
                <span className="text-xl font-bold">Authentication</span>
              </div>

              {/* progress bar card firebase 75% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiFirebase size={20} />
                    Firebase
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={75}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={75}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
            </div>
            {/* tools */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <FaTools size={30} />
                </div>
                <span className="text-xl font-bold">Tools</span>
              </div>

              {/* progress bar card github 50% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaGithub size={20} />
                    Github
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={50}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={50}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card vs code 50% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <VscVscode size={20} />
                    VS Code
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={70}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={70}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
            </div>
            {/* Additional skill */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <FaCirclePlus size={30} />
                </div>
                <span className="text-xl font-bold">Additional Skills</span>
              </div>

              {/* progress bar card wordpress 90% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaWordpress size={20} />
                    Wordpress
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={90}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={90}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card elementor 95% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaElementor size={20} />
                    Elementor
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={95}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={95}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card adobe photoshop 65% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiAdobephotoshop size={20} />
                    Photoshop
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={65}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={65}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
              {/* progress bar card adobe illustrator 75% */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <SiAdobeillustrator size={20} />
                    Illustrator
                  </div>
                  <p>
                    <CountUp
                      start={0}
                      end={75}
                      duration={5}
                      enableScrollSpy={true}
                    />
                    %
                  </p>
                </div>
                {/* progress bar */}
                <ProgressBar
                  completed={75}
                  bgColor="#8ac5f4"
                  labelColor="#ffffff"
                  animateOnRender
                  maxCompleted={100}
                  transitionDuration="4s"
                  transitionTimingFunction="ease-in-out"
                />
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skills;
