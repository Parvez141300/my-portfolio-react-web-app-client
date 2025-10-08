import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, handlePopup }) => {
  return (
    <Fade duration={1000}>
      <div className="h-full flex flex-col rounded-xl overflow-hidden border border-primary/30  shadow-lg group hover:-translate-y-4 transition-all duration-500">
        {/* Image */}
        <div className="relative">
          <img
            src={project?.image}
            alt={project?.title}
            className="w-full h-52 object-cover transition-all duration-500 group-hover:brightness-50"
          />
          <span className="absolute top-2 right-2 bg-cyan-500 text-black px-2 py-1 rounded-md text-xs font-semibold">
            {project?.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Title */}
          <h2 className="text-lg font-bold">{project?.title}</h2>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span key={index} className="badge badge-outline badge-secondary">
                {tech}
              </span>
            ))}
          </div>

          {/* see more button to open modal */}
          <button
            onClick={() => {
              handlePopup(project.id);
              document.getElementById("my_modal_3").showModal();
            }}
            className="hover:underline cursor-pointer"
          >
            See More...
          </button>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <a
              href={project?.links?.live}
              target="_blank"
              className="btn btn-primary btn-sm flex items-center gap-2"
            >
              {project?.icons?.live} Live Demo
            </a>
            <a
              href={project?.links?.code}
              target="_blank"
              className="btn btn-sm btn-outline btn-secondary flex items-center gap-2"
            >
              {project?.icons?.code} Code
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
