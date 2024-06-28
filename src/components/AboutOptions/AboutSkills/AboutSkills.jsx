import "./aboutSkills.scss";
import back from "/assets/back-arrow.svg";
import sliderArrow from "/assets/sliderArrow.svg";
import { skills } from "../../../../utils/skills";
import { useState } from "react";



const AboutSkills = ({ setCurrentSection }) => {
    const [current, setCurrent] = useState(0);

    const handleClick = (direction) => {
        if ((direction === "previous") && current > 0) {
            setCurrent(current - 1);
        } else if ((direction === 'next') && (current < (skills.length - 1))) {
            setCurrent(current + 1);
        }
    }

    return (
        <div className="about-skills">
            <img
                src={sliderArrow}
                alt="previous-skill"
                className="arrow previous"
                onClick={() => handleClick("previous")}
            />
            <img
                src={sliderArrow}
                alt="previous-skill"
                className="arrow next"
                onClick={() => handleClick("next")}
            />
            <div className="back-arrow" onClick={() => setCurrentSection("info")}>
                <img src={back} alt="back-arrow" />
                Back
            </div>
            <h2>Skills</h2>
            <div className="skill-container">
                <span>{skills[current].skill}</span>
                <img src={skills[current].img} alt={`${skills[current].skill}-logo`} />
            </div>
            <span>{`${current + 1}/${skills.length} `}</span>
        </div>
    )
}

export default AboutSkills