import React from "react";

// images
import logo from "../images/logo.png";

//styles
import "../styles/Header.css";

// components

const HeaderButtons = ({setRoute}) => {
    const loginButton = () => {
        setRoute("/login");
    }

    const signupButton = () => {
        setRoute("/signup");
    }

    return (
        <div className="header-buttons">
            <button className="header-login" onClick={loginButton}>Login</button>
            <button className="header-signup" onClick={signupButton}>Sign Up</button>
        </div>
    );
}

const HeaderNav = () => {
    return (
        <div className="header-nav">
            <a href="/tasks" className="header-link">My Tasks</a>
            <a href="/groups" className="header-link">My Groups</a>
        </div>
    );
}

const HeaderProfile = () => {
    return (
        <div className="header-profile">
            <img src={""} className="header-logo" alt="logo" />

            <div className="header-profile-info">
                <h1 className="header-profile-name">John Doe</h1>
            </div>
        </div>
    );
}

const Header = ({ context }) => {
    const { route, setRoute } = context;

    return (
        <header className="header">
            <div className="header-title">
                <img src={logo} alt="TodoGroup" className="header-title-img" />
                <h1 className="header-title-text">TodoGroup</h1>
            </div>

            {route === '/login' || route === '/signup' ? <HeaderButtons setRoute={setRoute}/> : null}
        </header>
    );
}

export default Header;