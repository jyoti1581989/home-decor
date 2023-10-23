import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../components/NavBar/index'
import HomePage from '../HomePage/HomePage'
import { ConfigProvider } from 'antd'

export default function App() {
  const [user, setUser] = useState(getUser())
  console.log("userL", user)
  return (
    <ConfigProvider theme={{
      token: {
        // Seed Token
        colorPrimary: '#ce6f05',
        borderRadius: 10,
      },
    }}>
      <main className="App">
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!user && <Route path="/auth" element={<AuthPage setUser={setUser} />} />}
          {/* additional Routes... */}
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </main>
    </ConfigProvider>
  )
}
