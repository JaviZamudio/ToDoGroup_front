import React from "react";

// Styles
import "../styles/RegisterScreen.css";

// Images
import logo from "../images/logo.png";

// Components
import { FormButton } from "./FormButton";
import InputGroup from "./InputGroup";

const RegisterScreen = ({ context }) => {
    const { setRoute } = context;
    const [form, setForm] = React.useState({
        name: {value: "", error: ""},
        userName: {value: "", error: ""},
        password: {value: "", error: ""},
        email: {value: "", error: ""},
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: { value, error: form[name].error } });
    }

    return (
        <div className="register-screen">
            <div className="register-title">
                <img src={logo} alt="logo" className="register-title-img" />
                <h1 className="register-title-text">Sign In </h1>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <InputGroup id="name" name="Name:" type="text" handler={handleChange} required={true} value={form.name.value} error={form.name.error}/>
                <InputGroup id="userName" name="User Name:" type="text" handler={handleChange} required={true} value={form.userName.value} error={form.userName.error}/>
                <InputGroup id="password" name="Password:" type="password" handler={handleChange} required={true} value={form.password.value} error={form.password.error}/>
                <InputGroup id="email" name="Email:" type="email" handler={handleChange} required={true} value={form.email.value} error={form.email.error}/>

                <FormButton text="Register" />
            </form>
        </div>
    );
}

export default RegisterScreen;

