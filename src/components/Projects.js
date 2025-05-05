// src/components/Projects.js
import { useState } from "react";



const Projects = () => {
  
  const allProjects = [
    {
      title: "Portfolio Website",
      type: "Frontend",
      image: "https://picsum.photos/id/237/200/300",
      link: "https://yourportfolio.com",
      description: "A personal portfolio showcasing my skills and projects."
    },
    {
      title: "Dashboard App",
      type: "Fullstack",
      image: "https://picsum.photos/200/300?grayscale",
      link: "https://dashboardapp.com",
      description: "A dashboard app built with MERN stack."
    },
    {
      title: "Chat Application",
      type: "Backend",
      image: "https://picsum.photos/seed/picsum/200/300",
      link: "https://chatapp.com",
      description: "A real-time chat app using Socket.io and Node.js."
    },
    {
      title: "E-commerce UI",
      type: "Frontend",
      image: "https://unsplash.it/400/300?random=4",
      link: "https://ecommerce.com",
      demo: "https://github.com/Phachara1001/dormitory.git",
      description: "An e-commerce frontend built with React."
    },
    {
      title: "Auth API",
      type: "Backend",
      image: "https://unsplash.it/400/300?random=5",
      link: "https://authapi.com",
      description: "A RESTful API for authentication."
    },
    {
      title: "Landing Page",
      type: "Frontend",
      image: "https://unsplash.it/400/300?random=6",
      link: "https://landingpage.com",
      description: "Responsive landing page with animations."
    },
  ];

  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === filter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4 text-center" data-aos="fade-up" id="projects">
  <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800 dark:text-white">Projects</h2>

  {/* FILTER BUTTONS */}
  <div className="mb-8 flex flex-wrap justify-center gap-3">
    {["All", "Frontend", "Backend", "Fullstack"].map((type) => (
      <button
        key={type}
        onClick={() => {
          setFilter(type);
          setVisibleCount(3);
        }}
        className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
          filter === type
            ? "bg-blue-600 text-white shadow-md"
            : "bg-white text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-200"
        }`}
      >
        {type}
      </button>
    ))}
  </div>

  {/* PROJECT CARDS */}
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {visibleProjects.map((project, index) => (
  <div
    key={index}
    onClick={() => setSelectedProject(project)}
    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition duration-300 cursor-pointer group"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="p-5 text-left">
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      {/* ✅ ปุ่มลิงก์ */}
      <div className="flex flex-wrap gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  </div>
))}

  </div>

  {/* LOAD MORE BUTTON */}
  {visibleCount < filteredProjects.length && (
    <div className="mt-10">
      <button
        onClick={() => setVisibleCount((prev) => prev + 3)}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
      >
        ดูเพิ่มเติม
      </button>
    </div>
  )}
</section>

  );
};

export default Projects;
