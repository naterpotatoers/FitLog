import React from 'react'
import axios from 'axios';

export default function requests() {
  async function newWorkout(newWorkout) {
    await axios.post('http://localhost:5000/workouts', {
      id: newWorkout.id,
      name: newWorkout.name,
      reps: newWorkout.reps,
      sets: newWorkout.sets,
      weight: newWorkout.weight,
      type: newWorkout.type,
      created_at: newWorkout.created_at,
      updated_at: newWorkout.updated_at
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>requests</div>
  )
}


