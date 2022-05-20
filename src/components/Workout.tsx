import React from "react";
import { useState } from "react";

export default function Workout(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);
  const [newReps, setNewReps] = useState(props.reps);
  const [newSets, setNewSets] = useState(props.sets);
  const [newWeight, setNewWeight] = useState(props.weight);



  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  function handleSetChange(event) {
    setNewSets(event.target.value);
  }

  function handleRepChange(event) {
    setNewReps(event.target.value);
  }

  function handleWeightChange(event) {
    setNewWeight(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.editWorkout(props.id, newName, newReps, newSets, newWeight);
    setNewName(props.name);
    setNewReps(props.reps);
    setNewSets(props.sets);
    setNewWeight(props.weight);
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="workout-label" htmlFor={props.id}>
          Originally: {props.name} - Sets: {props.sets} Reps: {props.reps} Weight: {props.weight}
        </label>
        <input
          id={props.id}
          className="workout-text"
          type="text"
          value={newName}
          onChange={handleNameChange}
        />
        <input
          id={props.sets}
          className="workout-text"
          type="text"
          value={newSets}
          onChange={handleSetChange}
        />
        <input
          id={props.reps}
          className="workout-text"
          type="text"
          value={newReps}
          onChange={handleRepChange}
        />
        <input
          id={props.weight}
          className="workout-text"
          type="text"
          value={newWeight}
          onChange={handleWeightChange}
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn workout-cancel" onClick={() => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary workout-edit" >
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="">
        <label className="workout-label" htmlFor={props.id}>
          <b>{props.name}</b> {props.sets}x{props.reps} {props.weight}lbs {props.created_at}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteWorkout(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="workout stack-small">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}
