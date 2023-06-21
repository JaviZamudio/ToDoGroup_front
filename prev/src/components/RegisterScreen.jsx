import React from "react";

// Styles
import "../styles/RegisterScreen.css";

// Images
import logo from "../images/logo.png";

// Components
import { FormButton } from "./FormButton";
import InputGroup from "./InputGroup";
import { register } from "../config/api";

const RegisterScreen = ({ context }) => {
    const [form, setForm] = React.useState({
        name: {value: "", error: ""},
        userName: {value: "", error: ""},
        password: {value: "", error: ""},
        confirmPassword: {value: "", error: ""},
        email: {value: "", error: ""},
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate passwords
        if (form.password.value !== form.confirmPassword.value) {
            setForm({...form, confirmPassword: {...form.confirmPassword, error: "Passwords do not match"}});
            return;
        }

        // send request to server
        register(form.name.value, form.userName.value, form.password.value, form.email.value)
            .then(response => {
                if (response.code === 200) {
                    context.setAuthToken(response.data.token);
                    context.setRoute("/tasks");
                    localStorage.setItem("JWT", response.data.token);
                } else if (response.code === 500) {
                    alert(response.message);
                }
                
                setForm({
                    ...form,
                    userName: {...form.userName, error: response.code === 4 ? response.message : ""},
                    email: {...form.email, error: response.code === 5 ? response.message : ""},
                });

                console.log(response);
            });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: { value, error: "" } });
    }

    return (
        <div className="register-screen">
            <div className="register-title">
                <img src={logo} alt="logo" className="register-title-img" />
                <h1 className="register-title-text">Sign Up</h1>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <InputGroup id="name" name="Name:" type="text" handler={handleChange} required={true} value={form.name.value} error={form.name.error}/>
                <InputGroup id="userName" name="User Name:" type="text" handler={handleChange} required={true} value={form.userName.value} error={form.userName.error}/>
                <InputGroup id="password" name="Password:" type="password" handler={handleChange} required={true} value={form.password.value} error={form.password.error}/>
                <InputGroup id="confirmPassword" name="Confirm Password:" type="password" handler={handleChange} required={true} value={form.confirmPassword.value} error={form.confirmPassword.error}/>
                <InputGroup id="email" name="Email:" type="email" handler={handleChange} required={true} value={form.email.value} error={form.email.error}/>

                <FormButton text="Register" />
            </form>
        </div>
    );
}

export default RegisterScreen;

