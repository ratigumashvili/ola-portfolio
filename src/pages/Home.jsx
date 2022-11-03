import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">
      <h1>Hello,</h1>
      <h2 className="greetnig-title">
        I'm <span>Rati</span> Gumashvili
      </h2>
      <p className="greetnig-text">
        Tbilisi based front-end developer from Georgia. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Et quaerat qui corrupti beatae
        quibusdam dolorem reiciendis labore facere distinctio fuga, similique
        accusamus laudantium nam harum! Tempore accusamus suscipit sit aliquid.
      </p>
      <Link to="/projects" className="cta">
        View my projects
      </Link>
    </div>
  );
};

export default Home;
