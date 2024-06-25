import "./navbar.scss";
import logo from "/assets/logo.png";

const Navbar = () => {
    return (
        <header className="nav-container">
            <nav>
                <div className="nav-items">
                    <img src={logo} alt="developer-logo" />
                    <div className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">About Me</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar