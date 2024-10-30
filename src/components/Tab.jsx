import React from "react";
import { FaHome, FaFolder, FaClipboard, FaUser } from "react-icons/fa";

function Tab({ activeTab, setActiveTab }) {
  const tabs = [
    { name: "Home", icon: <FaHome />, key: "home" },
    { name: "Portfolio", icon: <FaFolder />, key: "portfolio" },
    { name: "Input", icon: <FaClipboard />, key: "input" },
    { name: "Profile", icon: <FaUser />, key: "profile" },
  ];

  return (
    <div className="fixed bottom-0 bg-white left-0 right-0  shadow-md flex justify-around items-center border-t">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`flex flex-col items-center py-2 px-4 ${
            activeTab === tab.key ? "text-[#DF5532]" : "text-gray-400"
          }`}
        >
          {tab.icon}
          <span className="text-xs">{tab.name}</span>
        </button>
      ))}
    </div>
  );
}

export default Tab;
