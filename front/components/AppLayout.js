import { useState } from 'react'
import Proptypes from 'prop-types'
import Link from 'next/Link'
import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
import { Menu, Input, Row, Col } from 'antd'
import styled from 'styled-components'

const SearchInput = styled(Input.Search)`
    vertical-align: middle
`
const menuItems = [
    {
        label: <Link href="/"><a>노드버드</a></Link>,
        key: "home",
    },
    {
        label: <Link href="/profile"><a>프로필</a></Link>,
        key: "profile",
    },
    {
        label: <SearchInput enterButton />,
        key: "search",
    },
    {
        label: <Link href="/signup"><a>회원가입</a></Link>,
        key: "signup",
    },
]

const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            <Menu mode="horizontal" items={menuItems}/>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
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