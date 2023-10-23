import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
// import NavBar from '../../components/NavBar'
import HomePage from '../HomePage/HomePage'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* additional Routes... */}
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </main>
  )
}
