import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import axios from "axios";

function Project() {
  const [activeTab, setActiveTab] = useState("Project");
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState([]); // Ensure this is an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://yoliday-backendd.onrender.com/api/projects"
        );
        console.log("Fetched projects:", response.data);
        if (Array.isArray(response.data)) {
          setProjects(response.data);
        } else {
          console.error("Expected an array, but got:", response.data);
          setError("Unexpected data format");
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = Array.isArray(projects)
    ? projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <p className="mb-2 text-lg font-base">Portfolio</p>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="mt-4 space-y-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
}

export default Project;
