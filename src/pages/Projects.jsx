import { useState } from "react";
import { projectsData } from "../data";
import Card from "../components/ui/Card";
import FilterRecords from "../components/ui/FilterRecords";

const Projects = () => {
  const [initialData, setInitialData] = useState(projectsData);
  //   const [checked, setChecked] = useState(true)
  const handleFilter = (e) => {
    if (e.target.id === "all") {
      setInitialData(projectsData);
    }
    if (e.target.id === "production") {
      const newArr = projectsData.filter((item) => item.stage === "Production");
      setInitialData(newArr);
    }
    if (e.target.id === "practice") {
      const newArr = projectsData.filter((item) => item.stage === "Practice");
      setInitialData(newArr);
    }
  };
  return (
    <div className="page">
      <div className="title-holder">
        <h1>Projects</h1>
        <FilterRecords handleFilter={handleFilter} />
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
