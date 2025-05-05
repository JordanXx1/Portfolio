// src/components/ProjectModal.js
import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300"
        >
          ✕
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
