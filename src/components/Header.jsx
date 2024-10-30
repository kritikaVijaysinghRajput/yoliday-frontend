import React from "react";

function Header({ activeTab, setActiveTab }) {
  const tabs = ["Project", "Saved", "Shared", "Achievement"];

  return (
    <div className="flex border-b-2 mb-4 overflow-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-md whitespace-nowrap ${
            activeTab === tab
              ? "border-b-2 border-orange-500 text-orange-500"
              : "text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Header;
