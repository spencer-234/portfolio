import "./home.scss";
import github from "/assets/icons/github.png";
import linkedIn from "/assets/icons/linkedIn.png";
import ShootingStar from "../../components/ShootingStar/ShootingStar";
import stars from "/assets/stars.png";
import moon from "/assets/moon.png";
import island from "/assets/island.png";
import waves from "/assets/waves.png";
import { useEffect, useRef, useState } from "react";

const Home = () => {

    const [showStar, setShowStar] = useState(false);
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const containerRef = useRef(null);

    // interval to calculate page width and height to make sure shooting stars appear at each screen size
    useEffect(() => {
        const interval = setInterval(() => {
            let width = containerRef.current.offsetWidth;
            let height = containerRef.current.offsetHeight;
            setPositionX(Math.floor(Math.random() * width));
            setPositionY(Math.floor(Math.random() * height));
            setShowStar(true);
            setTimeout(() => setShowStar(false), 800);
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    return (
        <section className="home" id="home" ref={containerRef}>
            {showStar && positionX && <ShootingStar x={positionX} y={positionY} />}
            <img src={moon} alt="image-of-the-moon" className="moon" />
            <img src={island} alt="image-of-an-island-with-a-palm-tree" className="island" />
            <img src="" alt="" />
            <div className="stars">
                <img src={stars} alt="backdrop-of-stars-moving-slowly" />
                <img src={stars} />
            </div>
            <div className="waves">
                <img src={waves} alt="image-of-waves-moving-slowly" />
                <img src={waves} />
            </div>
            <div className="intro">
                <h2>Spencer Evans</h2>
                <span>Web Developer</span>
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact Me</a>
                </nav>
            </div>
        </section>
    )
}

export default Home