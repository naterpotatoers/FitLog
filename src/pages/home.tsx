import React from 'react'
import LoginForm from '../components/login-form'
import RegisterForm from '../components/register-form'

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <LoginForm />
      <RegisterForm />
    </div>
  )
}
