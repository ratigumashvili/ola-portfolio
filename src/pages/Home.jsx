import { Link } from "react-router-dom";

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
      <div
        className="greetnig-text"
        dangerouslySetInnerHTML={{ __html: about?.bio.toString() }}
      ></div>
      <Link to="/projects" className="cta">
        View my projects
      </Link>
    </div>
  );
};

export default Home;
