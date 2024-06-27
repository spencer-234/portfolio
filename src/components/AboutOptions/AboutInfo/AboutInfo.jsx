import "./aboutInfo.scss";

const AboutInfo = ({ setCurrentSection }) => {
    return (
        <div className="aboutInfo">
            <h2>About the Developer</h2>
            <span className="schedule">Tonight&#39;s Schedule</span>
            <ul>
                <li
                    className="first"
                    onClick={() => setCurrentSection("skills")}
                >
                    <span className="time">8:00pm</span>{" "}
                    Skills
                </li>
                <li
                    className="second"
                    onClick={() => setCurrentSection("home")}
                >
                    <span className="time">9:00pm</span>{" "}
                    Education
                </li>
                <li
                    className="third"
                    onClick={() => setCurrentSection("home")}
                >
                    <span className="time">10:00pm</span>{" "}
                    Hobbies
                </li>
                <li
                    className="fourth"
                    onClick={() => setCurrentSection("home")}
                >
                    <span className="time">11:00pm</span>{" "}
                    That One Part Where Stuff Is Scrolled Too Fast
                </li>
            </ul>
        </div>
    )
}

export default AboutInfo