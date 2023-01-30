import Proptypes from 'prop-types'
import Link from 'next/Link'
const AppLayout = ({children}) => {
    return (
        <div>
            <div>
                <Link href="/"><a>노드버드</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            {children}
        </div>
    )
};

AppLayout.Proptypes = {
    children: Proptypes.node.isRequired
}

export {AppLayout}