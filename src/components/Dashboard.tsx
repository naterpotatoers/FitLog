import React from 'react'
import AddWorkout from './AddWorkout'
import WorkoutHistory from './WorkoutHistory'

export default function Dashboard() {
    return (
        <div className='grid'>
            <AddWorkout />
            <WorkoutHistory />
        </div>
    )
}
