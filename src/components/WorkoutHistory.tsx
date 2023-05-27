import React from 'react'
import { formatCreatedDate } from '../common/formatCreatedDate'
import { WorkoutsDTO, MOCK_WORKOUTS } from '../dto/workouts.dto'

export default function WorkoutHistory() {
    // eslint-disable-next-line
    const [workouts, setWorkouts] = React.useState<WorkoutsDTO[]>(MOCK_WORKOUTS)

    const groupedWorkouts = workouts.reduce((acc, workout) => {
        let date = formatCreatedDate(workout.created_at)
        if (!acc[date]) {
            acc[date] = {}
        }
        if (!acc[date][workout.exercise]) {
            acc[date][workout.exercise] = []
        }
        acc[date][workout.exercise].push(workout)
        return acc
    }, {} as any)

    return (
        <div className='grid'>
            <h2 className='title'>Workouts</h2>
            {Object.keys(groupedWorkouts).map((date) => {
                return (
                    <div key={date}>
                        <h3 className='subtitle sticky'>{date}</h3>
                        <div className='border'>
                            {Object.keys(groupedWorkouts[date]).map((exercise) => {
                                return (
                                    <div key={date + exercise}>
                                        <h4 className='subtitle'>{exercise}</h4>
                                        <ol>
                                            {
                                                groupedWorkouts[date][exercise].map((workout: WorkoutsDTO) => {
                                                    return (
                                                        <li key={workout.id}>
                                                            {workout.reps} reps @ {workout.weight} lbs
                                                        </li>
                                                    )
                                                })}
                                        </ol>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
