import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/community">Community</Link>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Register</Link>
        </div>
    );
}

export default Navigation;