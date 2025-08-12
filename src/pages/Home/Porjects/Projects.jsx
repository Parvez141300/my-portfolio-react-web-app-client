import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import project1 from "../../../assets/projects-images/porject-1.png";
import project2 from "../../../assets/projects-images/project-2.png";
import project3 from "../../../assets/projects-images/project-3.png"

const Projects = () => {
  return (
    <div id="projects" className="max-w-10/12 mx-auto space-y-8 md:space-y-12 min-h-[100vh-73px]">
      <div className="flex justify-center items-center gap-2">
        <span className="text-secondary">
          <GrProjects size={20} />
        </span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center gap-2">
          My <span className="underline text-secondary">Projects</span>
        </h2>
      </div>

      {/* project card container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* card 1 */}
        <div className="rounded-xl overflow-hidden border border-primary/30  shadow-lg">
          {/* Image */}
          <div className="relative">
            <img src={project1} alt={project1} className="w-full" />
            <span className="absolute top-2 right-2 bg-cyan-500 text-black px-2 py-1 rounded-md text-xs font-semibold">
              Full-Stack
            </span>
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">
            {/* Title */}
            <h2 className="text-lg font-bold">
              CodeStack - A online discussion web application
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-400">
              A MERN-stack platform connecting learning coding technology in
              depth.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-outline badge-secondary">
                React.js
              </span>
              <span className="badge badge-outline badge-secondary">
                Node.js
              </span>
              <span className="badge badge-outline badge-secondary">
                Express.js
              </span>
              <span className="badge badge-outline badge-secondary">
                MongoDB
              </span>
              <span className="badge badge-outline badge-secondary">
                Stripe
              </span>
              <span className="badge badge-outline badge-secondary">
                More+
              </span>
            </div>

            {/* Features */}
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                🔹 Role-based access for Admin, Restaurant, Charity and User
              </li>
              <li>
                🔹 By default after creating an account the user will badge of
                the website would be bronze.
              </li>
              <li>🔹 Stripe payment integration gold user role requests</li>
              <li>
                🔹 Real-time dashboard for each role with data visualizations
              </li>
              <li>🔹 Admin panel for managing roles and users</li>
            </ul>

            {/* Buttons */}
            <div className="flex gap-3 pt-3">
              <a
                href="https://assignment-12-b4778.web.app/"
                target="_blank"
                className="btn btn-primary btn-sm flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href="https://github.com/Parvez141300/code-stack-client"
                target="_blank"
                className="btn btn-sm btn-outline btn-secondary flex items-center gap-2"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="rounded-xl overflow-hidden border border-primary/30  shadow-lg">
          {/* Image */}
          <div className="relative">
            <img src={project2} alt={project2} className="w-full" />
            <span className="absolute top-2 right-2 bg-cyan-500 text-black px-2 py-1 rounded-md text-xs font-semibold">
              Full-Stack
            </span>
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">
            {/* Title */}
            <h2 className="text-lg font-bold">
              PHA course - A course web application
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-400">
              A MERN-stack platform where anyone can enroll the course and learn something new.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-outline badge-secondary">
                React.js
              </span>
              <span className="badge badge-outline badge-secondary">
                Node.js
              </span>
              <span className="badge badge-outline badge-secondary">
                Express.js
              </span>
              <span className="badge badge-outline badge-secondary">
                MongoDB
              </span>
              <span className="badge badge-outline badge-secondary">
                More+
              </span>
            </div>

            {/* Features */}
            <ul className="text-sm text-gray-400 space-y-1">
              <li>🔹 People can login and register</li>
              <li>🔹 Watch all courses and enroll any courses maximum 3</li>
              <li>
                🔹 People can add course in the add course page and see the
                course in the Manage Course there he/she had added a course
              </li>
              <li>🔹 In All Courses people can actually see all the courses and there they can enroll</li>
              
              <li>
                🔹 People can remove added course by clicking remove button
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex gap-3 pt-3">
              <a
                href="https://assignment-11-5e369.web.app/"
                target="_blank"
                className="btn btn-primary btn-sm flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href="https://github.com/Parvez141300/pha-course-client"
                target="_blank"
                className="btn btn-sm btn-outline btn-secondary flex items-center gap-2"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="rounded-xl overflow-hidden border border-primary/30  shadow-lg">
          {/* Image */}
          <div className="relative">
            <img src={project3} alt={project3} className="w-full" />
            <span className="absolute top-2 right-2 bg-cyan-500 text-black px-2 py-1 rounded-md text-xs font-semibold">
              Full-Stack
            </span>
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">
            {/* Title */}
            <h2 className="text-lg font-bold">
              Easy Garden - where gardening related topics are discussed
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-400">
              A MERN-stack platform There are many experienced gardener who gives tips how to gardening.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-outline badge-secondary">
                React.js
              </span>
              <span className="badge badge-outline badge-secondary">
                Node.js
              </span>
              <span className="badge badge-outline badge-secondary">
                Express.js
              </span>
              <span className="badge badge-outline badge-secondary">
                MongoDB
              </span>
              <span className="badge badge-outline badge-secondary">
                More+
              </span>
            </div>

            {/* Features */}
            <ul className="text-sm text-gray-400 space-y-1">
              <li>🔹 In the home page there is a slider that changes and fades every 1 second in infinite loop.</li>
              <li>🔹 Dark Mode system</li>
              <li>🔹 User can login or register in a form.</li>
              <li>
                🔹 In browse tips page user can see the details of the public tip
              </li>
              <li>🔹 In my tips page user can edit the tip or delete tip</li>
              <li>🔹 Reload the page will show a loader for fetch data</li>
            </ul>

            {/* Buttons */}
            <div className="flex gap-3 pt-3">
              <a
                href="https://assignment-10-banana.web.app/"
                target="_blank"
                className="btn btn-primary btn-sm flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href="https://github.com/Parvez141300/easy-garden-client"
                target="_blank"
                className="btn btn-sm btn-outline btn-secondary flex items-center gap-2"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
