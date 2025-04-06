import React from "react";
import project11 from "../assets/images/img11.jpg";
import project12 from "../assets/images/img12.jpg";
import project13 from "../assets/images/img13.jpg";
import project14 from "../assets/images/img14.jpg";
import project15 from "../assets/images/img15.jpg";
import project16 from "../assets/images/img16.jpg";
import project17 from "../assets/images/img17.jpg";
import project18 from "../assets/images/img18.jpg";
import project19 from "../assets/images/img19.jpg";
import project20 from "../assets/images/img20.jpg";
import project21 from "../assets/images/img21.jpg";
import project22 from "../assets/images/img22.jpg";
import project23 from "../assets/images/img23.jpg";
import project24 from "../assets/images/img24.jpg";
import project25 from "../assets/images/img25.jpg";
import project26 from "../assets/images/img26.jpg";
import "./HideScrollbar.css";

const projects = [
  {
    title: "Project 1",
    description: "A short description about project 1.",
    image: project11,
  },
  {
    title: "Project 2",
    description: "A short description about project 2.",
    image: project12,
  },
  {
    title: "Project 3",
    description: "A short description about project 3.",
    image: project13,
  },
  {
    title: "Project 4",
    description: "A short description about project 4.",
    image: project14,
  },
  {
    title: "Project 5",
    description: "A short description about project 5.",
    image: project15,
  },
  {
    title: "Project 6",
    description: "A short description about project 6.",
    image: project16,
  },
  {
    title: "Project 7",
    description: "A short description about project 7.",
    image: project17,
  },
  {
    title: "Project 8",
    description: "A short description about project 8.",
    image: project18,
  },
  {
    title: "Project 9",
    description: "A short description about project 9.",
    image: project19,
  },
  {
    title: "Project 10",
    description: "A short description about project 10.",
    image: project20,
  },
  {
    title: "Project 10",
    description: "A short description about project 10.",
    image: project21,
  },
  {
    title: "Project 10",
    description: "A short description about project 10.",
    image: project22,
  },
  {
    title: "Project 10",
    description: "A short description about project 10.",
    image: project23,
  },
  {
    title: "Project 10",
    description: "A short description about project 10.",
    image: project24,
  },
  {
    title: "Project 10",
    description: "A short description about project 10.",
    image: project25,
  },
  {
    title: "Project 10",
    description: "A short description about project 10.",
    image: project26,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Main content wrapper below navbar */}
      <div className="flex flex-col pt-20 px-8 sm:px-16 md:px-32 lg:px-50 h-full w-full">
        {/* Sticky h1 (fixed height so we can offset scroll below it) */}
        <h1 className="text-5xl font-bold text-stone sticky top-[64px] z-10 py-4">
          Projects
        </h1>

        {/* Scrollable Projects Grid below h1 */}
        <div
          className="overflow-y-auto mt-4 mb-4 no-scrollbar w-full"
          style={{ maxHeight: "calc(100vh - 144px)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-md shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-94 object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Text on hover */}
                <div className="absolute bottom-0 p-4 text-stone opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
