import { Layout, Menu, Avatar, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import {
    UserOutlined,
    UserAddOutlined,
    LogoutOutlined

} from '@ant-design/icons'
import { logOut } from '../../utilities/users-service'
const { Header } = Layout

const NavBar = ({ user, setUser }) => {
    function handleLogOut() {
        logOut()
        setUser(null)
    }
    return (
        <Layout className="layout">
            <Header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rbg(75, 17, 17)' }}>
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
                            <UserAddOutlined /><Link to="/auth">SignUp/SignIn</Link>
                        </Menu.Item>
                        <Menu.Item key="log-out" style={{ color: 'white', backgroundColor: 'rgb(75, 17, 17)' }}>
                            <LogoutOutlined /><Button onClick={handleLogOut}>LogOut</Button>
                        </Menu.Item>

                    </Menu.SubMenu>
                </Menu>
            </Header>
        </Layout>
    )
}

export default NavBar