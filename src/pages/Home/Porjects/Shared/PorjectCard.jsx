import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="max-w-sm bg-base-200 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
      {/* Image */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Project Thumbnail"
          className="w-full"
        />
        <span className="absolute top-2 right-2 bg-cyan-500 text-black px-2 py-1 rounded-md text-xs font-semibold">
          Full-Stack
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h2 className="text-lg font-bold">
          MealGiver - Food Donation & Redistribution Platform
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-400">
          A MERN-stack platform connecting restaurants with verified charities
          to reduce food waste...
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-700 px-2 py-1 rounded-md text-xs">
            React.js
          </span>
          <span className="bg-gray-700 px-2 py-1 rounded-md text-xs">
            Express.js
          </span>
          <span className="bg-gray-700 px-2 py-1 rounded-md text-xs">
            MongoDB
          </span>
          <span className="bg-gray-700 px-2 py-1 rounded-md text-xs">+6</span>
        </div>

        {/* Features */}
        <ul className="text-sm text-gray-400 space-y-1">
          <li>🔹 Role-based access for Admin, Restaurant, Charity and User</li>
          <li>🔹 Stripe payment integration for Charity role requests</li>
          <li>🔹 Secure donation lifecycle: add, request, approve, confirm pickup, and review</li>
          <li>🔹 Real-time dashboard for each role with data visualizations</li>
          <li>🔹 Favorites system and detailed donation tracking</li>
          <li>🔹 Admin panel for managing roles, users, and donations</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <a
            href="#"
            className="btn btn-primary btn-sm flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="#"
            className="btn btn-sm btn-outline flex items-center gap-2"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
