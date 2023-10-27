import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import * as itemsAPI from "../../utilities/items-api"
import * as ordersAPI from "../../utilities/order-api"

export default function SeasonItemPage({ cart, setCart }) {
    const { season } = useParams()
    const [decorItems, setDecorItems] = useState([])

    // The empty dependency array causes the effect
    // to run ONLY after the FIRST render
    useEffect(function () {
        async function getItems() {
            const items = await itemsAPI.getAll()
            setDecorItems(items)
        }
        getItems()

        // Load cart (a cart is the unpaid order for the logged in user)
        async function getCart() {
            const cart = await ordersAPI.getCart()
            setCart(cart)
        }
        getCart()
    }, [])

    /*--- Event Handlers ---*/
    async function handleAddToOrder(itemId) {
        // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
        const updatedCart = await ordersAPI.addItemToCart(itemId)
        // 2. Update the cart state with the updated cart received from the server
        setCart(updatedCart)
    }
    // async function handleCheckout() {
    //     await ordersAPI.checkout()
    //     navigate('/orders')
    // }

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
        setCart(updatedCart)
    }

    return (<div className='container'>
        <ItemList
            seasonItems={decorItems.filter(item => item.category.name.toLowerCase() === season)}
            cart={cart}
            handleAddToOrder={handleAddToOrder}
            handleChangeQty={handleChangeQty}
        >
        </ItemList>
    </div>)

}