import "./home.scss";
import github from "/assets/icons/github.png";
import linkedIn from "/assets/icons/linkedIn.png";
import moon from "/assets/planets/moon.png";
import saturn from "/assets/planets/saturn.png";
import mars from "/assets/planets/mars.png";
import ShootingStar from "../../components/ShootingStar/ShootingStar";
import { useEffect, useRef, useState } from "react";

const Home = () => {

    const [showStar, setShowStar] = useState(false);
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            let width = containerRef.current.offsetWidth;
            let height = containerRef.current.offsetHeight;
            setPositionX(Math.floor(Math.random() * width));
            setPositionY(Math.floor(Math.random() * height));
            setShowStar(true);
            setTimeout(() => setShowStar(false), 800);
        }, 3000)

        return () => clearInterval(interval);
    }, [])

    return (
        <section className="home" id="home" ref={containerRef}>
            <img src={moon} alt="image-of-moon" className="moon" />
            <img src={saturn} alt="image-of-saturn" className="saturn" />
            <img src={mars} alt="image-of-mars" className="mars" />
            {showStar && positionX && <ShootingStar x={positionX} y={positionY} />}
            <p>
                <span>Hi my name is</span>
                <span>Spencer Evans</span>
                <span>I'm a Web Developer</span>
                <div className="profile-links">
                    <a href="https://github.com/spencer-234" rel="noopener roferrer">
                        <img src={github} alt="link-to-my-github-account" />
                    </a>
                    <a href="https://www.linkedin.com/in/spencer-evans-11155a28b/" rel="noopener roferrer">
                        <img src={linkedIn} alt="link-to-my-github-account" />
                    </a>
                </div>
            </p>
        </section>
    )
}

export default Home