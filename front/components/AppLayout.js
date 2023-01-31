import { useState } from 'react'
import Proptypes from 'prop-types'
import Link from 'next/Link'
import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
import { Menu, Input, Row, Col } from 'antd'

const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{ verticalAlign: 'middle'}} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                <UserProfile />
                <LoginForm/>
                    {/* {isLoggedIn ? <UserProfile /> : <LoginForm/>} */}
                </Col>
                <Col xs={24} md={6}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/Koeunseooooo" target="_blank" rel="noreferrer noopener">Made by koeunseo</a>
                </Col>
            </Row>
            
        </div>
    )
};

AppLayout.Proptypes = {
    children: Proptypes.node.isRequired
}

export default AppLayout