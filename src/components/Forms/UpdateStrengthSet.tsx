import { useState } from 'react'
import { StrengthJournalDTO } from '../../dto/StrengthJournal.dto'

export default function UpdateStrengthSet(set: StrengthJournalDTO) {
    const [journal, setJournal] = useState<StrengthJournalDTO>({
        id: "",
        email: '',
        exercise: '',
        reps: 0,
        weight: 0,
        duration: 0,
        intensity: 0,
        entry_method: 'Manual web app entry',
        created_at: '',
        updated_at: '',
    })

    const updateJournal = async (e) => {
        e.preventDefault()
    }

    return (
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
                        placeholder='Exercise'
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
                        placeholder='Reps'
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
                        placeholder='Weight'
                        aria-label='Weight'
                        type="number"
                        onChange={(e) => setJournal({ ...journal, weight: parseInt(e.target.value) })}
                    />
                </div>
                <button onClick={updateJournal}>Add Workout</button>
            </form>
        </div>
    )
}
