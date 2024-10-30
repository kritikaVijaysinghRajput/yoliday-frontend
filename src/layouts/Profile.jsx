import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import projectData from "@data";

function Project() {
  const [activeTab, setActiveTab] = useState("Project");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
