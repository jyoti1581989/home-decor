import { useState, useEffect } from 'react'
import * as ordersAPI from '../../utilities/order-api'
import OrderList from '../../components/OrderList/OrderList'



export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([])

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser()
      setOrders(orders)
    }
    getOrders()
  }, [])

  return (
    <main className="OrderHistoryPage">
      <OrderList orders={orders} />
      {/* Render an OrderList component (needs to be coded) */}

    </main>
  )
}