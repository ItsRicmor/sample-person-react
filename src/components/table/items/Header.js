import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    const { children } = props
    return (
        <th scope="col">{children.toUpperCase()}</th>
    )
}

Header.protoType = {
    children: PropTypes.any.isRequired
}

export default Header