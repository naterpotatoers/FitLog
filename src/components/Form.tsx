import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState('');

    function handleChange(event) {
        console.log(event.target.value);
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.callbackPropOnSubmit(name);
        setName("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-Workout-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-workout-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default Form;
