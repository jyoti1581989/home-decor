import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
export default function AuthPage({ user, setUser }) {
  const [showSignUp, setShowSignUp] = useState(false)
  const navigate = useNavigate()
  return (
    <main className='container'>
      <div>
        <Button type="primary" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</Button>
        {showSignUp ?
          <SignUpForm setUser={setUser} navigate={navigate} />
          :
          <LoginForm setUser={setUser} />
        }
      </div>
    </main>
  )
}