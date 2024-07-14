import "./welcome.scss";
import avatar from "../../assets/avatars/avatar2.png";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Welcome = ({ setScrolled }) => {

  return (
    <section className="welcome">
      <div className="welcome-container">
        <div className="main-text">
          <h1>Spencer Evans</h1>
        </div>
        <div className="sm-icons">
            <a href="https://github.com/spencer-234" rel="noopener noreferrer" target="_blank">
              <GitHubIcon className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/spencer-evans-11155a28b" rel="noopener noreferrer" target="_blank">
              <LinkedInIcon className="icon"/>
            </a>
        </div>
        <p>Welcome to my Portfolio!</p>
        <DoubleArrowIcon className="arrow" onClick={() => setScrolled(true)}/>
      </div>
      <img src={avatar} alt="developer image" />
    </section>
  );
};

export default Welcome;
