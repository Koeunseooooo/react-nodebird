import Proptypes from 'prop-types'
const AppLayout = ({children}) => {
    return (
        <div>
            <div>공통메뉴</div>
            {children}
        </div>
    )
};

AppLayout.Proptypes = {
    children: Proptypes.node.isRequired
}

export {AppLayout}