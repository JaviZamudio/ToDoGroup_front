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

    const registerButton = () => {
        setRoute("/register");
    }

    return (
        <div className="header-buttons">
            <button className="header-login" onClick={loginButton}>Login</button>
            <button className="header-register" onClick={registerButton}>Sign Up</button>
        </div>
    );
}

const HeaderNav = ({setRoute, route}) => {
    const myTasks = () => {
        setRoute("/tasks");
    }

    const myGroups = () => {
        setRoute("/groups");
    }

    return (
        <div className="header-nav">
            <a className={"header-link " + (route === "/tasks" ? "header-active-link" : "")} onClick={myTasks}>My Tasks</a>
            <a className={"header-link " + (route === "/groups" ? "header-active-link" : "")} onClick={myGroups}>My Groups</a>
        </div>
    );
}

const HeaderLogout = ({ setRoute, setAuthToken }) => {
    const logout = () => {
        setAuthToken(null);
        setRoute("/login");
    }

    return (
        <div className="header-logout">
            <button className="header-logout-button" onClick={logout}>Logout</button>
        </div>
    );
}

const Header = ({ context }) => {
    const { route, setRoute, setAuthToken } = context;

    return (
        <header className="header">
            <div className="header-title">
                <img src={logo} alt="TodoGroup" className="header-title-img" />
                <h1 className="header-title-text">TodoGroup</h1>
            </div>

            {route === '/login' || route === '/register' ? <HeaderButtons setRoute={setRoute}/> : null}
            {route !== '/login' && route !== '/register' ? <HeaderNav setRoute={setRoute} route={route}/> : null}
            {route !== '/login' && route !== '/register' ? <HeaderLogout setRoute={setRoute} setAuthToken={setAuthToken}/> : null}
        </header>
    );
}

export default Header;