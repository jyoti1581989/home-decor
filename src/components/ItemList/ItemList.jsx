import ItemCard from '../ItemCard/ItemCard'
import { List } from "antd"
export default function ItemList({ seasonItems, cart, handleAddToOrder, handleChangeQty }) {
    console.log("cart", cart)
    console.log("item", seasonItems)
    return (
        <List
            dataSource={seasonItems}
            grid={{ gutter: 16, column: 2 }}
            renderItem={(item) => (
                <List.Item>
                    <ItemCard
                        item={item}
                        cartItemQty={cart?.orderItems.find(orderItem => orderItem.decorItem._id == item._id)?.qty}
                        handleAddToOrder={handleAddToOrder}
                        handleChangeQty={handleChangeQty}
                    />
                </List.Item>
            )}
        />
    )
}