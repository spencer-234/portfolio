import "./about.scss";
import Terminal from "../../components/Terminal/Terminal.jsx";
import Germanna from "../../assets/icons/germanna.png";
import Vcu from "../../assets/icons/vcu.png";
import Iod from "../../assets/icons/IOD.webp";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-main">
        <div className="about-header">
          <h2>About Me</h2>
          <div className="line"></div>
        </div>
        <div className="about-container">
          <div className="terminal-container">
            <Terminal />
          </div>
          <div className="education">
            <div className="education-header">
              <h3>Education</h3>
              <div className="line"></div>
            </div>
            <ul>
              <li>
                <img src={Germanna} alt="germanna logo" />
              </li>
              <li>
                <img src={Vcu} alt="vcu logo" />
              </li>
              <li>
                <img src={Iod} alt="iod image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
