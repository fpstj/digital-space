import React from "react";
// import Navbar from "../components/navbar/Navbar";
import "./HideScrollbar.css"; // Optional, depending on your existing styles

const aboutContent = [
  {
    title: "About me",
    text: "Hi, I’m a Front-End Developer with 4 years of experience building modern, responsive web applications. I specialize in creating scalable user interfaces using React and TypeScript, focusing on performance, usability, and clean, maintainable code.",

    text2:
      "My work often includes developing dashboards, internal tools, and business applications that integrate with RESTful APIs and help streamline workflows. I enjoy transforming complex ideas into intuitive digital experiences that work smoothly across devices.",

    text3:
      "Before focusing fully on development, I spent nearly a decade working in graphic and UI/UX design, which helps me approach development with a strong understanding of layout, usability, and visual clarity.",

    text4:
      "Currently, I’m expanding my skill set into full-stack development, learning Next.js and Node.js and building side projects to deepen my understanding of modern web architecture.",
  },
  // {
  //   title: "Hi, I'm a Front-End Developer",
  //   text: "I’m a frontend developer with 4 years of experience building modern, responsive web applications. I focus on creating clean, scalable interfaces and transforming complex ideas into intuitive user experiences. My work includes developing dashboards, internal systems, and interactive applications that integrate seamlessly with backend services.",
  //   text2:
  //     "I care deeply about code quality, usability, and performance, and I enjoy building interfaces that are both visually polished and technically reliable across devices.",
  // },
  // {
  //   title: "What I Do",
  //   text: "I build single-page applications (SPAs) using React.js and TypeScript, focusing on maintainable architecture and responsive design. My work often involves developing dashboards, internal tools, and business applications that interact with RESTful APIs.",
  //   text2:
  //     "I collaborate closely with designers and backend teams, optimize UI performance, and ensure code quality through modern development practices and version control.",
  // },
  {
    title: "Tech I Work With",
    text: "React.js",
    text2: "TypeScript / JavaScript",
    text3: "HTML / CSS / SCSS",
    text4: "Tailwind / Bootstrap",
    text5: "Git / Azure DevOps",
    text6: "REST APIs",
    text7: "Figma",
  },
  // {
  //   title: "Design Background",
  //   text: "Before focusing fully on development, I spent nearly a decade working in graphic and UI design. This background helps me approach development with a strong understanding of layout, usability, and visual clarity.",
  // },
  // {
  //   title: "Projects I'm Proud Of",
  //   text: "I’ve worked on a range of real-world applications including telephony management systems, service dashboards, booking platforms, datacenter monitoring tools, and secure file platforms. These projects helped businesses streamline workflows and manage complex processes through intuitive interfaces.",
  // },
  // {
  //   title: "What I'm Learning",
  //   text: "I’m currently expanding my skills toward full-stack development, focusing on Next.js and Node.js. I enjoy building side projects to experiment with new tools and deepen my understanding of modern web architecture.",
  // },
  {
    title: "Languages",
    text: "Macedonian (native)",
    text2: "Slovenian (fluent)",
    text3: "Serbian (conversational)",
  },
  {
    title: "Outside of Work",
    text: "Beyond code, I enjoy traveling, exploring nature, discovering new music, and spending time with family.",
  },
];

const About: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Main content wrapper below navbar */}
      <div className="flex flex-col pt-20 px-8 sm:px-16 md:px-32 lg:px-50 h-full w-full">
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
                  {section.text2 && (
                    <p className="text-base text-stone leading-relaxed mt-4">
                      {section.text2}
                    </p>
                  )}
                  {section.text3 && (
                    <p className="text-base text-stone leading-relaxed mt-4">
                      {section.text3}
                    </p>
                  )}
                  {section.text4 && (
                    <p className="text-base text-stone leading-relaxed mt-4">
                      {section.text4}
                    </p>
                  )}
                  {section.text5 && (
                    <p className="text-base text-stone leading-relaxed mt-4">
                      {section.text5}
                    </p>
                  )}
                  {section.text6 && (
                    <p className="text-base text-stone leading-relaxed mt-4">
                      {section.text6}
                    </p>
                  )}
                  {section.text7 && (
                    <p className="text-base text-stone leading-relaxed mt-4">
                      {section.text7}
                    </p>
                  )}
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
