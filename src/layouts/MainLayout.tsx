import React from "react";
import Navbar from "../components/navbar/Navbar";
import Background from "../components/background/Background";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <Background /> {/* Ensure this is rendered at the back */}
      <Navbar /> {/* Navbar stays on top */}
      <main className="z-1 relative flex w-full p-0">
        {/* This will render the current page */}
        <Outlet /> {/* This will render the current page */}
      </main>
    </>
  );
};

export default MainLayout;
