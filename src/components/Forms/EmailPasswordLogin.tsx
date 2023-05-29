import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'


import { auth } from '../../config/firebase'
import { Link, useNavigate } from 'react-router-dom'

export default function EmailPasswordLoginForm() {
    const navigate = useNavigate()
    const [formDetails, setFormDetails] = React.useState({
        email: '',
        password: ''
    })

    const loginEmailPassword = async (e: any) => {
        e.preventDefault()
        try {
            const response = await signInWithEmailAndPassword(auth, formDetails.email, formDetails.password)
            console.log(response)
            navigate('/home')
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='card grid'>
            <h3 className='title'>Login Form</h3>
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
                        type="email"
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
                <button onClick={loginEmailPassword}>Login</button>
            </form>
            <p>Don't have an account? Create one <Link to="/register">here</Link></p>
        </div >
    )
}
