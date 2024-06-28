import "./navbar.scss";
import logo from "/assets/logo.png";

const Navbar = () => {
    return (
        <header className="nav-container">
            <nav>
                <div className="nav-items">
                    <img src={logo} alt="developer-logo" />
                    <div className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About Me</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar