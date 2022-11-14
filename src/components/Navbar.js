import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";
import { MenuItems } from "./MenuItems";
import logo from "../assets/logo.webp";

const classObj = {
    ori: 'small',
    small: 'medium',
    medium: 'large',
    large: 'ori'
}
class Navbar extends Component {
    state = { clicked: false, activated: false }


    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    changeActive = () => {
        this.setState({ activated: !this.state.activated })
    }


    handleLiked = () => {
        let btn = document.getElementById('react-web');
        if (btn) {
            console.log(btn.classList[0]);
            btn.classList = classObj[btn.classList[0]];
            console.log(btn.classList[0]);
            console.log(btn.classList);
        }

    }
    render() {
        return (
            <nav className="NavbarItems" id="navbar">
                <div className="navbar-logo">
                    <a href="/home">
                        <img src={logo} alt='portfolio'>
                        </img>
                    </a>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} >

                    </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.url} className={({ isActive }) => isActive ? 'nav-links active-link nav-links-reponsive' : 'nav-links nav-links-reponsive'}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

                <button title="three levels to react" className="ori" id="react-web" onClick={() => { this.handleLiked() }}>❤</button>

            </nav>
        )
    }
}


export default Navbar;