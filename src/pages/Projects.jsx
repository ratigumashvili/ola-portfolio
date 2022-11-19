import { useState } from "react";
import { projectsData } from "../data";
import Card from "../components/ui/Card";
import FilterRecords from "../components/ui/FilterRecords";

const Projects = () => {
  const [initialData, setInitialData] = useState(projectsData);
  const [selected, setSelected] = useState("all");

  const handleFilter = (value) => {
    if (value === "all") {
      setInitialData(projectsData);
    }
    if (value === "production") {
      setInitialData(
        projectsData.filter(({ stage }) => stage === "Production")
      );
    }
    if (value === "practice") {
      setInitialData(projectsData.filter(({ stage }) => stage === "Practice"));
    }
    setSelected(value);
  };

  return (
    <div className="page">
      <div className="title-holder">
        <h1>Projects</h1>
        <FilterRecords handleFilter={handleFilter} selected={selected} />
      </div>
      <div className="projects">
        {initialData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
