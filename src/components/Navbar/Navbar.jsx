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
                <img
                    src={menuOpen ? close : menu}
                    alt="open-menu"
                    className={menuOpen ? 'menu-open' : 'menu-close'}
                    onClick={() => setMenuOpen((prev) => !prev)} />
            </nav>
        </header>
    )
}

export default Navbar