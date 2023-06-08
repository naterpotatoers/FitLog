import { useEffect, useState } from 'react'
import { updateStrengthJournal } from '../../api/journals.api'
import { DEFAULT_STRENGTH_JOURNAL, StrengthJournalDTO } from '../../dto/StrengthJournal.dto'

export default function UpdateStrengthSetDialog({ dialogHandler, setDialogHandler, journals, setJournals }) {
    const [journal, setJournal] = useState<StrengthJournalDTO>(DEFAULT_STRENGTH_JOURNAL)

    const updateJournal = async (e) => {
        e.preventDefault()
        await updateStrengthJournal(journal)
        setJournals((journals) => {
            return journals.map((journal) => {
                if (journal.id === dialogHandler.id) {
                    return journal
                }
                return journal
            })
        }
        )
        setDialogHandler({
            state: "closed",
            id: ""
        })
    }

    const handleCloseDialog = (e) => {
        e.preventDefault()
        setDialogHandler({
            state: "closed",
            id: ""
        })
    }

    useEffect(() => {
        const journal = journals.find((journal: StrengthJournalDTO) => {
            return journal.id === dialogHandler.id
        })
        console.log(journal)
        setJournal(journal)
    }, [dialogHandler, journals])

    return (
        <dialog open={dialogHandler.state === "editing"} className='dialog'>
            <div className='grid'>
                <h2 className='title'>Update Strength Workout</h2>
                <form className='card'>
                    <div className='form-item'>
                        <label htmlFor="exercise">Exercise</label>
                        <input
                            id='exercise'
                            name='exercise'
                            className='form-input'
                            value={journal.exercise}
                            placeholder='Name of the Exercise'
                            aria-label='Exercise'
                            type="text"
                            onChange={(e) => setJournal({ ...journal, exercise: e.target.value })}
                        />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="reps">Reps</label>
                        <input
                            id='reps'
                            name='reps'
                            className='form-input'
                            value={journal.reps}
                            placeholder='Number of Reps'
                            aria-label='Reps'
                            type="number"
                            onChange={(e) => setJournal({ ...journal, reps: parseInt(e.target.value) })}
                        />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="weight">Weight</label>
                        <input
                            id='weight'
                            name='weight'
                            className='form-input'
                            value={journal.weight}
                            placeholder='Weight in lbs'
                            aria-label='Weight'
                            type="number"
                            onChange={(e) => setJournal({ ...journal, weight: parseInt(e.target.value) })}
                        />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="duration">Duration</label>
                        <input
                            id='duration'
                            name='duration'
                            className='form-input'
                            value={journal.duration}
                            placeholder='Duration in minutes'
                            aria-label='Duration'
                            type="number"
                            onChange={(e) => setJournal({ ...journal, duration: parseInt(e.target.value) })}
                        />
                    </div>

                    <div className='row'>
                        <button onClick={handleCloseDialog}>Cancel</button>
                        <button onClick={updateJournal}>Update Workout</button>
                    </div>
                </form >
            </div >
        </dialog >
    )
}
