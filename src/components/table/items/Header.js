import React from 'react'

const Header = (props) => {
    const { children } = props
    return (
        <th scope="col">{children.toUpperCase()}</th>
    )
}

export default Header