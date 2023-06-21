import React from "react";

// Styles
import "../styles/InputGroup.css";

const InputGroup = ({ id, name, type, handler, required, value, error }) => {
    return (
        <div className="input-group">
            <label htmlFor={id} className={"input-label" + (error ? " input-label-error" : "")}>
                {name}
            </label>
            <input
                className={"input-field" + (error ? " input-field-error" : "")}
                id={id}
                name={id}
                type={type}
                onChange={handler}
                required={required}
                value={value} />
            {error && <p className="input-error">{error}</p>}
        </div>
    );
};

export default InputGroup;