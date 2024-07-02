import "./aboutEducation.scss";
import germanna from "/assets/icons/germanna.png";
import vcu from "/assets/icons/vcu.png";
import back from "/assets/back-arrow.svg";

const AboutEducation = ({ setCurrentSection }) => {
    return (
        <div className="about-education">
            <div className="back-arrow" onClick={() => setCurrentSection("info")}>
                <img src={back} alt="back-arrow" />
                Back
            </div>
            <h2>Education</h2>
            <div className="education-container">
                <p>
                    After achieving two associate&#39;s degrees
                    from Germanna Community College, I decided
                    to pursue web development in my studies at Virginia Commonwealth University. On my own time,
                    I continue to learn from those around me and wish to bring my skills
                    to you and provide my work!
                </p>
                <div className="education-images">
                    <img src={germanna} alt="germanna-logo" />
                    <img src={vcu} alt="vcu-logo" />
                </div>
            </div>
        </div>
    )
}

export default AboutEducation