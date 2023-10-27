import SideDrawer from "../SideDrawer/SideDrawer"
import { Card, Row, Col } from 'antd'
import { useState } from "react"
export default function OrderListItem({ order }) {
    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Card title={`OrderId: ${order.orderId}`} onClick={showDrawer}>
                <Row gutter={[16, 16]}>
                    <Col span={4}>Total</Col>
                    <Col span={6}>Quantity</Col>
                    <Col span={12}>Order Date</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={4}> {order.orderTotal}</Col>
                    <Col span={6}>{order.orderQty}</Col>
                    <Col span={12}>{new Date(order.updatedAt).toLocaleDateString()}
                    </Col>
                </Row>
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