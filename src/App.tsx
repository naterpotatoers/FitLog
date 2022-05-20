import React, { useState } from "react";
import { nanoid } from "nanoid";

import Form from './components/Form'
import Workout from "./components/Workout";
import FilterButton from './components/FilterButton'

const FILTER_MAP = {
  All: () => true,
  Upperbody: workout => workout.type === "Upperbody",
  Lowerbody: workout => workout.type === "Lowerbody",
  Cardio: workout => workout.type === "Cardio"
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [workouts, setWorkouts] = useState(props.workouts);
  const [filter, setFilter] = useState('All');

  function addWorkout(name, reps, sets, weight, type) {
    const newWorkout = {
      id: "workout-" + nanoid(),
      name,
      reps,
      sets,
      weight,
      type,
      created_at: new Date().toLocaleDateString(),
      updated_at: new Date().toLocaleDateString()
    };
    setWorkouts([...workouts, newWorkout]);
  }

  function editWorkout(id, newName, newReps, newSets, newWeight) {
    const editedWorkoutList = workouts.map(workout => {
      if (id === workout.id) {
        return { ...workout, name: newName, reps: newReps, sets: newSets, weight: newWeight, updated_at: new Date().toLocaleDateString() }
      }
      return workout;
    });
    setWorkouts(editedWorkoutList);
  }

  function deleteWorkout(id) {
    console.log(id);
    const remainingWorkouts = workouts.filter(workout => id !== workout.id);
    setWorkouts(remainingWorkouts);
  }

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
        {filterList}
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