import { Avatar } from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { useState } from "react"
import * as ordersAPI from "../../utilities/order-api"
import { useNavigate } from "react-router-dom"
import "./Cart.css"
import SideDrawer from "../SideDrawer/SideDrawer"


export default function Cart({ cart, setCart }) {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    async function handleCheckout() {
        await ordersAPI.checkout()
        setCart(null)
        navigate('/orders')
        setOpen(false)
    }

    return (
        <>
            <Avatar
                icon={<ShoppingCartOutlined size="large" />}
                onClick={showDrawer} />
            <SideDrawer
                open={open}
                onClose={onClose}
                order={cart}
                handleCheckout={handleCheckout}
                title="Cart Items" />
        </>
    )
}