import PropTypes from 'prop-types'
import Head from 'next/head'

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet='utf--8' />
                <title>nodebird</title>
            </Head>
            <Component />
        </>
    )
}

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default NodeBird