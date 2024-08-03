import "./about.scss";
import flashlightOn from "/assets/flashlight-on.png"
import flashlightOff from "/assets/flashlight-off.png"
import light from "/assets/light.png"
import { useRef, useState, useEffect } from "react";

const About = () => {

    const [lightOn, setLightOn] = useState(false);
    const [flashlightDrop, setFlashlightDrop] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const contentRef = useRef(null)

    // Once full section is on page start the animations
    const startAnimation = (entries) => {
        const element = entries[0];

        if (element.isIntersecting) {
            setShowContent(true);
            setTimeout(() => setFlashlightDrop(true), 600)
            setTimeout(() => setLightOn(true), 2100)
        }
    }

    // use intersection observer to track bottom of the section
    useEffect(() => {
        const observer = new IntersectionObserver(startAnimation)
        if (observer && contentRef.current) {
            observer.observe(contentRef.current)
        }

        return () => {
            if (observer) {
                observer.disconnect()
            }
        }
    })

    return (
        <section className={`about ${lightOn && 'light-sea'}`} id="about">
            {flashlightDrop && (
                <img src={lightOn ? flashlightOn : flashlightOff} alt="image-of-flashlight" className={`flashlight ${lightOn && 'float'}`} />
            )
            }
            <div className={`about-content ${showContent && 'show-content'}`}>
                <h2 className={`${lightOn && 'light-on'}`}>About Me</h2>
                <div>
                    <p ref={contentRef} className={`${lightOn && 'light-on'}`}>
                        I'm a full-stack web developer with a focus mainly on frontend development.
                        After achieving my associate's degree, I went on to Virginia Commonwealth University to learn
                        about web development. With what I've learned, I plan to use my skills in design, front and back
                        end development, and attention to detail to bring my best work for your needs.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About