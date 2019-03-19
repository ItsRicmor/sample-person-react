import React from 'react'

const Row = (props) => {
    const { children } = props
    return (
        <td scope="row">{children}</td>
    )
}

export default Row