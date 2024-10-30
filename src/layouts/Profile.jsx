import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";

function Profile() {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("Project");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        {filteredProjects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
