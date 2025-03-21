import React from "react";
import { useLocation } from "react-router-dom";
import "./Background.css";

const Background: React.FC = () => {
  const location = useLocation();

  const getCornerLabel = () => {
    const path = location.pathname;
    switch (path) {
      case "/":
        return {
          text: "home",
          className:
            "top-10 left-55 text-[15rem] font-extrabold text-stone opacity-7 rotate-90 origin-top-left",
        };
      case "/projects":
        return {
          text: "projects",
          className:
            "top-10 left-55 text-[15rem] font-extrabold text-stone opacity-7 rotate-90 origin-top-left",
        };
      case "/contact":
        return {
          text: "contact",
          className:
            "top-10 left-55 text-[15rem] font-extrabold text-stone opacity-7 rotate-90 origin-top-left",
        };
      case "/about":
        return {
          text: "about",
          className:
            "top-10 left-55 text-[15rem] font-extrabold text-stone opacity-7 rotate-90 origin-top-left",
        };
      default:
        return null;
    }
  };

  const label = getCornerLabel();

  return (
    <>
      <div className="background" />
      {label && (
        <div
          className={`fixed z-0 pointer-events-none ${label.className}`}
          style={{ fontFamily: '"DM Serif Text", serif' }}
        >
          {label.text}
        </div>
      )}
    </>
  );
};

export default Background;
