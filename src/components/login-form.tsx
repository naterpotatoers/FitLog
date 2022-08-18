import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <h3>Login Form</h3>
            <form className='login-form'>
                <label htmlFor="username">Username</label>
                <input type='text' name='username' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' />
                <button>Login</button>
            </form>
        </div>
    )
}
