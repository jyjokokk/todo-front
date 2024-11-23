import React, { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className="component-LoginForm">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border-2"
        />
        <button type="submit" className="border-2">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
