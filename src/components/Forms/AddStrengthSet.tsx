import { useState } from 'react'
import { DEFAULT_STRENGTH_JOURNAL, StrengthJournalDTO } from '../../dto/StrengthJournal.dto'
import { createStrengthJournalEntry } from '../../api/journals.api';


export default function AddStrengthSet({ setJournals }) {
    const [journal, setJournal] = useState<StrengthJournalDTO>(DEFAULT_STRENGTH_JOURNAL)

    const uploadJournal = async (e) => {
        e.preventDefault()
        await createStrengthJournalEntry(journal)
        setJournals((journals) => {
            // return [...journals, journal]
            // put the new journal at the beginning of the array
            return [journal, ...journals]
        })
    }

    return (
        <div className='grid'>
            <h2 className='title'>Add Strength Workout</h2>
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
                        aria-label='Reps'
                        type="number"
                        onChange={(e) => setJournal({ ...journal, reps: parseInt(e.target.value) })}
                    />
                    <input
                        id='reps'
                        name='reps'
                        className='form-input'
                        value={journal.reps}
                        aria-label='Reps'
                        tabIndex={-1}
                        type="range"
                        min="1"
                        max="30"
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
                        aria-label='Weight'
                        type="number"
                        onChange={(e) => setJournal({ ...journal, weight: parseInt(e.target.value) })}
                    />
                    <input
                        id='weight'
                        name='weight'
                        className='form-range'
                        value={journal.weight}
                        aria-label='Weight'
                        tabIndex={-1}
                        type="range"
                        min="0"
                        max="500"
                        step={5}
                        onChange={(e) => setJournal({ ...journal, weight: parseInt(e.target.value) })}
                    />
                </div>
                <div className='form-item'>
                    <label htmlFor="duration">Duration (seconds)</label>
                    <input
                        id='duration'
                        name='duration'
                        className='form-input'
                        value={journal.duration}
                        aria-label='Duration'
                        type="number"
                        onChange={(e) => setJournal({ ...journal, duration: parseInt(e.target.value) })}
                    />
                    <input
                        id='duration'
                        name='duration'
                        className='form-range'
                        value={journal.duration}
                        aria-label='Duration (seconds)'
                        tabIndex={-1}
                        type="range"
                        min="1"
                        max="120"
                        onChange={(e) => setJournal({ ...journal, duration: parseInt(e.target.value) })}
                    />
                </div>
                <button onClick={uploadJournal}>Add Workout</button>
            </form >
        </div >
    )
}
