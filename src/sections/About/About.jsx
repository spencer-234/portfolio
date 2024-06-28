import "./about.scss";
import { useRef, useEffect, useState } from "react";
import soundOn from "/assets/icons/speaker.svg";
import muted from "/assets/icons/muted.svg";
import audio from "/assets/audio/bg-music.mp3";
import scanlines from "/assets/scanlines.png";
import AboutHome from "../../components/AboutOptions/AboutHome/AboutHome";
import AboutInfo from "../../components/AboutOptions/AboutInfo/AboutInfo";
import AboutSkills from "../../components/AboutOptions/AboutSkills/AboutSkills";
import AboutEducation from "../../components/AboutOptions/AboutEducation/AboutEducation";
import AboutCredits from "../../components/AboutOptions/AboutCredits/AboutCredits";

const About = () => {

    const sectionRef = useRef(null);
    const [start, setStart] = useState(false);
    const [volume, setVolume] = useState(false);
    const [currentSection, setCurrentSection] = useState("home");
    const options = {
        home: <AboutHome setCurrentSection={setCurrentSection} />,
        info: <AboutInfo setCurrentSection={setCurrentSection} />,
        skills: <AboutSkills setCurrentSection={setCurrentSection} />,
        education: <AboutEducation setCurrentSection={setCurrentSection} />,
        credits: <AboutCredits setCurrentSection={setCurrentSection} />
    };


    // Once full section is on page start the animations
    const startAnimation = (entries) => {
        const element = entries[0];

        if (element.isIntersecting) {
            setStart(true);
        }
    }

    // use intersection observer to track bottom of the section
    useEffect(() => {
        const observer = new IntersectionObserver(startAnimation)
        if (observer && sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (observer) {
                observer.disconnect()
            }
        }
    }, [])

    return (
        <section className="about" id="about">
            <div className={`about-container ${start && 'turn-on'}`}>
                <img
                    src={volume ? soundOn : muted}
                    alt={volume ? 'click-here-to-mute' : 'click-here-to-play-music'}
                    className="volume"
                    onClick={() => setVolume(prev => !prev)}
                />
                <img src={scanlines} alt="" className="scan" />
                {options[currentSection]}
            </div>
            {/* div to tell if full section is on screen */}
            <div className="start-animation" ref={sectionRef}></div>
            {start && <audio src={audio} autoPlay loop muted={!volume} />}
        </section>
    )
}

export default About