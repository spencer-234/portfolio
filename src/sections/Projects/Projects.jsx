import "./projects.scss";
import { projects } from "../../../utils/projects";
import { useState, useEffect, useRef } from "react";

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(0);
    const [showContent, setShowContent] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [openDesc, setOpenDesc] = useState(false);
    const projectsRef = useRef(null);
    let timeout;

    // callback function for intersection observer to start animation
    const startAnimation = (entries) => {
        const element = entries[0];

        if (element.isIntersecting) {
            setShowContent(true);
            setShowSkills(true);
        }
    }

    // function to have lines appear in between the first and last skills at random
    const setLines = (lines) => {
        const leftView = 100 / lines.length;
        lines.forEach((line, i) => {
            line.style.left = `${(i + 0.3) * leftView}vw`;
            line.style.height = `${Math.floor(Math.random() * (30 - 10 + 1)) + 10}vh`;
        })
    }

    // function to change selected project and set new skills for animation
    const changeProject = (direction) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        if (direction === "next" && selectedProject !== (projects.length - 1)) {
            setShowSkills(false);
            setSelectedProject((prev) => prev + 1);
            timeout = setTimeout(() => setShowSkills(true), 300);

        } else if (direction === "prev" && selectedProject !== (0)) {
            setShowSkills(false);
            setSelectedProject((prev) => prev - 1);
            timeout = setTimeout(() => setShowSkills(true), 300);
        }
    }

    // use intersection observer to show content once the section is on screen
    useEffect(() => {
        const observer = new IntersectionObserver(startAnimation)
        if (observer && projectsRef.current) {
            observer.observe(projectsRef.current)
        }

        return () => {
            if (observer) {
                observer.disconnect()
            }
        }
    }, [])

    useEffect(() => {
        const lines = document.getElementsByClassName("line");
        setLines([...lines]);
    }, [selectedProject])

    return (
        <section id="projects" className="projects">
            {projects[selectedProject].stack.map((skill, i) => (
                <div
                    key={i}
                    className={
                        `line
                        ${showSkills && 'show-skills'} 
                        ${i === 0 ? 'first'
                            : i === (projects[selectedProject].stack.length - 1) ? "last"
                                : ""}`}
                >
                    <div></div>
                    <img src={skill} alt={`skill-used-in-project-${skill.split("/")[4].replace(".png", "")}`} />
                </div>
            ))}
            <div className={`projects-content ${showContent && 'show-content'}`}>
                <h2>Projects</h2>
                <div className="project-info">
                    <h3>{projects[selectedProject].name}</h3>
                    <div className="img-container">
                        {openDesc && (
                            <p>{projects[selectedProject].desc}</p>
                        )}
                        <img src={projects[selectedProject].img} alt={`${projects[selectedProject].name}-image`} ref={projectsRef} />
                    </div>
                    <div className="project-options">
                        <a href={projects[selectedProject].link} rel="noopener noreferrer">View Project</a>
                        <span onClick={() => setOpenDesc((prev) => !prev)}>{openDesc ? 'Close' : 'Read'} Description</span>
                    </div>
                    <div className="buttons">
                        <span onClick={() => changeProject("prev")}>{"<"} Prev</span>
                        <span onClick={() => changeProject("next")}>Next {">"}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects