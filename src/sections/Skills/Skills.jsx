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
      name: "JavaScript",
      img: js,
    },
    {
      name: "NodeJs",
      img: node,
    },
    {
      name: "React",
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
      <div className="scroll-container">
        <div className="scroll-element primary">
          {devSkills.map((skill, i) => (
            <div className="skill-element" key={i}>
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="scroll-element secondary">
          {devSkills.map((skill, i) => (
            <div className="skill-element" key={i}>
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
