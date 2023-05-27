import { useState } from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

export default function EmailPasswordRegistrationForm() {
    const [formDetails, setFormDetails] = useState({
        email: '',
        password: ''
    })

    const registerEmailPassword = async (e: any) => {
        e.preventDefault()
        try {
            const response = await createUserWithEmailAndPassword(auth, formDetails.email, formDetails.password)
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='card'>
            <h3 className='title'>Register Form</h3>
            <form className='register-form'>
                <div className='form-item'>
                    <label htmlFor="email">Email</label>
                    <input
                        id='email'
                        name='email'
                        className='form-input'
                        value={formDetails.email}
                        placeholder='Email'
                        aria-label='Email'
                        type="text"
                        onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
                    />
                </div>
                <div className='form-item'>
                    <label htmlFor="password">Password</label>
                    <input
                        id='password'
                        name='password'
                        className='form-input'
                        value={formDetails.password}
                        placeholder='Password'
                        aria-label='Password'
                        type="password"
                        onChange={(e) => setFormDetails({ ...formDetails, password: e.target.value })}
                    />
                </div>
                <button onClick={registerEmailPassword}>Register</button>
            </form>
        </div >
    )
}
