import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');
    const [weight, setWeight] = useState("");
    const [type, setType] = useState("");


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleRepsChange(event) {
        setReps(event.target.value);
    }

    function handleSetsChange(event) {
        setSets(event.target.value);
    }

    function handleWeightChange(event) {
        setWeight(event.target.value);
    }

    function handleTypeChange(event) {
        setType(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addWorkout(name, reps, sets, weight, type);
        setName("");
        setReps("");
        setSets("");
        setWeight("");
        setType("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper label__lg">
                Add new workout to todays journal
            </h2>
            <label htmlFor={name} className="label-wrapper">Workout Name</label>
            <input
                type="text"
                id="new-workout-input"
                className="input workout-text"
                name="text"
                autoComplete="on"
                required
                value={name}
                onChange={handleNameChange}
            />
            <label htmlFor={sets} className="label-wrapper">Sets</label>
            <input
                type="text"
                id="new-workout-input"
                className="input workout-text"
                name="text"
                autoComplete="off"
                value={sets}
                onChange={handleSetsChange}
            />
            <label htmlFor={reps} className="label-wrapper">Reps</label>
            <input
                type="text"
                id="new-workout-input"
                className="input workout-text"
                name="text"
                autoComplete="off"
                value={reps}
                onChange={handleRepsChange}
            />
            <label htmlFor={weight} className="label-wrapper">Weight</label>
            <input
                type="text"
                id="new-workout-input"
                className="input workout-text"
                name="text"
                autoComplete="off"
                value={weight}
                onChange={handleWeightChange}
            />
            <label htmlFor={type} className="label-wrapper">Targeted Body Part</label>
            <input
                type="text"
                id="new-workout-input"
                className="input workout-text"
                name="text"
                autoComplete="off"
                placeholder="Upperbody Lowerbody Cardio"
                value={type}
                onChange={handleTypeChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default Form;
