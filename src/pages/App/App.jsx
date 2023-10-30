import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/index'
import HomePage from '../HomePage/HomePage'
import SeasonItemPage from '../SeasonItemPage/SeasonItemPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import { ConfigProvider } from 'antd'


export default function App() {
  const [user, setUser] = useState(getUser())
  const [cart, setCart] = useState(null)
  return (
    <ConfigProvider theme={{
      token: {
        // Seed Token
        colorPrimary: 'orange',
        borderRadius: 10,
      },
      components: {
        Button: {
          colorPrimary: 'maroon'
        }
      }
    }}>
      <main className="App">
        <NavBar user={user} setUser={setUser} cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!user && <Route path="/auth" element={<AuthPage setUser={setUser} />} />}
          <Route path="/category/:season" element={<SeasonItemPage cart={cart} setCart={setCart} />} />
          <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
          {/* additional Routes... */}
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </main >
    </ConfigProvider >
  )
}
