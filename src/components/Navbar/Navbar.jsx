import { useState } from "react";
import "./navbar.scss";
import menu from "/assets/menu.svg";
import close from "/assets/close.svg";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="nav-container">
            <nav>
                <h1>Spencer Evans</h1>
                {/* links to appear on desktop width */}
                <div className="desktop-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact Me</a>
                </div>
                {/* Sidebar on mobile */}
                <img
                    src={menuOpen ? close : menu}
                    alt="open-menu"
                    className={`${menuOpen ? 'menu-open' : 'menu-close'}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                />
                {menuOpen && (
                    <div className="sidebar">
                        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar