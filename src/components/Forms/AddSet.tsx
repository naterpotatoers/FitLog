import React from 'react'

export default function AddSet() {
    return (
        <div className='grid'>
            <h2 className='title'>Add Set</h2>
            <form className='card'>
                <div className='form-item'>
                    <label htmlFor="exercise">Exercise</label>
                    <input
                        id='exercise'
                        name='exercise'
                        className='form-input'
                        placeholder='Exercise'
                        aria-label='Exercise'
                        type="text"
                    />
                </div>
                <div className='form-item'>
                    <label htmlFor="reps">Reps</label>
                    <input
                        id='reps'
                        name='reps'
                        className='form-input'
                        placeholder='Reps'
                        aria-label='Reps'
                        type="number"
                    />
                </div>
                <div className='form-item'>
                    <label htmlFor="weight">Weight</label>
                    <input
                        id='weight'
                        name='weight'
                        className='form-input'
                        placeholder='Weight'
                        aria-label='Weight'
                        type="number"
                    />
                </div>
                <button>Add Workout</button>
            </form>
        </div>
    )
}
