import React, { Component } from 'react'

const Row = (props) => {
    const { id, value } = props
    return (
        <td key={id}>{value}</td>
    )
}

export default Row