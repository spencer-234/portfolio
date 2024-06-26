import "./home.scss";
import DevSvg from "../../components/DevSvg/DevSvg";
import github from "/assets/icons/github.png";
import linkedIn from "/assets/icons/linkedIn.png";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="glass">
                <div className="home-container">
                    <div className="intro">
                        <h1>Spencer Evans</h1>
                        <span>Web Developer</span>
                        <div className="link-container">
                            <a href="https://github.com/spencer-234" rel="noopener noreferrer">
                                <img src={github} alt="github-account-link" />
                            </a>
                            <a href="www.linkedin.com/in/spencer-evans-11155a28b" rel="noopener noreferrer">
                                <img src={linkedIn} alt="linked-in-account-link" />
                            </a>
                        </div>
                    </div>
                    <div className="dev-svg">
                        <DevSvg />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home