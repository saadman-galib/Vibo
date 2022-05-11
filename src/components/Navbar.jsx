import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="navbar-container">
            <div className="navbar-items">
                <div className="logo">
                    <img src="./images/logo.png" alt="logo"></img>
                    <div className="menu-icon" onClick={handleClick}>
                        <i
                            className={
                                click
                                    ? "fas fa-times times"
                                    : "fas fa-bars bars"
                            }
                        ></i>
                    </div>
                </div>
                <div
                    className={
                        click
                            ? "nav-items-container-mobile"
                            : "nav-items-container"
                    }
                >
                    <ul>
                        <li>
                            <Link to="/" className="nav-item">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                App
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                Info
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
