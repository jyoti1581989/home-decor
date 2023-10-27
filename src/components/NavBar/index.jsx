import { Layout, Menu, Avatar, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import {
    HomeOutlined,
    UserOutlined,
    UserAddOutlined,
    LogoutOutlined

} from '@ant-design/icons'
import { logOut } from '../../utilities/users-service'
import Cart from '../Cart/Cart'

const { Header } = Layout


const NavBar = ({ user, setUser, cart }) => {
    function handleLogOut() {
        logOut()
        setUser(null)
    }
    return (
        <Layout className="layout">
            <Header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rbg(75, 17, 17)' }}>
                <Col md={2}>
                    <div className="logo App-logo" style={{ color: 'white' }}>Home Decor</div>
                </Col>
                <Col md={20}>
                    <Menu mode="horizontal" style={{ color: 'white', backgroundColor: 'rgb(75, 17, 17)' }}>
                        <Menu.Item key="1" icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>

                        {user && <><Menu.Item key="2"><Link to="/category/spring">Spring</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/category/summer">Summer</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/category/fall">Fall</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/category/winter">Winter</Link></Menu.Item></>}

                    </Menu>
                </Col>
                <Menu theme="dark" mode="horizontal" style={{ color: 'white', backgroundCplor: 'rbg(75, 17, 17)' }}>
                    <Menu.Item key="cart" style={{ color: 'white', backgroundColor: 'rgb(75, 17, 17)' }}>
                        <Cart cart={cart}></Cart>
                    </Menu.Item>
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
                            <LogoutOutlined /><Link to="/auth" onClick={handleLogOut}>LogOut</Link>
                        </Menu.Item>

                    </Menu.SubMenu>
                </Menu>
            </Header >
        </Layout >
    )
}

export default NavBar