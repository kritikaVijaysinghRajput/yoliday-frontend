import React from "react";
import { FaBell } from "react-icons/fa";
import { user } from "../assets/index";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow w-full">
      <h2 className="text-lg font-semibold"></h2>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 cursor-pointer" />
        <img
          src={user}
          alt="User Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default Navbar;
