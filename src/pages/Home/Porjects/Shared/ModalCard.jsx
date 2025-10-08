import React from "react";

const ModalCard = ({ modalContent: project }) => {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* Image */}
      <div className="relative space-y-5">
        <img src={project?.image} alt={project?.title} />
        <span className="absolute top-2 right-2 bg-cyan-500 text-black px-2 py-1 rounded-md text-xs font-semibold">
          {project?.category}
        </span>
        {/* Title */}
        <h2 className="text-md font-bold">{project?.title}</h2>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project?.techStack?.map((tech, index) => (
            <span key={index} className="badge badge-outline badge-secondary">
              {tech}
            </span>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex gap-3">
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

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Description */}
        <p className="text-sm text-gray-400">{project.description}</p>

        {/* Features */}
        <ul className="text-sm text-gray-400 space-y-1">
          {project?.features?.map((feature, index) => (
            <li key={index}>🔹 {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalCard;
