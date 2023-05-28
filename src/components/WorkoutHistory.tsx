import React, { useEffect } from 'react'
import { StrengthJournalDTO, MOCK_JOURNAL_ENTRIES } from '../dto/StrengthJournal.dto'
import { getAllStrengthJournals } from '../api/journals.api';
import { filterStrengthJournals } from '../common/filterJournals';

export default function WorkoutHistory() {
    const [journals, setJournals] = React.useState<StrengthJournalDTO[]>(MOCK_JOURNAL_ENTRIES)

    useEffect(() => {
        const getJournals = async () => {
            const result = await getAllStrengthJournals()
            setJournals(result)
        }
        getJournals()
    }, [])

    const groupedWorkouts = filterStrengthJournals(journals)

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
                                                groupedWorkouts[date][exercise].map((workout: StrengthJournalDTO) => {
                                                    return (
                                                        <li key={workout.email + workout.created_at}>
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
