import React, { useState } from "react";
import { login } from "../config/api";

// Images
import logo from "../images/logo.png";

// Styles
import "../styles/LoginScreen.css";

// Components
import InputGroup from "./InputGroup";
import { FormButton } from "./FormButton";

const LoginScreen = ({ context }) => {
    const [form, setForm] = useState({
        userName: { value: "", error: "" },
        password: { value: "", error: "" },
    });

    const handleSubmit = async (e) => {
        const { userName, password } = form;

        e.preventDefault();

        login(userName.value, password.value)
            .then(response => {
                if (response.code === 200) {
                    context.setAuthToken(response.data.token);
                    context.setRoute("/tasks");
                    localStorage.setItem("JWT", response.data.token);
                } else {
                    setForm({
                        ...form,
                        userName: { ...userName, error: response.code === 3 ? response.message : "" },
                        password: { ...password, error: response.code === 6 ? response.message : "" },
                    });

                    if (response.code === 500) {
                        alert(response.message);
                    }
                }
            })
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: { value, error: "" } });
    }

    return (
        <div className="login-screen">
            <div className="login-title">
                <img src={logo} alt="" className="login-title-img" />
                <h1 className="login-title-text">TodoGroup</h1>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <InputGroup id="userName" name="User Name:" type="text" handler={handleChange} required={true} value={form.userName.value} error={form.userName.error} />
                <InputGroup id="password" name="Password:" type="password" handler={handleChange} required={true} value={form.password.value} error={form.password.error} />

                <FormButton text="Login" />
            </form>
        </div>
    );
}

export default LoginScreen;