import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";
import { MenuItems } from "./MenuItems";
import logo from "../assets/logo.webp";


class Navbar extends Component {
    state = { clicked: false, activated: false }


    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    changeActive = () => {
        this.setState({ activated: !this.state.activated })
    }
    render() {
        return (
            <nav className="NavbarItems" id="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt='portfolio'></img>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} >

                    </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li>
                                <NavLink to={item.url} className={({ isActive }) => isActive ? 'nav-links active-link nav-links-reponsive' : 'nav-links nav-links-reponsive'}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

                <button className="ori" id="react-web">❤</button>

            </nav>
        )
    }
}


export default Navbar;