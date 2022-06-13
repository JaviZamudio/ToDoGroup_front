import React, { useState } from "react";

// Images
import logo from "../images/logo.png";

// Styles
import "../styles/LoginScreen.css";

const LoginScreen = ({context}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, password);
    }

    return (
        <div className="login-screen">
            <div className="login-title">
                <img src={logo} alt="" className="login-title-img" />
                <h1 className="login-title-text">TodoGroup</h1>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <InputGroup id="userName" name="User Name:" type="text" handler={setUserName} />
                <InputGroup id="password" name="Password:" type="password" handler={setPassword} />

                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    );
}

const InputGroup = ({ id, name, type, handler }) => {
    return (
        <div className="login-input-group">
            <label htmlFor={id} className="login-input-label">
                {name}
            </label>
            <input className="login-input-field" id={id} type={type} onChange={(e) => handler(e.target.value)} />
        </div>
    );
}

export default LoginScreen;