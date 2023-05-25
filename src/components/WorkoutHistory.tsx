import React from 'react'
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

    function formatCreatedDate(date: String) {
        let dateArr = date.split('-')
        let year = dateArr[0]
        let month = dateArr[1]
        let day = dateArr[2].split('T')[0]
        return `${month}/${day}/${year}`
    }

    return (
        <div>
            <h2>Workouts</h2>
            {Object.keys(groupedWorkouts).map((date) => {
                return (
                    <div key={date}>
                        <h3>{date}</h3>
                        {Object.keys(groupedWorkouts[date]).map((exercise) => {
                            return (
                                <div>
                                    <h4>{exercise}</h4>
                                    {groupedWorkouts[date][exercise].map((workout: WorkoutsDTO) => {
                                        return (
                                            <div key={workout.id}>
                                                <p>Description: {workout.description}</p>
                                                <p>Type: {workout.type}</p>
                                                <p>Intensity: {workout.intensity}</p>
                                                <p>Equipment: {workout.equipment}</p>
                                                <p>Reps: {workout.reps}</p>
                                                <p>Weight: {workout.weight}</p>
                                                <p>Duration: {workout.duration}</p>
                                                {workout.created_at !== workout.updated_at && <p>Updated: {formatCreatedDate(workout.updated_at)}</p>}
                                            </div>
                                        )
                                    })}
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
