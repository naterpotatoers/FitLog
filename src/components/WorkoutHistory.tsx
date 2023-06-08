import { StrengthJournalDTO } from '../dto/StrengthJournal.dto'
import { filterStrengthJournals } from '../common/filterJournals';
import { deleteStrengthJournal } from '../api/journals.api';
import { useState } from 'react';
import UpdateStrengthSetDialog from './Forms/UpdateStrengthSetDialog';

export default function WorkoutHistory({ journals, setJournals }) {
    const groupedWorkouts = filterStrengthJournals(journals)
    const [dialogHandler, setDialogHandler] = useState({
        state: "closed",
        id: ""
    })

    const handleUpdateWorkout = (e) => {
        setDialogHandler({
            state: "editing",
            id: e.target.id
        })
    }

    // eslint-disable-next-line
    const deleteStrengthSet = async (e) => {
        e.preventDefault()
        await deleteStrengthJournal(e.target.value)
        setJournals(journals.filter((journal) => {
            return journal.id !== e.target.value
        }))
    }

    return (
        <div className='grid'>
            <h2 className='title'>Workouts</h2>
            {dialogHandler.state === "editing" &&
                <UpdateStrengthSetDialog
                    dialogHandler={dialogHandler}
                    setDialogHandler={setDialogHandler}
                    journals={journals}
                    setJournals={setJournals}
                />}
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
                                                    <div key={workout.id} className='strength-journal-set'>
                                                        <p>{workout.reps}</p>
                                                        <p>{workout.weight}lbs</p>
                                                        <p>{workout.duration}s</p>
                                                        <div className='row'>
                                                            <button className='edit-button' id={workout.id} onClick={handleUpdateWorkout}>&#xFE19;</button>
                                                            {/* <button className='button' value={workout.id} onClick={deleteStrengthSet}>Delete</button> */}
                                                        </div>
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
