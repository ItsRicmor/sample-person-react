import React from 'react'
import PropTypes from 'prop-types';

const Column = (props) => {
    const { children } = props
    return (
        <td scope="row">{children}</td>
    )
}

Column.propTypes = {
    children: PropTypes.any.isRequired
}

export default Column