import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const WORKOUTS = [
  { id: "workout-0", name: "Barbell Curls", reps: 12, sets: 3, type: "Upperbody", weight: "60", created_at: new Date().toLocaleDateString(), updated_at: new Date().toLocaleDateString() },
  { id: "workout-1", name: "Hungarian Deadlifts", reps: 8, sets: 4, type: "Lowerbody", weight: "225", created_at: new Date().toLocaleDateString(), updated_at: new Date().toLocaleDateString() },
  { id: "workout-2", name: "Overhead Press", reps: 10, sets: 4, type: "Upperbody", weight: "100", created_at: new Date().toLocaleDateString(), updated_at: new Date().toLocaleDateString() },
  { id: "workout-3", name: "Sprints", type: "Cardio", created_at: new Date().toLocaleDateString(), updated_at: new Date().toLocaleDateString() }

];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App workouts={WORKOUTS} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
