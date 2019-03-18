import React from 'react'

const Header = (props) => {
    const { id, value } = props
    return (
        <th key={id}>{value.toUpperCase()}</th>
    )
}

export default Header