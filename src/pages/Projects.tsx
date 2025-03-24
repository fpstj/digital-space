import React from "react";
import Navbar from "../components/navbar/Navbar";
import project1 from "../assets/images/img1.jpg";
import project2 from "../assets/images/img2.jpg";
import project3 from "../assets/images/img3.jpg";
import project4 from "../assets/images/img4.jpg";
import project5 from "../assets/images/img5.jpg";
import project6 from "../assets/images/img6.jpg";
import project7 from "../assets/images/img7.jpg";
import project8 from "../assets/images/img8.jpg";
import project9 from "../assets/images/img9.jpg";
import project10 from "../assets/images/img10.jpg";
import "./Projects.css";

const projects = [
  {
    title: "Project 1",
    description: "A short description about project 1.",
    image: project1,
  },
  {
    title: "Project 2",
    description: "A short description about project 2.",
    image: project2,
  },
  {
    title: "Project 3",
    description: "A short description about project 3.",
    image: project3,
  },
  {
    title: "Project 4",
    description: "A short description about project 4.",
    image: project4,
  },
  {
    title: "Project 5",
    description: "A short description about project 5.",
    image: project5,
  },
  {
    title: "Project 6",
    description: "A short description about project 6.",
    image: project6,
  },
  {
    title: "Project 7",
    description: "A short description about project 7.",
    image: project7,
  },
  {
    title: "Project 8",
    description: "A short description about project 8.",
    image: project8,
  },
  {
    title: "Project 9",
    description: "A short description about project 9.",
    image: project9,
  },
  {
    title: "Project 10",
    description: "A short description about project 10.",
    image: project10,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Fixed Navbar on top */}
      <Navbar />

      {/* Main content wrapper below navbar */}
      <div className="pt-20 px-6 h-full flex flex-col">
        {/* Sticky h1 (fixed height so we can offset scroll below it) */}
        <h1 className="text-5xl font-bold text-white sticky top-[64px] z-10 py-4">
          Projects
        </h1>

        {/* Scrollable Projects Grid below h1 */}
        <div
          className="overflow-y-auto mt-4 pr-2 mb-4 no-scrollbar"
          style={{ maxHeight: "calc(100vh - 144px)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-md shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Text on hover */}
                <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
