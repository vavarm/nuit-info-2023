import { useState } from 'react'

function Login() {
  const [user, setUser] = useState({ email: '', password: '' })
  const [error, setError] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(user)
    // TODO: send the login request using Axios
    // then: setIsLoggedIn(true)
    // catch: setError('Invalid credentials')
  }

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={user.password}
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
