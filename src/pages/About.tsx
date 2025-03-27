import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./HideScrollbar.css"; // Optional, depending on your existing styles

const aboutContent = [
  {
    title: "Hi, I'm a Front-End Developer",
    text: "I’m a passionate frontend developer with 4 years of hands-on experience crafting modern, scalable, and user-focused web applications. My work revolves around creating responsive and elegant user interfaces, building internal dashboards, and integrating RESTful APIs for seamless data flow. I take pride in writing clean, maintainable code and transforming complex ideas into intuitive digital experiences that not only function smoothly but also delight users across all devices.",
  },
  {
    title: "What I Do",
    text: "I specialize in building robust single-page applications (SPAs) using React.js and TypeScript. With a strong command of modern CSS frameworks like Tailwind and Bootstrap, I design pixel-perfect, mobile-first layouts. My day-to-day includes collaborating with designers and backend developers, optimizing UI performance, and managing version control with Git and Azure DevOps. I take a proactive approach to problem-solving and always aim to deliver maintainable and scalable front-end solutions that meet both business and user needs.",
  },
  {
    title: "Tech I Work With",
    text: "React.js, TypeScript, JavaScript (ES6+), HTML, CSS/SCSS, Bootstrap, Tailwind, Git, Azure DevOps, RESTful APIs, Figma. I have hands-on experience in building dashboards, internal systems, and scalable component libraries.",
  },
  {
    title: "My Workflow & Tools",
    text: "I believe in clean, maintainable code and a thoughtful development process. My workflow includes Git version control, CI/CD pipelines, collaborative documentation (Notion), and Figma for prototyping and design.",
  },
  {
    title: "Design Background",
    text: "With nearly a decade of experience in graphic and UI/UX design, I bring a user-centered perspective to development. I create wireframes, interactive prototypes, and visually compelling interfaces using Figma.",
  },
  {
    title: "Projects I'm Proud Of",
    text: "I’ve worked on a variety of real-world projects including telephony management systems, service management dashboards, travel agency booking tools, and secure file upload/download platforms. I’ve also built apps for business continuity and datacenter monitoring. These projects gave me the opportunity to enhance productivity, streamline workflows, and create intuitive, reliable interfaces for both internal and client-facing use. Every project has taught me something new and pushed me to grow as both a developer and a problem-solver.",
  },
  {
    title: "What I'm Learning",
    text: "I’m currently diving deeper into full-stack development by learning Node.js and Next.js, aiming to become more versatile in my skillset. I enjoy exploring new tools and frameworks through hands-on projects, like building a full-featured translation management app with authentication and tracking features. On the side, I frequently complete React-based courses and mini-projects to sharpen my state management, hooks usage, and best practices. I believe learning never stops, especially in this field.",
  },
  {
    title: "Languages I Speak",
    text: "Macedonian (native), English (fluent), Slovenian (fluent). I can also communicate in Serbian and mostly understand Croatian, Bosnian, Montenegrin, and Bulgarian.",
  },
  {
    title: "Outside of Work",
    text: "Beyond code, I’m a swimmer, a family man, and a curious soul. I enjoy nature, discovering new music, binge-worthy shows, and always dreaming up the next travel destination.",
  },
];

const About: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Fixed Navbar on top */}
      <Navbar />

      {/* Main content wrapper below navbar */}
      <div className="pt-20 h-full flex flex-col w-full">
        {/* Container for consistent width */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Sticky h1 (now within the same container as content) */}
          <h1 className="text-5xl font-bold text-stone sticky top-[64px] z-10 py-4 bg-background">
            About
          </h1>

          {/* Scrollable content below h1 */}
          <div
            className="overflow-y-auto mt-4 no-scrollbar w-full pb-20"
            style={{ maxHeight: "calc(100vh - 144px)" }}
          >
            <div className="grid grid-cols-1 gap-8 mt-8 w-full">
              {aboutContent.map((section, idx) => (
                <div
                  key={idx}
                  className="relative group overflow-hidden pl-6 py-4 my-2 border-l border-stone/40"
                >
                  <h2 className="text-2xl font-semibold text-stone mb-6">
                    {section.title}
                  </h2>
                  <p className="text-base text-stone leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
