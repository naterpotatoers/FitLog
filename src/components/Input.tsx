import React, { useState } from 'react'

export default function Input(props) {
    const [inputState, setInputState] = useState(props.state)
    return (
        <div className='Input'>
            <label>
                {props.label}
                <input
                    id={props.state}
                    className="workout-text"
                    type="text"
                    value={inputState}
                    onChange={(event) => setInputState(event.target.value)}
                />
            </label>
        </div>
    )
}
