import { Avatar, Drawer, Row, Col, Flex } from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { useState } from "react"
import "./Cart.css"


export default function Cart({ cart }) {
    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    console.log(cart)
    return (
        <>
            <Avatar icon={<ShoppingCartOutlined size="large" />} onClick={showDrawer} />
            <Drawer
                className="drawer"
                title="Cart Items"
                placement="right"
                closable={false}
                onClose={onClose}
                open={open}

            >
                <Flex gap="middle" vertical>
                    {cart?.orderItems.map(item =>
                        <Row className="row" key={item.decorItem._id} gutter={[16, 24]}>
                            <Col span={16}>
                                {item.decorItem.name}
                            </Col>
                            <Col>{item.decorItem.price}</Col>
                        </Row>
                    )}
                    <Flex align="flex-end" justify="flex-end"><button type="primary">Checkout</button></Flex>
                </Flex>
            </Drawer>
        </>
    )
}