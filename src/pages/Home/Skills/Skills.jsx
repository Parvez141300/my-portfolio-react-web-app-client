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
  // front end skills
  const frontEndSkills = [
    {
      id: 1,
      skill: "HTML",
      icon: <FaHtml5 size={20} />,
      percentage: 95,
      color: "#e34f26",
    },
    {
      id: 2,
      skill: "CSS",
      icon: <FaCss3Alt size={20} />,
      percentage: 85,
      color: "#264de4",
    },
    {
      id: 3,
      skill: "Tailwind",
      icon: <RiTailwindCssFill size={20} />,
      percentage: 95,
      color: "#38b2ac",
    },
    {
      id: 4,
      skill: "DaisyUI",
      icon: <SiDaisyui size={20} />,
      percentage: 75,
      color: "#f0abfc",
    },
    {
      id: 5,
      skill: "JavaScript",
      icon: <SiJavascript size={20} />,
      percentage: 70,
      color: "#f7df1e",
    },
    {
      id: 6,
      skill: "React.js",
      icon: <FaReact size={20} />,
      percentage: 85,
      color: "#61dafb",
    },
    {
      id: 7,
      skill: "Next.js",
      icon: <RiNextjsFill size={20} />,
      percentage: 70,
      color: "#000000",
    },
  ];
  // deployment skills
  const deploymentSkills = [
    {
      id: 8,
      skill: "Firebase",
      icon: <SiFirebase size={20} />,
      percentage: 80,
      color: "#FFCA28",
    },
    {
      id: 9,
      skill: "Netlify",
      icon: <SiNetlify size={20} />,
      percentage: 95,
      color: "#00C7B7",
    },
    {
      id: 10,
      skill: "Cloudinary",
      icon: <SiCloudinary size={20} />,
      percentage: 75,
      color: "#FF5C8D",
    },
  ];
  // design skills
  const designSkills = [
    {
      id: 11,
      skill: "Figma",
      icon: <FaFigma size={20} />,
      percentage: 80,
      color: "#F24E1E",
    },
    {
      id: 12,
      skill: "Pixso",
      icon: <SiPixlr size={20} />,
      percentage: 75,
      color: "#FFCD00",
    },
  ];
  // back end skills
  const backEndSkills = [
    {
      id: 13,
      skill: "Node.js",
      icon: <FaNodeJs size={20} />,
      percentage: 60,
      color: "#68A063",
    },
    {
      id: 14,
      skill: "Express.js",
      icon: <SiExpress size={20} />,
      percentage: 70,
      color: "#000000",
    },
    {
      id: 15,
      skill: "API",
      icon: <AiTwotoneApi size={20} />,
      percentage: 80,
      color: "#FF6B00",
    },
  ];
  // database skills
  const databaseSkills = [
    {
      id: 16,
      skill: "MongoDB",
      icon: <SiMongodb size={20} />,
      percentage: 80,
      color: "#4DB33D",
    },
  ];
  // authentication skills
  const authenticationSkills = [
    {
      id: 17,
      skill: "Firebase",
      icon: <SiFirebase size={20} />,
      percentage: 75,
      color: "#FFCA28",
    },
  ];
  // tool skills
  const toolSkills = [
    {
      id: 18,
      skill: "Github",
      icon: <FaGithub size={20} />,
      percentage: 50,
      color: "#181717",
    },
    {
      id: 19,
      skill: "VS Code",
      icon: <VscVscode size={20} />,
      percentage: 70,
      color: "#007ACC",
    },
  ];
  // additional skills
  const additionalSkills = [
    {
      id: 20,
      skill: "Wordpress",
      icon: <FaWordpress size={20} />,
      percentage: 90,
      color: "#21759B",
    },
    {
      id: 21,
      skill: "Elementor",
      icon: <FaElementor size={20} />,
      percentage: 95,
      color: "#80B0E0",
    },
    {
      id: 22,
      skill: "Photoshop",
      icon: <SiAdobephotoshop size={20} />,
      percentage: 65,
      color: "#31A8FF",
    },
    {
      id: 23,
      skill: "Illustrator",
      icon: <SiAdobeillustrator size={20} />,
      percentage: 75,
      color: "#FF9A00",
    },
  ];

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

              {/* progress bar cards */}
              {frontEndSkills.map(({ id, skill, icon, percentage, color }) => (
                <div key={id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {icon}
                      {skill}
                    </div>
                    <p>
                      <CountUp
                        start={0}
                        end={percentage}
                        duration={5}
                        enableScrollSpy={true}
                      />
                      %
                    </p>
                  </div>
                  {/* progress bar */}
                  <ProgressBar
                    completed={percentage}
                    bgColor={color}
                    labelColor="#ffffff"
                    animateOnRender
                    maxCompleted={100}
                    transitionDuration="4s"
                    transitionTimingFunction="ease-in-out"
                  />
                </div>
              ))}
            </div>
            {/* deploy */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <IoCloudDoneSharp size={30} />
                </div>
                <span className="text-xl font-bold">Deploy and upload</span>
              </div>

              {deploymentSkills.map(
                ({ id, skill, icon, percentage, color }) => (
                  <div key={id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {icon}
                        {skill}
                      </div>
                      <p>
                        <CountUp
                          start={0}
                          end={percentage}
                          duration={5}
                          enableScrollSpy={true}
                        />
                        %
                      </p>
                    </div>
                    {/* progress bar */}
                    <ProgressBar
                      completed={percentage}
                      bgColor={color}
                      labelColor="#ffffff"
                      animateOnRender
                      maxCompleted={100}
                      transitionDuration="4s"
                      transitionTimingFunction="ease-in-out"
                    />
                  </div>
                )
              )}
            </div>
            {/* design */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <SiMaterialdesignicons size={30} />
                </div>
                <span className="text-xl font-bold">Web app design</span>
              </div>
              {designSkills.map(({ id, skill, icon, percentage, color }) => (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {icon}
                      {skill}
                    </div>
                    <p>
                      <CountUp
                        start={0}
                        end={percentage}
                        duration={5}
                        enableScrollSpy={true}
                      />
                      %
                    </p>
                  </div>
                  {/* progress bar */}
                  <ProgressBar
                    completed={percentage}
                    bgColor={color}
                    labelColor="#ffffff"
                    animateOnRender
                    maxCompleted={100}
                    transitionDuration="4s"
                    transitionTimingFunction="ease-in-out"
                  />
                </div>
              ))}
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

              {backEndSkills.map(({ id, skill, icon, percentage, color }) => (
                <div key={id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {icon}
                      {skill}
                    </div>
                    <p>
                      <CountUp
                        start={0}
                        end={percentage}
                        duration={5}
                        enableScrollSpy={true}
                      />
                      %
                    </p>
                  </div>
                  {/* progress bar */}
                  <ProgressBar
                    completed={percentage}
                    bgColor={color}
                    labelColor="#ffffff"
                    animateOnRender
                    maxCompleted={100}
                    transitionDuration="4s"
                    transitionTimingFunction="ease-in-out"
                  />
                </div>
              ))}
            </div>
            {/* database */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <FaDatabase size={30} />
                </div>
                <span className="text-xl font-bold">Database & storage</span>
              </div>

              {databaseSkills.map(({ id, icon, skill, percentage, color }) => (
                <div key={id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {icon}
                      {skill}
                    </div>
                    <p>
                      <CountUp
                        start={0}
                        end={percentage}
                        duration={5}
                        enableScrollSpy={true}
                      />
                      %
                    </p>
                  </div>
                  {/* progress bar */}
                  <ProgressBar
                    completed={percentage}
                    bgColor={color}
                    labelColor="#ffffff"
                    animateOnRender
                    maxCompleted={100}
                    transitionDuration="4s"
                    transitionTimingFunction="ease-in-out"
                  />
                </div>
              ))}
            </div>
            {/* authentication */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <RiUserSearchFill size={30} />
                </div>
                <span className="text-xl font-bold">Authentication</span>
              </div>

              {authenticationSkills.map(
                ({ id, icon, skill, percentage, color }) => (
                  <div key={id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {icon}
                        {skill}
                      </div>
                      <p>
                        <CountUp
                          start={0}
                          end={percentage}
                          duration={5}
                          enableScrollSpy={true}
                        />
                        %
                      </p>
                    </div>
                    {/* progress bar */}
                    <ProgressBar
                      completed={percentage}
                      bgColor={color}
                      labelColor="#ffffff"
                      animateOnRender
                      maxCompleted={100}
                      transitionDuration="4s"
                      transitionTimingFunction="ease-in-out"
                    />
                  </div>
                )
              )}
            </div>
            {/* tools */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <FaTools size={30} />
                </div>
                <span className="text-xl font-bold">Tools</span>
              </div>

              {toolSkills.map(({ id, icon, skill, percentage, color }) => (
                <div key={id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {icon}
                      {skill}
                    </div>
                    <p>
                      <CountUp
                        start={0}
                        end={percentage}
                        duration={5}
                        enableScrollSpy={true}
                      />
                      %
                    </p>
                  </div>
                  {/* progress bar */}
                  <ProgressBar
                    completed={percentage}
                    bgColor={color}
                    labelColor="#ffffff"
                    animateOnRender
                    maxCompleted={100}
                    transitionDuration="4s"
                    transitionTimingFunction="ease-in-out"
                  />
                </div>
              ))}
            </div>
            {/* Additional skill */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <FaCirclePlus size={30} />
                </div>
                <span className="text-xl font-bold">Additional Skills</span>
              </div>

              {additionalSkills.map(
                ({ id, icon, skill, percentage, color }) => (
                  <div key={id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {icon}
                        {skill}
                      </div>
                      <p>
                        <CountUp
                          start={0}
                          end={percentage}
                          duration={5}
                          enableScrollSpy={true}
                        />
                        %
                      </p>
                    </div>
                    {/* progress bar */}
                    <ProgressBar
                      completed={percentage}
                      bgColor={color}
                      labelColor="#ffffff"
                      animateOnRender
                      maxCompleted={100}
                      transitionDuration="4s"
                      transitionTimingFunction="ease-in-out"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skills;
