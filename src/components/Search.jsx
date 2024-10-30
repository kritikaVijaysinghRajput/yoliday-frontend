import React from "react";
import { FaSearch } from "react-icons/fa";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex items-center bg-white border rounded-lg p-2 w-full md:w-72">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 p-2 focus:outline-none"
      />
      <FaSearch className="text-gray-500 ml-2" />
    </div>
  );
}

export default Search;
