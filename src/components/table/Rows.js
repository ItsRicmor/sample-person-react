import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { keyGenerator } from '../../utils/KeysGenerator'
import Columns from './Columns'

class Rows extends Component {
    render() {
        const { list = [] } = this.props
        return (
            <tbody >
                {
                    list && list.map((item, i) => {
                        return <Columns  key={keyGenerator('cols',i)} item={item}/>
                    })
                }
            </tbody>
        )
    }
}

Rows.protoType = {
    list: PropTypes.array.isRequired
}

export default Rows