import { interesets, technicalSkills } from "../data";

const About = () => {
  return (
    <div className="page">
      <div className="title-holder">
        <h1>About</h1>
      </div>
      <h3>Technical skills:</h3>
      <ul className="technical-skills">
        {technicalSkills.map((item, i) => (
          <li key={i}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <h3>Interests:</h3>
      <ul className="list">
        {interesets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
