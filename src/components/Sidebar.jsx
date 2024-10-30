import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  dashboard,
  input,
  logojuice,
  portfolio,
  profile,
} from "../assets/index";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("portfolio");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`bg-[#DF5532] h-full transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } flex flex-col relative`}
    >
      <div className="p-4 ">
        <img
          src={logojuice}
          alt="Logo"
          className={`h-7 w-7 ${isCollapsed ? "hidden" : "block"}`}
        />
      </div>

      <div className="flex flex-col space-y-4 p-4">
        <a
          href="/dashboard"
          onClick={() => setActiveItem("dashboard")}
          className={`flex items-center space-x-2 text-white p-2 rounded-lg transition duration-300 hover:bg-gradient-to-r from-[#f39d88] to-[#DF5532] ${
            activeItem === "dashboard"
              ? "bg-gradient-to-r from-[#f39d88] to-[#DF5532]"
              : ""
          }`}
        >
          <img src={dashboard} alt="Dashboard Icon" className="h-5 w-5" />
          {!isCollapsed && <span>Dashboard</span>}
        </a>
        <a
          href="/portfolio"
          onClick={() => setActiveItem("portfolio")}
          className={`flex items-center space-x-2 text-white p-2 rounded-md transition duration-300 hover:bg-gradient-to-r from-[#f39d88] to-[#DF5532] ${
            activeItem === "portfolio"
              ? "bg-gradient-to-r from-[#f39d88] to-[#DF5532]"
              : ""
          }`}
        >
          <img src={portfolio} alt="Portfolio Icon" className="h-5 w-5" />
          {!isCollapsed && <span>Portfolio</span>}
        </a>
        <a
          href="/input"
          onClick={() => setActiveItem("input")}
          className={`flex items-center space-x-2 text-white p-2 rounded-md transition duration-300 hover:bg-gradient-to-r from-[#f39d88] to-[#DF5532] ${
            activeItem === "input"
              ? "bg-gradient-to-r from-[#f39d88] to-[#DF5532]"
              : ""
          }`}
        >
          <img src={input} alt="Input Icon" className="h-5 w-5" />
          {!isCollapsed && <span>Input</span>}
        </a>
        <a
          href="/profile"
          onClick={() => setActiveItem("profile")}
          className={`flex items-center space-x-2 text-white p-2 rounded-md transition duration-300 hover:bg-gradient-to-r from-[#f39d88] to-[#DF5532] ${
            activeItem === "profile"
              ? "bg-gradient-to-r from-[#f39d88] to-[#DF5532]"
              : ""
          }`}
        >
          <img src={profile} alt="Profile Icon" className="h-5 w-5" />
          {!isCollapsed && <span>Profile</span>}
        </a>
      </div>

      {/* Collapse Button at Bottom Corner */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute bottom-4 left-4 p-2 text-white focus:outline-none"
      >
        {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
      </button>
    </div>
  );
}

export default Sidebar;
