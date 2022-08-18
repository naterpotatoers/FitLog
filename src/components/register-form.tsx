import React from 'react'

export default function RegisterForm() {
    return (
        <div>
            <h3>Register Form</h3>
            <form className='register-form'>
                <label htmlFor='username'>Username</label>
                <input type="text" name='username' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' />
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' />
                <button>Register</button>
            </form>
        </div>
    )
}
