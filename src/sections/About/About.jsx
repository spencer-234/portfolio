import "./about.scss";
import { useRef, useEffect, useState } from "react";
import soundOn from "/assets/icons/speaker.svg";
import muted from "/assets/icons/muted.svg";
import audio from "/assets/audio/bg-music.mp3";
import scanlines from "/assets/scanlines.png";

const About = () => {

    const sectionRef = useRef(null);
    const [start, setStart] = useState(false);
    const [volume, setVolume] = useState(false);

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
        <section className="about">
            <div className={`about-container ${start && 'turn-on'}`}>
                <img
                    src={volume ? soundOn : muted}
                    alt="click-here-to-mute"
                    className="volume"
                    onClick={() => setVolume(prev => !prev)}
                />
                <img src={scanlines} alt="" className="scan" />
            </div>
            {/* div to tell if full section is on screen */}
            <div className="start-animation" ref={sectionRef}></div>
            {start && <audio src={audio} autoPlay loop muted={!volume} />}
        </section>
    )
}

export default About