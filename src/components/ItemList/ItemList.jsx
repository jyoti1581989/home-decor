import ItemCard from '../ItemCard/ItemCard'
import { List } from "antd"
export default function ItemList({ seasonItems, setCart, handleAddToOrder, handleChangeQty }) {
    return (
        <List
            dataSource={seasonItems}
            renderItem={(item) => (
                <List.Item>
                    <ItemCard
                        item={item}
                        handleAddToOrder={handleAddToOrder}
                        handleChangeQty={handleChangeQty}
                    />
                </List.Item>
            )}
        />
    )
}