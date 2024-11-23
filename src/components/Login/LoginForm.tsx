import React, { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className="grid grid-cols-4 gap-4 content-center">
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
