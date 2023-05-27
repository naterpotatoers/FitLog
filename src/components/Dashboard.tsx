import React from 'react'
import AddSet from './AddSet'
import WorkoutHistory from './WorkoutHistory'

export default function Dashboard() {
    return (
        <div className='grid'>
            <AddSet />
            <WorkoutHistory />
        </div>
    )
}
