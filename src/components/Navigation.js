import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

import { useMediaQuery } from "@material-ui/core";

function Navigation(){
    const [isToggled, setIsToggled] = useState(false);
    const isMobile = useMediaQuery("(max-width: 1090px)");
    return (
        <div className="nav__container">
            <img src="https://img.icons8.com/doodle/48/000000/menu.png" alt="menu"
                className="menu" onClick={() => {
                    setIsToggled(!isToggled);
                }
                }/>
            {isMobile ? (
                isToggled ?
                <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/board">Community</Link>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/register">Register</Link>
                <Link to="/api">API</Link>
                </div>
                :
                <div></div>
                )
                :
                (
                <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/board">Community</Link>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/register">Register</Link>
                <Link to="/api">API</Link>
                </div>   
                )}
        </div>
    );
}

export default Navigation;