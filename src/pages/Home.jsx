import { Link } from "react-router-dom";
import Bio from "../components/ui/Bio";

import { about } from "../data";

const Home = () => {
  return (
    <div className="page">
      <div className="title-holder">
        <h1>Hello,</h1>
      </div>
      <h2 className="greetnig-title">
        I'm <span>Rati</span> Gumashvili
      </h2>
      <Bio text={about?.bio} />
      <Link to="/projects" className="cta">
        View my projects
      </Link>
    </div>
  );
};

export default Home;
