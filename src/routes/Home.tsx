import React from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <LoginForm />
      <RegisterForm />
    </div>
  )
}
