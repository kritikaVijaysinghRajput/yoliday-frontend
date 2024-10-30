import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Project from "../screens/Project";
import Tabs from "../components/Tab";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen">
      {!isMobile && <Sidebar />}
      <div className="flex-1 flex flex-col relative">
        <Navbar />
        <div className="p-4">
          <Project />
        </div>

        {isMobile && (
          <button
            className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg"
            style={{ zIndex: 10 }}
          >
            Filter
          </button>
        )}
      </div>
      {isMobile && <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />}
    </div>
  );
}

export default Portfolio;
