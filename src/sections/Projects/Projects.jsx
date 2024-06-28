import "./projects.scss";
import { projects } from "../../../utils/projects";
import { useState, useEffect, useRef } from "react";

const Projects = () => {

    const [start, setStart] = useState(false);
    const projectsRef = useRef(null);

    // Once full section is on page start the animations
    const startAnimation = (entries) => {
        const element = entries[0];

        if (element.isIntersecting) {
            setStart(true);
        } else {
            setStart(false);
        }
    }

    // use intersection observer to track bottom of the section
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


    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2>Projects</h2>
                <div className={`border ${start && 'start'}`}></div>
                <div className="projects-list" ref={projectsRef}>
                    {projects.map((project, i) => (
                        <div className="project-info" key={i}>
                            <div className="info-container">
                                <img src={project.img} alt={`${project.name}-image`} />
                                <div className="info">
                                    <span>{project.name}</span>
                                    <p>{project.desc}</p>
                                    <a href={project.link} rel="noopenner noreferrer">View {project.name}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects