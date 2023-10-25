import ItemCard from '../ItemCard/ItemCard'
import { List } from "antd"
export default function ItemList({ seasonItems }) {
    return (
        <List
            dataSource={seasonItems}
            renderItem={(item) => (
                <List.Item>
                    <ItemCard item={item} />
                </List.Item>
            )}
        />
    )
}