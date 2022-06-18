import React from "react";
import { useState } from "react";

export default function Workout(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);
  const [newReps, setNewReps] = useState(props.reps);
  const [newSets, setNewSets] = useState(props.sets);
  const [newWeight, setNewWeight] = useState(props.weight);

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
          onChange={(event) => setNewName(event.target.value)}
        />
        <input
          id={props.sets}
          className="workout-text"
          type="text"
          value={newSets}
          onChange={(event) => setNewSets(event.target.value)}
        />
        <input
          id={props.reps}
          className="workout-text"
          type="text"
          value={newReps}
          onChange={(event) => setNewReps(event.target.value)}
        />
        <input
          id={props.weight}
          className="workout-text"
          type="text"
          value={newWeight}
          onChange={(event) => setNewWeight(event.target.value)}
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
      <div>
        <label className="workout-label" htmlFor={props.id}>
          <b>{props.name}</b> - {props.created_at}
          <i>{props.updated_at !== props.created_at ? " - Edited " : ""}</i>
          <i>{props.updated_at !== props.created_at ? props.updated_at : ""}</i>
          <div>{props.sets}x{props.reps} {props.weight}lbs</div>
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)}
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => alert("Feature disabled for now...")}
        // onClick={() => props.deleteWorkout(props.id)}
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
