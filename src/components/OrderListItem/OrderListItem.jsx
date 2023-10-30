import SideDrawer from "../SideDrawer/SideDrawer"
import { Card, Table } from 'antd'
import { useState } from "react"
export default function OrderListItem({ order }) {
    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    const columns = [{
        title: "Total",
        dataIndex: "total",
        key: "total"
    }, {
        title: "Quantity",
        dataIndex: "qty",
        key: "qty"
    }, {
        title: "Order Date",
        dataIndex: "orderDate",
        key: "orderDate"
    }]
    const dataSource = [{
        key: "1",
        total: order.orderTotal,
        qty: order.orderQty,
        orderDate: new Date(order.updatedAt).toLocaleDateString()
    }]
    return (
        <>
            <Card title={`OrderId: ${order.orderId}`} onClick={showDrawer}>
                <Table columns={columns} dataSource={dataSource} pagination={false} />
            </Card>
            <SideDrawer
                open={open}
                onClose={onClose}
                order={order}
                title="Order Detail"
            />
        </>
    )
}