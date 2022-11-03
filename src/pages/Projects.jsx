import Card from "../components/ui/Card";
import { projectsData } from "../data";

const Projects = () => {
  return (
    <div className="page">
      <h1>Projects</h1>
      <div className="projects">
        {projectsData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
