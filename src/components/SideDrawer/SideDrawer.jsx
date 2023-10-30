import { Drawer, Row, Col, Flex, Button } from "antd"
export default function SideDrawer({ open, onClose, order, handleCheckout, title }) {
    return (<Drawer
        className="drawer"
        title={title}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}

    >
        {order && <Flex gap="middle" vertical>
            <Row className="row" gutter={[16, 24]}>
                <Col span={16}>
                    Item
                </Col>
                <Col span={4}>Price</Col>
                <Col span={4}>Quantity</Col>
            </Row>
            {order?.orderItems.map(item =>
                <Row className="row" key={item.decorItem._id} gutter={[16, 24]}>
                    <Col span={16}>
                        {item.decorItem.name}
                    </Col>
                    <Col span={4}>{`$${item.decorItem.price}`}</Col>
                    <Col span={4}>{item.qty}</Col>
                </Row>
            )}
            <Row className="row" gutter={[16, 24]}>
                <Col span={16}>
                    Total
                </Col>
                <Col span={4}>{`$${order?.orderTotal}`}</Col>
                <Col span={4}>{order?.orderQty}</Col>
            </Row>
            {!order?.isPaid && <Flex align="flex-end" justify="flex-end">
                <Button type="primary" onClick={handleCheckout}>Checkout</Button>
            </Flex>}
        </Flex>}
    </Drawer>)
}