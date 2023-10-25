import { PlusCircleOutlined } from '@ant-design/icons'
import { Card, Button } from 'antd'
const { Meta } = Card

export default function ItemCard({ item }) {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={item.image}
                />
            }
            actions={[
                <Button type="primary" icon={<PlusCircleOutlined />} >Add To Cart</Button>
            ]}
        >
            <Meta
                title={item.name}
                description={item.description}
            />
        </Card>
    )

}