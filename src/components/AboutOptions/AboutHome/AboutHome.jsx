import "./aboutHome.scss";
import arrow from "/assets/arrow.png";
import dogImage from "/assets/dog-dev.png"
import spikey from "/assets/spikey-bg.png";


const AboutHome = ({ setCurrentSection }) => {
  return (
    <div className="about-home">
      <div className="learn-more">
        <img src={arrow} alt="" className="left" />
        <img src={arrow} alt="" className="right" />
        <span>Web Developer</span>
        <span className="learn" onClick={() => setCurrentSection("info")}>Learn More</span>
        <span>Limited Time Offer!</span>
      </div>
      <div className="image-container">
        <img src={dogImage} alt="dog-image" className="dog-image" />
        <img src={spikey} alt="" className="new-bg" />
        <span>NEW!</span>
      </div>
    </div>
  )
}

export default AboutHome