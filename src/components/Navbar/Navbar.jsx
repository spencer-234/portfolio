import "./navbar.scss";
import devImage from "../../assets/avatars/avatar.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container">
      <nav className="navbar">
        {menuOpen ? (
          <div className="sm-menu">
            <CloseIcon
              onClick={() => {
                setMenuOpen(false);
              }}
              className="menu-spin icon"
            />
            <ul className="menu-options">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="sm-menu">
            <MenuIcon
              onClick={() => {
                setMenuOpen(true);
              }}
              className="icon"
            />
          </div>
        )}
        <ul className="lg-menu">
          <div className="half left">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </div>
          <div className="half">
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </div>
        </ul>
      </nav>
      <div className="image-container">
        <img src={devImage} alt="developer image" />
      </div>
    </header>
  );
};

export default Navbar;
