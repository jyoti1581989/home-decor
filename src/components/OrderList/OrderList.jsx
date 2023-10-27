import { List } from "antd"

import OrderListItem from "../OrderListItem/OrderListItem"
export default function OrderList({ orders }) {

    console.log(orders)
    return (
        <div className="container">
            <List
                dataSource={orders}
                grid={{ gutter: 16, column: 4 }}
                renderItem={(order) => {

                    return (
                        <List.Item>
                            <OrderListItem order={order} />
                        </List.Item>

                    )
                }}
            />

        </div>
    )
}