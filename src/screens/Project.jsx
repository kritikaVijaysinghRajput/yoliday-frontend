import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import projectData from "../../../server/data/data.json";

function Project() {
  const [activeTab, setActiveTab] = useState("Project");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <p className="mb-2 text-lg font-base">Portfolio</p>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="mt-4 space-y-4">
        {filteredProjects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
