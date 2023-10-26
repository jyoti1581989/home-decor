import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/index'
import HomePage from '../HomePage/HomePage'
import SeasonItemPage from '../SeasonItemPage/SeasonItemPage'
import { ConfigProvider } from 'antd'


export default function App() {
  const [user, setUser] = useState(getUser())
  const [cart, setCart] = useState(null)
  return (
    <ConfigProvider theme={{
      token: {
        // Seed Token
        colorPrimary: '#ce6f05',
        borderRadius: 10,
      },
    }}>
      <main className="App">
        <NavBar user={user} setUser={setUser} cart={cart} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!user && <Route path="/auth" element={<AuthPage setUser={setUser} />} />}
          <Route path="/category/:season" element={<SeasonItemPage setCart={setCart} />} />
          {/* additional Routes... */}
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </main >
    </ConfigProvider >
  )
}
