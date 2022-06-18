import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

import Form from './components/Form'
import Workout from "./components/Workout";
import FilterButton from './components/FilterButton'



function App() {
  const [workouts, setWorkouts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState("");

  let FILTER_MAP = {
    All: () => true,
    Upperbody: workout => workout.type === "Upperbody",
    Lowerbody: workout => workout.type === "Lowerbody",
    Filter: workout => workout.name === search
  };

  let FILTER_NAMES = Object.keys(FILTER_MAP);

  async function addWorkout(name, reps, sets, weight, type) {
    const newWorkout = {
      id: type + '-' + name.trim().replace(" ", "-") + "-" + nanoid(),
      name: name.trim(),
      reps: reps.trim(),
      sets: sets.trim(),
      weight: weight.trim(),
      type: type.trim(),
      created_at: new Date().toLocaleDateString(),
      updated_at: new Date().toLocaleDateString()
    };

    await axios.post('http://13.56.207.97:5000/workouts', {
      ...newWorkout
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setWorkouts([...workouts, newWorkout]);
  }

  async function editWorkout(id, newName, newReps, newSets, newWeight) {
    let updatedWorkout = {};

    const editedWorkoutList = workouts.map(workout => {
      if (id === workout.id) {
        updatedWorkout = { ...workout, name: newName, reps: newReps, sets: newSets, weight: newWeight, updated_at: new Date().toLocaleDateString() }
        return updatedWorkout;
      }
      return workout;
    });

    await axios.patch(`http://13.56.207.97:5000/workouts/${id}`, {
      ...updatedWorkout
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(updatedWorkout);
        console.log(error);
      });

    setWorkouts(editedWorkoutList);
  }

  async function deleteWorkout(id) {
    const remainingWorkouts = workouts.filter(workout => id !== workout.id);

    await axios.delete(`http://13.56.207.97:5000/workouts/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setWorkouts(remainingWorkouts);
  }

  useEffect(() => {
    fetch('http://13.56.207.97:5000/workouts')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setWorkouts(data);
      })
  }, [])

  const workoutList = workouts.filter(FILTER_MAP[filter]).map(workout =>
    <Workout
      key={workout.id}
      id={workout.id}
      name={workout.name}
      reps={workout.reps}
      sets={workout.sets}
      weight={workout.weight}
      created_at={workout.created_at}
      updated_at={workout.updated_at}
      deleteWorkout={deleteWorkout}
      editWorkout={editWorkout}
    />
  );

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      callbackPropSetFilter={setFilter}
    />
  ));

  return (
    <div className="workoutapp stack-large">
      <h1>FitLog</h1>
      <Form addWorkout={addWorkout} />
      <form className="label-wrapper label__lg">
        <label htmlFor={search} className="label-wrapper">Filter By Workout Name</label>
        <input
          type="text"
          id="search-input"
          className="input workout-text"
          placeholder="Search..."
          autoComplete="on"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
      <div className="filters btn-group stack-exception">
        {workouts && filterList}
      </div>
      <h2 id="list-heading">
        Current Workout Entry
      </h2>
      <ul
        className="workout-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {workoutList}
      </ul>
    </div>
  );
}

export default App;