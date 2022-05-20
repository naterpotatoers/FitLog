import React, { useState } from "react";
import { nanoid } from "nanoid";

import Form from './components/Form'
import Workout from "./components/Workout";
import FilterButton from './components/FilterButton'

const FILTER_MAP = {
  All: () => true,
  Active: workout => !workout.completed,
  Completed: workout => workout.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [workouts, setWorkouts] = useState(props.workouts);
  const [filter, setFilter] = useState('All');

  function addWorkout(name) {
    const newWorkout = { id: "workout-" + nanoid(), name: name, completed: false };
    setWorkouts([...workouts, newWorkout]);
  }

  function toggleWorkoutCompleted(id) {
    const updatedWorkouts = workouts.map(workout => {
      if (id === workout.id) {
        return { ...workout, completed: !workout.completed }
      }
      return workout;
    });
    setWorkouts(updatedWorkouts);
  }

  function editWorkout(id, newName) {
    const editedWorkoutList = workouts.map(workout => {
      if (id === workout.id) {
        return { ...workout, name: newName }
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
      completed={workout.completed}
      callbackPropToggleWorkoutCompleted={toggleWorkoutCompleted}
      callbackPropDeleteWorkout={deleteWorkout}
      callbackPropEditWorkout={editWorkout}
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


  const workoutsNoun = workoutList.length !== 1 ? 'workouts' : 'workout';
  const headingText = `${workoutList.length} ${workoutsNoun} remaining`;

  return (
    <div className="workoutapp stack-large">
      <h1>FitLog</h1>
      <Form callbackPropOnSubmit={addWorkout} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
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