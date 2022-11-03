import { useState, useEffect } from "react";
import { projectsData } from "../data";
import Card from "../components/ui/Card";
import FilterRecords from "../components/ui/FilterRecords";

const Projects = () => {
  const [initialData, setInitialData] = useState(projectsData);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    setSelected("all");
  }, []);
  const handleFilter = (e) => {
    if (e.target.id === "all") {
      setInitialData(projectsData);
      setSelected("all");
    }
    if (e.target.id === "production") {
      const newArr = projectsData.filter((item) => item.stage === "Production");
      setInitialData(newArr);
      setSelected("production");
    }
    if (e.target.id === "practice") {
      const newArr = projectsData.filter((item) => item.stage === "Practice");
      setInitialData(newArr);
      setSelected("practice");
    }
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
