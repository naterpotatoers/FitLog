import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

import Form from './components/Form'
import Workout from "./components/Workout";
import FilterButton from './components/FilterButton'
import { WorkoutsDTO } from './data-transfer-object/workouts.dto'

const FILTER_MAP = {
  All: () => true,
  Upperbody: workout => workout.type === "Upperbody",
  Lowerbody: workout => workout.type === "Lowerbody",
  Cardio: workout => workout.type === "Cardio"
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [filter, setFilter] = useState('All');

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

    await axios.post('/workouts', {
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

    await axios.patch(`/workouts/${id}`, {
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

    await axios.delete(`/workouts/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setWorkouts(remainingWorkouts);
  }

  useEffect(() => {
    fetch('/workouts')
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
      <div className="filters btn-group stack-exception">
        {workouts && filterList}
      </div>
      <h2 id="list-heading">
        Current Workout Entry
      </h2>
      <ul
        role="list"
        className="workout-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {workoutList}
      </ul>
    </div>
  );
}

export default App;