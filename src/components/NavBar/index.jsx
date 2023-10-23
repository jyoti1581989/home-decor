import { Layout, Menu, Avatar, Col } from 'antd'
import { Link } from 'react-router-dom'
import {
    UserOutlined,
    UserAddOutlined,
    LoginOutlined,
    LogoutOutlined

} from '@ant-design/icons'

const { Header } = Layout

const NavBar = () => (
    <Layout className="layout">
        <Header style={{ displey: 'flex', justifyContent: 'space-between', backgroundColor: 'rbg(75, 17, 17)' }}>
            <Col md={2}>
                <div className="logo" style={{ color: 'white' }}>Home Decor</div>
            </Col>
            <Menu theme="dark" mode="horizontal" style={{ color: 'white', backgroundCplor: 'rbg(75, 17, 17)' }}>
                <Menu.SubMenu key="sub-menu"
                    title={
                        <>
                            <Avatar icon={<UserOutlined />} />
                        </>
                    }
                    style={{ color: 'white', backgroundColor: 'rgb(75, 17, 17)' }}
                >
                    <Menu.Item key="Sign-up" style={{ color: 'white', backgroundColor: 'rgb(75, 17, 17)' }}>
                        <UserAddOutlined />SignUp
                    </Menu.Item>
                    <Menu.Item key="log-in" style={{ color: 'white', backgroundColor: 'rgb(75, 17, 17)' }}>
                        <LoginOutlined />LogIn
                    </Menu.Item>
                    <Menu.Item key="log-out" style={{ color: 'white', backgroundColor: 'rgb(75, 17, 17)' }}>
                        <LogoutOutlined />LogOut
                    </Menu.Item>

                </Menu.SubMenu>
            </Menu>
        </Header>
    </Layout>
)

export default NavBar