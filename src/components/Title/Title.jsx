import "./title.scss";
import { useContext } from "react";
import { VisibilityContext } from "../../VisibilityContext.jsx";
import devImage from "../../assets/avatars/avatar.png";

const Title = () => {

  const { visibility, setVisibility } = useContext(VisibilityContext);

  const handleClick = (e) => {
    e.preventDefault();
    setVisibility(false);
  }

  return (
    <div className={visibility ? "title" : "title fadeOut"}>
      <div className="main-content">
        <div className="text-container">
          <p className="first">Hi, my name is <span className="name">Spencer Evans</span>,</p>
          <p className="second">I'm a Web Developer and can't</p>
          <p className="third">wait to work with you!</p>
        </div>
        <img src={devImage} alt="developer image" />
      </div>
      <button data="Get Started" onClick={(e) => handleClick(e)}></button>
    </div>
  );
};

export default Title;
