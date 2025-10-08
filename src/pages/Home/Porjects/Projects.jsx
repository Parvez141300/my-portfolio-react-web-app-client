import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import project1 from "../../../assets/projects-images/porject-1.png";
import project2 from "../../../assets/projects-images/project-2.png";
import project3 from "../../../assets/projects-images/project-3.png";
import { Fade } from "react-awesome-reveal";
import ProjectCard from "./Shared/PorjectCard";
import ModalCard from "./Shared/ModalCard";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  console.log("modal content", modalContent);
  const projects = [
    {
      id: "project-1",
      title: "CodeStack - A online discussion web application",
      description:
        "A MERN-stack platform connecting learning coding technology in depth.",
      image: project1, // import or path of project1
      category: "Full-Stack",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "More+",
      ],
      features: [
        "Role-based access for Admin, Restaurant, Charity and User",
        "By default after creating an account the user will badge of the website would be bronze",
        "Stripe payment integration gold user role requests",
        "Real-time dashboard for each role with data visualizations",
        "Admin panel for managing roles and users",
      ],
      links: {
        live: "https://assignment-12-b4778.web.app/",
        code: "https://github.com/Parvez141300/code-stack-client",
      },
      icons: {
        live: <FaExternalLinkAlt />,
        code: <FaGithub />,
      },
    },
    {
      id: "project-2",
      title: "PHA course - A course web application",
      description:
        "A MERN-stack platform where anyone can enroll the course and learn something new.",
      image: project2,
      category: "Full-Stack",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "More+"],
      features: [
        "People can login and register",
        "Watch all courses and enroll any courses maximum 3",
        "People can add course in the add course page and see the course in the Manage Course there he/she had added a course",
        "In All Courses people can actually see all the courses and there they can enroll",
        "People can remove added course by clicking remove button",
      ],
      links: {
        live: "https://assignment-11-5e369.web.app/",
        code: "https://github.com/Parvez141300/pha-course-client",
      },
      icons: {
        live: <FaExternalLinkAlt />,
        code: <FaGithub />,
      },
    },
    {
      id: "project-3",
      title: "Easy Garden - where gardening related topics are discussed",
      description:
        "A MERN-stack platform There are many experienced gardener who gives tips.",
      image: project3,
      category: "Full-Stack",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "More+"],
      features: [
        "In the home page there is a slider that changes and fades every 1 second in infinite loop",
        "Dark Mode system",
        "User can login or register in a form",
        "In browse tips page user can see the details of the public tip",
        "In my tips page user can edit the tip or delete tip",
      ],
      links: {
        live: "https://assignment-10-banana.web.app/",
        code: "https://github.com/Parvez141300/easy-garden-client",
      },
      icons: {
        live: <FaExternalLinkAlt />,
        code: <FaGithub />,
      },
    },
  ];
  const handlePopup = (id) => {
    console.log("popup id:", id);
    const matchedProject = projects.find((p) => p.id === id);
    setShowModal((prv) => !prv);
    setModalContent(matchedProject);
  };
  return (
    <div className="max-w-10/12 mx-auto space-y-8 md:space-y-12 min-h-[100vh-73px]">
      <div className="flex justify-center items-center gap-2">
        <span className="text-secondary">
          <GrProjects size={20} />
        </span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center gap-2">
          My <span className="underline text-secondary">Projects</span>
        </h2>
      </div>

      {/* project card container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            handlePopup={handlePopup}
          />
        ))}
      </div>
      {/* popup model element */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="mt-4 md:mt-0 max-h-96">
            <ModalCard modalContent={modalContent}></ModalCard>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Projects;
