import React, { useState } from 'react'
import './LoginForm.scss'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('credentials', { email, password })
  }
  return (
    <div className="component-LoginForm">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" className="border-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
