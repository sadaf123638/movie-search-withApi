import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div className="navbar">
            <nav>
                <h1 className="nav-heading"><a href="">🎬 MovieExplorer</a></h1>
                <ul className={`nav-item ${menuOpen ? "show-menu" : ""}`}>
                    <li className="nav-list">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-list">
                        <a href="#search" className="nav-link">Search</a>
                    </li>
                    <li className="nav-list">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                </ul>
                {/* Toggle Icons */}
                <div className="icons">
                    <i
                        className={`fas fa-bars bar-icon ${menuOpen ? "hide" : ""}`}
                        onClick={toggleMenu}
                    ></i>
                    <i
                        className={`fas fa-times cross-icon ${menuOpen ? "" : "hide"}`}
                        onClick={toggleMenu}
                    ></i>
                </div>
            </nav>
            <div className="header-movie">
                <h1>🎬 MovieExplore</h1>
                <p>Discover Movies, Reviews & More</p>
                <div className="btn">
                <button>Watch Now</button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;