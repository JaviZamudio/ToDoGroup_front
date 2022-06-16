import React from "react";

// Styles
import "../styles/Form.css";

export const FormButton = ({text}) =>{
    return(
        <button className="form-button" type="submit">{text}</button>
    )
}