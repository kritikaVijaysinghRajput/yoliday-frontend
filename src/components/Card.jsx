import React from "react";

function Card({ project }) {
  return (
    <div className="bg-white h-32 rounded-lg shadow-md flex items-center ">
      <img
        src={project.image}
        alt={project.title}
        className="w-40 h-full object-cover rounded-s-lg"
      />
      <div className="ml-4 flex p-1 flex-col flex-grow">
        <h3 className="font-semibold m-1 text-sm md:text-base">
          {project.title}
        </h3>
        <p className="text-xs md:text-sm text-gray-600">
          {project.description}
        </p>
        <div className="mt-auto self-end">
          <button className="bg-gradient-to-r  from-[#F39519] to-[#FFCD67] m-1 text-white px-2 py-1 text-xs md:px-4 md:py-2 md:text-sm mt-4 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
