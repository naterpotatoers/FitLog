import React, { useEffect } from 'react'
import { StrengthJournalDTO } from '../dto/StrengthJournal.dto'
import { getUserStrengthJournals } from '../api/journals.api';
import { filterStrengthJournals } from '../common/filterJournals';

export default function WorkoutHistory() {
    const [journals, setJournals] = React.useState<StrengthJournalDTO[]>([])

    useEffect(() => {
        const getJournals = async () => {
            const result = await getUserStrengthJournals()
            console.log(result)
            setJournals(result)
        }
        getJournals()
    }, [])

    const groupedWorkouts = filterStrengthJournals(journals)

    //eslint-disable-next-line
    const updateStrengthSet = async (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    //eslint-disable-next-line
    const deleteStrengthSet = async (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <div className='grid'>
            <h2 className='title'>Workouts</h2>
            {Object.keys(groupedWorkouts).map((date) => {
                return (
                    <div key={date} className='strength-journal-workout'>
                        <h3 className='subtitle sticky'>{date}</h3>
                        <div className='border'>
                            {Object.keys(groupedWorkouts[date]).map((exercise) => {
                                return (
                                    <div key={date + exercise} className='strength-journal-exercise'>
                                        <h4 className='subtitle'>{exercise}</h4>

                                        {
                                            groupedWorkouts[date][exercise].map((workout: StrengthJournalDTO) => {
                                                return (
                                                    <div key={workout.email + workout.created_at} className='strength-journal-set'>
                                                        <p>{workout.reps} reps</p>
                                                        <p>{workout.weight}lbs</p>
                                                        <p>{workout.duration}s</p>
                                                    </div>
                                                )
                                            })}
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
