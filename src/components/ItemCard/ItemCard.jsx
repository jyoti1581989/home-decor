import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Card, Button } from 'antd'
const { Meta } = Card

export default function ItemCard({ item, cartItemQty, handleAddToOrder, handleChangeQty }) {
    return (
        <Card
            style={{ width: 300 }}
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
                description={item.description}
            />
        </Card>
    )

}