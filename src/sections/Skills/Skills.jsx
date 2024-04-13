import "./skills.scss";
import css from "../../assets/icons/css.png";
import html from "../../assets/icons/html.png";
import js from "../../assets/icons/js.png";
import node from "../../assets/icons/node.png";
import react from "../../assets/icons/react.png";
import scss from "../../assets/icons/scss.png";

const Skills = () => {
  const devSkills = [
    {
      name: "HTML",
      img: html,
    },
    {
      name: "CSS",
      img: css,
    },
    {
      name: "JAVASCRIPT",
      img: js,
    },
    {
      name: "NODEJS",
      img: node,
    },
    {
      name: "REACT",
      img: react,
    },
    {
      name: "SCSS",
      img: scss,
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2>Skills</h2>
        <div className="line"></div>
      </div>
      <div className="scroll">
        <div>
          {devSkills.map((skill, i) => (
            <span key={i}>{skill.name}</span>
          ))}
        </div>
        <div>
          {devSkills.map((skill, i) => (
            <span key={i}>{skill.name}</span>
          ))}
        </div>
      </div>
      <div className="scroll">
        <div>
          {devSkills.map((skill, i) => (
            <span key={i}>{skill.name}</span>
          ))}
        </div>
        <div>
          {devSkills.map((skill, i) => (
            <span key={i}>{skill.name}</span>
          ))}
        </div>
      </div>
      <div className="scroll img">
        <div>
          {devSkills.map((skill, i) => (
            <img src={skill.img} alt="skill image" key={i}/>
          ))}
        </div>
        <div>
          {devSkills.map((skill, i) => (
            <img src={skill.img} alt="skill image" key={i}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
