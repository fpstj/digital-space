import React from "react";
import peak2port from "../assets/images/peak2port-browser-mockup-geometric.png";
import BDMSystems from "../assets/images/bdmsystems-browser-mockup-geometric.png";
import colocvial from "../assets/images/colocvial-browser-mockup-geometric.png";
import meetup from "../assets/images/meetup-browser-mockup-geometric.png";
import thinkerai from "../assets/images/thinker-browser-mockup-geometric.png";
import alectoo from "../assets/images/alectoo-browser-mockup-geometric.png";
import WeSystems from "../assets/images/wesystems-browser-mockup-geometric.png";
import MyCallCentral from "../assets/images/teams-client-app-browser-mockup-geometric.png";
import ContractHub from "../assets/images/contract-hub-browser-mockup-geometric.png";
import jansson from "../assets/images/jansson-browser-mockup-geometric.png";
import "./HideScrollbar.css";

const projects = [
  {
    title: "Peak2Port",
    description:
      "Modern website for cyclists connecting riders with guides, mechanics, support vehicles, and curated local routes. Built with React, TypeScript, and Tailwind CSS, featuring animations, dark/light mode, and performance optimization.",
    image: peak2port,
    link: "https://peak2port.vercel.app/",
  },
  {
    title: "BDM Systems",
    description:
      "Dashboard system for managing building utilities, finances, facilities, and resident services. Designed in Figma and currently implemented as a React frontend.",
    image: BDMSystems,
    link: "https://infoteam-solution.vercel.app/",
  },
  {
    title: "Colocvial",
    description:
      "Professional website UI concept for an IT services company. Fully designed in Figma with implementation planned.",
    image: colocvial,
    link: "",
  },
  {
    title: "Meetup",
    description:
      "Concept mobile communication app for messaging, calls, and file sharing. Designed in Figma as a foundation for a future platform.",
    image: meetup,
    link: "",
  },
  {
    title: "Thinker AI",
    description:
      "Modern UI concept for interacting with multiple AI agents in a single interface. Designed in Figma with a focus on usability and scalable AI workflows.",
    image: thinkerai,
    link: "",
  },
  {
    title: "myportal.alectoo",
    description:
      "Analytics dashboard for managing telecom phone number ranges across regions. Contributed to UI design and React frontend implementation.",
    image: alectoo,
    link: "",
  },
  {
    title: "WeSystems",
    description:
      "Call center management platform for handling calls, routing, scheduling, and call transcription. Designed the UI in Figma and implemented the frontend.",
    image: WeSystems,
    link: "",
  },
  {
    title: "MyCallCentral",
    description:
      "Call center management platform for handling calls, routing, scheduling, and call transcription. Designed the UI in Figma and implemented the frontend.",
    image: MyCallCentral,
    link: "",
  },
  {
    title: "ContractHub",
    description:
      "Modern dashboard UI for managing contracts and related documents. Designed in Figma and prepared for future implementation based on client requirements.",
    image: ContractHub,
    link: "",
  },
  {
    title: "jansson.myportal",
    description:
      "Internal management dashboard for the company Jansson. Designed the UI and dashboard structure in Figma.",
    image: jansson,
    link: "",
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
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm mb-2">{project.description}</p>
                  <a
                    key={idx}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-colors duration-200 hover:text-pink-500"
                    aria-label={`Open ${project.title} website`}
                  >
                    {project.link}
                  </a>
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
