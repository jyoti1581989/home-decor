import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Card, Button, Row, Col } from 'antd'

const { Meta } = Card

export default function ItemCard({ item, cartItemQty, handleAddToOrder, handleChangeQty }) {
    return (
        <Card
            style={{
                width: 300, backgroundColor: "#F5B0CB",
                boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"
            }}
            cover={
                <img
                    alt="example"
                    src={item.image}
                    style={{ height: 300 }}
                />
            }
            actions={[
                <>
                    {cartItemQty && <>
                        <Button icon={<PlusCircleOutlined />} onClick={() => handleChangeQty(item._id, cartItemQty + 1)} />
                        {cartItemQty}
                        <Button icon={<MinusCircleOutlined />} onClick={() => handleChangeQty(item._id, cartItemQty - 1)} />
                    </>}
                    <Button type="primary" onClick={() => handleAddToOrder(item._id)}>Add To Cart</Button>
                </>
            ]}
        >
            <Meta
                title={item.name}
                description={<Row gutter={[16, 16]} >

                    <Col span={18}>
                        {item.description}
                    </Col>
                    <Col span={2}>
                        {`$${item.price}`}
                    </Col>
                </Row>}
            />
        </Card >
    )

}