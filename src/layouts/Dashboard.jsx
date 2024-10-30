import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = ({ children }) => {
  return (
    <div className="w-full text-sm md:text-base">
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Navbar />
          <main className="flex-1 overflow-auto p-4 bg-gray-200">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
