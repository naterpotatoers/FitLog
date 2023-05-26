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
        <div className='content'>
            <h2 className='title'>Workouts</h2>
            {Object.keys(groupedWorkouts).map((date) => {
                return (
                    <div className='grid-ish' key={date}>
                        <h3 className='title sticky'>{date}</h3>
                        {Object.keys(groupedWorkouts[date]).map((exercise) => {
                            return (
                                <div key={date + exercise}>
                                    <h4 className='subtitle'>{exercise}</h4>
                                    <div className='grid'>
                                        {
                                            groupedWorkouts[date][exercise].map((workout: WorkoutsDTO) => {
                                                return (
                                                    <div className='col' key={workout.id}>
                                                        <p>Reps: {workout.reps}</p>
                                                        <p>Weight: {workout.weight}</p>
                                                        {workout.created_at !== workout.updated_at && <p>Updated: {formatCreatedDate(workout.updated_at)}</p>}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })

            }
        </div>
    )
}
